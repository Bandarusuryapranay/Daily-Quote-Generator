const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Success doesn't just find you. You have to go out and get it.", author: "Unknown" },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
];

const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const nextQuoteBtn = document.getElementById("next-quote-btn");

let currentIndex = -1;

function getRandomIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === currentIndex);
  return index;
}

function displayQuote() {
  currentIndex = getRandomIndex();
  const { text, author } = quotes[currentIndex];

  // Start fade out
  quoteTextEl.classList.remove("visible");
  quoteAuthorEl.classList.remove("visible");

  setTimeout(() => {
    quoteTextEl.textContent = text;
    quoteAuthorEl.textContent = `— ${author}`;

    // Fade in new quote
    quoteTextEl.classList.add("visible");
    quoteAuthorEl.classList.add("visible");
  }, 400);
}

// Initial quote load
window.addEventListener("load", displayQuote);
nextQuoteBtn.addEventListener("click", displayQuote);
