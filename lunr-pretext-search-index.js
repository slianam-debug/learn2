var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "HW1",
  "level": "1",
  "url": "HW1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Homework 1",
  "body": " Homework 1  Due Thursday, September 4     [From the book]: 1.12, 1.15, 1.16*, 1.24, 1.28.    For problem 1.16: This is a proof problem. It needs to be written in Overleaf and printed separately (unless you write the entire homework in Overleaf). Instructions are below. I will not grade this problem now. I will give you feedback, and then you need to resubmit it for the next hw.      [Problem A]: First, watch the video at What is the Pigeonhole Principle? . Then, search the internet for an interesting problem that uses the pigeonhole principle. Write down the problem and its solution, fully explained.      [Problem B]: Let be a finite set of integers and let be the graph on vertex set where for any , if and only if is odd.  Prove that is a bipartite graph for any such : indentify the partite sets and explain why they satisfy the definition.  If , find the value of (the number of edges of ). Justify your answer.        [Problem C]: Draw the graphs and .      Instructions for Overleaf  You need to create a (free) account on Overleaf .  You will need to write the solution for problem 1.16 above in Overleaf, print the resulting pdf file and turn it in with the rest of your homework. The code I am giving you below illustrates the main ideas of how to write math in Overleaf, using LaTeX. I trust that you can find plenty of resources on the internet to figure out anything else you may need.  To create your file: click on Create new project (give it a name) then Blank project . The blank project will contain a file called main.tex .You can change the name of the file to hw1.tex . Delete the text in the file and paste the following text instead:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 1 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem 1.16 (HW \\# 1)} Let $P=(u=v_0,v_1, \\dots, v_k=v)$, $k\\ge 1$, be a $u-v$ geodesic in a connected graph $G$. Prove: \\[ d(u,v_i)=i \\qquad \\text{for each integer $i$ with $1\\le i\\le k$} \\] \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw1-ex-1",
  "level": "2",
  "url": "HW1.html#hw1-ex-1",
  "type": "Exercise",
  "number": "1.1.1.1",
  "title": "",
  "body": "  [From the book]: 1.12, 1.15, 1.16*, 1.24, 1.28.    For problem 1.16: This is a proof problem. It needs to be written in Overleaf and printed separately (unless you write the entire homework in Overleaf). Instructions are below. I will not grade this problem now. I will give you feedback, and then you need to resubmit it for the next hw.   "
},
{
  "id": "hw1-ex-2",
  "level": "2",
  "url": "HW1.html#hw1-ex-2",
  "type": "Exercise",
  "number": "1.1.1.2",
  "title": "",
  "body": "  [Problem A]: First, watch the video at What is the Pigeonhole Principle? . Then, search the internet for an interesting problem that uses the pigeonhole principle. Write down the problem and its solution, fully explained.   "
},
{
  "id": "hw1-ex-3",
  "level": "2",
  "url": "HW1.html#hw1-ex-3",
  "type": "Exercise",
  "number": "1.1.1.3",
  "title": "",
  "body": "  [Problem B]: Let be a finite set of integers and let be the graph on vertex set where for any , if and only if is odd.  Prove that is a bipartite graph for any such : indentify the partite sets and explain why they satisfy the definition.  If , find the value of (the number of edges of ). Justify your answer.     "
},
{
  "id": "hw1-ex-4",
  "level": "2",
  "url": "HW1.html#hw1-ex-4",
  "type": "Exercise",
  "number": "1.1.1.4",
  "title": "",
  "body": "  [Problem C]: Draw the graphs and .   "
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
  "id": "HW3",
  "level": "1",
  "url": "HW3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Homework 3",
  "body": " Homework 3  "
},
{
  "id": "HW4",
  "level": "1",
  "url": "HW4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Homework 4",
  "body": " Homework 4  "
},
{
  "id": "HW5",
  "level": "1",
  "url": "HW5.html",
  "type": "Section",
  "number": "1.5",
  "title": "Homework 5",
  "body": " Homework 5  "
},
{
  "id": "HW6",
  "level": "1",
  "url": "HW6.html",
  "type": "Section",
  "number": "1.6",
  "title": "Homework 6",
  "body": " Homework 6  "
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
