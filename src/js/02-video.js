import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setCurrentTime();

const onPlay = function (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
    // console.log(data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

function setCurrentTime() {
    const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
    player.setCurrentTime(currentTime);
}