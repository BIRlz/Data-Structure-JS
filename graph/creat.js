"use static"
// creat a graph
function Graph() {
    var vertices = [];
    var adjList = new Map();
    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    };
    this.addEdge = function(v, w) { // add edges
        adjList.get(v).push(w); //focused on directed graph
        adjList.get(w).push(v); //focused on undirected graph
    };
    this.toString = function() {
        var s = "";
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + " -> ";
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < vertices.length; j++) {
                if (neighbors[j] === undefined) break;
                s += neighbors[j] + " ";
            }
            s += "\n";
        }
        return s;
    }
    this.initlizeColor = function() {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = "bule"; // set all the vertices blue , signed for which has not bean visited
        }
        return color;
    };
}

var graph = new Graph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());
