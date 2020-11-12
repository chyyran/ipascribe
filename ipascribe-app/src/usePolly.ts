import React, { useState, useCallback, useEffect } from 'react';
import useFetch, { Provider } from 'use-http'


const usePolly = (): [string, (ipa: string) => Promise<void>] => {
    const [audio, setAudio] = useState<string>("");
    const { get, post, response, loading, error } = useFetch("https://sc7lajimwg.execute-api.us-east-1.amazonaws.com")
    const fetchNewAudio = useCallback(async (ipa: string) => {
        const audio = await post("/PollyInitStage", {
            text: ipa
        })

        if (response.ok) {
            setAudio(audio)
        }

    }, [get, response])

    return [audio, fetchNewAudio]
}

export default usePolly