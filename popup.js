document.addEventListener('DOMContentLoaded', async () => {
    const jokes = document.getElementById('jokes');
    const url = 'https://official-joke-api.appspot.com/random_ten'

    try {
        const res= await fetch(url);
        const data = await res.json();
        const jokesHTML = data.map(joke => {
            const setup = joke.setup;
            const punchLine = joke.punchline;
            return `<li class = "joke-view">
                        <h3 class = "setup">${setup}</h3>
                        <h3 class = "punchline">-${punchLine}</h3>
                    </li>`
        }).join('');
        jokes.innerHTML = jokesHTML;
    } catch (err) {
        console.log(err);
    }
});