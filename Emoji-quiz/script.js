'use strict';
/* Create a counter */
let i=0;
/* Import all btn & create img element */
let imgDiv=document.querySelector(".main-img");
let btn1= document.querySelector(".btn-1");
let btn2= document.querySelector(".btn-2");
let btn3= document.querySelector(".btn-3");
let img=document.createElement("img");
imgDiv.appendChild(img);
let userPoints=document.querySelector(".user-points-h3");
const winSound= new Audio('win-sound.wav');
const lostSound= new Audio('lost-sound.mp3');
userPoints.innerText= i;
let btnCheck=[


];

btnCheck[0] = btn1.innerHTML;
btnCheck[1]= btn2.innerHTML;
btnCheck[2]= btn3.innerHTML;


const emojiDb={
    emojis:[
        {
            img: 'life-of-pi.png',
            answers:[
                'Life of Pi',
                'Robinson Crusoe',
                'Lost',
            ],
            rightAnswer: 'Life of Pi',
        },
        {
            img: 'ET.png',
            answers:[
                'Alien vs Predator',
                'E.T',
                'Stranger Things',
            ],
            rightAnswer:'E.T',
        },
        {
            img:'titanic.png',
            answers:[
                '2012',
                'Titanic',
                'On deck',
            ],
            rightAnswer:'Titanic',

        },
        {
            img:'the-ring.png',
            answers:[
                'The Ring',
                'Scream',
                'Ghost',
            ],
            rightAnswer:'The Ring',

        },
        {
            img:'Pearl-Harbour.png',
            answers:[
                'WW2',
                'Pearl-Harbour',
                'IT',
            ],
            rightAnswer:'Pearl-Harbour',

        },
        {
            img:'IT.png',
            answers:[
                'Evil-clown',
                'Ghost',
                'IT',
            ],
            rightAnswer:'IT',

        },
        {
            img:'jaws.png',
            answers:[
                'Shark-attack',
                'Jaws',
                'Free-willy',
            ],
            rightAnswer:'Jaws',

        },
        {
            img:'up.png',
            answers:[
                'Up',
                'Life',
                'Free-willy',
            ],
            rightAnswer:'Up',

        },
    ]
}

let btnAnswer1 =btn1.innerHTML;
let btnAnswer2 = btn2.innerHTML;
let btnAnswer3 =btn3.innerHTML;
let points=0;




function newPic() {
    img.setAttribute("src",emojiDb.emojis[i].img);
}
if (emojiDb.emojis.length>i){
/* Funktion för att ladda in dom olika svaren på knapparna */
function  loadNewBtn(i) {
    btn1.innerText="";
    btn2.innerText="";
    btn3.innerText="";
    newPic();
    btn1.innerText=emojiDb.emojis[i].answers[0];
    btn2.innerText=emojiDb.emojis[i].answers[1];
    btn3.innerText=emojiDb.emojis[i].answers[2];

    btnCheck[0] = btn1.innerHTML;
    btnCheck[1]= btn2.innerHTML;
    btnCheck[2]= btn3.innerHTML;
}
loadNewBtn(i);
console.log(emojiDb.emojis.length , i);


    btn1.addEventListener("click", function(x) {
        if (btnCheck[0]===emojiDb.emojis[i].rightAnswer) {
            winSound.play();
            points++;
            i++;
            userPoints.innerText= i;
            loadNewBtn(i);
        }else{
            lostSound.play();
            points--;
            userPoints.innerText= i;
        }
    });
    btn2.addEventListener("click", function(x) {
        if (btnCheck[1]===emojiDb.emojis[i].rightAnswer) {
        winSound.play();
        points++;
        i++;
        userPoints.innerText= i;
        loadNewBtn(i);
        console.log(i);

        }else{
            lostSound.play();
            points--;
            userPoints.innerText= i;
        }
    });
    btn3.addEventListener("click", function(x) {
        if (btnCheck[2]===emojiDb.emojis[i].rightAnswer) {
            winSound.play();
            points++;
            i++;
            userPoints.innerText= i;
            loadNewBtn(i);
        }else{
            lostSound.play();
            points--;
            userPoints.innerText= i;
        }
    });
}else{
    function endOfEmoji (i){
    
    }
    endOfEmoji();
};



/* To-do  */
/* Göra en avslutfunktion som visar upp poängen samt ger användaren 
en möjlighet att reseta spelet.  */

