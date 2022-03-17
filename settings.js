// logout 
const logout = document.getElementById("settingsLogout");
const logoutButton = logout.querySelector("span");
const logoutModal = document.getElementById("logoutModal");
const closeX = document.getElementsByClassName("settings__logoutModal-close")[0];
const logoutBtn = document.getElementById("logoutBtn");
const cancelBtn = document.getElementById("cancelBtn");
const CHATUSERNAME_KEY = "chatusername";
const savedChatUsername = localStorage.getItem(CHATUSERNAME_KEY);

function handleLogoutModal(){
    logoutModal.style.display = "flex";
}


function handleLogout(){
    if(savedChatUsername !== null){
        localStorage.removeItem(CHATUSERNAME_KEY);
    }
    window.location.replace('https://mintchocoicecream.github.io/chat-clone/index.html');
}


logoutButton.addEventListener("click", handleLogoutModal);
logoutBtn.addEventListener("click", handleLogout);

cancelBtn.onclick = function() {
    logoutModal.style.display = "none";
}

closeX.onclick = function() {
    logoutModal.style.display = "none";
}
