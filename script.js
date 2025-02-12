console.log('hello');

async function getsongs(){
    let a = await fetch ("http://127.0.0.1:5500/Songs/")
    let responce = await a.text();
    let div = document.createElement("div")
    div.innerHTML = responce;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    return songs

}

async function main(){
    //Get the list of songs.
    let songs = await getsongs()
    console.log(songs)

    let songUL = document.querySelector(".playlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        let songLI = document.createElement("li")
        let songname = decodeURI(song.split("Songs/")[1])
        console.log(songname);
        
        
        songLI.innerHTML = songLI.innerHTML + songname;
        songUL.appendChild(songLI)
    }

    //play the first song
    var audio = new Audio(songs[0]);
    // audio.play();

}  

document.getElementById("view").addEventListener("click",()=>{
    let playL = document.querySelector(".playlist")
    // console.log(playL.style.right);
    // playL.style.right = "0"
    
    if(playL.style.right = -310 + "px"){
        playL.style.right = "0"
        console.log(playL.style.right);   
    }
    else{
        playL.style.right = "-310px"
        console.log(playL.style.right);
    }
})

main()
