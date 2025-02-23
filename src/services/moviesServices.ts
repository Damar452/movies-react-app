import api from "./interceptorService";

export const getMovies = async (param: string, search: string): Promise<any> => {
    try {
        const response = await api.get(`?${param}=${search}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        throw error;
    }
};