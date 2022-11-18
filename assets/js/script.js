var boy=$("#boy");
var idlImgNum=0;
var idlAnimationNum=0;

function idlAnimation() {
    idlImgNum = idlImgNum + 1;

    if (idlImgNum == 11) {
        idlImgNum = 1;
    }
    boy.src = "assets/images/Idle(" + idlImgNum + ").png";

}

function idlAnimationStart(){
    idlAnimationNum=setInterval(idlAnimation,200);
}