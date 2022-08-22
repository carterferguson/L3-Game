class Player {

constructor(x,y,w,h,xSpeed,ySpeed){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.xSpeed = xSpeed;
this.ySpeed = ySpeed;


if(q || shoot){
    var Firing = new Image();
    Firing.src = 'sprites/player2.png'; //shooting sprite
    document.body.appendChild(Firing);
this.src = Firing
}
else{
    var playerimg = new Image(w, h);
    playerimg.src = 'sprites/player1.png';
    document.body.appendChild(playerimg);
    this.src = playerimg;

}

}
draw(){
    canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);

}

move(){
    if (d && this.x < canvas.width - this.w) {
        this.x = this.x + this.xSpeed;
    } // right move

    if (a && this.x > 0) {
        this.x = this.x - this.xSpeed;
    } // left move

    if (w && this.y > 0) {
        this.y = this.y - this.ySpeed;
    } //up move

    if (s && this.y < canvas.height - this.h) {
        this.y = this.y + this.xypeed;
    } //down move


}

}