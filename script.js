const btn = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = ["« У меня нет мечты, у меня есть цель », - Харви Спектр",
"« Возможности не приходят сами — вы создаете их»,  — Крис Гроссер.",
"« Важно не то, сбили ли тебя с ног, — важно то, поднялся ли ты снова », — Винс Ломбарди.",
"«Я не потерпел неудачу. Я просто нашёл 10 тыс. вариантов, которые не работают »,  — Томас Эдисон.",
"« Никогда не отказывайся от того, о чем ты не можешь не думать каждый день » - Харви Спектр",
"« Я — не результат обстоятельств. Я — результат собственных решений »,  — Стивен Кови.",
"« Всегда выкладывайся на полную. Что посеешь — то и пожнешь »,  — Ог Мандино",
"« Когда вас приперли к стенке, просто сломайте ее к черту», - Харви Спектр"];

btn.addEventListener('click' , () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
par.style.display = "block";
    par.textContent = randomQuote;
    
})