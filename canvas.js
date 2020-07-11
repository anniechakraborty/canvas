var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillRect(200, 100, 80, 80);
c.fillRect(400, 200, 80, 80);
console.log(canvas);