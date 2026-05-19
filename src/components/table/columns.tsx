import type { ColumnDef } from "@tanstack/react-table"
import type { Vaga } from "@/types/index"


export const columns: ColumnDef<Vaga>[] = [
  {
    accessorKey: "descricao",
    header: "Descricao",
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
 
]
