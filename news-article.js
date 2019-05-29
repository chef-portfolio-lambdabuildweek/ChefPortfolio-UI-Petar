// const apiKey = '7f65a98cdbf1496088f8cb61e23fd2e8';
// const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// export {
//   apiKey,
//   topHeadlinesUrl,
// };

// const articles = [{
//   source: {
//     id: 'techradar',
//     name: 'TechRadar',
//   },
//   author: 'Anthony Perridge',
//   title: 'Cyber threat intelligence: the key to trust and security for the digital finance world',
//   description: "ThreatQuotient's Anthony Perridge explains how IT teams can stay a step ahead of cybercriminals by leveraging cyber threat intelligence.",
//   url: 'https://www.techradar.com/news/cyber-threat-intelligence-the-key-to-trust-and-security-for-the-digital-finance-world',
//   urlToImage: 'https://cdn.mos.cms.futurecdn.net/gaGNk35XKYpmpPGJq8v2tU-1200-80.jpg',
//   publishedAt: '2019-05-29T09:30:42Z',
//   content: 'In 2017, the value per Bitcoin reached over €20,000 (£17,324) - a climax in the hype surrounding the cryptocurrency. However, confidence has been lacking for the price to remain stable. To date, online currencies are more speculation than real means of paymen… [+7379 chars]',
// },


// {
//   source: {
//     id: 'techradar',
//     name: 'TechRadar',
//   },
//   author: 'Anthony Perridge',
//   title: 'Cyber threat intelligence: the key to trust and security for the digital finance world',
//   description: "ThreatQuotient's Anthony Perridge explains how IT teams can stay a step ahead of cybercriminals by leveraging cyber threat intelligence.",
//   url: 'https://www.techradar.com/news/cyber-threat-intelligence-the-key-to-trust-and-security-for-the-digital-finance-world',
//   urlToImage: 'https://cdn.mos.cms.futurecdn.net/gaGNk35XKYpmpPGJq8v2tU-1200-80.jpg',
//   publishedAt: '2019-05-29T09:30:42Z',
//   content: 'In 2017, the value per Bitcoin reached over €20,000 (£17,324) - a climax in the hype surrounding the cryptocurrency. However, confidence has been lacking for the price to remain stable. To date, online currencies are more speculation than real means of paymen… [+7379 chars]',
// },

// {
//   source: {
//     id: 'techradar',
//     name: 'TechRadar',
//   },
//   author: 'Anthony Perridge',
//   title: 'Cyber threat intelligence: the key to trust and security for the digital finance world',
//   description: "ThreatQuotient's Anthony Perridge explains how IT teams can stay a step ahead of cybercriminals by leveraging cyber threat intelligence.",
//   url: 'https://www.techradar.com/news/cyber-threat-intelligence-the-key-to-trust-and-security-for-the-digital-finance-world',
//   urlToImage: 'https://cdn.mos.cms.futurecdn.net/gaGNk35XKYpmpPGJq8v2tU-1200-80.jpg',
//   publishedAt: '2019-05-29T09:30:42Z',
//   content: 'In 2017, the value per Bitcoin reached over €20,000 (£17,324) - a climax in the hype surrounding the cryptocurrency. However, confidence has been lacking for the price to remain stable. To date, online currencies are more speculation than real means of paymen… [+7379 chars]',
// },
// {
//   source: {
//     id: 'techradar',
//     name: 'TechRadar',
//   },
//   author: 'Anthony Perridge',
//   title: 'Cyber threat intelligence: the key to trust and security for the digital finance world',
//   description: "ThreatQuotient's Anthony Perridge explains how IT teams can stay a step ahead of cybercriminals by leveraging cyber threat intelligence.",
//   url: 'https://www.techradar.com/news/cyber-threat-intelligence-the-key-to-trust-and-security-for-the-digital-finance-world',
//   urlToImage: 'https://cdn.mos.cms.futurecdn.net/gaGNk35XKYpmpPGJq8v2tU-1200-80.jpg',
//   publishedAt: '2019-05-29T09:30:42Z',
//   content: 'In 2017, the value per Bitcoin reached over €20,000 (£17,324) - a climax in the hype surrounding the cryptocurrency. However, confidence has been lacking for the price to remain stable. To date, online currencies are more speculation than real means of paymen… [+7379 chars]',
// },
// ];

// const placeholder = document.querySelector('.articles-list');
// console.log(placeholder);

// const element = document.createElement('p');

// element.textContent = 'hello there';

// placeholder.append(element);


class NewsArticle extends HTMLElement {
  //   constructor() {
  //     super();
  //     this.root = this.attachShadow({
  //       mode: 'open',
  //     });
  //   }

  set recipe(recipe) {
    this.innerHTML = `
           <div class="an-article">  
            <a href="${recipe.f2f_url}">
              <h2>${recipe.title}</h2>
              <div class="image-container">
              <img src="${recipe.image_url ? recipe.image_url : ''}">
              </div>
              <p>${recipe.publisher}</p>
            </a>
            </div>`;
  }
}

customElements.define('news-article', NewsArticle);
