let songBoxes = document.querySelectorAll(".songBox");
let audios = document.querySelectorAll("audio");
let playBtns = document.querySelectorAll(".playBtn");
let pauseBtns = document.querySelectorAll(".pauseBtn");
let hearts = document.querySelectorAll(".heart");
let likedSongsList = document.querySelector(".likedSongsList");
// let likedSongItems = document.querySelectorAll(".likedSongItem");
// console.dir(hearts);

let pre = document.querySelector(".previous")
let forw = document.querySelector(".forward")

let currentSongImg = document.querySelector(".currentSongImg");
let currentSongName = document.querySelector(".currentSong");

let likedSongs = [];
let currentSongInd = null;

let globalPlay = false;

for(let i=0;i<hearts.length; i++){
    let fav = false;
    hearts[i].addEventListener("click", (e)=>{
        // console.log("clicked");
        if(fav == false){
            fav = true;


            if(likedSongs.includes(songBoxes[i].children[2].innerText) == false){

                likedSongs.push(songBoxes[i].children[2].innerText);

                let likedSongItem = document.createElement("span");
                likedSongItem.innerText = songBoxes[i].children[2].innerText;
                likedSongItem.classList.add("likedSongItem");
                likedSongsList.append(likedSongItem);

                // console.dir(likedSongItems);
                console.log(likedSongs);
            }
            
            

            hearts[i].classList.add("heartAfter")
        }
        else{
            fav = false;
            hearts[i].classList.remove("heartAfter");

            if(likedSongs.includes(songBoxes[i].children[2].innerText) == true){

                let ind = likedSongs.indexOf(songBoxes[i].children[2].innerText);
                console.log(ind);
                likedSongsList.removeChild(likedSongsList.children[ind]);
                likedSongs.splice(ind,1);
                console.log(likedSongs);

            }
        
        }
    })
}

for(let i = 0 ;i<songBoxes.length; i++){
    let currentPlay = false;
    songBoxes[i].addEventListener("click", (event) =>{
        // console.log(event);
        console.log(event.target)
        if(event.target.classList[3] != "heart" && globalPlay == false){
            console.log("global play is false... Playing a new song")
            // currentPlay = true;
            globalPlay = true;

            currentSongInd = i;
            console.log(currentSongInd);

            currentSongImg.src = songBoxes[i].children[1].children[0].src;
            currentSongName.innerText = songBoxes[i].children[2].innerText;
            currentSongImg.classList.add("currentSongImgAfter");

            audios[currentSongInd].currentTime = 0;
            audios[currentSongInd].play();

            songBoxes[currentSongInd].classList.add("songBoxActive");
            pauseBtns[currentSongInd].classList.add("pauseBtnAfter");
            playBtns[currentSongInd].classList.add("playBtnAfter");
        }
        else if(event.target.classList[3] != "heart" && event.target.children[2].innerText == songBoxes[currentSongInd].children[2].innerText && globalPlay ==true){
            console.log("global play is now transforming false... stopping song")
            globalPlay = false;

            currentSongInd = null;

            audios[i].pause();

            currentSongImg.src = "";
            currentSongName.innerText = "";
            currentSongImg.classList.remove("currentSongImgAfter");
            songBoxes[i].classList.remove("songBoxActive");
            pauseBtns[i].classList.remove("pauseBtnAfter")
            playBtns[i].classList.remove("playBtnAfter")

        }
        else if(event.target.classList[3] != "heart" && globalPlay == true && event.target.children[2].innerText != songBoxes[currentSongInd].children[2].innerText){
            console.log("global play is true... changing song song")
            console.log(event);

            songBoxes[currentSongInd].classList.remove("songBoxActive");
            pauseBtns[currentSongInd].classList.remove("pauseBtnAfter");
            playBtns[currentSongInd].classList.remove("playBtnAfter");

            audios[currentSongInd].pause();

            currentSongInd = i;
            // currentPlay = true;

            currentSongImg.src = songBoxes[i].children[1].children[0].src;
            currentSongName.innerText = songBoxes[i].children[2].innerText;
            currentSongImg.classList.add("currentSongImgAfter");

            audios[currentSongInd].currentTime = 0;
            audios[currentSongInd].play();

            songBoxes[currentSongInd].classList.add("songBoxActive");
            pauseBtns[currentSongInd].classList.add("pauseBtnAfter");
            playBtns[currentSongInd].classList.add("playBtnAfter");

            
        }
    })
}


pre.addEventListener("click", ()=>{
    console.log("Previous");

    if(currentSongInd > 0){
        audios[currentSongInd].pause();
    songBoxes[currentSongInd].classList.remove("songBoxActive");
    pauseBtns[currentSongInd].classList.remove("pauseBtnAfter");
    playBtns[currentSongInd].classList.remove("playBtnAfter");
        currentSongInd -= 1;

        currentSongImg.src = songBoxes[currentSongInd].children[1].children[0].src;
            currentSongName.innerText = songBoxes[currentSongInd].children[2].innerText;
            currentSongImg.classList.add("currentSongImgAfter");

        audios[currentSongInd].currentTime = 0;
        audios[currentSongInd].play();

        songBoxes[currentSongInd].classList.add("songBoxActive");
        pauseBtns[currentSongInd].classList.add("pauseBtnAfter");
        playBtns[currentSongInd].classList.add("playBtnAfter");
    }
})

forw.addEventListener("click", ()=>{
    console.log("Forward");
    if(currentSongInd != 4){
        audios[currentSongInd].pause();
    songBoxes[currentSongInd].classList.remove("songBoxActive");
    pauseBtns[currentSongInd].classList.remove("pauseBtnAfter");
    playBtns[currentSongInd].classList.remove("playBtnAfter");
        currentSongInd += 1;

        currentSongImg.src = songBoxes[currentSongInd].children[1].children[0].src;
            currentSongName.innerText = songBoxes[currentSongInd].children[2].innerText;
            currentSongImg.classList.add("currentSongImgAfter");

        audios[currentSongInd].currentTime = 0;
        audios[currentSongInd].play();

        songBoxes[currentSongInd].classList.add("songBoxActive");
        pauseBtns[currentSongInd].classList.add("pauseBtnAfter");
        playBtns[currentSongInd].classList.add("playBtnAfter");
    }
})


let check = document.querySelector("#user");
let userInfo = document.querySelector(".userInfo")
// console.log(check.checked);

check