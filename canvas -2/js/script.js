var canvas = new fabric.Canvas('Canvas');
var rect = new fabric.Rect({
    width: 600,
    height: 600,
    top: 0,
    left: 0,
    fill: '#2BC4AA',
    
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(rect);

// for border
var border = new fabric.Rect({
    width: 590,
    height: 590,
    top: 3,
    left: 3,
    bottom: 3,
    right: 3,
    fill: '#00000000',
    stroke: "yellow",
    strokeWidth: 4,
    opacity: 1,
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(border);

// text 1
var text = new fabric.IText('Promotterr', {
    left: (canvas.width / 2),    
    top: 120,
    fontFamily: 'halimun',
    fontSize: 55,
    fill: '#fff',
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
    fill: '#fff',
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
            left: 540,
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
