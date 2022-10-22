const Choice = JSON.parse(localStorage.getItem("Choice")) || [];
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 100000);
let btnExit = document.getElementById("Exit")




let wheel = document.getElementById("wheel")
let elements = document.querySelectorAll('#wheel');
console.log()


const addDIV = () =>{
   let data = []
   try{
      if(Choice !== null){
         Choice.forEach(obj => {
            Object.entries(obj).forEach(([_,value]) => {
                data.push(value)
               });
            });  
   
         for (let i = 0; i < data.length ; i++) {
              elements[i].innerHTML = data[i]
         }}}
   catch(console){
   }
}

addDIV()

btn.onclick = spin = (e)=>{
   e.preventDefault()
   console.log("spin started");
   container.style.transform = "rotate(" + number + "deg)";
   number += Math.ceil(Math.random() * 100000)
};

btnExit = Exit = (e) =>{
   e.preventDefault();
   window.localStorage.removeItems("Choice");
}






