const vanya=document.querySelector('.vanya');
let click1000Audio=document.querySelector('.bits1000');
let reached1000=false;
let click10000Audio=document.querySelector('.bits10000');
let reached10000=false;
let counter=document.querySelector('.counter__all');
let counterPerSecond=document.querySelector('.counter__perSecond');
let cursorCount=document.querySelector('.cursor__counter');
let schoolCount=document.querySelector('.school__counter');
let lmCount=document.querySelector('.LM__counter');
let stickCount=document.querySelector('.stick__counter');
let hookahCount=document.querySelector('.hookah__counter');
let schoolPrice=document.querySelector('.school__price');
let cursorPrice=document.querySelector('.cursor__price');
let lmPrice=document.querySelector('.LM__price');
let stickPrice=document.querySelector('.stick__price');
let hookahPrice=document.querySelector('.hookah__price');
let lm=document.querySelector('.LM');
let whistle=document.querySelector('.whistle');
let stick=document.querySelector('.stick');
let hookah=document.querySelector('.hookah');
let whistlePrice=document.querySelector('.whistle__price');
let whistleCount=document.querySelector('.whistle__counter');
let counterNumber=0;
let school=document.querySelector('.school');
let schoolBought=false;
let cursorBought=false;
let lmBought=false;
let whistleBought=false;
let stickBought=false;
let hookahBought=false;
let schoolCost=450;
let cursorCost=50;
let lmCost=100;
let hookahCost=170;
let whistleCost=200;
let stickCost=330;
let clickMultiplier=30;
let cursorPerSecond=0.2;
let lmPerSecond=0.5;
let hookahPerSecond=1.1;
let whistlePerSecond=1.7;
let stickPerSecond=3;
let schoolPerSecond=4;
let bitsPerSecond=0;
let schoolCounter=0;
let cursorCounter=0;
let lmCounter=0;
let whistleCounter=0;
let stickCounter=0;
let hookahCounter=0;
let cursor=document.querySelector('.cursor');
school.addEventListener('click',buySchool);
cursor.addEventListener('click',buyCursor);
lm.addEventListener('click',buyLm);
whistle.addEventListener('click',buyWhistle);
hookah.addEventListener('click',buyHookah);
stick.addEventListener('click',buyStick);
vanya.addEventListener('mousedown',click);
vanya.addEventListener('mouseup',clickEffects);
schoolPrice.innerHTML='School price:'+schoolCost;
cursorPrice.innerHTML='Cursor price:'+cursorCost;
lmPrice.innerHTML='LM price:'+lmCost;
whistlePrice.innerHTML='Whistle price:'+whistleCost;
stickPrice.innerHTML='Stick price:'+stickCost;
hookahPrice.innerHTML='Hookah price:'+hookahCost;


function click() {
    vanya.style.boxShadow="0 0 10px 5px";
    counterNumber+=clickMultiplier;
    counter.innerHTML=counterNumber.toFixed(0)+' bits';
}

function clickEffects() {
    vanya.style.boxShadow="";
}
setInterval(function () {
        schoolPrice.innerHTML='School price:'+Math.round(schoolCost);
        cursorPrice.innerHTML='Cursor price:'+Math.round(cursorCost);
        lmPrice.innerHTML='LM price:'+Math.round(lmCost);
        whistlePrice.innerHTML='Whistle price:'+Math.round(whistleCost);
        stickPrice.innerHTML='Stick price:'+Math.round(stickCost);
        hookahPrice.innerHTML='Hookah price:'+Math.round(hookahCost);
        addBitsPerSecond();
        console.log(whistlePerSecond + 'свисток');
        console.log(schoolPerSecond+'школа');
        console.log(stickPerSecond+'палка');
        console.log(lmPerSecond+'lb');
        console.log(cursorPerSecond+'курсор');
        console.log(counterNumber+'всего');
        console.log(bitsPerSecond+'всего за секунду');
},1000);


function buyLm() {
    if (counterNumber>=lmCost){
        counter.innerHTML=counterNumber-lmCost+' bits';
        counterNumber-=lmCost;
        lmCounter+=1;
        bitsPerSecond+=lmPerSecond;
        lmPerSecond+=lmPerSecond/6;
        lmBought=true;
        lmCount.innerHTML=lmCounter;
        lmCost+=lmCost/3;
    }
}

function buyHookah() {
    if (counterNumber>=hookahCost){
        counter.innerHTML=counterNumber-hookahCost+' bits';
        counterNumber-=hookahCost;
        hookahCounter+=1;
        bitsPerSecond+=hookahPerSecond;
        hookahPerSecond+=hookahPerSecond/6;
        hookahBought=true;
        hookahCount.innerHTML=hookahCounter;
        hookahCost+=hookahCost/3;
    }
}


