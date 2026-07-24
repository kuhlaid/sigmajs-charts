import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import Graph from "graphology";
// import Sigma from "sigma";
import { Req, Res } from './common/express-types';
import path from 'path';
import { fileURLToPath } from 'url';
/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Create test 1.
 *
 * @route GET /api/sigmacharts/createTest1
 */
async function createTest1(_: Req, res: Res) {
  const graphData = {
        nodes: [
            { id: "n1", label: "Node 1", x: 0, y: 0, size: 10, color: "#ff5733" },
            { id: "n2", label: "Node 2", x: 1, y: 1, size: 15, color: "#33ff57" },
            { id: "n3", label: "Node 3", x: 2, y: 0, size: 12, color: "#3357ff" }
        ],
        edges: [
            { id: "e1", source: "n1", target: "n2", color: "#ccc", size: 3 },
            { id: "e2", source: "n2", target: "n3", color: "#ccc", size: 3 }
        ]
    };

  const graph: any = new Graph();
  graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
  graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
  graph.addEdge("1", "2", { size: 5, color: "purple" });
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);
  res.render('sigma-chart', { title: 'Graph page', graphData: graphData });
  // res.sendFile('sigma-chart.html', { root: path.join(__dirname, 'views') });
  // return res.sendFile('sigma-chart.html'); // , { root: JSON.stringify(graph) }
  // res.status(HttpStatusCodes.OK).json({ 
  //     title: path.join(__dirname, './views/sigma-chart.html') 
  // });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  createTest1,
} as const;

/**
 * 
 * 
 import express from 'express';
 const router = express.Router();
 // import Graph from "graphology";
 // import Sigma from "sigma";
 
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
 
 */
