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
    if(currentLink === 'https://mintchocoicecream.github.io/chat-clone/index.html'){
        window.location.replace('https://mintchocoicecream.github.io/chat-clone/friends.html');
    }
    paintGreetings(savedChatUsername); 
}