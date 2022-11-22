var boy=$("#boy");

/*--------------------character breathing---------------------------------------*/
var idlImgNum=0;
var idlAnimationNum=0;

function breathingNinja(){
    idlImgNum = idlImgNum + 1;

    if (idlImgNum == 11) {
        idlImgNum = 1;
    }

   // boy.src='assets/images/Idle('+idlImgNum+').png';
    boy.attr('src','assets/images/Idle('+idlImgNum+').png')
   // $("#boy").attr('src','assets/images/Idle('+idlImgNum+').png')


}
 function breathStart(){
     idlAnimationNum=setInterval(breathingNinja,200)
 }

/*--------------------character running---------------------------------------*/
var runImgNum=0;
var runAnimationNum=0;


function runningNinja(){
    runImgNum=runImgNum+1;

    if (runImgNum == 11) {
        runImgNum  = 1;
    }

    boy.attr('src','assets/images/Run('+runImgNum+').png')
}

function runAnimationStart(){
    runAnimationNum=setInterval(runningNinja,120)
    clearInterval(idlAnimationNum)

}


function keyCheck(event){
    //alert(event.which)
   // enter=13
    var keyCode=event.which
    if(keyCode==13){
        if (runAnimationNum==0){
            runAnimationStart();
        }
    }
    if(moveBackgroundId==0){
        moveBackgroundId=setInterval(moveBackground,100)
    }
}
    var backgroundPositionX=0;
    var moveBackgroundId=0;

function moveBackground(){
    backgroundPositionX=backgroundPositionX-20;
    $("#background").css({backgroundPositionX:backgroundPositionX+"px"})
}