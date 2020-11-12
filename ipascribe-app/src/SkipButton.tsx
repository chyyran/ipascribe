import React from 'react'


const SkipButton = ({ fetchNewWord, setShowAnswer, setAnswerIsWrong }: { fetchNewWord: () => Promise<void>, setShowAnswer: (showAnswer: boolean) => void, setAnswerIsWrong: (showAnswer: boolean) => void }) => {
    return (<div>
        <button
            onClick={() => {
                fetchNewWord();
                setShowAnswer(false);
                setAnswerIsWrong(true);
            }}>Next</button>
    </div>)
}

export default SkipButton