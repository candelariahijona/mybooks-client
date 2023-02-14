import React, {useEffect, useState} from "react";


export default function AudioPlayer() {
    const [book, setBook] = useState(null);
    
    // Get book
    useEffect(() => {
        const path = window.location.href.split("/").pop();
        
        if (path === "listen") {
            fetch("/api/books", {method : "GET"})
                .then(res => res.json())
                .then(result => {
                    const length = result.length;
                    const random = Math.floor(Math.random() * length);

                    setBook(result[random]);
            });
        } else {
            fetch(`/api/${path}`, {method : "GET"})
                .then(res => res.json())
                .then(result => setBook(result));
        }
    }, []);

    // Update audio player
    function updateAudioPlayer() {
        const audio = document.getElementById('audio');
        const duration = document.getElementById('duration');
        const currentTime = document.getElementById('current-time');
        const progress = document.querySelector('#progress figure');

        duration.textContent = convertTime(audio.duration);
        currentTime.textContent = convertTime(audio.currentTime);
        progress.style.width = audio.currentTime * 100 / audio.duration + '%';
    }

    // Convert miliseconds to MM:SS format
    function convertTime(time) {    
        var mins = Math.floor(time / 60);
        if (mins < 10) {
            mins = '0' + String(mins);
        }

        var secs = Math.floor(time % 60);
        if (secs < 10) {
            secs = '0' + String(secs);
        }

        return mins + ':' + secs;
    }

    // Toggle save
    function toggleSave(id) {
        fetch(`/api/${id}`, { method : "PUT"})
            .then(res => res.json())
            .then(result => setBook(result));
    }

    // Toggle play
    var playing = false;
    
    function togglePlay() {
        const audio = document.querySelector("#audio-player audio");
        const img = document.querySelector("#btn-play img");

        if(playing) {
            audio.pause();
            img.setAttribute("src", "/Assets/Icons/White/play.svg");
            playing = false;
        } else {
            audio.play();
            img.setAttribute("src", "/Assets/Icons/White/pause.svg");
            playing = true;
        }
    }

    // Render
    return (
        !book ? "Loading" : (
            <>
                <div className="cover" style={{backgroundImage: `url(${book.cover})`}}>
                    <figure style={{backgroundImage: `url(${book.cover})`}}></figure>

                    <button id="btn-play" onClick={togglePlay}>
                        <img src="/Assets/Icons/White/play.svg" />
                    </button>
                </div>

                <div id="audio-player">
                    <audio id="audio" src={book.audio} onLoadedData={updateAudioPlayer} onTimeUpdate={updateAudioPlayer}></audio>

                    <span id="current-time">0:00</span>
                    <div id="progress">
                        <figure></figure>
                    </div>
                    <span id="duration">0:00</span>
                </div>

                <div className="content">
                    <div>
                        <h2>{book.name} ({book.year})</h2>
                        <button onClick={() => toggleSave(book._id)}>
                            {book.is_saved ? <img src="/Assets/Icons/Color/bookmarked.svg" /> : <img src="/Assets/Icons/Black/bookmark.svg" />}
                        </button>
                    </div>

                    <p>By <span>{book.author}</span></p>
                    <span>{book.description}</span>
                </div>
            </>
        )
    )
}