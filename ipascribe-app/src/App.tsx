import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import useWordFetch from './useWordFetch'
import usePolly from './usePolly';
import AudioPlayer from './AudioPlayer';
import SkipButton from './SkipButton';
import IpaInput from './ipainput/IpaInput'

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
    let cmp = wordPair.ipa
    if (ignoreStress) {
      answer = answer.replaceAll('ˈ', '').replaceAll(':', '').replaceAll('ˌ', '').trim()
      cmp = cmp.replaceAll('ˈ', '').replaceAll(':', '').replaceAll('ˌ', '').trim()
    }
    if (answer === cmp) {
      console.log(answer, "is correct")
      setAnswerIsWrong(false)
      setScore(score+1)
    } else {
      console.log(cmp)
    }
  }

  useEffect(() => { fetchNewAudio(wordPair.ipa) }, [wordPair])

  return (
    <div className="App" style={{ background: answerIsWrong ? 'red' : 'green' }}>
      <label>
        Ignore Stress and Length
            <input type="checkbox" checked={ignoreStress}
          onChange={(event) => setIgnoreStress(event.target.checked)} />
      </label>
      <label>
        Limit IPA Suggestions to English
            <input type="checkbox" checked={limitToEnglish}
          onChange={(event) => setLimitToEnglish(event.target.checked)} />
      </label>
      <span>Score: {score}</span>
      <div>
        <div>
          {wordPair.orthographic}
        </div>
        {answerShown || !answerIsWrong ?
          <div>
            {wordPair.ipa}
          </div> : <></>}
      </div>

      <div style={{ display: "flex" }}>
        <AudioPlayer src={"data:audio/mpeg;base64," + audio} />
        {
          answerShown || !answerIsWrong ?
            <SkipButton
              fetchNewWord={fetchNewWord}
              setShowAnswer={setShowAnswer}
              setAnswerIsWrong={setAnswerIsWrong} />
            :
            <button onClick={() => setShowAnswer(true)}>Show answer</button>
        }
      </div>


      {!answerShown && answerIsWrong ?
        <IpaInput
          language={limitToEnglish ? "en" : ""}
          onSubmit={value => checkAnswer(value)}
          onChange={value => checkAnswer(value)}
        /> : <></>}
    </div>
  );
}

export default App;
