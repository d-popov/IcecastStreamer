var config = {};

config.musicDir = ['/mnt/nas4T/DOBY/MUSIC/CD'];
// Seconds to crossfade tracks, set 0 to disable
config.crossfade = 5;
// If not provided, directory where run script located is used
config.playstlistDir = '';

config.commercial = {};
config.commercial.enable = false;
config.commercial.dir = ''; ['/mnt/nas4T/DOBY/MUSIC/BG/Ivana'];
// If set true commecrials are also crossfaded
config.commercial.crossfade = false;
/*
	Frequnecy consists with two numbers. First one shows how many regular songs are played until commecrial
	Second one shows how many commercials are played one time. Numbers are sperated by :
*/
config.commercial.frequency = '1:1';

config.icecast = {};
config.icecast.host = 'localhost';
config.icecast.port = '8000';
config.icecast.name = '/test.mp3';//stream
config.icecast.password = '8uR2S8!X';//hackme
config.icecast.encoder = 'mp3';
config.icecast.description = '';

config.client = {};
config.client.port = 8080;

config.audio = {};
config.audio.outSampleRate = 44100;

config.debugLevel = 'INFO';

module.exports = config;
