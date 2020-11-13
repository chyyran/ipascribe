import React from 'react'

import { FaPlay } from 'react-icons/fa'
import { Button } from '@material-ui/core'

const AudioPlayer = ({ src, loading }: { src: string, loading: boolean }) => {

    const audio = new Audio(src)
    return (
        <Button
            classes={{ contained: 'audio-button' }}
            variant='contained'
            disabled={loading}
            onClick={() => audio.play()}>
            <FaPlay />&nbsp;Play</Button>)
}

export default AudioPlayer