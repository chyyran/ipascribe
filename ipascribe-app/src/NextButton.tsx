import React from 'react'


const NextButton = ({ fetchNewWord }: { fetchNewWord: () => Promise<void> }) => {
    return (<div>
                <button onClick={() => fetchNewWord()}>Next</button>
            </div>)
}

export default NextButton