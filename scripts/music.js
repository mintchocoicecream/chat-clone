// music

const myMusic = document.querySelector(".fa-music");
const myMusicClose = document.querySelector(".fa-arrow-left");
const musicModal = document.getElementById("music");


myMusicClose.onclick = () => {
    musicModal.style.display = "none";
}


function handleShowMusic() {
    musicModal.style.display = "flex";
}

myMusic.addEventListener("click", handleShowMusic);