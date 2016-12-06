var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady(){
	player = new YT.player("player",{
	height: '360',
	width: '640',
	playerVars: {
		"autoplay":0,
		"controls":1
	},
	events: {
		"onReady": onPlayerReady
	}
	});
}

function onPlayerReady(event){
	player.cuePlaylist({
  listType:"playlist",
  list:"PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc",
  index:"0"
  });
}

function nextVideo(){

}