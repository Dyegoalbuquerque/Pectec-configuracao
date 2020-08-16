export class ConfiguracaoDto {

    constructor() { }

    montarSubcategorias(subcategorias) {
        let itens = [];

        for (let i = 0; i < subcategorias.length; i++) {
            let subcategoria = subcategorias[i];
            itens.push(this.montarSubcategoria(subcategoria));
        }

        return itens;
    }

    montarSubcategoria(subcategoria) {
        return {
            id: subcategoria.id,
            categoriaId: subcategoria.categoriaId,
            descricao: subcategoria.descricao,
            codigoCategoria: subcategoria.codigoCategoria
        }
    }

    montarCategoria(categoria) {
        return {
            id: categoria.id,
            codigo: categoria.codigo,
            descricao: categoria.descricao
        }
    }

    montarCategorias(categorias) {
        let itens = [];

        for (let i = 0; i < categorias.length; i++) {
            let categoria = categorias[i];
            itens.push(this.montarCategoria(categoria));
        }

        return itens;
    }

    montarUnidadeMedida(unidadeMedida) {
        return {
            id: unidadeMedida.id,
            codigo: unidadeMedida.codigo,
            descricao: unidadeMedida.descricao
        }
    }

    montarUnidadesMedidas(unidadesMedidas) {
        let itens = [];

        for (let i = 0; i < unidadesMedidas.length; i++) {
            let unidadeMedida = unidadesMedidas[i];
            itens.push(this.montarUnidadeMedida(unidadeMedida));
        }

        return itens;
    }
}