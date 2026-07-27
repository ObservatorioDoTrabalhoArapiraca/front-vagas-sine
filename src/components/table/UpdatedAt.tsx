
export default function UpdatedAt({data}: any) {
  return (
    <div>Atualizado em: { data.length > 0 ? new Date(data[0].data_exp).toLocaleString('pt-BR') : '' }</div>
  )
}
