const authProvider = {
    login: ({ username }) => {
        
        const users = {
            joedoe: { role: 'admin' },
            janedoe: { role: 'user' },
        };

        if (users[username]) {
            
            localStorage.setItem('auth', JSON.stringify(users[username]));
            return Promise.resolve();
        }
        return Promise.reject(new Error('Usuario o contraseña incorrectos'));
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        
        return error.status === 401 || error.status === 403
            ? Promise.reject()
            : Promise.resolve();
    },
    getPermissions: () => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return auth ? Promise.resolve(auth.role) : Promise.reject();
    },
};

export default authProvider;

