const sounds = ["Barz", "GetEm", "Doom", "Man", "Perish", "Toasted"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    const currentSong = document.getElementById(sound);

    stopSongs();
    document.getElementById(sound).play();

    document.getElementById("pause-play").onclick = function () {
      if (checkText() === "isPaused") {
        pauseSongs();
        changeText();
      } else {
        currentSong.play();
        changeText();
      }
    };
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    const text = document.getElementById("pause-play");
    text.innerHTML = "Pause";
    song.pause();
    song.currentTime = 0;
  });
}

function pauseSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
  });
}

function checkText() {
  const text = document.getElementById("pause-play");
  if (text.innerHTML === "Pause") {
    return "isPaused";
  } else {
    return "isPlaying";
  }
}

function changeText() {
  const text = document.getElementById("pause-play");
  if (text.innerHTML === "Pause") {
    text.innerHTML = "Play";
  } else {
    text.innerHTML = "Pause";
  }
}
