var express = require('express');
var server = require('../../server/index.js');


var playerRouter = express.Router({mergeParams: true});

var getSongData = function() {
	var s = server.getInstance().player;
	return {
		current_song: s.getActiveDeck().song,
		coming_up: s.playlistManager.queue[0],
		position: s.getActiveDeck().getPosition()
	};
};

playerRouter.route('/current_song/').get(function (request, response) {
	response.json(getSongData());
});

playerRouter.route('/next/').get(function (request, response) {
	var next = server.getInstance().player.next();
	var songData = getSongData();
	songData.crossfading = next.crossfading;
	if (next.offset !== undefined)
		songData.offset = next.offset
	response.json(songData);
});

playerRouter.route('/listeners/').get(function (request, response) {
	response.json(server.getInstance().listeners);
});

module.exports = playerRouter;
