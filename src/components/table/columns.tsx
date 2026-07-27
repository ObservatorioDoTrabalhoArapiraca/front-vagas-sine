import type { ColumnDef } from "@tanstack/react-table"
import type { Vaga } from "@/types/index"


export const columns: ColumnDef<Vaga>[] = [
  {
    accessorKey: "codigo",
    header: "Código",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.codigo_sine.toString().padStart(6, "0").slice(-3)}
        </div>
      )
    },
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.descricao}
           
        </div>
      )
    },
  },
  {
    accessorKey: "escolaridade",
    header: "Escolaridade",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.escolaridade}
        </div>
      )
    },
  },
  {
    accessorKey: "experiencia",
    header: "Experiência",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.experiencia}
           
        </div>
      )
    },
  },
  {
    accessorKey: "observacao",
    header: "Observação",

    cell: ({ row }) => {
      return (
        <div>
          {row.original.observacao}
        </div>
      )
    },
  },
  {
    accessorKey: "genero",
    header: "Gênero",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.genero}
        </div>
      )
    },
  },
  {
    accessorKey: "quantidade",
    header: "Quantidade",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.quantidade}
        </div>
      )
    },
  },
  {
    accessorKey: "data_exp",
    header: "Data de Atualização",
    cell: ({ row }) => {
      const dataFormatada = row.original.data_exp 
  ? new Date(row.original.data_exp).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  : 'Não informada';
      return (
        <div>
          {dataFormatada}
        </div>
      )
    },
  },
 
]
