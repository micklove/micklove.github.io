
(function () {
  let trelloBaseUrl = "https://trello.com/add-card?source=github.com&mode=popup&url=https://trello.com/b/Q2CQMlnJ/1-platform-sprint&name=New-User-Story&desc=";
  let userStoryURL = "https://raw.githubusercontent.com/micklove/micklove.github.io/master/trello/trello-agile-desc-template.md";
  fetch(userStoryURL)
    .then((resp) => resp.text())
    .then((data) => {
      encodedQuery = encodeURIComponent(data);
      trelloUri = trelloBaseUrl + encodedQuery;
      console.log(trelloUri.length);
      window.location.href = trelloUri;
    });
})();




