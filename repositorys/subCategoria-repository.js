
import { Repository } from './repository';
import { Subcategoria } from '../models/subCategoria';

export class SubcategoriaRepository extends Repository {

    constructor() {
        super(Subcategoria);
    }

    async obterSubcategorias(codigoCategorias) {
        let result = this.dao.obterTodos();

        if (!codigoCategorias.length) {
            return result;
        }

        result = result.filter(r => codigoCategorias.includes(r.codigoCategoria));

        return result;
    }

    obterPorCategoria = async (categoriaId) => {
        let result = this.dao.obterTodos();

        if (typeof categoriaId === 'string') {
            return result;
        }

        result = result.filter(r => r.categoriaId == categoriaId);

        return result;
    }

    obterPorCodigoCategoria = async (codigo) => {
        let result = this.dao.obterTodos();

        result = result.filter(r => r.codigoCategoria == codigo);

        return result;
    }
}