export const searchForm = document.getElementById('form'),
             lyric = document.querySelector(".lyric"),
             spiner = document.querySelector(".sk-circle"),
             showMessage = (message) => {
                const messageElem = document.querySelector(".message");
                messageElem.innerHTML = message;
                messageElem.style.display = "block";
                setTimeout(() => {
                   messageElem.style.display = "none";
                }, 3000);
             };