import express from 'express';
import { SecurityController } from '../controllers/security-controller';
import { Container } from "typedi";
let router = express.Router();

let secutiryController = Container.get(SecurityController);

router.post('/login', secutiryController.verificarAutenticacao);


export default router;