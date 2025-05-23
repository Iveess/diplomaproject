function searchArticles() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");
    const articles = document.querySelectorAll(".news-item, .review-item");
  
    resultsContainer.innerHTML = "";
  
    if (input.trim() === "") {
      resultsContainer.style.display = "none";
      return;
    }
  
    let matches = 0;
    articles.forEach(article => {
      const title = article.querySelector("h3");
      const link = article.querySelector("a");
  
      if (title && title.textContent.toLowerCase().includes(input)) {
        const resultItem = document.createElement("a");
        resultItem.href = link.href;
        resultItem.textContent = title.textContent;
        resultsContainer.appendChild(resultItem);
        matches++;
      }
    });
  
    resultsContainer.style.display = matches > 0 ? "block" : "none";
  }

// Після завантаження додаємо клас .fade-in до body
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

// При переході по посиланню — згасання
document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href);
    const isInternal = location.host === url.host;

    if (isInternal) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            document.body.classList.remove("fade-in");
            document.body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.accordion-header');

    items.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;

            header.classList.toggle('active');

            if (body.style.maxHeight) {
                body.style.maxHeight = null;
            } else {
                document.querySelectorAll('.accordion-body').forEach(b => b.style.maxHeight = null);
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });
});
