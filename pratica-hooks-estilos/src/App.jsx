import BotaoDinamico from './components/BotaoDinamico.jsx';
import Alerta from './components/Alerta.jsx';
import CardProduto from './components/CardProduto.jsx';
import ContadorEfeito from './components/ContadorEfeito.jsx';
import Interruptor from './components/Interruptor.jsx';
import CardProdutoMUI from './components/CardProdutoMUI.jsx';

export default function App() {
  return (
    <>
      <h1>Aula Prática - Ciclo 4</h1>

      <h2>Atividade 1: Botão com Estilo Dinâmico</h2>
      <BotaoDinamico />

      <h2>Atividade 2: Alertas com CSS Modules</h2>
      <Alerta type="sucesso" message="Operação realizada com sucesso!" />
      <Alerta type="erro" message="Falha ao processar a requisição." />

      <h2>Atividade 3: Styled Components</h2>
      <CardProduto nome="Café Especial" preco="45,00" />

      <h2>Atividade 4: useEffect em Ação</h2>
      <ContadorEfeito />

      <h2>Atividade 5: Hook Personalizado</h2>  
      <Interruptor />
      <h2>Atividade 6: Desafio com Material-UI</h2>
      <CardProdutoMUI
       imagem="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400"
       nome="Xícara de Café"
       descricao="Uma xícara de café de alta qualidade para começar bem o seu dia."
       preco="25,00"
      git add ./>
    </>
  );
}