function buySchool() {
    if (counterNumber>=schoolCost){
         counter.innerHTML=counterNumber-schoolCost+' bits';
         counterNumber-=schoolCost;
         schoolCounter+=1;
         bitsPerSecond+=schoolPerSecond;
         schoolPerSecond+=schoolPerSecond/6;
         schoolBought=true;
         schoolCount.innerHTML=schoolCounter;
         schoolCost+=schoolCost/3;
    }
}

//
function addBitsPerSecond() {
    counterNumber+=bitsPerSecond;
    counter.innerHTML=counterNumber.toFixed(0)+' bits';
    counterPerSecond.innerHTML='Per second:'+bitsPerSecond.toFixed(1);
}

function buyCursor() {
    if (counterNumber>=cursorCost){
        counter.innerHTML=counterNumber-cursorCost+' bits';
        counterNumber-=cursorCost;
        bitsPerSecond+=cursorPerSecond;
        cursorPerSecond+=cursorPerSecond/6;
        cursorBought=true;
        cursorCounter+=1;
        cursorCount.innerHTML=cursorCounter;
        cursorCost+=cursorCost/3;
    }
}


function buyWhistle() {
    if (counterNumber>=whistleCost){
        counter.innerHTML=counterNumber-whistleCost+' bits';
        counterNumber-=whistleCost;
        bitsPerSecond+=whistlePerSecond;
        whistlePerSecond+=whistlePerSecond/6;
        whistleBought=true;
        whistleCounter+=1;
        whistleCount.innerHTML=whistleCounter;
        whistleCost+=whistleCost/3;
    }
}

function buyStick() {
    if (counterNumber>=stickCost){
        counter.innerHTML=counterNumber-stickCost+' bits';
        counterNumber-=stickCost;
        bitsPerSecond+=stickPerSecond;
        stickPerSecond+=stickPerSecond/6;
        stickBought=true;
        stickCounter+=1;
        stickCount.innerHTML=stickCounter;
        stickCost+=stickCost/3;
    }
}

let cursorPanel=document.querySelector('.cursor__panel');
let lmPanel=document.querySelector('.LM__panel');
let whistlePanel=document.querySelector('.whistle__panel');
let schoolPanel=document.querySelector('.school__panel');
let stickPanel=document.querySelector('.stick__panel');
let hookahPanel=document.querySelector('.hookah__panel');
setInterval(enoughMoneyForCursor,100);
setInterval(enoughMoneyForLm,100);
setInterval(enoughMoneyForWhistle,100);
setInterval(enoughMoneyForSchool,100);
setInterval(enoughMoneyForStick,100);
setInterval(enoughMoneyForHookah,100);

function enoughMoneyForCursor() {
    if (counterNumber >= cursorCost) {
        cursorPanel.style.opacity = "1";
        cursorPanel.style.color = "green";
    } else if (counterNumber < cursorCost) {
        cursorPanel.style.opacity = "0.5";
        cursorPanel.style.color = "red";
    }
}

    function enoughMoneyForLm() {
        if (counterNumber >= lmCost) {
            lmPanel.style.opacity = "1";
            lmPanel.style.color = "green";
        } else if (counterNumber < lmCost) {
            lmPanel.style.opacity = "0.5";
            lmPanel.style.color = "red";
        }
    }


function enoughMoneyForWhistle() {
    if (counterNumber >= whistleCost) {
        whistlePanel.style.opacity = "1";
        whistlePanel.style.color = "green";
    } else if (counterNumber < whistleCost) {
        whistlePanel.style.opacity = "0.5";
        whistlePanel.style.color = "red";
    }
}



function enoughMoneyForSchool() {
    if (counterNumber >= schoolCost) {
        schoolPanel.style.opacity = "1";
        schoolPanel.style.color = "green";
    } else if (counterNumber < schoolCost) {
        schoolPanel.style.opacity = "0.5";
        schoolPanel.style.color = "red";
    }
}

function enoughMoneyForStick() {
    if (counterNumber >= stickCost) {
        stickPanel.style.opacity = "1";
        stickPanel.style.color = "green";
    } else if (counterNumber < stickCost) {
        stickPanel.style.opacity = "0.5";
       stickPanel.style.color = "red";
    }
}

function enoughMoneyForHookah() {
    if (counterNumber >= hookahCost) {
        hookahPanel.style.opacity = "1";
        hookahPanel.style.color = "green";
    } else if (counterNumber < hookahCost) {
        hookahPanel.style.opacity = "0.5";
        hookahPanel.style.color = "red";
    }
}
setInterval(function kek () {
    if(counterNumber>=1000&&reached1000===false){
        click1000Audio.play();
        reached1000=true;
    }
},10);

setInterval(function kek () {
    if(counterNumber>=10000&&reached10000===false){
        click10000Audio.play();
        reached10000=true;
    }
},10);
