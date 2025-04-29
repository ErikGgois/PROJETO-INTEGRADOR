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
        
            let response = await fetch("https://localhost:3000/login/",
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            email: username,
                            senha: password
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

    AdicionarUsuarios: async (title: string, body: string, userID: number) => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        title,
                        body,
                        userID: userID,
                    }),

                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        let json = await response.json();

        console.log(json);
        return json;
    }

}
