
<img src="trello-logo-blue.svg" width="200">

Project contains useful markdown and bookmarklets for creating user story templates on Trello cards.

### Create card bookmarklet
To create a new Trello card, using the "Create User Story" template, open the [create bookmarklet page](https://micklove.github.io/trello/) and follow the instructions.

---


### Bookmarklet template
The bookmarklet uses the `fetch` api to retrieve the contents of the User story template file and create a Trello card from that template.

The actual [User story template](./trello-agile-desc-template.md) used in the bookmarklet can be found [here](./trello-agile-desc-template.md). 
The [raw](https://raw.githubusercontent.com/micklove/micklove.github.io/master/trello/trello-agile-desc-template.md) version can be found [here](https://raw.githubusercontent.com/micklove/micklove.github.io/master/trello/trello-agile-desc-template.md)


---


### Creating the embedded javascript bookmarklet link
The javascript code for the bookmarklet can be found [here](./trello-create-user-story-bookmarklet.js). 
However, before using as a bookmarklet, the javascript needs to be encoded and then turned into an html anchor tag.
 
Example below:

```html
<a href='javascript:%28%66%75%6E%63%74%69%6F%6E%20%28%29%20%7B%6C%65%74%20%74%72%65%6C%6C%6F%42%61%73%65%55%72%6C%20%3D%20%22%68%74%74%70%73%3A%2F%2F%74%72%65%6C%6C%6F%2E%63%6F%6D%2F%61%64%64%2D%63%61%72%64%3F%73%6F%75%72%63%65%3D%67%69%74%68%75%62%2E%63%6F%6D%26%6D%6F%64%65%3D%70%6F%70%75%70%26%75%72%6C%3D%68%74%74%70%73%3A%2F%2F%74%72%65%6C%6C%6F%2E%63%6F%6D%2F%62%2F%51%32%43%51%4D%6C%6E%4A%2F%31%2D%70%6C%61%74%66%6F%72%6D%2D%73%70%72%69%6E%74%26%6E%61%6D%65%3D%4E%65%77%2D%41%67%69%6C%65%2D%43%61%72%64%26%64%65%73%63%3D%22%3B%6C%65%74%20%75%73%65%72%53%74%6F%72%79%55%52%4C%20%3D%20%22%68%74%74%70%73%3A%2F%2F%72%61%77%2E%67%69%74%68%75%62%75%73%65%72%63%6F%6E%74%65%6E%74%2E%63%6F%6D%2F%6D%69%63%6B%6C%6F%76%65%2F%61%64%6D%69%6E%2D%73%74%75%66%66%2F%6D%61%73%74%65%72%2F%74%72%65%6C%6C%6F%2F%74%72%65%6C%6C%6F%2D%61%67%69%6C%65%2D%64%65%73%63%2D%65%78%61%6D%70%6C%65%2E%6D%64%22%3B%66%65%74%63%68%28%75%73%65%72%53%74%6F%72%79%55%52%4C%29%2E%74%68%65%6E%28%28%72%65%73%70%29%20%3D%3E%20%72%65%73%70%2E%74%65%78%74%28%29%29%2E%74%68%65%6E%28%28%64%61%74%61%29%20%3D%3E%20%7B%65%6E%63%6F%64%65%64%51%75%65%72%79%20%3D%20%65%6E%63%6F%64%65%55%52%49%43%6F%6D%70%6F%6E%65%6E%74%28%64%61%74%61%29%3B%74%72%65%6C%6C%6F%55%72%69%20%3D%20%27%27%20%2B%20%74%72%65%6C%6C%6F%42%61%73%65%55%72%6C%20%2B%20%65%6E%63%6F%64%65%64%51%75%65%72%79%3B%63%6F%6E%73%6F%6C%65%2E%6C%6F%67%28%74%72%65%6C%6C%6F%55%72%69%2E%6C%65%6E%67%74%68%29%3B%77%69%6E%64%6F%77%2E%6C%6F%63%61%74%69%6F%6E%2E%68%72%65%66%20%3D%20%74%72%65%6C%6C%6F%55%72%69%3B%7D%29%3B%7D%29%28%29%3B%20%0A;'>Bookmarklet</a>
```
Use the [create-anchor-tag-from-bookmarklet.js](./create-anchor-tag-from-bookmarklet.js) script to generate the `anchor` to be used in this markdown page.
(requires `node js` locally)
e.g.

```bash
node create-anchor-tag-from-bookmarklet.js
```

### Notes
nb: It would have been preferable to render the bookmarklet link in this markdown page, however, for security reasons, github prevents this. (Hence the need to use an html page on [github pages](https://micklove.github.io/trello/) )

See related [issue](https://github.com/github/markup/issues/79).

---


## References / examples
+ [Trello "add card" feature](https://trello.com/add-card) 
+ [Options for "add card"](https://developers.trello.com/docs/clientjs)
+ [Show trello card numbers on cards](https://github.com/ilanvivanco/showTrelloCardNumbers)
+ [Create release notes from "Done" list](https://ucaya.github.io/trello-bookmarklets/)
