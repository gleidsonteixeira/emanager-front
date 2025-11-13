import { useRef } from "react";
import { API } from "../services";
import { useLoginUsuario } from "../hooks/usuarioHooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {

    const emailRef = useRef(null);
    const senhaRef = useRef(null);
    const navigate = useNavigate();
    const { mutateAsync: logar } = useLoginUsuario();
    
    //nivel 3 - avançado
    async function login(event){
        event.preventDefault();
        const dados = {
            email: emailRef.current.value,
            senha: senhaRef.current.value
        }
        logar(dados, {
            onSuccess: (response) => {
                if(response.mensagem){
                    toast(response.mensagem);
                    return;
                }
                sessionStorage.setItem("token", response.token);
                navigate("/dashboard");
            },
            onError: (response) => {
                toast(response.mensagem)
            }
        });
        
        
        // nivel 1 - basico 
        // fetch("http://localhost:8000/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(dados)
        // })
        // .then(res  => res.json())
        // .then(res => {
        //     console.log(res);
        // })

        // nivel 2 - medio
        // const response = await API.post("/login", dados);
        // console.log(response.data);
    }
    
    return (
        <div className="h-screen flex justify-center items-center bg-gray-50">
            <form className="w-[300px] bg-white rounded-2xl p-4 shadow-xl">
                <h1 className="text-center text-2xl mb-6">Seja bem-vindo</h1>
                <label className="block uppercase text-xs font-bold mb-1">Email</label>
                <input
                    ref={emailRef}
                    type="text"
                    placeholder="email@email.com"
                    className="w-full h-10 pl-4 mb-4 border border-amber-400 rounded focus:outline-2 focus:outline-offset-2 outline-amber-400"
                    required
                />
                <label className="block uppercase text-xs font-bold mb-1">Senha</label>
                <input
                    ref={senhaRef}
                    type="password"
                    placeholder="********"
                    className="w-full h-10 pl-4 mb-4 border border-amber-400 rounded focus:outline-2 focus:outline-offset-2 outline-amber-400"
                    required
                />
                <button onClick={login} className="w-full h-10 bg-amber-400 rounded hover:bg-amber-500 duration-150 font-bold cursor-pointer">Logar</button>
            </form>
        </div>
    );
}

export default Login;