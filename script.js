// const video = require('./videos.json')

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");

    function scrollCarousel(direction) {
        currentIndex = (currentIndex + direction + items.length) % items.length;
        const angle = 360 /items.length;
        const rotateAngle = currentIndex * -angle;

        document.querySelector(".carousel-container").style.transform = `rotateY(${rotateAngle}deg)`;
    }

    document.querySelector(".carousel-arrow.left").addEventListener("click", () => scrollCarousel(-1));
    document.querySelector(".carousel-arrow.right").addEventListener("click", () => scrollCarousel(1));
});
// script.js

document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Event listener for hamburger menu toggle
    document.getElementById('hamburger').addEventListener('click', function() {
        var navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    });

    // Close menu when clicking on any nav link (for mobile)
    var navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Adjust width as per your breakpoint
                document.querySelector('.nav-links').style.display = 'none';
            }
        });
    });

    // 
});

// Define anime data with video information
const animeData = {
    "black-clover": {
        title: "Black Clover",
        poster: "resources/black clover.jpg",
        info: "2017 &bull; 23m &bull; <span class='rating'>8.15</span>",
        tags: ["Action", "Adventure", "Fantasy"],
        seasons: "4 Seasons - 170 Episodes",
        description: "Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.",
        genres: "Action, Adventure, Fantasy",
        cast: "Gakuto Kajiwara, Nobunaga Shimazaki",
        videos: [
            { title: "Trailer", src: "video\trailer\Black_Clover_Trailer.mp4" },
            { title: "Episode 1", src: "video/trailer/_ONE_PIECE _ Trailer.mp4" }
        ]

    },
    "blue-lock": {
        title: "Blue Lock",
        poster: "resources/blue_lock.jpg",
        info: "2022 &bull; 24m &bull; <span class='rating'>7.90</span>",
        tags: ["Sports", "Drama"],
        seasons: "1 Season - 24 Episodes",
        description: "After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to victory!",
        genres: "Sports, Drama",
        cast: "Tasuku Kaito, Kazuki Ura",
        video: [
            { title: "Trailer", src: "video/trailer/BLUE_LOCK _Trailer.mp4" },
            { title: "Episode 1", src: "video/episodes/_Blue_Lock_-_01.mp4" }
        ]
    },
    "hunter-x-hunter": {
        title: "Hunter x Hunter",
        poster: "resources/hunter.jpeg",
        info: "2011 &bull; 23m &bull; <span class='rating'>9.12</span>",
        tags: ["Action", "Adventure", "Fantasy"],
        seasons: "6 Seasons - 148 Episodes",
        description: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.",
        genres: "Action, Adventure, Fantasy",
        cast: "Megumi Han, Mariya Ise",
        videos: [
            { title: "Trailer", src: "videos/hunter-x-hunter-trailer.mp4" },
            { title: "Episode 1", src: "videos/hunter-x-hunter-ep1.mp4" }
        ]
    },
    "kaiju": {
        title: "Kaiju No. 8",
        poster: "resources/kaiju.jpeg",
        info: "2024 &bull; 24m &bull; <span class='rating'>8.50</span>",
        tags: ["Action", "Sci-Fi"],
        seasons: "1 Season - 12 Episodes",
        description: "Kafka Hibino is a member of the Japan Defense Force who gets transformed into a kaiju and must now hide his identity while fighting against other kaiju.",
        genres: "Action, Sci-Fi",
        cast: "Jonah Scott, Cristina Valenzuela",
        videos: [
            { title: "Trailer", src: "videos/kaiju-trailer.mp4" },
            { title: "Episode 1", src: "videos/kaiju-ep1.mp4" }
        ]
    },
    "mha": {
        title: "My Hero Academia",
        poster: "resources/mha.jpeg",
        info: "2016 &bull; 24m &bull; <span class='rating'>8.37</span>",
        tags: ["Action", "Adventure", "Fantasy"],
        seasons: "6 Seasons - 113 Episodes",
        description: "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.",
        genres: "Action, Adventure, Fantasy",
        cast: "Daiki Yamashita, Kenta Miyake",
        videos: [
            { title: "Trailer", src: "videos/kaiju-trailer.mp4" },
            { title: "Episode 1", src: "videos/kaiju-ep1.mp4" }
        ]
    },
    "naruto": {
        title: "Naruto",
        poster: "resources/naruto.jpg",
        info: "2002 &bull; 23m &bull; <span class='rating'>8.25</span>",
        tags: ["Action", "Adventure", "Fantasy"],
        seasons: "5 Seasons - 220 Episodes",
        description: "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the village's leader and strongest ninja.",
        genres: "Action, Adventure, Fantasy",
        cast: "Junko Takeuchi, Maile Flanagan",
        videos: [
            { title: "Trailer", src: "videos/naruto-trailer.mp4" },
            { title: "Episode 1", src: "videos/naruto-ep1.mp4" }
        ]
    },
    "one-piece": {
        title: "One Piece",
        poster: "resources/one_piece.jpg",
        info: "1999 &bull; 24m &bull; <span class='rating'>8.70</span>",
        tags: ["Action", "Adventure", "Fantasy"],
        seasons: "20+ Seasons - 1000+ Episodes",
        description: "Monkey D. Luffy and his pirate crew embark on a journey to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.",
        genres: "Action, Adventure, Fantasy",
        cast: "Mayumi Tanaka, Tony Beck",
        videos: [
            { title: "Trailer", src: "videos/one-piece-trailer.mp4" },
            { title: "Episode 1", src: "videos/one-piece-ep1.mp4" }
        ]
    },
    "wind": { 
        title: "Gone with the Wind",
        poster: "resources/wind.jpeg",
        info: "2017 &bull; 24m &bull; <span class='rating'>7.50</span>",
        tags: ["Drama", "Romance"],
        seasons: "1 Season - 12 Episodes",
        description: "In the midst of a turbulent era, a romance blooms between a rebel fighter and a noblewoman, each torn between love and duty.",
        genres: "Drama, Romance",
        cast: "Actor A, Actress B",
        videos: [
            { title: "Trailer", src: "videos/wind-trailer.mp4" },
            { title: "Episode 1", src: "videos/one-piece-ep1.mp4" }
        ]
    }
    // Add more anime objects here...
};

