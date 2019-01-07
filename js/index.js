(function(){

  var data_url = 'https://csv-to-json.herokuapp.com/?x&csv=https://docs.google.com/spreadsheets/d/e/2PACX-1vQIe7t8zVGc7SaAdex3mD9CnzzwvHj64wF3_x8zTcNHOZBFQCv7yYt-LzQmE24ymjDQZ7b_DpLN0jdx/pub?output=csv';
  var newsArticlesSection = $('#news-articles');

  $.getJSON(data_url)
  .then((articles) => {
    newsArticlesSection.html('');
    articles.forEach(article => {
      newsArticlesSection.append(`
        <div class="list-item">
          <div class="item-content">
            <a
              class="govuk-link news-article-list-link" 
              href="article.html?id=${article.id}"
            >
              ${article.headline}
            </a>
          </div>
        </div>
      `);
    });
  });
})();