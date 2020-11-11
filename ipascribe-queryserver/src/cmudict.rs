
use lazy_static::lazy_static;
use lazy_static_include::{
    lazy_static_include_str, lazy_static_include_str_impl, lazy_static_include_str_inner,
};


use serde;
use serde_json;
use std::collections::HashMap;

lazy_static_include_str!(CMUDICT_JSON, "cmudict.json");
lazy_static!
{
    pub static ref CMUDICT: HashMap<String, Vec<String>> = load_cmudict();
    pub static ref CMUDICT_KEYS: Vec<&'static String> = CMUDICT.keys().collect::<Vec<_>>();

}

fn load_cmudict<'a>() -> HashMap<String, Vec<String>> {
    let json : HashMap<String, Vec<String>> = serde_json::from_str(*CMUDICT_JSON).unwrap();
    json
}
