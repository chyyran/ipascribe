mod cmudict;
use serde_json::to_string;
use warp::Filter;
use rand::seq::SliceRandom; 

#[tokio::main]
async fn main() {
    // GET /hello/warp => 200 OK with body "Hello, warp!"
    let hello = warp::path!("hello" / String).map(|name| format!("Hello, {}!", name));

    // GET /words/word=> 200 OK with body [ipas]
    let words = warp::path!("words" / String)
        .map(|word: String| cmudict::CMUDICT.get(&word.to_ascii_lowercase()).cloned())
        .and_then(|ipas: Option<Vec<String>>| async {
            if let Some(vec) = ipas {
                let json = to_string(&vec);
                match json {
                    Ok(ipas) => Ok(ipas),
                    Err(e) => Err(warp::reject::custom(ServiceError(e))),
                }
            } else {
                Err(warp::reject::not_found())
            }
        });
    

    // GET /word => 200 OK with body [ipas]
    let word = warp::path!("word")
    .map(|| {
        let mut rng = rand::thread_rng();
        let rand_key = *cmudict::CMUDICT_KEYS.choose(&mut rng).unwrap();
        let entry = cmudict::CMUDICT.get(&rand_key.to_ascii_lowercase()).unwrap();
        let mut res = Vec::new();
        res.push(rand_key);
        for e in entry {
            res.push(e);
        }
        let json = to_string(&res).unwrap();
        format!("{}", json)
    });


    let cors = warp::cors()
        .allow_any_origin()
        .allow_methods(vec!["GET"]);

    let routes = hello
        .or(words)
        .or(word)
        .with(&cors);
        
    warp::serve(routes)
        .run(([0, 0, 0, 0], 80)).await;
}
#[derive(Debug)]
pub struct ServiceError(serde_json::Error);

impl warp::reject::Reject for ServiceError {}
