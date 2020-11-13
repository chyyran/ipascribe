import React from 'react'
import { Button } from '@material-ui/core'


const SkipButton = ({ fetchNewWord, setShowAnswer, setAnswerIsWrong }: { fetchNewWord: () => Promise<void>, setShowAnswer: (showAnswer: boolean) => void, setAnswerIsWrong: (showAnswer: boolean) => void }) => {
    return (
        <Button
            variant="contained"
            onClick={() => {
                fetchNewWord();
                setShowAnswer(false);
                setAnswerIsWrong(true);
            }}>Next Word</Button>)
}

export default SkipButton