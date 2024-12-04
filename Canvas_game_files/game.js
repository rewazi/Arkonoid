let game = {
    start: function(){
        this.ctx = document.getElementsById("mycanvas").getContext("2d");
        let background = new Image();
        window.requestAnimationFrame(() =>{
            this.ctx.drawImage(background, 0, 0);
        });
    }
};
window.addEventListener("load", () =>{
    game.start();
});