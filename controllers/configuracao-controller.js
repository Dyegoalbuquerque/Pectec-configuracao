import { ConfiguracaoService } from '../services/configuracao-service';

export class ConfiguracaoController {

   constructor(container) {
      this.configuracaoService = container.get(ConfiguracaoService);
   }

   tratarErroHttpRest = async (e, res) => {

      console.error(e);

      return res.status(500).json('Ocorreu um problema no servidor');
   };

   tratarErroHttpGRPC = async (error, callback) => {
      console.error(e);
      callback(error);
   };

   obterSubcategorias = async (req, res) => {

      try {
         let categorias = req.query.categorias;

         let data = await this.configuracaoService.obterSubcategorias(categorias);
         return res.send(200, data);

      } catch (e) {
         return this.tratarErroHttpRest(e, res);
      }
   }

   obterUnidadeMedidas = async (req, res) => {

      try {
         let data = await this.configuracaoService.obterUnidadeMedidas();
         return res.send(200, data);

      } catch (e) {
         return this.tratarErroHttpRest(e, res);
      }
   }

   obterCategorias = async (req, res) => {
      try {
         var data = await this.configuracaoService.obterCategorias();
         return res.send(200, data);

      } catch (e) {
         return this.tratarErroHttpRest(e, res);
      }
   }

   obterTodasSubcategorias = async (req, res) => {

      try {

         let data = await this.configuracaoService.obterTodasSubcategorias();
         return res.send(200, data);

      } catch (e) {
         return this.tratarErroHttpRest(e, res);
      }
   }

   obterSubcategoriasPorCategoria = async  (call, callback)  => {

      try {
         let categoriaId = call.request.categoriaId;

         let data = await this.configuracaoService.obterPorCategoria(categoriaId);
         
         callback(null, data);

      } catch (e) {
         this.tratarErroHttpGRPC({
            code: grpc.status.INTERNAL_ERROR,
            details: "Ocorreu um problema no servidor"
         }, callback);
      }
   }

   obterSubcategoriasPorCodigoCategoria = async (call, callback)  => {

      try {

         let codigo = call.request.codigoCategoria;

         let data = await this.configuracaoService.obterPorCodigoCategoria(codigo);
         
         callback(null, data);
      } catch (e) {
         this.tratarErroHttpGRPC({
            code: grpc.status.INTERNAL_ERROR,
            details: "Ocorreu um problema no servidor"
         }, callback);
      }
   }

   obterTodasSubcategorias = async (call, callback)  => {

      try {

         let data = await this.configuracaoService.obterTodasSubcategorias();
         
         callback(null, data);
      } catch (e) {
         this.tratarErroHttpGRPC({
            code: grpc.status.INTERNAL_ERROR,
            details: "Ocorreu um problema no servidor"
         }, callback);
      }
   }

   obterSubcategoriaPorId = async (call, callback) => {

      try {
         let id = call.request.id;

         let data = await this.configuracaoService.obterSubcategoriaPorId(id);
         
         callback(null, data);
      } catch (e) {
         this.tratarErroHttpGRPC({
            code: grpc.status.INTERNAL_ERROR,
            details: "Ocorreu um problema no servidor"
         }, callback);
      }
   }
}
