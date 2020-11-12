import React from 'react'


const AudioPlayer = ({ src }: { src: string }) => {

    const audio = new Audio(src)
    return (<div>
                <button onClick={() => audio.play()}>Play</button>
            </div>)
}

export default AudioPlayer