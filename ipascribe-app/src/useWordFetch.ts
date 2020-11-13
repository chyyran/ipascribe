import { useState, useCallback, useEffect } from 'react';
import useFetch, { CachePolicies } from 'use-http'

interface WordPair {
    orthographic: string,
    ipa: string
}

const useWordFetch = (): [WordPair, () => Promise<void>] => {
    const [wordPair, setWord] = useState<WordPair>({ orthographic: "", ipa: "" });
    const { get, response } = useFetch("https://ipascribe.ronnychan.ca", 
        { cachePolicy: CachePolicies.NO_CACHE })
    const fetchNewWord = useCallback(async () => {
        const word = await get("/word")

        if (response.ok) {
            setWord({
                orthographic: word[0],
                ipa: word[1].replaceAll(':', 'ː')
            })
        }

        console.log("Fetched new word: ", word[0], word[1])

    }, [get, response])

    useEffect(() => { fetchNewWord() }, [fetchNewWord])
    return [wordPair, fetchNewWord]
}

export default useWordFetch