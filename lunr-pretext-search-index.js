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
  "body": " Homework 6  Due Thursday, October 9th     [From the book]: 4.9, 4.13, 4.14, 4.18, 4.25, 4.27, 4.28     "
},
{
  "id": "hw6-ex-1",
  "level": "2",
  "url": "HW6.html#hw6-ex-1",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": "  [From the book]: 4.9, 4.13, 4.14, 4.18, 4.25, 4.27, 4.28   "
},
{
  "id": "HW7",
  "level": "1",
  "url": "HW7.html",
  "type": "Section",
  "number": "1.7",
  "title": "Homework 7",
  "body": " Homework 7  Due Friday, October 24th     Upload in Canvas the 4 problems that were assigned for writing in Overleaf, as a SINGLE file.     "
},
{
  "id": "hw7-ex-1",
  "level": "2",
  "url": "HW7.html#hw7-ex-1",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "  Upload in Canvas the 4 problems that were assigned for writing in Overleaf, as a SINGLE file.   "
},
{
  "id": "HW8",
  "level": "1",
  "url": "HW8.html",
  "type": "Section",
  "number": "1.8",
  "title": "Homework 8",
  "body": " Homework 8  Due Thursday, October 30th     [From the book]: 5.21, 5.31, 6.1     Determine the vertex- and edge- connectivity, indicating the minimum vertex-cuts and edge-cuts, of the following graph:   a graph     Prove there exists no -connected graph (in other words with ) with exactly 7 edges.    Let , where is the tree in Figure 4.3 (page 88) of your book.    Draw the graphs and     Find and , indicating the minimum vertex-cut and edge-cuts.      On page 121 of your book is described the construction of the Harary graph when both and are odd. This is no longer a regular graph (since no such graph exists when both and are odd), but it has vertices of degree and one vertex of degree . Read the construction in the book and draw the graph . Then, find its edge-connectivity.    Decide if the graph below is Eulerian. If it is, give an Eulerian circuit by enumerating the edges. Start at the vertex denoted S.   a graph     "
},
{
  "id": "hw8-ex-1",
  "level": "2",
  "url": "HW8.html#hw8-ex-1",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "  [From the book]: 5.21, 5.31, 6.1   "
},
{
  "id": "hw8-ex-2",
  "level": "2",
  "url": "HW8.html#hw8-ex-2",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": " Determine the vertex- and edge- connectivity, indicating the minimum vertex-cuts and edge-cuts, of the following graph:   a graph   "
},
{
  "id": "hw8-ex-3",
  "level": "2",
  "url": "HW8.html#hw8-ex-3",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": " Prove there exists no -connected graph (in other words with ) with exactly 7 edges.  "
},
{
  "id": "hw8-ex-4",
  "level": "2",
  "url": "HW8.html#hw8-ex-4",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": " Let , where is the tree in Figure 4.3 (page 88) of your book.    Draw the graphs and     Find and , indicating the minimum vertex-cut and edge-cuts.    "
},
{
  "id": "hw8-ex-5",
  "level": "2",
  "url": "HW8.html#hw8-ex-5",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": " On page 121 of your book is described the construction of the Harary graph when both and are odd. This is no longer a regular graph (since no such graph exists when both and are odd), but it has vertices of degree and one vertex of degree . Read the construction in the book and draw the graph . Then, find its edge-connectivity.  "
},
{
  "id": "hw8-ex-6",
  "level": "2",
  "url": "HW8.html#hw8-ex-6",
  "type": "Exercise",
  "number": "1.8.6",
  "title": "",
  "body": " Decide if the graph below is Eulerian. If it is, give an Eulerian circuit by enumerating the edges. Start at the vertex denoted S.   a graph   "
},
{
  "id": "HW9",
  "level": "1",
  "url": "HW9.html",
  "type": "Section",
  "number": "1.9",
  "title": "Homework 9",
  "body": " Homework 9  Due Thursday, November 6th     Find the optimal postman tour for the graph below. In other words, find a closed walk of minimum weight that uses all the edges at least once. Give the walk by enumerating the vertices. Then, compute the total weight of this walk. Show all steps of the algorithm.   Problem 1 figure   a graph        Prove that a bipartite graph that is Hamiltonian must have an even number of vertices.    For each of the graphs below, decide whether it is Hamiltonian or not. If it is Hamiltonian, give a Hamiltonian cycle. If it is not, you need to explain why not.     Part (a) figure   a graph        Part (b) figure   a graph        Part (c) figure   a graph        Part (d) figure   a graph         "
},
{
  "id": "hw9-ex-1",
  "level": "2",
  "url": "HW9.html#hw9-ex-1",
  "type": "Exercise",
  "number": "1.9.1",
  "title": "",
  "body": "  Find the optimal postman tour for the graph below. In other words, find a closed walk of minimum weight that uses all the edges at least once. Give the walk by enumerating the vertices. Then, compute the total weight of this walk. Show all steps of the algorithm.   Problem 1 figure   a graph      "
},
{
  "id": "hw9-ex-2",
  "level": "2",
  "url": "HW9.html#hw9-ex-2",
  "type": "Exercise",
  "number": "1.9.2",
  "title": "",
  "body": " Prove that a bipartite graph that is Hamiltonian must have an even number of vertices.  "
},
{
  "id": "hw9-ex-3",
  "level": "2",
  "url": "HW9.html#hw9-ex-3",
  "type": "Exercise",
  "number": "1.9.3",
  "title": "",
  "body": " For each of the graphs below, decide whether it is Hamiltonian or not. If it is Hamiltonian, give a Hamiltonian cycle. If it is not, you need to explain why not.     Part (a) figure   a graph        Part (b) figure   a graph        Part (c) figure   a graph        Part (d) figure   a graph       "
},
{
  "id": "HW10",
  "level": "1",
  "url": "HW10.html",
  "type": "Section",
  "number": "1.10",
  "title": "Homework 10",
  "body": " Homework 10  Due Thursday, November 13    Use the algorithm \"Double the tree\" for the following Traveling Salesman Problem. You need to show all the steps of the algorithm:   Find a minimum spanning tree (any algorithm you want);    Double the tree;    Find an Eulerian circuit for the doubled tree    Follow the Eulerian circuit, taking shortcuts as necessary to avoid repeating vertices.   The output should be a Hamiltonian cycle. Give the cycle by enumerating the vertices, and also compute the total weight.   a graph     Suppose certain pairs in a department of six people ( ) must meet privately in a single available conference room. The following is a list of pairs that need to meet:  If a pair is in this list, e.g. , then this means that and need to meet.  Is it possible to sequence the two-person conferences so that one of the participants in each conference (except for the last one) also participates in the next conference, but no one participates in three consecutive conferences? If so, describe how the sequencing needs to be done (who meets first, who meets next, etc.)  You need to answer this problem using concepts and results of graph theory that we talked about, and describe how the given problem can be translated into a problem about a graph, and then solve the problem using the graph.    Let (the path graph on vertices). Is the graph Hamiltonian? If the graph is Hamiltonian, you need to describe a Hamiltonian cycle (label the vertices as you wish). If it is not Hamiltonian, explain why.    Repeat problem 3 above with .    "
},
{
  "id": "HW10-3-1",
  "level": "2",
  "url": "HW10.html#HW10-3-1",
  "type": "Exercise",
  "number": "1.10.1",
  "title": "",
  "body": " Use the algorithm \"Double the tree\" for the following Traveling Salesman Problem. You need to show all the steps of the algorithm:   Find a minimum spanning tree (any algorithm you want);    Double the tree;    Find an Eulerian circuit for the doubled tree    Follow the Eulerian circuit, taking shortcuts as necessary to avoid repeating vertices.   The output should be a Hamiltonian cycle. Give the cycle by enumerating the vertices, and also compute the total weight.   a graph   "
},
{
  "id": "HW10-3-2",
  "level": "2",
  "url": "HW10.html#HW10-3-2",
  "type": "Exercise",
  "number": "1.10.2",
  "title": "",
  "body": " Suppose certain pairs in a department of six people ( ) must meet privately in a single available conference room. The following is a list of pairs that need to meet:  If a pair is in this list, e.g. , then this means that and need to meet.  Is it possible to sequence the two-person conferences so that one of the participants in each conference (except for the last one) also participates in the next conference, but no one participates in three consecutive conferences? If so, describe how the sequencing needs to be done (who meets first, who meets next, etc.)  You need to answer this problem using concepts and results of graph theory that we talked about, and describe how the given problem can be translated into a problem about a graph, and then solve the problem using the graph.  "
},
{
  "id": "HW10-3-3",
  "level": "2",
  "url": "HW10.html#HW10-3-3",
  "type": "Exercise",
  "number": "1.10.3",
  "title": "",
  "body": " Let (the path graph on vertices). Is the graph Hamiltonian? If the graph is Hamiltonian, you need to describe a Hamiltonian cycle (label the vertices as you wish). If it is not Hamiltonian, explain why.  "
},
{
  "id": "HW10-3-4",
  "level": "2",
  "url": "HW10.html#HW10-3-4",
  "type": "Exercise",
  "number": "1.10.4",
  "title": "",
  "body": " Repeat problem 3 above with .  "
},
{
  "id": "Review1",
  "level": "1",
  "url": "Review1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Review for Exam 1",
  "body": " Review for Exam 1  Topics covered by Exam 1     Section 1.1 - Graphs and graph models     Definitions and concepts:    graph    edge    vertex    trivial graph    order    size         Section 1.2 Connected graphs     Definitions and concepts    adjacent vertices    vertex (edge) incident to an edge (vertex)    subgraph    the graph , where is an edge    the graph , where is a vertex    walk    closed walk    trail\/circuit    path\/cycle     -cycle, even cycle, odd cycle    connected graph    length of a walk    distance between two vertices      geodesic    diameter of a graph    component of a graph    equivalence relation (see appendix)      Applications and theorems:    Theorem 1.6    Theorem 1.7 - Be able to prove          Section 1.3 Common classes of graphs     Definitions and concepts:    complete graph     path graph     cycle graph     bipartite graph\/partite sets    complete bipartite graph     union and product of graphs ( and )    The cube graph       Applications and theorems:    Theorem 1.12    Be able to explain why a given graph is bipartite or not bipartite         Section 2.1 Degree of a vertex     Definitions and concepts:    degree of a vertex    isolated vertex, end-vertex(leaf)    minimum degree , maximum degree       Applications and theorems    Theorem 21.    Corollary 2.3 - Be able to prove     Theorem 2.4    Corollary 2.5    Apply these results in exercises         Section 2.2 Regular graphs     Definition anf concepts:    regular graph    The Harary graph (be able to draw it for given and )      Applications and Theorems:    Theorem 2.6         Section 2.3 Degree sequences     Definition and concepts:    degree sequence of a graph    graphical sequence      Applications and theorems:    Theorem 2.10    Be able to decide if a sequence is graphical. If it is, draw a graph that realizes it.         Section 3.1 The definition of isomorphism     Definition and concepts:    isomorphism    isomorphic graphs      Applications and theorems    Know various properties of a graph that are preserved under isomorphism    Be able to recognize and explain that two given graphs are or are not isomorphic         Section 3.2 Isomoprhism as a relation     Definitions and concepts:    isomorphism class (see also Appendix 2.1 for equivalence class)      Applications and theorems:    Theorem 3.6    Identify isomorphism classes of graphs with various properties by giving a representative for each class (i.e. find all possible non-isomorphic graphs with the given property)         Section 3.3 Excursion: Graphs and groups     Definitions and concepts    automorphism    permutation, cycle      Applications and theorems:    Identify the automorphisms of a graph and write them using cycle notation         Section 4.1 Bridges     Definitions and concepts    bridge      Applications and theorems:    Theorem 4.1 Be able to prove          Section 4.2 Trees     Definitions and concepts    acyclic graph    tree    root of a tree    forest    parents and children in a rooted tree    binary tree, complete binary tree (as done in class)    mathematical induction (See also appendix 3)    height of a rooted tree (as done in class)      Applications and theorems    Theorem 4.2 Be able to prove     Theorem 4.3    Theorem 4.4 Be able to prove     Theorem 4.6    Corollary 4.6    Theorem 4.7    Theorem proved in class: the number of vertices of a complete tree of height is     Be able to solve exercises putting together these results         The minimum Spanning tree problem     Definitions and concepts    spanning tree    weighted graph    minimum spanning tree      Applications and theorems    The Kruskal algorithm    The Prim algorithm         Setcion 4.4 Excursion: the number of spanning trees     Applications and theorems:    Count the number of spanning trees in a given graph        "
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
