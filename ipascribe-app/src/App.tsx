import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import useWordFetch from './useWordFetch'
import usePolly from './usePolly';
import AudioPlayer from './AudioPlayer';
import NextButton from './NextButton';
function App() {

  const [wordPair, fetchNewWord] = useWordFetch()
  const [audio, fetchNewAudio] = usePolly()

  useEffect(() => { fetchNewAudio(wordPair.ipa) }, [wordPair])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {wordPair.orthographic}
        </p>

        <div style={{display: "flex"}}>
          <AudioPlayer src={"data:audio/mpeg;base64," + audio}/>
          <NextButton fetchNewWord={fetchNewWord}/>
        </div>
        <input type="text"></input>
      </header>
    </div>
  );
}

export default App;
