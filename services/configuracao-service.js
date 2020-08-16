import { UnidadeMedidaRepository } from '../repositorys/unidadeMedida-repository';
import { CategoriaRepository } from '../repositorys/categoria-repository';
import { SubcategoriaRepository } from '../repositorys/subCategoria-repository';
import { ConfiguracaoDto } from '../dtos/configuracaoDto';

export class ConfiguracaoService {

   constructor(container) {
      this.unidadeMedidaRepository = container.get(UnidadeMedidaRepository);
      this.categoriaRepository = container.get(CategoriaRepository);
      this.subcategoriaRepository = container.get(SubcategoriaRepository);
      this.configuracaoDto = container.get(ConfiguracaoDto);
   }

   obterSubcategorias = async (codigoCategorias) => {
      let result = await this.subcategoriaRepository.obterSubcategorias(codigoCategorias);

      return this.configuracaoDto.montarSubcategorias(result);
   }

   obterUnidadeMedidas = async () => {
      let result = await this.unidadeMedidaRepository.obterTodos();

      return this.configuracaoDto.montarUnidadesMedidas(result);
   }

   obterCategorias = async () => {
      let result = await this.categoriaRepository.obterTodos();
      
      return this.configuracaoDto.montarCategorias(result);
   }

   obterPorCategoria = async (categoriaId) => {
      let result = await this.subcategoriaRepository.obterPorCategoria(categoriaId);
      
      return this.configuracaoDto.montarSubcategorias(result);
   }

   obterPorCodigoCategoria = async (codigo) => {
      let result = await this.subcategoriaRepository.obterPorCodigoCategoria(codigo);
      
      return this.configuracaoDto.montarSubcategorias(result);
   }

   obterTodasSubcategorias = async () => {
      let result = await this.subcategoriaRepository.obterTodos();
      
      return this.configuracaoDto.montarSubcategorias(result);
   }

   obterSubcategoriaPorId = async (id) => {
      let result = await this.subcategoriaRepository.obterPorId(id);
      
      return this.configuracaoDto.montarSubcategoria(result);
   }
}
