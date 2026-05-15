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
  data_coleta: string,
  data_exp: string | null
}
export interface Vagas {
  dados: Vaga[],
  total: number,
  total_pages: number,
  page: number,
  page_size: number
}