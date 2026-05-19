import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { useState, type Dispatch, type SetStateAction } from "react"
import type { TableFiltersProps } from "./TableFilters"
import TableFilters from "./TableFilters"
import { Input } from "../ui/input"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  filters: TableFiltersProps
  searchColumn?: string
  searchPlaceholder?: string
  paginationState?: PaginationState
  setPaginationState?: Dispatch<SetStateAction<PaginationState>>
  totalPages?: number,
  totalCount?: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filters,
  searchColumn,
  searchPlaceholder = "Buscar...",
}: DataTableProps<TData, TValue>) {

  
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    [])

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      },
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    })
    

  return (
    <div className="overflow-hidden rounded-md border">
      {filters && 
      <TableFilters
      escolaridade={filters.escolaridade}
      genero={filters.genero}
      observacao={filters.observacao}
      onDescricaoChange={filters.onDescricaoChange}
      onEscolaridadeChange={filters.onEscolaridadeChange}
      onGeneroChange={filters.onGeneroChange}
      onObservacaoChange={filters.onObservacaoChange}
      />
    }
      {searchColumn && (
        <div className="flex items-center p-4">
        <Input
          placeholder={searchPlaceholder}
          value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""}
          onChange={(event: any) =>
            table.getColumn(searchColumn)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
          />
      </div>
        )}
      <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </TableHead>
              )
              )}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Sem Resultados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        </Table>
      </div>
    </div>
  )
}
