document.querySelectorAll('ul a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.section').forEach(div => div.style.display = 'none');
        const target = this.getAttribute('href').substring(1);
        document.getElementById(target).style.display = 'block';
    });
});

function RandomJoke(){
    var randomjokeText = document.getElementById("randomjokeText");
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => randomjokeText.innerHTML = data.setup + " - " + data.punchline)
    .catch(error => console.error('Error:', error));
}

function SearchByID(){
       
    var idjokeText = document.getElementById("IDjokeText");
    var jokeid = parseInt(document.getElementById("jokeid").value);

    fetch(`https://official-joke-api.appspot.com/jokes/${jokeid}`)
    .then(response => response.json())
    .then(data => idjokeText.innerHTML = data.setup + " - " + data.punchline)
    .catch(error => console.error('Error:', error));
}
function SearchByType(){

}