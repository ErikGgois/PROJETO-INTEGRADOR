export const api = {
    CarregarTodosUsuarios: async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await response.json();
            return json;
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            throw error;
        }
    },

    Logar: async (username: string, password: string) => {
        
            let response = await fetch("http://localhost:3000/usuarios/login",
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            EMAIL: username,
                            SENHA: password
                        }),

                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }
            )
            let json = await response.json();

            console.log(json);
            return json;
        
    },

    criarEventos: async (
            ID: string,
            IDCATEGORIA: string,
            DATA: string,
            LOCAL: string,
            QTDPARTICIPANTES: string
      ) => {
        let response = await fetch('http://localhost:3000/eventos', {
          method: 'POST',
          body: JSON.stringify({
            ID,
            IDCATEGORIA,
            DATA,
            LOCAL,
            QTDPARTICIPANTES
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
       
        let json = await response.json();
        console.log(json);
        return json;
      },

    criarEvento: async (ID: string, IDCATEGORIA: string, DATA: string, LOCAL: string, QTDPARTICIPANTES: string ) => {
        let response = await fetch("http://localhost:3000/eventos",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        ID,
                        IDCATEGORIA,
                        DATA,
                        LOCAL,
                        QTDPARTICIPANTES
                    }),

                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        let json = await response.json();

        console.log(json);
        return json;
    },
    
    CarregarTodosEventos: async () => {
        let response = await fetch('http://localhost:3000/eventos');    
        let json = await response.json();
        return json.EVENTOS;
    },



}
