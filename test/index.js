define(function(require, exports, module){

var Canvas = require('i-canvas');

var canvas = Canvas.create($('#container')),
    doc = canvas.document,
    body = doc.body;

var rec1 = doc.createElement('rectangle', {
    top: 100,
    left: 0,
    width: 100,
    height: 100,
    background: '#000'
});

var img1 = doc.createElement('image', {
    top: 100,
    left: 0,
    width: 80,
    height: 80,
    background: null,
    url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=222842970,3679440991&fm=58'
});

var circle1 = doc.createElement('circle', {
    top: 300,
    left: 300,
    radius: 30,
    background: 'blue',
    border: 'yellow',
    'border-width': 10
});

var circle2 = doc.createElement('circle', {
    top: 50,
    left: 50,
    radius: 20,
    background: 'green',
    position: 'relative',
    'z-index': 10
});

body.appendChild(rec1);
body.appendChild(img1);
body.appendChild(circle1);
body.appendChild(circle2);
rec1.draggable().accelerate({x:0,y:0.1});
rec1.on('drag-begin', function(){
    rec1.move({x:0, y:0}).accelerate({x:0,y:0});
});
rec1.on('drag-end', function(){
    rec1.accelerate({x:0,y:0.1});
});
img1.move({x:6,y:0}).friction(0.08);
circle1.move({x:-2,y:-4}).accelerate({x:0,y:0.2});
circle2.move({x:3,y:-2}).accelerate({x:0,y:0.1});

img1.draggable();

circle1.bound({
    x: {
        min: 0,
        max: canvas.opt.width
    },
    y: {
        min: 0,
        max: canvas.opt.height
    }
}).friction(0.1).draggable();

});