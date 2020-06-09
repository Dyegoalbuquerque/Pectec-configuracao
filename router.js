import express from 'express';
import { ConfiguracaoController } from './controllers/configuracao-controller';
import { Container } from "typedi";

let router = express.Router();

let configuracaoController = Container.get(ConfiguracaoController);

router.get('/categorias', configuracaoController.obterCategorias);

router.get('/subcategorias', configuracaoController.obterSubcategorias);

router.get('/unidadeMedidas', configuracaoController.obterUnidadeMedidas);

export default router;