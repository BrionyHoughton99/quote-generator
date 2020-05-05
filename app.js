const endpoint = "https://type.fit/api/quotes";

let quotes = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => quotes.push(...data));

  generateQuote = () => {
      let random = Number.parseInt(Math.random()*quotes.length + 1);
      
    document.querySelector('#quoteOutput').textContent = `\"${quotes[random].text}\"`;
    document.querySelector('#authorOutput').textContent = `-${quotes[random].author}`;

  }