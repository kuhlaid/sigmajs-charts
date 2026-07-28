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
 * Create test 1 using static data
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
  res.render('sigma-chart', { title: 'Graph page', graphData: graphData });
}


/**
 * Create a GET request
 *
 * @route GET /api/sigmacharts/submitPost
 */
async function submitPost(req: Req, res: Res) {
  // res.status(201).json({
  //   message: 'GET it done',
  //   data: {}
  // });
  const postUri = process.env.POST_TEST_URI1;
  if (!postUri) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Missing POST_TEST_URI1');
  }

  fetch(postUri, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Tells the server to expect JSON
    },
    body: JSON.stringify({
        name: 'Jane Does',
        email: 'janes@example.com'
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error on post:', error));
  res.render('sigma-chart', { title: 'Nothing here', graphData: {"id":"none"} });
}


/**
 * Data posted to the endpoint needs to be converted to a Sigma chart
 *
 * @route POST /api/sigmacharts/createTestPost
 */
async function createTestPost(req: Req, res: Res) {
  var graphData = {
        name: 'Here again',
        email: 'home@example.com'
    }
  res.render('sigma-chart-post', { graphData: graphData });
  // res.status(200).json({
  //   message: 'POST it up',
  //   data: {
  //       name: 'Jane Doe',
  //       email: 'jane@example.com'
  //   }
  // });
  // // Access the submitted data using req.body
  // const userData = req.body; 

  // res.status(201).json({
  //   message: 'Post created successfully!',
  //   data: userData
  // });
  // console.log('Received data:', userData);
  // // const graphData = {
  // //       nodes: [
  // //           { id: "n1", label: "Node 1", x: 0, y: 0, size: 10, color: "#ff5733" },
  // //           { id: "n2", label: "Node 2", x: 1, y: 1, size: 15, color: "#33ff57" },
  // //           { id: "n3", label: "Node 3", x: 2, y: 0, size: 12, color: "#3357ff" }
  // //       ],
  // //       edges: [
  // //           { id: "e1", source: "n1", target: "n2", color: "#ccc", size: 3 },
  // //           { id: "e2", source: "n2", target: "n3", color: "#ccc", size: 3 }
  // //       ]
  // //   };

  // // const graph: any = new Graph();
  // // graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
  // // graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
  // // graph.addEdge("1", "2", { size: 5, color: "purple" });
  // res.render('sigma-chart-post', { title: 'Graph page using POST data', graphData: userData });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  createTest1,
  submitPost,
  createTestPost,
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
