function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadBackground;
    car1_imgTag.src = background_image;
    
     car2_imgTag = new Image();
    car2_imgTag.onload = uploadBackground;
    car2_imgTag.src = background_image;
}