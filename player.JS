class Player {

    constructor(playerimg, x, y, w, h, xSpeed, ySpeed) {


        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;

        var playerimg = new Image();
        playerimg.src = 'sprites/player1.png'; //standerd sprite
        this.src = playerimg;
        if (shoot == true) {
            var playerimg = new Image();
            playerimg.src = 'sprites/player2.png'; //shooting sprite
            this.src = playerimg;

        }



    }
    draw() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    }
    move() {
        if (d && this.x < canvas.width - this.w) {
            playerXpos = playerXpos + playerXspeed;
            this.x = this.x + this.xSpeed;
        } // right move

        if (a && this.x > 0) {
            this.x = this.x - this.xSpeed;
            playerXpos = playerXpos - playerXspeed;
        } // left move

        if (w && this.y > 0) {
            this.y = this.y - this.ySpeed;
            playerYpos = playerYpos - playerYspeed;
        } //up move

        if (s && this.y < canvas.height - this.h) {
            this.y = this.y + this.xSpeed;
            playerYpos = playerYpos + playerYspeed;
        } //down move
    }

}