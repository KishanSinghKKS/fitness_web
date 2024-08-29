// VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import styles from "./Video.module.sass";
import cn from "classnames";

// ... (imports)

const VideoPlayer = () => {
  const youtubePlayerRef = useRef(null);
  const [opts, setOpts] = useState({
    height: '678px',
    width: '1187px',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    },
  });

  const onReady = (event) => {
    youtubePlayerRef.current = event.target;
    applyBorderRadius();
  };

  const applyBorderRadius = () => {
    if (youtubePlayerRef.current) {
      youtubePlayerRef.current.getIframe().style.borderRadius = '24px';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      // Update opts based on window width
      setOpts((prevOpts) => {
        if (windowWidth < 1000) {
          return {
            ...prevOpts,
            height: '300px',
            width: '400px',
          };
        } else {
          return {
            ...prevOpts,
            height: '678px',
            width: '1187px',
          };
        }
      });
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set the initial values
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array, as we don't want to include opts here

  return (
    <div className={cn("section", styles.section)} id='videoPlayer'>
      <YouTube videoId='wnHW6o8WMas' opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;