import { useMutation, useQuery } from "@tanstack/react-query";
import { API, queryClient } from './../services/index';

export const useBuscarNivel = () => {
    return useQuery({
        queryKey: ["niveis"],
        queryFn: async () => {
            const response = await API.get("/niveis");
            return response.data;
        }
    });
}

export const useCriarNivel = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await API.post("/niveis", dados);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["niveis"]
            })
        }
    });
}

export const useEditarNivel = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await API.put(`/niveis/${dados.id}`, dados);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["niveis"]
            })
        }
    });
}

export const useDeletarNivel = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await API.delete(`/niveis/${id}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["niveis"]
            })
        }
    });
}