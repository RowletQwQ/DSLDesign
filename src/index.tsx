import express from 'express';
import { createServer } from 'http';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import WebSocket from 'ws';
import Server  from 'ws';
import { WsSession } from './session/ws_session.js';

const app = express();
const server = createServer(app);

var sessionMap = new Map();

// set up for swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'DSL API with Swagger',
            version: '1.0.0',
        },
    },
    apis: ['./src/index.tsx'],
}

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Use express.json() to parse json data
app.use(express.json());
// API for uploading script
/**
 * @swagger
 * /api/upload:
 *  post:
 *     description: Upload script
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *     schema:
 *      type: object
 *     properties:
 *      script:
 *          type: string
 *          description: script to be uploaded
 *          example: "say \"hello world\""
 *      bot_name:
 *          type: string
 *          description: name of the bot
 *          example: "bot1" 
 *   responses:
 *     200:
 *      description: Success
 *      content:
 *          application/json:
 *      schema:
 *         type: object
 *         properties:
 *          uuid:
 *             type: string
 *             description: uuid of the script
 *             example: "1234567890"
 *          ws_url:
 *            type: string
 *            description: websocket url
 *            example: "ws://localhost:8080"
 *  
 */
app.post('/api/upload', (req, res) => {
    let req_json = req.body
    console.log(req_json)
    let ws_session = new WsSession(req_json.bot_name,req_json.script);
    sessionMap.set(ws_session.get_session_id(), ws_session);
    res.send({uuid: ws_session.get_session_id(), ws_url: ws_session.get_ws_addr()});    
});
