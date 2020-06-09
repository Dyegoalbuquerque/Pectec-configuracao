import { UnidadeMedidaRepository } from '../repositorys/unidadeMedida-repository';
import { CategoriaRepository } from '../repositorys/categoria-repository';
import { SubcategoriaRepository } from '../repositorys/subCategoria-repository';

export class ConfiguracaoService {

   constructor() {
      this.unidadeMedidaRepository = new UnidadeMedidaRepository();
      this.categoriaRepository = new CategoriaRepository();
      this.subcategoriaRepository = new SubcategoriaRepository();
   }

   obterSubcategorias = async (codigoCategoria) => {
      let result = await this.subcategoriaRepository.obterSubcategorias(codigoCategoria);

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
}
