# Assignment: Knights Travails

This is the solution to the project assigned by TheOdinProject. For more information, please refer to [their curriculum](https://www.theodinproject.com/lessons/javascript-knights-travails).

## Problem

This is a problem about finding the shortest path to the destination that a knight can move on the chess board.

## Solution

The idea is with the knight piece on the given position, we would get 8 or less next possible moves. Therefore, we need to check all those moves if one of them is the destination, while marking them as visited as well (to prevent revisit them).
To implement it, I used BFS technique ( ~~Breath~~[Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)) on a imaginary graph. Sound simple enough.

## I'm confused

Unlike those previous assignments (I recommend checking [TheOdinProject's curriculum](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript) for more context), this time they decided to throw a whole LeetCode problem at your face, with a tiny suggestion that you should search [graph data structure](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/) because they are cool and definitely has no help whatsoever to finding the solution for the problem. Actually, knowing the graph is reasonable enough as it helps you understand how the BFS works. It's just the fact that I don't know what knowledge they trying to convey to the learners. Is it about the Graph like how they've been introducing other types of data structures, or it's about how to implement a fraction of the data structure working techniques into solving problem? Nevertheless, it's was quite fresh to go online search for the problem and find the solution by yourself without Odin's guidance. And I'm quite happy with my result.
