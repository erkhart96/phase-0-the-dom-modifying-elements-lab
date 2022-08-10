const main = document.getElementById('main');

main.remove();

const newHeader = document.createElement('h1');
newHeader.className = 'victory';
newHeader.id = 'victory';
newHeader.innerHTML = 'Ben is the champion'