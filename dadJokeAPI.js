const getDadJoke= async()=>{
const config={headers:{accept:'application/json'}}
const res= await axios.get('https://icanhazdadjoke.com/',config)
return res.data.joke
}
const addNewJoke=async()=>{
    try{
    const jokeText= await getDadJoke()
    const newLI=document.createElement('LI')
newLI.append(jokeText)
jokes.append(newLI)
}
catch(e){
    return ("error",e)
}}
const jokes= document.querySelector('#jokes')
const button= document.querySelector('button')
button.addEventListener('click',addNewJoke)
