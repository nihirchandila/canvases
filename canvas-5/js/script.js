
var canvas = new fabric.Canvas('Canvas');

window.onload = function(){
    document.getElementById("top_image").value = "https://img.icons8.com/ios-filled/50/000000/quote-right.png";
}

// let color = document.getElementById('colorpicker');
// color.addEventListener('input', function(){
//     let bgcolor = color.value;
// //fabric function
//     var rect = new fabric.Rect({
//         width: 600,
//         height: 600,
//         top: 0,
//         left: 0,
//         fill: '#2BC4AA',
//         lockRotation:true,
//         lockMovementX:true,
//         lockMovementY:true,
//         lockScalingX : true,
//         lockScalingY : true
//     });
// canvas.add(rect);
// //fabric function
// })

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
    width: 550,
    height: 550,
    top: 25,
    left: 25,
    fill: '#00000000',
    stroke: "#fff",
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
    top: 100,
    fontFamily: 'Clicker Script',
    fontSize: 107,
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
    top: 220,
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
    top: 295,
    fontFamily: 'Clicker Script',
    fontSize: 107,
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
    top: 430,
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

// top image
let topImage = document.getElementById('top_image');
topImage.addEventListener('input', function(){
    var imagelink = topImage.value;
// fabric function
    var topimage = imagelink;
    var image1 = new Image();
    image1.onload = function (img1) {    
        var img1 = new fabric.Image(image1, {
            left: (canvas.width / 2),
            top: 50,
            originX: 'center',
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
            left: 540,
            top: 500,
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

