// my profile click
const myProfile = document.getElementById("user-component__me");
const profileModal = document.getElementById("profile");
const profileClose = document.getElementById("profile_modalClose");


function handleShowProfile() {
    profileModal.style.display = "flex";
}

profileClose.onclick = () => {
    profileModal.style.display = "none";
}

myProfile.addEventListener("click", handleShowProfile);



// friends channel-toggle

const channelToggle = document.getElementById("channelToggle");
const channel = document.getElementById("channel");

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

channelToggle.addEventListener("click", handleToggle);
friendsToggle.addEventListener("click", handleFriendsToggle);