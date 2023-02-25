import express from 'express';
import securityRoute from './routers/router-secutiry';
import categoriaRoute from './routers/router-rest';

let router = express.Router();


router.use('/api/security', securityRoute);

router.use('/api/configuracoes', categoriaRoute);



export default router;
