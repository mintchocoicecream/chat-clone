// status-bar clock

const clockDiv = document.getElementById("clock");
const clock = clockDiv.querySelector("span");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);


// save username to localstorage 
const userLoginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("login-form__username");
const userComponentMe = document.getElementById("user-component__me");
const CHATUSERNAME_KEY = "chatusername";
const savedChatUsername = localStorage.getItem(CHATUSERNAME_KEY);
const currentLink = document.location.href;

function onChatLoginSubmit() {
    const username = usernameInput.value;
    localStorage.setItem(CHATUSERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const userName = userComponentMe.querySelector("h4");
    userName.innerText = username;
}

if (savedChatUsername === null) {
    userLoginForm.addEventListener("submit", onChatLoginSubmit);
} else {
    if(currentLink === 'file:///C:/Users/sxxhn/Desktop/Programming/nomad_coders/chat-clone/index.html'){
        window.location.replace('file:///C:/Users/sxxhn/Desktop/Programming/nomad_coders/chat-clone/friends.html');
    }
    paintGreetings(savedChatUsername); 
}


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