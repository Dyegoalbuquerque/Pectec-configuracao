import { DataMock } from './data-mock';
import { ConfiguracaoController } from '../controllers/configuracao-controller';
const sinon = require('sinon');
var chai = require('chai');  
var nock = require('nock');
var expect = chai.expect; 
var urlRoot='https://api.github.com/';

  
describe('Controllers: Users - Unit', () => {

   const dataMock = new DataMock();
   const configuracaoController = new ConfiguracaoController();

   describe('When requesting list users on pagination', () => {
      const url = `${urlRoot}users?since=${135}`;
      const data = dataMock.obterCategorias();

      beforeEach(async () => {
          nock(urlRoot)
            .get("/users?since=135")
            .reply(200, {link: 'https://api.github.com/users?since=135', data: data});
      });

      it('Then this endpoint must return a list of GitHub users and the link for the next page', async () => {

        var objeto = await configuracaoController.obterCategorias();

        expect(objeto.data.data).to.length.greaterThan(0);
        expect(objeto.data.link).to.not.empty;
      });
    });

   describe('When requesting user details', () => {
      const url = `${urlRoot}users/octocat`;
      const data = dataMock.obterCategorias();

      beforeEach(async () => {
          nock(urlRoot)
            .get("/users/octocat")           
            .reply(200, { data: data});
      });

      it('Then this endpoint must return the details of a GitHub user', async () => {

        var result = await configuracaoController.obterCategorias();
        
        expect(result.data.data).to.not.empty;
        expect(result.data.data.id).to.greaterThan(0);
        expect(result.data.data.login).to.not.empty;
        expect(result.data.data.avatar_url).to.not.empty;
        expect(result.data.data.created_at).to.not.empty;
      });
    });
 
   describe('When requesting user repositories', () => {
     const url = `${urlRoot}users/octocat/repos`;
     const data = dataMock.obterCategorias();

     beforeEach(async () => {
          nock(urlRoot)
            .get("/users/octocat/repos")
            .reply(200, { data: data});
      });

     it('Then this endpoint must return a list with all user repositories', async () => {

      var result = await configuracaoController.obterCategorias();
      
      expect(result.data.data).to.length.greaterThan(0);

     });
   });
});