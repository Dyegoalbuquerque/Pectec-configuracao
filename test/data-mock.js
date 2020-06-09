
export class DataMock {

  constructor(){}
  
  obterCategorias() {
        return [           
            {
              id: 1,
              codigo: 'D',
              descricao: 'Despesa'
            },
            {
              id: 2,
              codigo: 'I',
              descricao: 'Insumo'
            },
            {
              id: 3,
              codigo: 'R',
              descricao: 'Ração'
            }
          ];
  }
}
    