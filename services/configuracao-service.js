import { UnidadeMedidaRepository } from '../repositorys/unidadeMedida-repository';
import { CategoriaRepository } from '../repositorys/categoria-repository';
import { SubcategoriaRepository } from '../repositorys/subCategoria-repository';

export class ConfiguracaoService {

   constructor() {
      this.unidadeMedidaRepository = new UnidadeMedidaRepository();
      this.categoriaRepository = new CategoriaRepository();
      this.subcategoriaRepository = new SubcategoriaRepository();
   }

   obterSubcategorias = async (categorias) => {
      let result = await this.subcategoriaRepository.obterSubcategorias(categorias);

      return result;
   }

   obterUnidadeMedidas = async () => {
      let result = await this.unidadeMedidaRepository.obterTodos();

      return result;
   }

   obterCategorias = async () => {
      let result = await this.categoriaRepository.obterTodos();

      return result;
   }

   obterPorCategoria = async (categoriaId) => {
      let result = await this.subcategoriaRepository.obterPorCategoria(categoriaId);
      return result;
   }

   obterPorCodigoCategoria = async (codigo) => {
      let result = await this.subcategoriaRepository.obterPorCodigoCategoria(codigo);
      return result;
   }

   obterTodasSubcategorias = async () => {
      let result = await this.subcategoriaRepository.obterTodos();
      return result;
   }

   obterSubcategoriaPorId = async (id) => {
      let result = await this.subcategoriaRepository.obterPorId(id);
      return result;
   }
}
