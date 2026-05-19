export type QueryParams = {
  descricao?: string;
  escolaridade?: string;
  experiencia?: string;
  genero?: string;
  observacao?: string;
  data_coleta?: string;
};

export interface Vaga {
  id: number
  codigo_sine: number,
  descricao: string,
  escolaridade: string,
  experiencia: string,
  observacao: string,
  genero: string,
  quantidade: number,
  expired: boolean,
  data_coleta?: string,
  data_exp?: string | null
}