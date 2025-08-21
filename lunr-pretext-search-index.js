var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "HW1",
  "level": "1",
  "url": "HW1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Homework 1",
  "body": " Homework 1  Coming up  "
},
{
  "id": "HW2",
  "level": "1",
  "url": "HW2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Homework 2",
  "body": " Homework 2  Coming up  "
},
{
  "id": "Review1",
  "level": "1",
  "url": "Review1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Review for Exam 1",
  "body": " Review for Exam 1  TBD  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
