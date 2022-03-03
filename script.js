const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

function generateJoke() {
  jokeEl.innerHTML = jokes[Math.floor(Math.random()*jokes.length)];
}
jokeBtn.addEventListener('click',generateJoke);

