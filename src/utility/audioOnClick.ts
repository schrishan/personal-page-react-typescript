export const audioOnClick = () => {
    if (!document.body.classList.contains("audio-muted")) {
      const audio = new Audio("https://opterr.org/sadith/assets/audio/click.mp3");
      audio.play();
    }
  };