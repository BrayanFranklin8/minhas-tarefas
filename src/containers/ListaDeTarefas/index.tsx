import { useSelector } from 'react-redux'

import Tarefa from '../components/Tarefa'
import { Container, Resultado } from './styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = tarefas
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (tarefas) => tarefas.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (tarefas) => tarefas.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return tarefas
    }
  }

  const exubeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}";` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }
    return mensagem
  }

  const fTarefas = filtraTarefas()
  const mensagem = exubeResultadoFiltragem(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {fTarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
