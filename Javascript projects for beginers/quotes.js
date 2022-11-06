(function()
{
    const quotes = [
        {quote: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"},
        {quote: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"},
        {quote: "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars"},
        {quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"},
    ];
    const btn = document.getElementById("generate-btn");
    btn.addEventListener("click",function(){
        let random  = Math.floor(Math.random()* quotes.length);
        console.log(random);
        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author
    });
})();

quotes[1].quote