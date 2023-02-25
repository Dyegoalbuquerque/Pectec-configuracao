import { SecurityService } from '../services/security-service';

export class SecurityController {

   constructor(container) {
      this.securityService = container.get(SecurityService);
   }

   verificarAutenticacao = async (req, res) => {

      try {
         const { username, senha } = req.body;    

         let data = await this.securityService.verificarAutenticacao(username, senha);
      
         return res.send(200, data);

      } catch (e) {
         return res.status(400).send("Invalido Credenciais");
      }
   }
}
