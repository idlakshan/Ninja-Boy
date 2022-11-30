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
    runAnimationNum=setInterval(runningNinja,80)
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
        if(boxAnimationId==0){
            boxAnimationId=setInterval(boxAnimation,100)
        }
    }
    if(keyCode==32){
        if (jumpAnimationNum==0){
            jumpAnimationStart();
        }
        if(moveBackgroundId==0){
            moveBackgroundId=setInterval(moveBackground,100)
        }
        if(boxAnimationId==0){
            boxAnimationId=setInterval(boxAnimation,100)
        }


    }

}
    var backgroundPositionX=0;
    var moveBackgroundId=0;

    var score=0;


function moveBackground(){
    backgroundPositionX=backgroundPositionX-20;
    $("#background").css({backgroundPositionX:backgroundPositionX+"px"});
    score=score+1;
    $("#nScore").html("Score : "+score);
    //document.getElementById("nScore").innerHTML=score;
    console.log(score)
}

/*--------------------character jumping---------------------------------------*/
var jumpImgNum=1;
var jumpAnimationNum=0;
var boyMarginTop=400;


function jumpNinja(){
    jumpImgNum=jumpImgNum+1;

    if(jumpImgNum<=6){
        boyMarginTop=boyMarginTop-45;
        boy.css({marginTop:boyMarginTop+"px"});
    }
    if(jumpImgNum>=7){
        boyMarginTop=boyMarginTop+45;
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
    jumpAnimationNum=setInterval(jumpNinja,140);

}

/*--------------------traffic---------------------------------------*/

var boxMarginLeft=1640;

function createBoxes() {


    for(var i = 0; i <= 10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id="box"+i;
        console.log(box.id)

        //boxMarginLeft = boxMarginLeft + 1000;

        if (i < 5) {
            boxMarginLeft = boxMarginLeft + 2000;
        }
        if (i >= 5) {
            boxMarginLeft = boxMarginLeft + 1000;

        }


    }
}
var boxAnimationId=0;

function boxAnimation(){

    for (var i=0;i<10;i++){
        var box=document.getElementById("box"+i);
        console.log(box);
        var currentMarginLeft=window.getComputedStyle(box).marginLeft;
        //console.log(currentMarginLeft)
        var newMarginLeft=parseInt(currentMarginLeft)-35;
        box.style.marginLeft=newMarginLeft+"px";

        if(newMarginLeft>=-110 & newMarginLeft <=100){
            if (boyMarginTop>300){
                clearInterval(boxAnimationId);

                clearInterval(runAnimationNum);
                runAnimationNum=-1;

                clearInterval(jumpAnimationNum);
                jumpAnimationNum=-1;

                clearInterval(moveBackgroundId);
                moveBackgroundId=-1

                deathAnimationNum=setInterval(deathNinja,100);

            }
        }

    }

}


/*--------------------Death Ninja---------------------------------------*/
var deathImgNum=1;
var deathAnimationNum=0

function deathNinja(){
        deathImgNum=deathImgNum+1;

        if(deathImgNum==11){
            deathImgNum=10;

        }

    boy.attr('src','assets/images/Dead('+deathImgNum+').png')
}


