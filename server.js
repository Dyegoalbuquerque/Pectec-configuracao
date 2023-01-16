import Express from 'express';
import bodyParser from 'body-parser';
import routes from './index';
import grpc from 'grpc';
import { Container } from "typedi";
import dotenv from 'dotenv';
import routers from './routers/router-grpc';

export class Server {

  constructor() {
    this.routers = routers;
  }
  
  app = Express();

  startup(port) {
    
    dotenv.config()
    this.setupRoutes();

    this.app.listen(port, () => console.log(`web api running http://localhost:${port}`));

    this.routers.bind('127.0.0.1:50052', grpc.ServerCredentials.createInsecure());
    this.routers.start();
  }

  setupRoutes() {

    this.app.use(bodyParser.json());
    this.app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.append('Access-Control-Allow-Methods', 'PUT');
        res.append('Access-Control-Allow-Methods', 'DELETE');
        res.append('Access-Control-Allow-Methods', 'POST');
        next();
    });
    this.app.use('/', routes);
  }
}

let port = process.env.PORT || 5003;

const server =  Container.get(Server);

server.startup(port);