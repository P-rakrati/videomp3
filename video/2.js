const API_KEY = 'YOUR_API_KEY';
const VIDEO_ID = 'YOUR_UNLISTED_VIDEO_ID';


function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Callback function called when the API is ready
function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'controls': 1,
            'modestbranding': 1,
            'fs': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}


function onPlayerStateChange(event) {
   
}
loadYouTubeAPI();