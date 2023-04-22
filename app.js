const languageSelect = document.getElementById('language');
const magicBall = document.querySelector('.magic-ball');
const answer = document.getElementById('answer');
const audio = document.getElementById('audio');
audio.playbackRate = 2;

function shakeBall() {
    const answersEn = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "Outlook not so good.",
        "My sources say no.",
        "Very doubtful."
    ];
    const answersEs = [
        "Es cierto.",
        "Es decididamente así.",
        "Sin duda.",
        "Sí - definitivamente.",
        "Puedes contar con ello.",
        "Según mi punto de vista, sí.",
        "Probablemente.",
        "Las perspectivas son buenas.",
        "Sí.",
        "Todo apunta a que sí.",
        "Respuesta vaga, vuelve a intentarlo.",
        "Pregunta otra vez más tarde.",
        "Mejor no decirte ahora.",
        "No puedo predecirlo ahora.",
        "Concéntrate y pregunta de nuevo.",
        "No cuentes con ello.",
        "Las perspectivas no son buenas.",
        "Mis fuentes dicen que no.",
        "Muy dudoso."
    ];
    const language = languageSelect.value;
    let randomAnswer;
    magicBall.classList.add('shaker');
    audio.play();
    setTimeout(() => {
        magicBall.classList.remove('shaker');
        if (language === 'en') {
            randomAnswer = answersEn[Math.floor(Math.random() * answersEn.length)];
        } else if (language === 'es') {
            randomAnswer = answersEs[Math.floor(Math.random() * answersEs.length)];

        }
        answer.innerText = randomAnswer;
        speak(randomAnswer, language);
    }, 1000);
}

function speak(message, language) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = message;
    msg.lang = language === 'en' ? 'en-US' : 'es-ES';
    msg.rate = 0.8;
    speechSynthesis.speak(msg);
}

function changeLanguage() {
    const language = languageSelect.value;
    const optionsEn = [
        "English",
        "Shake the magic ball!",
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "Outlook not so good.",
        "My sources say no.",
        "Very doubtful."
    ];
    const optionsEs = [
        "Español",
        "¡Agita la bola mágica!",
        "Es cierto.",
        "Es decididamente así.",
        "Sin duda.",
        "Sí - definitivamente.",
        "Puedes contar con ello.",
        "Según mi punto de vista, sí.",
        "Probablemente.",
        "Las perspectivas son buenas.",
        "Sí.",
        "Todo apunta a que sí.",
        "Respuesta vaga, vuelve a intentarlo.",
        "Pregunta otra vez más tarde.",
        "Mejor no decirte ahora.",
        "No puedo predecirlo ahora.",
        "Concéntrate y pregunta de nuevo.",
        "No cuentes con ello.",
        "Las perspectivas no son buenas.",
        "Mis fuentes dicen que no.",
        "Muy dudoso."
    ];
    if (language === 'en') {
        magicBall.style.backgroundImage = "url('magic-ball.png')";
    } else if (language === 'es') {
        magicBall.style.backgroundImage = "url('magic-ball-es.png')";
    }
    document.title = "Magic 8 Ball - " + (language === 'en' ? 'English' : 'Español');
    languageSelect.options[0].innerText = optionsEn[0];
    languageSelect.options[1].innerText = optionsEs[0];
    magicBall.title = language === 'en' ? optionsEn[1] : optionsEs[1];
    answer.innerText = '';
}
