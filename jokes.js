{/*<div id="joke" class="joke">Awesome joke is loading...</div> */}
{/*            <button id="jokebtn" class="btn">Next JOKE</button> */}
// promises 
//GET https://icanhazdadjoke.com/j/<joke_id>


// const jokes=document.querySelector('#joke');
// const jokesbtn=document.querySelector('#jokebtn');
// const generatejokes=()=>{
//     const setheader={
//         headers:{
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/j/<joke_id>', setheader)
//     .then((res)=> res.json())
//         .then((data)=>{
//             jokes.innerHTML=data.joke;
//     }).catch((error)=>{
//         console.log(error); 
//     })
// }
// jokesbtn.addEventListener('click',generatejokes);

//using async and await

const jokes=document.querySelector('#joke');
const jokesbtn=document.querySelector('#jokebtn');
const generatejokes=async ()=>{
    try{
        const setheader={
            headers:{
                Accept:"application/json"
            }
        }
        const res= await fetch('https://icanhazdadjoke.com/j/<joke_id>', setheader);
        const data= await res.json();
        jokes.innerHTML=data.joke;
    }catch(err){
        console.log(err);
    }
}
jokebtn.addEventListener('click',generatejokes)