const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-50">
            <form className="w-[300px] bg-white rounded-2xl p-4 shadow-xl">
                <h1 className="text-center text-2xl mb-6">Seja bem-vindo</h1>
                <label className="block uppercase text-xs font-bold mb-1">Email</label>
                <input
                    type="text"
                    placeholder="email@email.com"
                    className="w-full h-10 pl-4 mb-4 border border-amber-400 rounded focus:outline-2 focus:outline-offset-2 outline-amber-400"
                />
                <label className="block uppercase text-xs font-bold mb-1">Senha</label>
                <input
                    type="password"
                    placeholder="********"
                    className="w-full h-10 pl-4 mb-4 border border-amber-400 rounded focus:outline-2 focus:outline-offset-2 outline-amber-400"
                />
                <button className="w-full h-10 bg-amber-400 rounded hover:bg-amber-500 duration-150 font-bold cursor-pointer">Logar</button>
            </form>
        </div>
    );
}

export default Login;