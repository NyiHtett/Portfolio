import React from 'react';
import { useMusic } from './MusicProvider';

function Music() {
    const {isPlaying, toggleMusic} = useMusic(); 
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:100}}>
            <img width="400" src={require('../assets/Music.gif')}/>
            <audio controls loop>
            <source src={require('../assets/loveLike.mp3')} type="audio/mpeg" />
            </audio>
            <button onClick={toggleMusic}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </div>
    );
}

export default Music;