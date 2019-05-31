class NewsArticle extends HTMLElement {
  set article(article) {
    this.innerHTML = `
           <div class="an-article">  
            <a href="${article.url}">
              <h2>${article.title}</h2>
              <div class="image-container">
              <img src="${article.urlToImage ? article.urlToImage : ''}">
              </div>
              <p>${article.description}</p>
            </a>
            </div>`;
  }
}

customElements.define('news-article', NewsArticle);
  