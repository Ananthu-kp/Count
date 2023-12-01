let count=0;

const value=document.querySelector('#value');
const btn=document.querySelectorAll(".btn");

btn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const styles=e.currentTarget.classList;
        if(styles.contains('-')){
            count--;
        }
        else if(styles.contains('+')){
            count++;
        }

        
        if(count >0){
            value.style.color="green";
        }
        if(count <0){
            value.style.color="red";
        }
        if(count === 0){
            value.style.color="black"
        }
        value.textContent=count;
    })
})