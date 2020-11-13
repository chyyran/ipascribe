import React, { useEffect, useState } from 'react';
import './App.css';

import useWordFetch from './useWordFetch'
import usePolly from './usePolly';
import AudioPlayer from './AudioPlayer';
import SkipButton from './SkipButton';
import IpaInput from './ipainput/IpaInput'
import { Button, Checkbox, FormControlLabel } from '@material-ui/core'

function App() {
  const [wordPair, fetchNewWord] = useWordFetch()
  const [audio, fetchNewAudio] = usePolly()
  const [score, setScore] = useState(0)
  const [ignoreStress, setIgnoreStress] = useState(true)
  const [limitToEnglish, setLimitToEnglish] = useState(true)
  const [answerShown, setShowAnswer] = useState(false)
  const [answerIsWrong, setAnswerIsWrong] = useState(true)

  const checkAnswer = (answer: string) => {
    console.log(answer)
    let cmp = wordPair.ipa // proper IPA colons
    answer = answer.replaceAll(':', 'ː')
    if (ignoreStress) {
      answer = answer.replaceAll('ˈ', '').replaceAll(':', '').replaceAll('ˌ', '').trim()
      cmp = cmp.replaceAll('ˈ', '').replaceAll(':', '').replaceAll('ˌ', '').trim()
    }
    if (answer === cmp) {
      console.log(answer, "is correct")
      setAnswerIsWrong(false)
      setScore(score + 1)
    } else {
      console.log(cmp)
    }
  }

  useEffect(() => { fetchNewAudio(wordPair.ipa) }, [fetchNewAudio, wordPair])

  return (
    <div className="container" style={{ background: answerIsWrong ? "#ef9a9a" : "#c5e1a5" }}>
      <div className="App">
        
        <div className="question">
          <div className="word">
            {wordPair.orthographic}
          </div>
          <div className={answerShown || !answerIsWrong ? "ipa" : "ipa-hidden"}>
              [{wordPair.ipa}]
          </div>
        </div>

        <div style={{ display: "flex" }} className="buttons">
          <AudioPlayer src={"data:audio/mpeg;base64," + audio} />
          {
            answerShown || !answerIsWrong ?
              <SkipButton
                fetchNewWord={fetchNewWord}
                setShowAnswer={setShowAnswer}
                setAnswerIsWrong={setAnswerIsWrong} />
              :
              <Button variant="contained" color="primary" onClick={() => setShowAnswer(true)}>Show answer</Button>
          }
        </div>
        <div className="controls">
          <span className="score">Score: {score}</span>
          <FormControlLabel
            value="start"
              control={<Checkbox color="primary" onChange={(event) => setIgnoreStress(event.target.checked)}  checked={ignoreStress}/>}
              label="Ignore Stress and Length"
              labelPlacement="start"
            />
             <FormControlLabel
            value="start"
              control={<Checkbox color="primary"  onChange={(event) => setLimitToEnglish(event.target.checked)} checked={limitToEnglish}/>}
              label="Limit IPA Suggestions to English"
              labelPlacement="start"
            />
        </div>
        {!answerShown && answerIsWrong ?
          <IpaInput
            language={limitToEnglish ? "en" : ""}
            onSubmit={value => checkAnswer(value)}
            onChange={value => checkAnswer(value)}
          /> : <></>}

      </div>
    </div>
  );
}

export default App;
