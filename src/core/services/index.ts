import type {  Vagas } from "../../types";

export const getvagas = async ({ano, mes, agregacao, page, page_size, pagination}: QueryParams): Promise<Vagas> => {
  try {
    const response = await api.get<Vagas>(`api/vagas`, {
      params: {
        ...(ano !== undefined && { ano }),
        ...(mes !== undefined && { mes }),
        agregacao,
        page,
        page_size,
        pagination
      },
    });

    return response.data; 
  } catch (error) {
    throw error;
  }
};