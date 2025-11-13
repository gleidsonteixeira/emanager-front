import { useMutation } from "@tanstack/react-query"
import { API } from "../services"

export const useLoginUsuario = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await API.post("/login", dados);
            return response.data;
        }
    })
}