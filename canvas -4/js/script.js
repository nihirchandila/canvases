var canvas = new fabric.Canvas('Canvas');
var rect = new fabric.Rect({
    width: 600,
    height: 600,
    top: 0,
    left: 0,
    fill: '#2bc4aa',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(rect);

// for rect 2
var border = new fabric.Rect({
    width: 550,
    height: 550,
    top: 25,
    left: 25,
    bottom: 25,
    right: 25,
    fill: '#25a791',
    opacity: 1,
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(border);


// text 1
var text = new fabric.IText('-Business Name-', {
    left: (canvas.width / 2),    
    top: 130,
    fontFamily: 'Alex Brush',
    fontSize: 45,
    fill: '#000',
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
    top: 230,
    fontFamily: 'le jour',
    fontSize: 45,
    fill: '#fff',
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
    top: 300,
    fontFamily: 'le jour',
    fontSize: 45,
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
    top: 370,
    fontFamily: 'le jour',
    fontSize: 45,
    fill: '#fff',
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
            left: (canvas.width / 2),
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
