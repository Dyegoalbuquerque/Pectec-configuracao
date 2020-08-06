
import grpc from 'grpc';
import { Container } from "typedi";
import { ConfiguracaoController } from '../controllers/configuracao-controller';

let configuracaoController = Container.get(ConfiguracaoController);

const configuracaoProto = grpc.load('./routers/configuracao.proto');

/* gRPC http 2.0 */
let controller = {
    obterPorCategoria: configuracaoController.obterPorCategoria,
    obterPorCodigoCategoria: configuracaoController.obterPorCodigoCategoria
}
let routers = new grpc.Server();
routers.addService(configuracaoProto.ConfiguracaoService.service, controller);

export default routers;