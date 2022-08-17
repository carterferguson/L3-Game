class Player {
constructor(src,x,y,w,h,xSpeed,ySpeed){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.src = src;
this.xSpeed = xSpeed;
this.ySpeed = ySpeed;



}
drawimg(){
    canvasContext.drawImage(src, x, y, w, h);

}

move(){
    if (d && playerXpos < canvas.width - playerSize) {
        playerXpos += playerXspeed;
    } // right move

    if (a && playerXpos > 0) {
        playerXpos -= playerXspeed;
    } // left move

    if (w && playerYpos > 0) {
        playerYpos -= playerYspeed;
    } //up move

    if (s && playerYpos < canvas.height - playerSize) {
        playerYpos += playerYspeed;
    } //down move


}

}