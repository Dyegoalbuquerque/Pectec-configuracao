import { ConfiguracaoService } from '../services/configuracao-service';

export class ConfiguracaoController {

   constructor(container) {
      this.configuracaoService = container.get(ConfiguracaoService);
   }

   tratarErro = async (e, res) => {

      console.error(e);

      return res.status(500).json('Ocorreu um problema no servidor');
   };

   obterSubcategorias = async (req, res) => {

      try {
         let codigoCategoria = req.query.codigoCategoria;

         let data = await this.configuracaoService.obterSubcategorias(codigoCategoria);
         return res.send(200, data);

      } catch (e) {
         return this.tratarErro(e, res);
      }
   }

   obterUnidadeMedidas = async (req, res) => {

      try {
         let data = await this.configuracaoService.obterUnidadeMedidas();
         return res.send(200, data);

      } catch (e) {
         return this.tratarErro(e, res);
      }
   }

   obterCategorias = async (req, res) => {
      try {
         var data = await this.configuracaoService.obterCategorias();
         return res.send(200, data);

      } catch (e) {
         return this.tratarErro(e, res);
      }
   }

   obterTodasSubcategorias = async (req, res) => {

      try {

         let data = await this.configuracaoService.obterTodasSubcategorias();
         return res.send(200, data);

      } catch (e) {
         return this.tratarErro(e, res);
      }
   }
}
