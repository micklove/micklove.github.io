let fs = require('fs');

/**
 * Simple node script to generate an anchor tag, using the javascript from the given file path
 * (which should then be pasted into the bookmarklet anchor link in the README file)
 *
 * e.g.
 *  <a style="color:white;" href="javascript:%0A(function%20()%20%7B%0A%20%20let%20trelloBaseUrl%20%3D%20%22https%3A%2F%2Ftrello.com%2Fadd-card%3Fsource%3Dgithub.com%26mode%3Dpopup%26url%3Dhttps%3A%2F%2Ftrello.com%2Fb%2FQ2CQMlnJ%2F1-platform-sprint%26name%3DNew-Agile-Card%26desc%3D%22%3B%0A%20%20let%20userStoryURL%20%3D%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fmicklove%2Fadmin-stuff%2Fmaster%2Ftrello%2Ftrello-agile-desc-example.md%22%3B%0A%20%20fetch(userStoryURL)%0A%20%20%20%20.then((resp)%20%3D%3E%20resp.text())%0A%20%20%20%20.then((data)%20%3D%3E%20%7B%0A%20%20%20%20%20%20encodedQuery%20%3D%20encodeURIComponent(data)%3B%0A%20%20%20%20%20%20trelloUri%20%3D%20''%20%2B%20trelloBaseUrl%20%2B%20encodedQuery%3B%0A%20%20%20%20%20%20console.log(trelloUri.length)%3B%0A%20%20%20%20%20%20window.location.href%20%3D%20trelloUri%3B%0A%20%20%20%20%7D)%3B%0A%7D)()%3B%0A%0A%0A%0A%0A">Bookmarklet</a>
 *
 *  Run with
 *
 *     node create-anchor-tag-from-bookmarklet.js
 */
const file = "./trello-create-user-story-bookmarklet.js";

fs.readFile(file, 'utf8', function(err,buf){
  if(err) {
    console.error(`Unable to read file ${file}`)
  }
  let encoded = encodeURIComponent(buf);
  console.log(`<a style="color:white;" href="javascript:${encoded}">Create Story</a>`);
});

