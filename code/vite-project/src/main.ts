// 1. Get the query string from the browser window
const queryString = window.location.search;

// 2. Pass it into URLSearchParams
const urlParams = new URLSearchParams(queryString);
const strUrlPage = urlParams.get('page');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<div>
<a href="?page=">Default</a>
<a href="?page=test1">Test1</a>
<a href="?page=test2">Test2</a>
</div>
<div id="sigma-container" class="border border-solid vh-100">
Graph data for ${strUrlPage}</div>
`

import Graph from "graphology";
import Sigma from "sigma";

const container = document.getElementById("sigma-container") as HTMLElement;
const graph = new Graph() as any;

if (strUrlPage=='test1') {
    graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
    graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
    graph.addEdge("1", "2", { size: 5, color: "purple" });
}
else if (strUrlPage=='test2') {
    graph.addNode("1", { label: "Test 1", x: 0, y: 0, size: 20, color: "green" });
    graph.addNode("2", { label: "Test 2", x: 1, y: 1, size: 30, color: "orange" });
    graph.addEdge("1", "2", { size: 10, color: "purple" });
}
else{
    graph.addNode("1", { label: "Default 1", x: 0, y: 0, size: 10, color: "blue" });
    graph.addNode("2", { label: "Default 2", x: 1, y: 1, size: 20, color: "red" });
    graph.addEdge("1", "2", { size: 5, color: "purple" });
}
void new Sigma(graph, container);