import styled, { createGlobalStyle } from 'styled-components'
import variantes from './variantes'

const EstiloGlobal = createGlobalStyle`

    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  diplay: block;
  margin-top:40px;
  margin-botton 40px;
  fonst-size:18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  fonte-weight: bold;
  color: #666666;
  width: 100%;
  border-color: #666666;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background: ${variantes.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variantes.verde};
`

export default EstiloGlobal
