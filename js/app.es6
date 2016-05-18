console.log('App Loaded');

var img = document.createElement('img');
img.style.height = '25%';
img.style.width = '25%';
img.src = require('../images/picture.png');

document.getElementById('img_container').appendChild(img);

require('../css/bootstrap.css');
require('../css/app.scss');
