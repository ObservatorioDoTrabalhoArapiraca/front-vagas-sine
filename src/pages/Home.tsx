
import { TableSkeleton } from "../components/table/TableSkeleton"
import { Spinner } from "../components/ui/spinner"

import { getVagas } from "../core/services/index"

import { DataTable } from "@/components/table/DataTable"
import { columns } from "@/components/vagas/columns"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { toast } from "sonner"
import type { Vaga } from "../types"

export default function TablePage() {
  const [dados, setDados] = useState<Vaga[] | null>(null)

  const [initialLoading, setInitialLoading] = useState<boolean>(true)
  const [searching, setSearching] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  
  const [searchParams, setSearchParams] = useSearchParams();

  const parseParam = (key: string): string => searchParams.get(key) || ""
  const [descricao, setDescricao] = useState<string>(parseParam("descricao"))
  const [escolaridade, setEscolaridade] = useState<string>(parseParam("escolaridade"))
  const [genero, setGenero] = useState<string>(parseParam("genero"))
  const [observacao, setObservacao] = useState<string>(parseParam("observacao"))
  
  const [debouncedDescricao, setDebouncedDescricao] = useState<string>(descricao)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedDescricao(descricao)
    }, 500) // tempo em milissegundos

    return () => clearTimeout(handler)
  }, [descricao])
  
  const atualizarParams = (novosValores: Record<string, string>) => {
    const novosParams = {
      descricao,
      escolaridade,
      genero,
      observacao,
      ...novosValores,
    }
    
    // Limpa chaves vazias da URL
    Object.keys(novosParams).forEach(key => {
      if (!novosParams[key as keyof typeof novosParams]) delete novosParams[key as keyof typeof novosParams]
    })

    setSearchParams(novosParams)
  }

  const handleDescricaoChange = (val: string | null) => {
    const v = val || ""
    setDescricao(v)
    atualizarParams({ descricao: v })
  }

  const handleEscolaridadeChange = (val: string | null) => {
    const v = val || ""
    setEscolaridade(v)
    atualizarParams({ escolaridade: v })
  }

  const handleGeneroChange = (val: string | null) => {
    const v = val || ""
    setGenero(v)
    atualizarParams({ genero: v })
  }

  const handleObservacaoChange = (val: string | null) => {
    const v = val || ""
    setObservacao(v)
    atualizarParams({ observacao: v })
  }
  
  useEffect(() => {
    setSearching(true)
    setError(null)
    const fetchData = async () => {
      try {
        const response = await getVagas({
          ...(debouncedDescricao && { descricao: debouncedDescricao }),
          ...(escolaridade !== null && { escolaridade }),
          ...(genero !== null && { genero }),
          ...(observacao !== null && { observacao }),
        })
        if (response) {
          setDados(response);
        }
      } catch (error) {
        toast.error("Erro ao buscar dados")
        setError("Erro ao buscar dados")
      } finally {
        setInitialLoading(false)
        setSearching(false)
      }
    }
    fetchData()
  }, [debouncedDescricao, escolaridade, genero, observacao])

  if (initialLoading) {
    return (
      <div className="w-full mx-auto p-4">
        <TableSkeleton rows={10} columns={4} />
      </div>
    )
  }
  if (error) return <div className="p-4 text-red-500">{error}</div>
  return (
    <div className="w-full mx-auto p-4">
     {searching && (
        <div className="absolute top-6 right-6 z-10 bg-white rounded-md p-4 shadow-md flex items-center">
          <Spinner text="Pesquisando..." />
        </div>
      )}
      <DataTable<Vaga, Vaga>
          data={dados || []}
          columns={columns}
          filters={{
            descricao,
            escolaridade,
            genero,
            observacao,
            onDescricaoChange: handleDescricaoChange,
            onEscolaridadeChange: handleEscolaridadeChange,
            onGeneroChange: handleGeneroChange,
            onObservacaoChange: handleObservacaoChange,
          }}
          // searchColumn="descricao"
          // searchPlaceholder="Filtrar por vaga..."
        />
    </div>
  )
}
