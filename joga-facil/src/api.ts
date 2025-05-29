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

    criarUsuario: async (NOME: string, IDADE: string, EMAIL: string, SENHA: string ) => {
        let response = await fetch("https://projeto-integrador-backend-4.onrender.com/usuarios",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        NOME,
                        IDADE,
                        EMAIL,
                        SENHA
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
    

    Logar: async (username: string, password: string) => {
        
            let response = await fetch("https://projeto-integrador-backend-4.onrender.com/login",
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

 

    criarEvento: async (IDCATEGORIA: string, DATA: string, LOCAL: string, QTDPARTICIPANTES: string ) => {
        let response = await fetch("https://projeto-integrador-backend-4.onrender.com/eventos",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
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
        let response = await fetch('https://projeto-integrador-backend-4.onrender.com/eventos');    
        let json = await response.json();
        return json.EVENTOS;
    },



}
