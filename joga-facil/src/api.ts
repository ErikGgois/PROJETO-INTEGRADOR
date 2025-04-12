export const api = {
    CarregarTodosUsuarios: async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let json = await response.json();
        return json;
    },

    Logar: async (username: string, password: string) => {
        {
            let response = await fetch("https://localhost:3000/login/",
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            email: username,
                            senha: password
                        }),

                    headers: {
                        'Content-type': 'application/json, charset=UTF-8'
                    }
                }
            )
            let json = await response.json();

            console.log(json);
            return json;
        }
    },

    AdicionarUsuarios: async (title: string, body: string, userID: number) => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        title,
                        body,
                        userID: 1,
                    }),

                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        let json = await response.json();

        console.log(json);
        return json;
    }

}

