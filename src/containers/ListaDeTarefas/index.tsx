import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'ver a aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a internent',
    descricao: 'baixar a fatura',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir a academia',
    descricao: 'fazer o treino B',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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

export default ListaDeTarefas
