var canvas = new fabric.Canvas('Canvas');
var rect = new fabric.Rect({
    width: 600,
    height: 600,
    top: 0,
    left: 0,
    fill: '#ffffff00',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(rect);

var line = new fabric.Line([550, 50, 550, 550], {
    stroke: '#2bc4aa',
    strokeWidth: 2
});
canvas.add(line);

var line2 = new fabric.Line([550, 50, 50, 50], {
    stroke: '#2bc4aa',
    strokeWidth: 2
});
canvas.add(line2);

// left border
var rect2 = new fabric.Rect({
    top: 0,
    left: 0,
    width: 10,
    height: 600,
    fill: '#2bc4aa',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(rect2);
// top border
var rect3 = new fabric.Rect({
    top: 0,
    left: 0,
    width: 600,
    height: 10,
    fill: '#2bc4aa',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
var gradient = new fabric.Gradient({
    type: 'linear',
    gradientUnits: 'pixels', // or 'percentage'
    coords: { x1: 0, y1: 0, x2: rect3.width, y2: 0 },
    colorStops:[
      { offset: 0, color: '#2bc4aa' },
      { offset: 1, color: '#fff'}
    ]
})
rect3.set('fill', gradient);
canvas.add(rect3);
// bottom border
var rect4 = new fabric.Rect({
    top: 590,
    left: 0,
    width: 600,
    height: 10,
    fill: '#2bc4aa',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
var gradient = new fabric.Gradient({
    type: 'linear',
    gradientUnits: 'pixels', // or 'percentage'
    coords: { x1: 0, y1: 0, x2: rect4.width, y2: 0 },
    colorStops:[
      { offset: 0, color: '#2bc4aa' },
      { offset: 1, color: '#fff'}
    ]
})
rect4.set('fill', gradient);
canvas.add(rect4);

// text 1
var text = new fabric.IText('Promotterr', {
    left: (canvas.width / 2),    
    top: 120,
    fontFamily: 'halimun',
    fontSize: 55,
    fill: '#2bc4aa',
    originX: 'center',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(text);

// text 2
var text2 = new fabric.IText('Be Everywhere', {
    left: (canvas.width / 2),
    top: 190,
    fontFamily: 'Belleza',
    fontSize: 67,
    fill: '#000',
    originX: 'center',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(text2);

// text 3
var text3 = new fabric.IText('Everyday', {
    left: (canvas.width / 2),
    top: 290,
    fontFamily: 'halimun',
    fontSize: 55,
    fill: '#fec300',
    originX: 'center',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(text3);

// text 4
var text4 = new fabric.IText('Be Original', {
    left: (canvas.width / 2),
    top: 380,
    fontFamily: 'Belleza',
    fontSize: 67,
    fill: '#000',
    originX: 'center',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(text4);



// bottom image
let bottomImage = document.getElementById('bottom_image');
bottomImage.addEventListener('input', function(){
    var imagelink2 = bottomImage.value;
// fabric function
    var bottomimage = imagelink2;
    var image2 = new Image();
    image2.onload = function (img2) {    
        var img2 = new fabric.Image(image2, {
            left: 50,
            top: 520,
            originX: 'center',
            lockRotation:true,
            lockMovementX:true,
            lockMovementY:true,
            lockScalingX : true,
            lockScalingY : true
        });
        canvas.add(img2);
    };
    image2.src = bottomimage;
// fabric function

});
