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


// text 1
var text = new fabric.IText('Promotterr', {
    left: (canvas.width / 2),    
    top: 120,
    fontFamily: 'poppins',
    fontSize: 60,
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
    top: 200,
    fontFamily: 'poppins',
    fontSize: 60,
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
    top: 280,
    fontFamily: 'poppins',
    fontSize: 70,
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
    fontFamily: 'poppins',
    fontSize: 60,
    fill: '#fff',
    originX: 'center',
    lockRotation:true,
    lockMovementX:true,
    lockMovementY:true,
    lockScalingX : true,
    lockScalingY : true
});
canvas.add(text4);

// top image
let topImage = document.getElementById('top_image');
topImage.addEventListener('input', function(){
    var imagelink = topImage.value;
// fabric function
    var topimage = imagelink;
    var image1 = new Image();
    image1.onload = function (img1) {    
        var img1 = new fabric.Image(image1, {
            left: 25,
            top: 25,
            lockRotation:true,
            lockMovementX:true,
            lockMovementY:true,
            lockScalingX : true,
            lockScalingY : true
        });
        canvas.add(img1);
    };
    image1.src = topimage;
// fabric function

});

// bottom image
let bottomImage = document.getElementById('bottom_image');
bottomImage.addEventListener('input', function(){
    var imagelink2 = bottomImage.value;
// fabric function
    var bottomimage = imagelink2;
    var image2 = new Image();
    image2.onload = function (img2) {    
        var img2 = new fabric.Image(image2, {
            top: 500,
            left: 490,
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

// logo image
let logoImage = document.getElementById('logo_image');
logoImage.addEventListener('input', function(){
    var imagelink3 = logoImage.value;
// fabric function
    var logoimage = imagelink3;
    var image3 = new Image();
    image3.onload = function (img3) {    
        var img3 = new fabric.Image(image3, {
            top: 520,
            left: (canvas.width / 2),
            originX: 'center',
            lockRotation:true,
            lockMovementX:true,
            lockMovementY:true,
            lockScalingX : true,
            lockScalingY : true
        });
        canvas.add(img3);
    };
    image3.src = logoimage;
// fabric function
});