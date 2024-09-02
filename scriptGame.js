let imgs,count=1,index1,index2,div,ind,ind2,car1,card2,src1,src2,x;
let countGood=0; 
imgs=document.querySelectorAll(".hiddenPic");
let cards=document.querySelectorAll(".pics");
for(let i=0;i<cards.length;i++){
    cards[i].addEventListener("click",changePics);
}

// const imagw = requ

// console.log('hjkl');

function changePics(e){ 
switch (count) {
    case 1:
        index1=e.target.id;
        ind=index1.slice(3);
        imgs[+ind-1].style.display ='block';
        src1=imgs[+ind-1].src;
        count++;
        break;
    case 2:
        index2=e.target.id;
        ind2=index2.slice(3);
        imgs[+ind2-1].style.display='block';
        src2=imgs[+ind2-1].src;
        count++;
        break;
    case 3:
        if(src1==src2)
        {
        imgs[+ind-1].classList.remove() 
        imgs[+ind2-1].classList.remove()   
        alert("מצוין")
        countGood++;
        console.log(countGood);
             if(countGood==6){
            const gameMemoryContainer = document.getElementById("gameMemoryContainer");
            gameMemoryContainer.style.backgroundImage='url(תמונת רקע כוכבים.gif)';
             }
        }
        else{
         imgs[+ind-1].style.display ="none";
         imgs[+ind2-1].style.display ="none";
        }
        count=1;
    }
}
       
      
    
    
     
      


