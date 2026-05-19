import api from "@/core/services/api";
import type {  QueryParams, Vaga } from "@/types";





export const getVagas = async ({ descricao, escolaridade, experiencia, genero, observacao, data_coleta}: QueryParams): Promise<Vaga[]> => {
  try {
    const response = await api.get<Vaga[]>(`api/vagas`, {
      params: {
        ...(descricao && { descricao }),
        ...(escolaridade && { escolaridade }),
        ...(experiencia && { experiencia }),
        ...(genero && { genero }),
        ...(observacao && { observacao }),
        ...(data_coleta && { data_coleta })
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};