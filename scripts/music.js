// music

const musicHome = document.getElementById("header-music");
const currentMusic = document.getElementById("currentSong");
const currentMusicModal = document.getElementById("friendsMusic");
const currentMusicClose = document.getElementById("musicClose");


currentMusic.onclick = () => {
  currentMusicModal.style.display = "flex";
}

musicClose.onclick = () => {
  currentMusicModal.style.display = "none";
}