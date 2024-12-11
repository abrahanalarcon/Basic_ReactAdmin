import  { useState } from "react";
import { useLogin, useNotify } from "react-admin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const login = useLogin(); 
    const notify = useNotify();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password }) 
            .catch(() =>
                notify("Usuario o contraseña incorrectos", { type: "error" })
            );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">
            <div className="hidden md:block">
                <img
                    src="https://blog.theodo.com/_astro/react-admin-logo.CRXI1bRG.png"
                    alt="Persona"
                    className="w-full h-screen object-cover"
                />
            </div>
            <div className="flex items-center justify-center bg-white p-6">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        ¡Bienvenido a ReactAdmin!
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nombre de usuario
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Usuario"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

