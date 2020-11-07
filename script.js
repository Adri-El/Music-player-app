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
      songSrc: "http://musiklibrary.com/wp-content/uploads/2017/12/fun.-Some-Nights-www.musiklibrary.com_.mp3",
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
      songSrc: "https://www.9jamo.com/wp-content/uploads/2019/12/Slowly9jamo.com1_.mp3",
      imgSrc: "images/img7.jpeg"
    },
    
    {
      song: "Set fire to the rain",
      artist: "Adele",
      songSrc: "https://ghettoparrot.com/wp-content/uploads/2020/07/Adele-Set-Fire-To-The-Rain.mp3",
      imgSrc: "images/img8.jpeg"
    },
    
    {
      song: "Fire flies",
      artist: "Owl city",
      songSrc: "https://freemusicspot.com/m/owl-city-fireflies.mp3",
      imgSrc: "images/img9.jpeg"
    },
    
    {
      song: "Shape Of You",
      artist: "Ed Sheeran",
      songSrc: "https://www.naijafinix.com.ng/wp-content/uploads/2020/10/Ed-Sheeran-Shape-Of-You-via-Naijafinix.com_.mp3",
      imgSrc: "data:image/jpeg;base64,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"
    },
    
    {
      song: "Blame it on me",
      artist: "Akon",
      songSrc: "https://www.naijafinix.com.ng/wp-content/uploads/2020/08/Akon-Sorry-Blame-It-On-Me-via-Naijafinix.com_.mp3",
      imgSrc: "https://m.media-amazon.com/images/I/51ucjw7FIcL._SS500_.jpg"
    },
    
    {
      song: "Abule",
      artist: "Patoranking",
      songSrc: "https://cdn.trendybeatz.com/audio/Patoranking-Abule.mp3",
      imgSrc: "https://m.media-amazon.com/images/I/91PxNi-uU-L._SS500_.jpg"
    },
    
    {
      song: "Vibration",
      artist: "Fireboy DML",
      songSrc: "https://cdn.trendybeatz.com/audio/Fireboy-DML-Vibration.mp3",
      imgSrc: "images/img13.jpeg"
    },
    
    {
      song: "Wash",
      artist: "Tekno",
      songSrc: "https://www.naijahits.com/wp-content/uploads/2017/11/TEKNO-WASH.mp3",
      imgSrc: "images/img14.jpeg"
    },
    
    {
      song: "Parcel",
      artist: "Phyno",
      songSrc: "https://cdn.trendybeatz.com/audio/Phyno-Parcel.mp3",
      imgSrc: "images/img15.jpeg"
    },
    
    {
      song: "Who You Epp",
      artist: "Olamide",
      songSrc: "https://cdn.trendybeatz.com/audio/Olamide_Who_You_Epp_feat_Wande_Coal.mp3",
      imgSrc: "images/img16.jpeg"
    },
    
    {
      song: "Opo",
      artist: "2baba",
      songSrc: "https://cdn.trendybeatz.com/audio/2face-Opo-ft-wizkid.mp3",
      imgSrc: "images/img17.jpeg"
    },
    
    {
      song: "Fem",
      artist: "Davido",
      songSrc: "https://cdn.trendybeatz.com/audio/Davido-Fem-(TrendyBeatz.com).mp3",
      imgSrc: "https://m.media-amazon.com/images/I/71-DYt4fC0L._SS500_.jpg"
    },
    
    {
      song: "Anybody",
      artist: "Burna Boy",
      songSrc: "https://cdn.trendybeatz.com/audio/Burna_Boy_Anybody.mp3",
      imgSrc: "images/img19.jpeg"
    },
    
    {
      song: "Hola Hola",
      artist: "Sugarboy",
      songSrc: "https://tooxclusive.com/wp-content/uploads/2016/01/Sugarboy-Hola-Hola.mp3",
      imgSrc: "images/img20.jpeg"
    },
    
    {
      song: "Holy",
      artist: "Justin Bieber",
      songSrc: "https://www.soloplay.ng/wp-content/uploads/2020/09/Justin_Bieber_Ft_Chance_The_Rapper_-_Holy_Soloplay.ng.mp3?_=1",
      imgSrc: "https://m.media-amazon.com/images/I/71z1Cb2pFoL._SS500_.jpg"
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
  
  
  prevBtn.addEventListener("mousedown", ()=>{
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
  
  prevBtn.addEventListener("mouseup", ()=>{
    setTimeout(function() {
      prevBtn.classList.remove("down")
    }, 250);
    
  })
  
  nextBtn.addEventListener("mousedown", ()=>{
    nextBtn.classList.add("down")
    
    currentSong += 1
    nextSong = currentSong + 1
    
    changeSong(currentSong, nextSong)
    
    
  })
  
  nextBtn.addEventListener("mouseup", ()=>{
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