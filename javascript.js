//set inital count
let count = 0;

//select values and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        if(count >= 10){
            document.getElementById('text').innerHTML = "DANGER!";
            document.body.style.fontSize ="70px";
            document.body.style.backgroundColor = "red";
            value.style.color = "black";
            
        }
        else if(count < 10){ 
            document.getElementById('text').innerHTML = "Clear";
            document.body.style.fontSize = "50px";   
            document.body.style.backgroundColor = "white";
            value.style.color = "green";
            
           
        }
        if(count < 0 ){
            document.getElementById("text").innerHTML = "Sinking...";
            document.body.style.backgroundColor = "aqua";
            value.style.color = "blue";
        }
        else if(count == 0){

            value.style.color = "black";
        }
        
        value.textContent = count;
    });
    
});