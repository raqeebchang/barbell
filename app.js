'use strict';

let parent = document.getElementById("result");



function getInput(){
    let inputVal = document.getElementById("weights").value;
    if(inputVal<50){
        return;
    }
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    let answer = document.createElement("div");
    answer.setAttribute("id", "answer");
    answer.appendChild(calculate(inputVal));
    parent.appendChild(answer);
}

function calculate(x){
    let sentence = "";
    let minusBar = x-45;
    let oneSide = minusBar/2;
    let plate45 = 0; 
    let remainder = 0;
    let plate35 = 0;
    let plate25 = 0;
    let plate10 = 0;
    let plate5 = 0;
    let plate2 = 0;

    plate45 = Math.floor(oneSide/45);
    remainder = oneSide%45;
    if(remainder>=35){
        plate35 = Math.floor(remainder/35);
        remainder = remainder%35;         
    }
    if(remainder>=25){
        plate25 = Math.floor(remainder/25);
        remainder = remainder%25;
    }
    if(remainder>=10){
        plate10 = Math.floor(remainder/10);
        remainder = remainder%10;
    }
    if(remainder>=5){
        plate5=Math.floor(remainder/5);
        remainder = remainder%5;
    }
    if(remainder>=2.5){
        plate2 = Math.floor(remainder/2.5);
   }    
    sentence="45:" + plate45 + 
    " 35:" + plate35 + " 25:" + plate25 + " 10:" + plate10 + " 5:"+ plate5 + " 2.5:" + plate2;

   let calculations = document.createElement("p");
   let introduction = document.createTextNode("In order to lift "+x+ " pounds, you will need to put: ");
   calculations.setAttribute("id","calc");
   calculations.appendChild(introduction);
   let info = document.createElement("p");
   info.setAttribute("id", "info");
   if(plate45>0){
       let plate = "plate";
       if(plate45>1){
           plate="plates";
       }
       let fortyfive = document.createTextNode(plate45+" : 45 pound "+plate);
       info.appendChild(fortyfive);
       let brk = document.createElement("br");
       info.appendChild(brk);
   }
   if(plate35>0){
        let plate = "plate";
        if(plate35>1){
            plate="plates";
        }
        let thirtyfive = document.createTextNode(plate35+" : 35 pound "+plate);
        info.appendChild(thirtyfive);
        let brk = document.createElement("br");
        info.appendChild(brk);
   }
   if(plate25>0){
        let plate = "plate";
        if(plate25>1){
            plate="plates";
        }
        let twentyfive = document.createTextNode(plate25+" : 25 pound "+plate);
        info.appendChild(twentyfive);
        let brk = document.createElement("br");
        info.appendChild(brk);
   }
   if(plate10>0){
        let plate = "plate";
        if(plate10>1){
            plate="plates";
        }
        let ten = document.createTextNode(plate10+" : 10 pound "+plate);
        info.appendChild(ten);
        let brk = document.createElement("br");
        info.appendChild(brk);
    }
    if(plate5>0){
        let plate = "plate";
        if(plate5>1){
            plate="plates";
        }
        let five = document.createTextNode(plate5+" : 5 pound "+plate);
        info.appendChild(five);
        let brk = document.createElement("br");
        info.appendChild(brk);
    }
    if(plate2>0){
        let plate = "plate";
        if(plate2>1){
            plate="plates";
        }
        let two = document.createTextNode(plate2+" : 2.5 pound "+plate);
        info.appendChild(two);
        let brk = document.createElement("br");
        info.appendChild(brk);
    }
    let conclusion = document.createTextNode(" on each side");
    calculations.appendChild(info);
    calculations.appendChild(conclusion);

    //TODO: keep going down thru list of plates
    return(calculations);
}
