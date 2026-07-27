import api from "@/core/services/api";
import type { QueryParams, Vaga } from "@/types";

export const getVagas = async ({ descricao, escolaridade, experiencia, genero, observacao, data_coleta }: QueryParams): Promise<Vaga[]> => {
  
  try {
    const response = await api.get<Vaga[]>(`/api/vagas/`, {
      params: {
        ...(descricao && { descricao }),
        ...(escolaridade && { escolaridade }),
        ...(experiencia && { experiencia }),
        ...(genero && { genero }),
        ...(observacao && { observacao }),
        ...(data_coleta && { data_coleta }),
      },
    });
    function ordenarPorDescricao(response: Vaga[]): Vaga[] {
      return response.sort((a, b) => {
          // localeCompare trata corretamente acentos (ex: 'Á' perto de 'A')
          return a.descricao.localeCompare(b.descricao, 'pt-BR', { sensitivity: 'base' });
      });
  }
  
  const vagasOrdenadas = ordenarPorDescricao(response.data);
    return vagasOrdenadas; 
  } catch (error) {
    throw error;
  }
};