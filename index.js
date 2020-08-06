import express from 'express';
import categoriaRoute from './routers/router-rest';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

let router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use('/api/configuracoes', categoriaRoute);

export default router;
