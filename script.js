window.onload = ()=>{
  const songImg = document.getElementById("song-img")
  
  const songPlayer = document.getElementById("song_player")
  
  const currentSongTitle = document.getElementById("current_song-title")
  
  const currentSongArtist = document.getElementById("current_song-artist")
  
  const nextSongTitle = document.getElementById("next_song-title")
  
  const nextSongArtist = document.getElementById("next_song-artist")
  
  const prevBtn = document.getElementById("prev-btn")
  
  const pauseBtn = document.getElementById("pause-btn")
  
  const nextBtn = document.getElementById("next-btn")
  
  const pauseIcon = document.getElementById("pause-icon")
  const playIcon = document.getElementById("play-icon")
  
  const songs = [
    {
      song: "Come as you are",
      artist: "Crowder",
      songSrc: "songs/Crowder - Come As You Are.mp3",
      imgSrc: "images/img1.jpeg"
    },
    
    {
      song: "Fighter",
      artist: "Jamie Grace",
      songSrc: "songs/Jamie Grace - Fighter.mp3",
      imgSrc: "images/img2.jpeg"
    },
    
    {
      song: "Sound of a Living Heart",
      artist: "JJ Heller",
      songSrc: "songs/JJ Heller - Sound of a Living Heart.mp3",
      imgSrc: "images/img3.jpeg"
    },
    
    {
      song: "Still Rolling Stones",
      artist: "Lauren Daigle",
      songSrc: "songs/Lauren Daigle - Still Rolling Stones.mp3",
      imgSrc: "images/img4.jpeg"
    },
    
    {
      song: "Some nights",
      artist: "Fun",
      songSrc: "songs/Fun - Some nights.mp3",
      imgSrc: "images/img5.jpeg"
    },
    
    {
      song: "Let You Down",
      artist: "NF",
      songSrc: "songs/NF - Let You Down.mp3",
      imgSrc: "images/img6.jpeg"
    },
    
    {
      song: "Slowly",
      artist: "Meddy",
      songSrc: "songs/Meddy - Slowly.mp3",
      imgSrc: "images/img7.jpeg"
    },
    
    {
      song: "Set fire to the rain",
      artist: "Adele",
      songSrc: "songs/Adele - Set fire to the rain.mp3",
      imgSrc: "images/img8.jpeg"
    },
    
    {
      song: "Fire flies",
      artist: "Owl city",
      songSrc: "songs/Owl city - Fire flies.mp3",
      imgSrc: "images/img9.jpeg"
    },
    
    {
      song: "Raise Your Glass",
      artist: "P!nk",
      songSrc: "songs/P!nk - Raise Your Glass.mp3",
      imgSrc: "images/img10.jpeg"
    },
    
    {
      song: "Cooler Than Me",
      artist: "Mike Posner",
      songSrc: "songs/Mike Posner - Cooler Than Me.mp3",
      imgSrc: "images/img11.jpeg"
    },
    
    {
      song: "Abule",
      artist: "Patoranking",
      songSrc: "songs/Patoranking - Abule.mp3",
      imgSrc: "images/img12.jpeg"
    },
    
    {
      song: "Vibration",
      artist: "Fireboy DML",
      songSrc: "songs/Fireboy DML - Vibration.mp3",
      imgSrc: "images/img13.jpeg"
    },
    
    {
      song: "Wash",
      artist: "Tekno",
      songSrc: "songs/Tekno - Wash.mp3",
      imgSrc: "images/img14.jpeg"
    },
    
    {
      song: "Parcel",
      artist: "Phyno",
      songSrc: "songs/Phyno - Parcel.mp3",
      imgSrc: "images/img15.jpeg"
    },
    
    {
      song: "Who You Epp",
      artist: "Olamide",
      songSrc: "songs/Olamide - Who You Epp.mp3",
      imgSrc: "images/img16.jpeg"
    },
    
    {
      song: "Opo",
      artist: "2baba",
      songSrc: "songs/2baba - Opo.mp3",
      imgSrc: "images/img17.jpeg"
    },
    
    {
      song: "Fem",
      artist: "Davido",
      songSrc: "songs/Davido - Fem.mp3",
      imgSrc: "images/img18.jpeg"
    },
    
    {
      song: "Anybody",
      artist: "Burna Boy",
      songSrc: "songs/Burna Boy - Anybody.mp3",
      imgSrc: "images/img19.jpeg"
    },
    
    {
      song: "Hola Hola",
      artist: "Sugarboy",
      songSrc: "songs/Sugarboy - Hola Hola.mp3",
      imgSrc: "images/img20.jpeg"
    },
    
    {
      song: "Holy",
      artist: "Justin Bieber",
      songSrc: "songs/Justin Bieber - Holy.mp3",
      imgSrc: "images/img21.jpeg"
    }
    
  ]
  
  let currentSong = 0
  let nextSong = currentSong + 1
  let start = false
  
  
  currentSongTitle.innerText = songs[currentSong].song
  
  currentSongArtist.innerText = songs[currentSong].artist
  
  nextSongTitle.innerText = songs[nextSong].song
  
  nextSongArtist.innerText = songs[nextSong].artist
  
  songPlayer.addEventListener("play", ()=>{
    songImg.style.animation = "rotate 3000ms linear infinite"
  })
  
  
  pauseBtn.addEventListener("click", ()=>{
    pauseBtn.classList.toggle("play-btn")
    if(pauseBtn.classList.value.includes("play-btn")){
      songPlayer.play()
      start = true
      pauseIcon.style.display = "inline"
      playIcon.style.display = "none"
      
    }
    else{
      songPlayer.pause()
      start = false
      pauseIcon.style.display = "none"
      playIcon.style.display = "inline"
      songImg.style.animation = ""
    }
      
  })
  
  songPlayer.addEventListener("ended",()=>{
    songImg.style.animation = ""
    
    currentSong += 1
    nextSong = currentSong + 1
    
    changeSong(currentSong, nextSong)
    
  })
  
  
  prevBtn.addEventListener("touchstart", ()=>{
    prevBtn.classList.add("down")
    
    if(currentSong === 0){
      currentSong = songs.length - 1
      nextSong = 0
      changeToPrev()
    }
    else{
      currentSong -= 1
      nextSong = currentSong + 1
    
      changeToPrev()
    }
    

  })
  
  prevBtn.addEventListener("touchend", ()=>{
    setTimeout(function() {
      prevBtn.classList.remove("down")
    }, 250);
    
  })
  
  nextBtn.addEventListener("touchstart", ()=>{
    nextBtn.classList.add("down")
    
    currentSong += 1
    nextSong = currentSong + 1
    
    changeSong(currentSong, nextSong)
    
    
  })
  
  nextBtn.addEventListener("touchend", ()=>{
    setTimeout(function() {
      nextBtn.classList.remove("down")
    }, 250);
    
  })
  
  
  function changeSong(currentVar, nextVar){
    
    if(currentVar === songs.length - 1){
      nextSong = 0
    }
    if(currentVar === songs.length){
      currentSong = 0
      nextSong = currentSong + 1
    }
    
    songPlayer.src = songs[currentSong].songSrc
    
    songImg.src = songs[currentSong].imgSrc
    
    currentSongTitle.innerText = songs[currentSong].song
    
    currentSongArtist.innerText = songs[currentSong].artist
    
    currentSongTitle.style.animation = "next-move ease-out 700ms"
    
    currentSongArtist.style.animation = "next-move ease-out 700ms"
    
    
    setTimeout(function() {
      currentSongTitle.style.animation = ""
    
    currentSongArtist.style.animation = ""
    }, 700);
    
    nextSongTitle.innerText = songs[nextSong].song
    
    nextSongArtist.innerText = songs[nextSong].artist
    
    if(start){
      songPlayer.play()
    }
    
  }
  
  
  
  function changeToPrev(){
    
    songPlayer.src = songs[currentSong].songSrc
    
    songImg.src = songs[currentSong].imgSrc
    
    
    currentSongTitle.innerText = songs[currentSong].song
    
    currentSongArtist.innerText = songs[currentSong].artist
    
    currentSongTitle.style.animation = "prev-move ease-out 700ms"
    
    currentSongArtist.style.animation = "prev-move ease-out 700ms"
    
    
    setTimeout(function() {
      currentSongTitle.style.animation = ""
    
    currentSongArtist.style.animation = ""
    }, 700);
    
    nextSongTitle.innerText = songs[nextSong].song
    
    nextSongArtist.innerText = songs[nextSong].artist
    
    if(start){
      songPlayer.play()
    }
    
  }
  

}