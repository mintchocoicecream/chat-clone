// my profile click
const myProfile = document.getElementById("user-component__title-me");
const friendProfile = document.getElementById("user-component__title-fr");
const profileModal = document.getElementById("profile");
const profileFriendsModal = document.getElementById("profile__friends");
const profileClose = document.getElementById("profile_modalClose");
const profileFrClose = document.getElementById("profile-fr_modalClose");
const friendsMusic = document.querySelector(".user-component__music");
const myMusicClose = document.querySelector(".fa-arrow-left");
const musicModal = document.getElementById("music");



function handleShowProfile() {
    profileModal.style.display = "flex";
}

friendProfile.onclick = () => {
    profileFriendsModal.style.display = "flex";
}


profileClose.onclick = () => {
    profileModal.style.display = "none";
}

profileFrClose.onclick = () => {
    profileFriendsModal.style.display = "none";
}

function handleShowMusic() {
    musicModal.style.display = "flex";
}

myMusicClose.onclick = () => {
    musicModal.style.display = "none";
}


myProfile.addEventListener("click", handleShowProfile);
friendsMusic.addEventListener("click", handleShowMusic);


// friends channel-toggle

const channelToggle = document.getElementById("channelToggle");
const channel = document.querySelector(".friends-screen__channels");

const channelListToggle = document.querySelector(".channelToggle_number")
const channelBelowToggle = document.querySelector(".channelToggle_below");
const channelLists = document.querySelector(".friends-screen__channel-lists");

const friendsToggle = document.getElementById("friendsToggle");
const friends = document.getElementById("friends");

let channelOnoff = true;
let friendsOnoff = true;

function handleToggle() {
    const up = channelToggle.querySelector("span.up");
    const down = channelToggle.querySelector("span.down");
    if(channelOnoff===true){
        channel.style.display = "none";
        up.classList.add("hidden");
        down.classList.remove("hidden");
        channelOnoff = false;
    }else{
        channel.style.display = "flex";
        up.classList.remove("hidden");
        down.classList.add("hidden");
        channelOnoff = true;
    }
}

function handleFriendsToggle() {
    const up = friendsToggle.querySelector("span.up");
    const down = friendsToggle.querySelector("span.down");
    if(friendsOnoff===true){
        friends.style.display = "none";
        up.classList.add("hidden");
        down.classList.remove("hidden");
        friendsOnoff = false;
    }else{
        friends.style.display = "flex";
        up.classList.remove("hidden");
        down.classList.add("hidden");
        friendsOnoff = true;
    }
}

const listToggle = false;
const belowToggle = false;

channelListToggle.onclick = () => {
    if(listToggle === false){
        channelBelowToggle.style.display = "flex";
        channelListToggle.style.display = "none";
        channelLists.style.display = "flex";
        listToggle = true;
        belowToggle = false;
    }
}



channelBelowToggle.onclick = () => {
    if(belowToggle === false){
        channelBelowToggle.style.display = "none";
        channelListToggle.style.display = "block";
        channelLists.style.display = "none";
        belowToggle = true;
        listToggle = false;
    }
}

channelToggle.addEventListener("click", handleToggle);
friendsToggle.addEventListener("click", handleFriendsToggle);