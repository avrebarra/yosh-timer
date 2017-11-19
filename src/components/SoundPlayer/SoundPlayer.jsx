import React from 'react';
import sound from './sound.mp3';


const SoundPlayer = (props) => {
  return (
    <audio className="SoundPlayer" autoPlay={true} loop={true} src={sound} >
      Your browser does not support the <code>audio</code> element.
    </audio>
  )
}

export default SoundPlayer;
