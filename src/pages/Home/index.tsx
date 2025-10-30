import BarraLateral from '../../containers/BarraLateral'
import BotaoAdcionar from '../../containers/components/BotaoAdicionar'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdcionar />
  </>
)

export default Home
