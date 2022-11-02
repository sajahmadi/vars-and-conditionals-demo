/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has a better attack than Jamie Lannister");
}
else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lanister has a better attack than Jon Snow');
}else 
{
    console.log('Its a tie');
}
let JonSnowHealth = 100;
let JonSnowDefenese= 0;

//Jon snow gets attacked by Jamie
if(JonSnowHealth > jamieLannisterAttack){
    console.log('Jon Snow has been Slain!!!');
} else {
    //jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    JonSnowHealth = JonSnowHealth - jamieLannisterAttack;
    console.log("Jon Snow's health is down to ${JonSnowHealth}")
}
//One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit This health kit can raise Jons

let healthKit = 50;

if((JonSnowHealth + healthKit) > 100){
    JonSnowHealth = 100;
} else {
    JonSnowHealth += healthKit;
}
// jon snow....

let coinLandsHeads = false;

if(coinLandsHeads === true){
    console.log ('They countinue to fight and Jamie takes Jons head');
} else {
    console.log('Jon is allowed to run away');
}


for(let i=0; i<=5; i++){
    if(JonSnowHealth <= 100) {
        console.log('Jon Snow has been slain')
    } else {
        JonSnowHealth -= jamieLannisterAttack;
        console.log(`Jon Snows Health is ${jonSnowHealth}`)
    }

}