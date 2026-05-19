import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export interface TableFiltersProps {
  descricao: string | null;
  onDescricaoChange: (descricao: string | null) => void;
  escolaridade: string | null;
  onEscolaridadeChange: (escolaridade: string | null) => void;
  genero: string | null;
  onGeneroChange: (genero: string | null) => void;
  observacao: string | null;
  onObservacaoChange: (observacao: string | null) => void;
}

export default function TableFilters({
  descricao,
  onDescricaoChange,
  onEscolaridadeChange,
  genero,
  onGeneroChange,
  observacao,
  onObservacaoChange,
}: TableFiltersProps) {
  // Gerar anos (últimos 6 anos)

  
  // Meses do ano
  const escolaridade = [
    { value: "Não Exigida", label: "Não Exigida" },
    { value: "Ensino Fundamental Completo", label: "Ensino Fundamental Completo" },
    { value: "Ensino Médio Completo", label: "Ensino Médio Completo" },
    { value: "Ensino Superior", label: "Ensino Superior" },
    { value: "Mestrado", label: "Mestrado" },
    { value: "Doutorado", label: "Doutorado" },
  ];
  const generos = [
    { value: "A", label: "Ambos os gêneros" },
    { value: "F", label: "Feminino" },
    { value: "M", label: "Masculino" },
  ];

  const handleDescricaoChange = (value: string) => {
    if (value === "todos") {
      onDescricaoChange(null);
    } else {
      onDescricaoChange(value);
    }
  };

  return (
    <Card className="mb-6 shadow-md bg-off-white/40 ">
      <CardHeader>
        <CardTitle>Filtros de Busca</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 items-end">
         
          <div className="flex flex-col gap-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Input 
              value={descricao ?? ""} 
              onChange={(e) => handleDescricaoChange(e.target.value)} 
              placeholder="Busque por título..."
            />
          </div>

        
          <div className="flex flex-col gap-2">
            <Label htmlFor="escolaridade">Escolaridade</Label>
            <Select 
              value={escolaridade?.toString() ?? ""} 
              onValueChange={(value) => onEscolaridadeChange(value)}
            >
              <SelectTrigger className="w-[180px]" id="mes">
                <SelectValue placeholder="Selecione a escolaridade" />
              </SelectTrigger>
              <SelectContent>
                {escolaridade.map((e) => (
                  <SelectItem key={e.value} value={e.value.toString()}>
                    {e.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="genero">Gênero</Label>
            <Select 
              value={genero?.toString() ?? ""} 
              onValueChange={(value) => onGeneroChange(value)}
            >
              <SelectTrigger className="w-[180px]" id="mes">
                <SelectValue placeholder="Selecione o gênero" />
              </SelectTrigger>
              <SelectContent>
                {generos.map((g) => (
                  <SelectItem key={g.value} value={g.value.toString()}>
                    {g.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="observacao">Observação</Label>
            <Input 
              value={observacao ?? ""} 
              onChange={(e) => onObservacaoChange(e.target.value)} 
              placeholder="Busque por observação..."
            />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-3 pb-15">
        {descricao === null ? (
            <>Exibindo: <strong>Todos as vagas</strong></>
          ) : (
            <>Exibindo: <strong>{descricao}</strong></>
          )}
        </p>
      </CardContent>
    </Card>
  );
}