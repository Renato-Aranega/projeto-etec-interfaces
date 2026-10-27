/**
 * ==============================================================================
 * SCRIPT PRINCIPAL - ALTERNÂNCIA E PERSISTÊNCIA DE TEMA (DARK / LIGHT MODE)
 * Disciplina: Interfaces Web I | Etec
 * Aluno: Renato
 * 
 * Descrição Didática:
 * Este script gerencia o estado visual da aplicação (Modo Escuro vs. Modo Claro)
 * utilizando JavaScript puro (Vanilla JS). Ele interage com o DOM para alternar
 * classes CSS e utiliza a API Web Storage (localStorage) para que a escolha do
 * usuário permaneça ativa ao navegar entre as diferentes páginas do site.
 * ==============================================================================
 */

// Chave padronizada utilizada para gravar e recuperar o tema no localStorage
const CHAVE_ARMAZENAMENTO_TEMA = 'etec-tema-preferido';

// Identificadores de valor para cada tema suportado
const TEMA_ESCURO = 'escuro';
const TEMA_CLARO = 'claro';

// Elemento do botão disparador localizado no cabeçalho
const botaoTema = document.getElementById('botao-tema');

/**
 * Função responsável por aplicar o tema visual no documento HTML.
 * Manipula a lista de classes do elemento <body> e altera o ícone do botão.
 * 
 * @param {string} tema - Nome do tema a ser aplicado ('claro' ou 'escuro')
 */
function aplicarTema(tema) {
  // Verifica se o elemento <body> existe para evitar erros em execuções antecipadas
  const corpoDocumento = document.body;
  if (!corpoDocumento || !botaoTema) return;

  if (tema === TEMA_CLARO) {
    // Adiciona a classe .modo-claro que sobrescreve as variáveis CSS no style.css
    corpoDocumento.classList.add('modo-claro');
    // Altera o emoji para Sol, indicando que o modo claro está ativo
    botaoTema.textContent = '☀️';
    botaoTema.setAttribute('aria-label', 'Alternar para o modo escuro');
    botaoTema.setAttribute('title', 'Ativar Modo Escuro');
  } else {
    // Remove a classe .modo-claro, retornando à paleta padrão (:root escuro)
    corpoDocumento.classList.remove('modo-claro');
    // Altera o emoji para Lua, indicando que o modo escuro está ativo
    botaoTema.textContent = '🌙';
    botaoTema.setAttribute('aria-label', 'Alternar para o modo claro');
    botaoTema.setAttribute('title', 'Ativar Modo Claro');
  }
}

/**
 * Função disparada no evento de clique do botão #botao-tema.
 * Alterna entre 'escuro' e 'claro', atualiza a interface e persiste no localStorage.
 */
function alternarTema() {
  const corpoDocumento = document.body;
  
  // Se o corpo já possui a classe modo-claro, o próximo estado será escuro, e vice-versa
  const modoClaroAtivo = corpoDocumento.classList.contains('modo-claro');
  const novoTema = modoClaroAtivo ? TEMA_ESCURO : TEMA_CLARO;

  // Aplica as mudanças no DOM
  aplicarTema(novoTema);

  // Persiste a preferência no navegador do visitante
  try {
    localStorage.setItem(CHAVE_ARMAZENAMENTO_TEMA, novoTema);
  } catch (erro) {
    // Trata graciosamente caso cookies/storage estejam bloqueados pelo navegador
    console.warn('Aviso: Não foi possível salvar a preferência no localStorage:', erro);
  }
}

/**
 * Função de inicialização executada assim que a página é carregada.
 * Lê a preferência gravada anteriormente ou adota o tema padrão escuro.
 */
function carregarTemaSalvo() {
  let temaSalvo = null;

  try {
    temaSalvo = localStorage.getItem(CHAVE_ARMAZENAMENTO_TEMA);
  } catch (erro) {
    console.warn('Aviso: Não foi possível ler do localStorage:', erro);
  }

  // Se houver preferência salva e for 'claro', aplica o modo claro.
  // Caso contrário, adota o padrão inicial exigido pelo projeto (Modo Escuro).
  if (temaSalvo === TEMA_CLARO) {
    aplicarTema(TEMA_CLARO);
  } else {
    aplicarTema(TEMA_ESCURO);
  }
}

// ----------------------------------------------------------------------------
// REGISTRO DOS EVENTOS
// ----------------------------------------------------------------------------

// Garante que o tema seja carregado assim que o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', carregarTemaSalvo);
} else {
  // Caso o script carregado via defer já encontre o DOM parsing concluído
  carregarTemaSalvo();
}

// Vincula a função alternarTema ao evento de clique do botão
if (botaoTema) {
  botaoTema.addEventListener('click', alternarTema);
}
