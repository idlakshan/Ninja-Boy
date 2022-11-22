var boy=$("#boy");
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


