let appList = ['app', 'blog', 'shop', 'note', 'game', 'art', 'grave'];

const display = document.getElementById('display');
const appTitle = document.getElementById('app-name');
const options = document.getElementById('options');


const cleanUp = () => {
    display.innerHTML = '';
}

const setDisplay = () => {
    let selectedApp = appList[0];
    appTitle.innerHTML = selectedApp;
    appTitle.style.color = '#2ED9EB';
    if (selectedApp === 'art') {
        cleanUp();
        return generateArt();
    } else if (selectedApp === 'game') {
        cleanUp();
        return generateGame();
    } else {
        cleanUp();
    }
};

const rotateRight = () => {
    appList.push(appList.shift());
    setDisplay();
};

const rotateLeft = () => {
    appList.unshift(appList.pop());
    setDisplay();
};

document.getElementById('button-right').onclick = rotateRight;
document.getElementById('button-left').onclick = rotateLeft;


document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
});