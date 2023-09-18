 var bulb = document.querySelector(".bulb")
 var btn = document.querySelector("button") 
 
 var flag=0
 
 btn.addEventListener("click",function(){
    if(flag ==0){  
          bulb.style.background='radial-gradient(rgb(252, 252, 0),rgb(247, 247, 77), rgb(255, 255, 255))'
          flag=1
        }
        else{ 
            bulb.style.background='transparent'
           flag=0
        }

 })

 //"radial-gradient(rgb(252, 252, 0),rgb(247, 247, 77), rgb(255, 255, 255));"