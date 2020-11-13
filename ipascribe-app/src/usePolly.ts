import { useState, useCallback} from 'react';
import useFetch from 'use-http'


const usePolly = (): [string, (ipa: string) => Promise<void>] => {
    const [audio, setAudio] = useState<string>("");
    const { post, response } = useFetch("https://sc7lajimwg.execute-api.us-east-1.amazonaws.com")
    const fetchNewAudio = useCallback(async (ipa: string) => {
        const audio = await post("/PollyInitStage", {
            text: ipa
        })

        if (response.ok) {
            setAudio(audio)
        }

    }, [post, response])

    return [audio, fetchNewAudio]
}

export default usePolly