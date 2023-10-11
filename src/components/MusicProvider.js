import React, { useContext, useState, useEffect } from 'react';

const MusicContext = React.createContext();

export function MusicProvider({ children }) {
  const [audio] = useState(new Audio(require('../assets/loveLike.mp3')));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic: () => setIsPlaying(!isPlaying) }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
