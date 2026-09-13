import { useState, useEffect } from 'react';
export default function ContadorEfeito() {
const [count, setCount] = useState(0);
const [mensagem, setMensagem] = useState('');
// Este efeito será executado SEMPRE que o estado 'count' for alterado.
useEffect(() => {
console.log('EFEITO EXECUTADO: O contador mudou para', count);
// Efeito 1: Atualizar o título da aba do navegador.
document.title = `Cliques: ${count}`;
// Efeito 2: Exibir uma mensagem de confirmação temporária.
if (count > 0) {
setMensagem('Contador atualizado com sucesso!');
// Agenda a remoção da mensagem após 2 segundos.
const timer = setTimeout(() => {
setMensagem('');
}, 2000);
// A função de limpeza será executada antes da próxima
// execução do efeito ou quando o componente for desmontado.
return () => {
console.log('LIMPANDO O TIMER ANTERIOR');
clearTimeout(timer);
};
}
}, [count]); // Só execute o efeito se 'count' mudar.
console.log('COMPONENTE RENDERIZADO');
return (
<>
<p>Você clicou {count} vezes</p>
<button onClick={() => setCount(count + 1)}>
Clique aqui
</button>
{mensagem && (
<p style={{color: 'green', marginTop: '10px'}}>
{mensagem}
</p>
)}
</>
);
}