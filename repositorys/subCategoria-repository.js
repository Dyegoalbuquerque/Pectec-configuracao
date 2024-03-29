
import { Repository } from './repository';
import { SubCategoria } from '../models/subcategoria';

export class SubcategoriaRepository extends Repository {

    constructor() {
        super("subcategorias", SubCategoria);
    }

    async obterSubcategorias(codigoCategorias) {

        if (!codigoCategorias.length) {
            return result;
        }

        let query = { codigoCategoria: codigoCategorias };

        return await this.filtrar(query);
        
    }

    obterPorCategoria = async (categoriaId) => {
        if (typeof categoriaId === 'string') {
            return result;
        }
        
        let query = { categoriaId: categoriaId};

        return await this.filtrar(query);
    }

    obterPorCodigoCategoria = async (codigo) => {        
        let query = { codigoCategoria: codigo};

        return await this.filtrar(query);
    }
}