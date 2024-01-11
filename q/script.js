let button= document.querySelectorAll("#buttons");
let newgame = document.querySelector("#restart");



let turn =true;
let winning =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const enable =()=>{
    let turn =true;
    aa();

}
let aa= ()=>{
    for (const boxx of button) {
        boxx.disabled = false;
        boxx.innerHTML ="";

        
    }
}
newgame.addEventListener("click",enable)
button.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box is clicked");
        if (turn) {
            box.innerHTML = "O"
            turn = false
            
            
        } else {
            box.innerHTML ="X";
            turn =true
            
        }
        box.disabled =true ;
      winningpattern()
        

    })
})


 
const winningpattern = () =>{
    for (const patterns of winning) {
        let a = button[patterns[0]].innerHTML;
        let b = button[patterns[1]].innerHTML;
        let c = button[patterns[2]].innerHTML;

        if (a!= "" && b!= "" && c!="") {
            if(a===b && b===c){
                console.log("winner",a);
                
                
                
                
                
            }
            
        }
        
    }
}