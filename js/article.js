(function(){

    var data_url = 'https://csv-to-json.herokuapp.com/?csv=https://docs.google.com/spreadsheets/d/e/2PACX-1vQIe7t8zVGc7SaAdex3mD9CnzzwvHj64wF3_x8zTcNHOZBFQCv7yYt-LzQmE24ymjDQZ7b_DpLN0jdx/pub?output=csv';
    var newsArticlesSection = $('#news-article');
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
  
    $.getJSON(data_url)
    .then((articles) => {
      articles.forEach(article => {
        if (article.id == articleId) {
          newsArticlesSection.html(`
          <h1 class="govuk-heading-xl">${article.headline}</h1>
          <img src="${article.image_url}" alt="News Article Image">
          <p class="govuk-body">${article.content}</p>
          <p class="govuk-body-s">${article.published_date}</p>
          `);
          return;
        }
        
      });
    });
  })();