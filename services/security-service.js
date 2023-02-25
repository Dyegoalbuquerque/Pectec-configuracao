import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UsuarioRepository } from '../repositorys/usuario-repository';

export class SecurityService {

    constructor(container) {
        this.usuarioRepository = container.get(UsuarioRepository);
    }

    verificarAutenticacao = async (username, senha) => {
        let usuario = await this.usuarioRepository.obterPorUsername(username);

        //let senhaEncriptada = bcrypt.hashSync(senha, 10);

        console.log(bcrypt.compareSync(senha, usuario.senha))

        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {

            const token = jwt.sign({ user_id: usuario._id.toString(), username }, process.env.TOKEN_KEY, { expiresIn: "2h" });

            return { token, username };
        }

        throw new Error('Usuário ou senha inválidos');
    }
}









