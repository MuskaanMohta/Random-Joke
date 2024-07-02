const joke = document.getElementById('joke');
const button = document.getElementById("button");
let api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let  getJoke=()=>{
    joke.classList.remove("fade")
    fetch(api)
    .then (data => data.json())
    .then (item=>{
        joke.textContent=`${item.joke}`
        joke.classList.add('fade')
    })
    
}
getJoke(api)