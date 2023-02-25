
import { Repository } from './repository';
import { Usuario } from '../models/usuario';

export class UsuarioRepository extends Repository {

    constructor() {
        super("usuarios", Usuario);
    }

    async obterPorUsername(username) {

        let query = { username: username };

        let result = await this.filtrar(query);    
        return result ? result[0] : result;    
    }
}