// Get the anime ID from the URL query parameter (e.g., ?anime=black-clover)
const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('anime');

// Populate the page with the corresponding anime details if on the anime details page
if (document.getElementById('anime-title')) {
    populateAnimeDetails(animeId);
}

function populateAnimeDetails(animeId) {
    const anime = animeData[animeId];

    if (anime) {
        document.getElementById('anime-title').innerText = anime.title;
        document.getElementById('anime-poster').src = anime.poster;
        document.getElementById('anime-info').innerHTML = anime.info;
        document.getElementById('anime-seasons').innerText = anime.seasons;
        document.getElementById('anime-description').innerText = anime.description;
        document.getElementById('anime-genres').innerText = `Genres: ${anime.genres}`;
        document.getElementById('anime-cast').innerText = `Cast: ${anime.cast}`;

        const tagsContainer = document.getElementById('tags');
        tagsContainer.innerHTML = ''; // Clear existing tags
        anime.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.innerText = tag;
            tagsContainer.appendChild(tagElement);
        });
    }       
}
// to load the anime videos
document.addEventListener("DOMContentLoaded", function() {
    const animeCardsContainer = document.getElementById("animeCardsContainer");
    console.log("animeCardsContainer");

    // Iterate over animeData keys (anime IDs)
    Object.keys(animeData).forEach(animeId => {
        const anime = animeData[animeId];

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("anime-card");
        cardDiv.innerHTML = `
            <h2>${anime.title}</h2>
            <p>${anime.description}</p>
            <div id="videoPlayer${animeId}" class="video-player"></div>
        `;
        animeCardsContainer.appendChild(cardDiv);

        // Load videos for the current anime
        anime.videos.forEach(video => {
            loadVideoForAnime(animeId, video.title, video.src);
        });
    });

    function loadVideoForAnime(animeId, videoTitle, videoSrc) {
        const playerElement = document.getElementById(`videoPlayer${animeId}`);
        if (playerElement) {
            playerElement.innerHTML += `
                <h3>${videoTitle}</h3>
                <video src="${videoSrc}" controls></video>
            `;
        }
    }
});
// starting of the video model
// videoSrc
function openModal(index) {
    // console.log(videoSrc,'videoSrc')
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('animeVideo');
    var source = document.createElement('source');

    // Clear previous source if any
    while (video.firstChild) {
        video.removeChild(video.firstChild);
    }

    // Set new source
    source.setAttribute('src', animeData["black-clover"].videos[index].src);
    console.log(animeData["black-clover"].videos[0].src)
    source.setAttribute('type', 'video/mp4');
    video.appendChild(source);

    // Display modal
    modal.style.display = 'block';

    // Autoplay video (optional)
    video.load();
    video.play();
}
function closeModal() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('animeVideo');

    // Pause and clear video source
    video.pause();
    video.removeAttribute('src');

    // Hide modal
    modal.style.display = 'none';
}

// Event listener for play/pause button
document.getElementById('playPauseBtn').addEventListener('click', function() {
    var video = document.getElementById('animeVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Event listener for rewind button
document.getElementById('rewindBtn').addEventListener('click', function() {
    var video = document.getElementById('animeVideo');
    video.currentTime -= 30; // Rewind by 30 seconds
});

// Event listener for forward button
document.getElementById('forwardBtn').addEventListener('click', function() {
    var video = document.getElementById('animeVideo');
    video.currentTime += 30; // Forward by 30 seconds
});

// Event listener to close modal when clicking on close button
var closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', function() {
    closeModal();
});

// Event listener to close modal when clicking outside of it
window.addEventListener('click', function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeModal();
    }
});
