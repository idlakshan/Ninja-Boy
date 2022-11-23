var boy=$("#boy");

/*--------------------character breathing---------------------------------------*/
var idlImgNum=1;
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
var runImgNum=1;
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
    //enter=13
    //space=32

    var keyCode=event.which
    if(keyCode==13){
        if (runAnimationNum==0){
            runAnimationStart();
        }
        if(moveBackgroundId==0){
            moveBackgroundId=setInterval(moveBackground,100)
        }
    }
    if(keyCode==32){
        if (jumpAnimationNum==0){
            jumpAnimationStart();
        }
        if(moveBackgroundId==0){
            moveBackgroundId=setInterval(moveBackground,100)
        }


    }

}
    var backgroundPositionX=0;
    var moveBackgroundId=0;

function moveBackground(){
    backgroundPositionX=backgroundPositionX-20;
    $("#background").css({backgroundPositionX:backgroundPositionX+"px"})
}

/*--------------------character jumping---------------------------------------*/
var jumpImgNum=1;
var jumpAnimationNum=0;
var boyMarginTop=350;


function jumpNinja(){
    jumpImgNum=jumpImgNum+1;

    if(jumpImgNum<=6){
        boyMarginTop=boyMarginTop-40;
        boy.css({marginTop:boyMarginTop+"px"});
    }
    if(jumpImgNum>=7){
        boyMarginTop=boyMarginTop+40;
        boy.css({marginTop:boyMarginTop+"px"});
    }

    if(jumpImgNum==11){
        jumpImgNum=1;
        clearInterval(jumpAnimationNum);
        jumpAnimationNum=0;
        runImgNum=0;
        runAnimationStart();
    }


    boy.attr('src','assets/images/Jump('+jumpImgNum+').png')
}


function jumpAnimationStart(){
    clearInterval(idlAnimationNum);
    runImgNum=0;
    clearInterval(runAnimationNum);
    jumpAnimationNum=setInterval(jumpNinja,100);

}

/*--------------------traffic---------------------------------------*/

var boxMarginLeft=500;

function createBoxes() {

    for (var i = 0; i <= 10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";

        //boxMarginLeft = boxMarginLeft + 1000;

        if (i < 5) {
            boxMarginLeft = boxMarginLeft + 500;
        }
        if (i >= 5) {
            boxMarginLeft = boxMarginLeft + 250;

        }
        /*  $("<div/>",{
                         "class":"box",
                     }).appendTo("#background")

                     $(".box").css({marginLeft:boxMarginLeft+"px"});

                     boxMarginLeft=boxMarginLeft+500;*/


        //boxMarginLeft=boxMarginLeft+500;
        /* if (i<5){
             boxMarginLeft=boxMarginLeft+500;
         }
         if (i>=5){
             boxMarginLeft=boxMarginLeft+250;
         }*/


    }
}