var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "HW1",
  "level": "1",
  "url": "HW1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Homework 1",
  "body": " Homework 1  Due Thursday, September 4     [From the book]: 1.10, 1.12, 1.15, 1.16*, 1.24, 1.28.    For problem 1.16: This is a proof problem. It needs to be written in Overleaf and printed separately (unless you write the entire homework in Overleaf). Instructions are below. I will not grade this problem now. I will give you feedback, and then you need to resubmit it for the next hw.      [Problem A]: First, watch the video at What is the Pigeonhole Principle? . Then, search the internet for an interesting problem that uses the pigeonhole principle. Write down the problem and its solution, fully explained.      [Problem B]: Let be a finite set of integers and let be the graph on vertex set where for any , if and only if is odd.  Prove that is a bipartite graph for any such : indentify the partite sets and explain why they satisfy the definition.  If , find the value of (the number of edges of ). Justify your answer.        [Problem C]: Draw the graphs and .      Instructions for Overleaf  You need to create a (free) account on Overleaf .  You will need to write the solution for problem 1.16 above in Overleaf, print the resulting pdf file and turn it in with the rest of your homework. The code I am giving you below illustrates the main ideas of how to write math in Overleaf, using LaTeX. I trust that you can find plenty of resources on the internet to figure out anything else you may need.  To create your file: click on Create new project (give it a name) then Blank project . The blank project will contain a file called main.tex .You can change the name of the file to hw1.tex . Each time you make a change in the file, click on Recompile to see the .pdf output, that can be downloaded (see Download PDF on the top menu.) Delete the text in the file and paste the following text instead:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 1 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem 1.16 (HW \\# 1)} Let $P=(u=v_0,v_1, \\dots, v_k=v)$, $k\\ge 1$, be a $u-v$ geodesic in a connected graph $G$. Prove: \\[ d(u,v_i)=i \\qquad \\text{for each integer $i$ with $1\\le i\\le k$} \\] \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw1-ex-1",
  "level": "2",
  "url": "HW1.html#hw1-ex-1",
  "type": "Exercise",
  "number": "1.1.1.1",
  "title": "",
  "body": "  [From the book]: 1.10, 1.12, 1.15, 1.16*, 1.24, 1.28.    For problem 1.16: This is a proof problem. It needs to be written in Overleaf and printed separately (unless you write the entire homework in Overleaf). Instructions are below. I will not grade this problem now. I will give you feedback, and then you need to resubmit it for the next hw.   "
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
  "body": " Homework 2  Due Thursday, September 11     Reading assignment: Read Section 1.4 (Multigraphs and digraphs)      [From the book]: 1.32(a), 2.1, 2.3, 2.5, 2.7    Note that odd problems have hints\/solutions at the back of the book. You can certainly look at those, but please write the solutions in your own words, add details where needed, and keep in mind that similar problems may show up on the next quiz\/exam, so make sure you can solve them independently.      [Problem A]: Prove that every graph with at least two vertices has a pair of vertices with the same degree.   This problem needs to be written in Overleaf and printed out     Use the Pigeonhole principle. Make sure to indicate clearly pigeons=?, holes=? and explain why there are more pigeons than holes      Overleaf code:  Create a new file in Overleaf and copy\/paste the code:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 2 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem A} Prove that every graph with at least two vertices has a pair of vertices with the same degree. \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw2-ex-1",
  "level": "2",
  "url": "HW2.html#hw2-ex-1",
  "type": "Exercise",
  "number": "1.2.1.1",
  "title": "",
  "body": "  Reading assignment: Read Section 1.4 (Multigraphs and digraphs)   "
},
{
  "id": "hw2-ex-2",
  "level": "2",
  "url": "HW2.html#hw2-ex-2",
  "type": "Exercise",
  "number": "1.2.1.2",
  "title": "",
  "body": "  [From the book]: 1.32(a), 2.1, 2.3, 2.5, 2.7    Note that odd problems have hints\/solutions at the back of the book. You can certainly look at those, but please write the solutions in your own words, add details where needed, and keep in mind that similar problems may show up on the next quiz\/exam, so make sure you can solve them independently.   "
},
{
  "id": "hw2-ex-3",
  "level": "2",
  "url": "HW2.html#hw2-ex-3",
  "type": "Exercise",
  "number": "1.2.1.3",
  "title": "",
  "body": "  [Problem A]: Prove that every graph with at least two vertices has a pair of vertices with the same degree.   This problem needs to be written in Overleaf and printed out     Use the Pigeonhole principle. Make sure to indicate clearly pigeons=?, holes=? and explain why there are more pigeons than holes   "
},
{
  "id": "HW3",
  "level": "1",
  "url": "HW3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Homework 3",
  "body": " Homework 3  Due Thursday, September 18     [From the book]: 2.32, 2.34, 3.1, 3.3, 3.4     [Problem A]: A group of 9 friends (call them A,B,C, ...) want to exchange gifts for Christmas, but they do not have quite enough money to buy presents for everybody. They make the following rules for the gift exchange:   If X gives a gift to Y, then Y also gives a gift to X.    Each person in the group is to receive exactly 6 gifts from 6 different friends (and will also give 6 gifts)      Draw a graph that illustrates one possible way the group can plan their gift giving, and make connections with what you learned in class. (Does the graph have a name?) Then, provide instructions for gift-giving: Tell each person in the group who to buy presents for.    If the friends decide to reduce the number of gifts, so that each person in the group will receive exactly 5 gifts from 5 different friends (and also give 5 gifts), do the same task as in the first part, if possible. If not possible, explain why.        [Problem B]: Prove that if is a graph with , then must contain a cycle.   This problem needs to be written in Overleaf and printed out     Proceed by contradiction, assuming there is no cycle. Choose a path of longest length in the graph. Use the no cycle assumption and the hypothesis that to construct a path of larger length, contradicting the assumption on .      If you turned in your Overleaf problem from Homework 1, and you were in class on Thursday, you received feedback on your writing. Please revise the problem accordingly, but do not turn it in again just yet. If you did not turn in your Overleaf problem from Homework 1, you should turn it in now, so that I can give you feedback. While I am not grading anyone on these problems just yet, I will eventually assign a grade for these problems.      Overleaf code:  Create a new file in Overleaf and copy\/paste the code:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 3 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem B} Prove that if $G$ is a graph with $\\delta(G)\\geq 2$, then $G$ must contain a cycle. \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw3-ex-1",
  "level": "2",
  "url": "HW3.html#hw3-ex-1",
  "type": "Exercise",
  "number": "1.3.1.1",
  "title": "",
  "body": "  [From the book]: 2.32, 2.34, 3.1, 3.3, 3.4   "
},
{
  "id": "hw3-ex-2",
  "level": "2",
  "url": "HW3.html#hw3-ex-2",
  "type": "Exercise",
  "number": "1.3.1.2",
  "title": "",
  "body": " [Problem A]: A group of 9 friends (call them A,B,C, ...) want to exchange gifts for Christmas, but they do not have quite enough money to buy presents for everybody. They make the following rules for the gift exchange:   If X gives a gift to Y, then Y also gives a gift to X.    Each person in the group is to receive exactly 6 gifts from 6 different friends (and will also give 6 gifts)      Draw a graph that illustrates one possible way the group can plan their gift giving, and make connections with what you learned in class. (Does the graph have a name?) Then, provide instructions for gift-giving: Tell each person in the group who to buy presents for.    If the friends decide to reduce the number of gifts, so that each person in the group will receive exactly 5 gifts from 5 different friends (and also give 5 gifts), do the same task as in the first part, if possible. If not possible, explain why.     "
},
{
  "id": "hw3-ex-3",
  "level": "2",
  "url": "HW3.html#hw3-ex-3",
  "type": "Exercise",
  "number": "1.3.1.3",
  "title": "",
  "body": "  [Problem B]: Prove that if is a graph with , then must contain a cycle.   This problem needs to be written in Overleaf and printed out     Proceed by contradiction, assuming there is no cycle. Choose a path of longest length in the graph. Use the no cycle assumption and the hypothesis that to construct a path of larger length, contradicting the assumption on .   "
},
{
  "id": "hw3-ex-4",
  "level": "2",
  "url": "HW3.html#hw3-ex-4",
  "type": "Exercise",
  "number": "1.3.1.4",
  "title": "",
  "body": "  If you turned in your Overleaf problem from Homework 1, and you were in class on Thursday, you received feedback on your writing. Please revise the problem accordingly, but do not turn it in again just yet. If you did not turn in your Overleaf problem from Homework 1, you should turn it in now, so that I can give you feedback. While I am not grading anyone on these problems just yet, I will eventually assign a grade for these problems.   "
},
{
  "id": "HW4",
  "level": "1",
  "url": "HW4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Homework 4",
  "body": " Homework 4  Due Thursday, September 25     [From the book]: 3.7, 3.8, 3.9, 3.17, 3.21, 3.22, 3.24     [Problem A]: How many distinct equivalence classes (under the relation of isomorphism) for a graph with 4 vertices are there? Draw exactly one graph for each equivalence class. (Only draw non-isomorphic graphs.)    "
},
{
  "id": "hw4-ex-1",
  "level": "2",
  "url": "HW4.html#hw4-ex-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  [From the book]: 3.7, 3.8, 3.9, 3.17, 3.21, 3.22, 3.24   "
},
{
  "id": "hw4-ex-2",
  "level": "2",
  "url": "HW4.html#hw4-ex-2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": " [Problem A]: How many distinct equivalence classes (under the relation of isomorphism) for a graph with 4 vertices are there? Draw exactly one graph for each equivalence class. (Only draw non-isomorphic graphs.)  "
},
{
  "id": "HW5",
  "level": "1",
  "url": "HW5.html",
  "type": "Section",
  "number": "1.5",
  "title": "Homework 5",
  "body": " Homework 5  Due Thursday, October 3rd     [From the book]: 4.2 (write in Overleaf!), 4.7     [Problem A]: Draw a graph with 3 edges that are bridges and 10 edges that are not bridges.     Overleaf code for problem 4.2:  Create a new file in Overleaf and copy\/paste the code:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 5 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem 4.2} Prove that every connected graph all of whose vertices have even degrees contains no bridges. \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw5-ex-1",
  "level": "2",
  "url": "HW5.html#hw5-ex-1",
  "type": "Exercise",
  "number": "1.5.1.1",
  "title": "",
  "body": "  [From the book]: 4.2 (write in Overleaf!), 4.7   "
},
{
  "id": "hw5-ex-2",
  "level": "2",
  "url": "HW5.html#hw5-ex-2",
  "type": "Exercise",
  "number": "1.5.1.2",
  "title": "",
  "body": " [Problem A]: Draw a graph with 3 edges that are bridges and 10 edges that are not bridges.  "
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
  "body": " Review for Exam 1  Topics covered by Exam 1     Section 1.1 - Graphs and graph models     Definitions and concepts:    graph    edge    vertex    trivial graph    order    size         Section 1.2 Connected graphs     Definitions and concepts    adjacent vertices    vertex (edge) incident to an edge (vertex)    subgraph    the graph , where is an edge    the graph , where is a vertex    walk    closed walk    trail\/circuit    path\/cycle     -cycle, even cycle, odd cycle    connected graph    length of a walk    distance between two vertices      geodesic    diameter of a graph    component of a graph      Applications and theorems:    Theorem 1.6 - Be able to prove     Theorem 1.7        I WILL ADD MORE LATER  "
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
