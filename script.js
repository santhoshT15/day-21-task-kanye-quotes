const display = document.getElementById("quote");
const btn = document.getElementById("btn");

function getData () {
    fetch ("https://api.kanye.rest/")
    .then((result) => result.json())
    .then((data) => {
        display.innerHTML=`
            <h2 class="text-dark"> Quote</h2>
            <h1 id="dis">"${data.quote}"</h1> `
    })
    .catch((error) =>{
        console.log(error);
    });
}

btn.addEventListener("click",getData);