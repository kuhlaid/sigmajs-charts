import express from 'express';
const router = express.Router();
// import Graph from "graphology";
// import Sigma from "sigma";

/* GET static sigma page. */
router.get('/', function(req, res, next) {
  // const graph = new Graph();
  // graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
  // graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
  // graph.addEdge("1", "2", { size: 5, color: "purple" });
  res.render('static-sigma', { 
    title: 'Static sigma page', 
    data: JSON.stringify({}) 
  });
  // res.render(view='static-sigma', options={ title: 'Static sigma page', data: JSON.stringify(graph.export()) });
});

export default router;
