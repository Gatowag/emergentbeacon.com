/* [### ↓ YT EMBED GENERATION ↓ ###] */
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('youtube', {
		height: '400',
		width: '800',
		videoId: ytID,
		playerVars: {
			'playsinline': 1
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {}
function onPlayerStateChange(event) {}

// generic seekTo function taking a player element and seconds as parameters
function playerSeekTo(player, seconds) {
	player.seekTo(seconds);
	player.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest'
	});
}