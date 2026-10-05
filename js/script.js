const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Volkswagen Fusca clássico é famoso por sua engenharia única. Onde fica localizado o motor do Fusca?",
        alternativas: [
            {
                texto: "Na traseira do veículo.",
                afirmacao: "Correto! O motor do Fusca fica localizado na traseira."
            },
            {
                texto: "Na parte central do chassi.",
                afirmacao: "Incorreto! O motor do Fusca fica localizado na traseira."
            }
        ]
    },

    {
        enunciado: "No mercado internacional, a Volkswagen lançou uma cor oficial para o Fusca clássico chamada Aubergine, que é uma variação de roxo. O que significa Aubergine em português?",
        alternativas: [
            {
                texto: "Berinjela.",
                afirmacao: "Correto! Aubergine significa berinjela."
            },
            {
                texto: "Uva.",
                afirmacao: "Incorreto! Aubergine significa berinjela."
            }
        ]
    },

    {
        enunciado: 'Muitos donos de Fusca customizam seus carros com a pintura roxa do tipo "Camaleão". Qual é o efeito visual dessa tinta especial?',
        alternativas: [
            {
                texto: "A pintura muda de cor dependendo do ângulo de visão e da intensidade da luz do sol, variando entre roxo, azul e verde.",
                afirmacao: "Correto! A pintura camaleão muda de aparência conforme o ângulo e a iluminação."
            },
            {
                texto: "A pintura brilha intensamente no escuro da noite sem precisar de nenhuma luz externa.",
                afirmacao: "Incorreto! Isso não caracteriza a pintura camaleão."
            }
        ]
    },

    {
        enunciado: "No famoso jogo popular de observação associado ao Volkswagen Fusca, conhecido em inglês como Punch Buggy, qual costuma ser a regra tradicional ou a variação regional quando se avista especificamente um Fusca de cor roxa?",
        alternativas: [
            {
                texto: "Proíbe qualquer jogador de tocar nos colegas pelo restante do dia.",
                afirmacao: "Incorreto! Essa não é uma regra típica dessa variação."
            },
            {
                texto: "Muitas vezes vale o dobro de pontos ou serve para anular/reverter socos acumulados por outros jogadores.",
                afirmacao: "Correto! Essa é uma variação regional da brincadeira."
            }
        ]
    },

    {
        enunciado: 'O que caracteriza essencialmente a técnica de pintura automotiva estilo "Candy", como um tom Candy Purple, frequentemente utilizada em projetos de customização de Fuscas clássicos?',
        alternativas: [
            {
                texto: "O uso de uma base metálica altamente brilhante (prata ou dourada) combinada com camadas de verniz translúcido colorido.",
                afirmacao: "Correto! A técnica Candy utiliza uma base metálica e camadas translúcidas coloridas."
            },
            {
                texto: "A aplicação de adesivos vinílicos termo-sensíveis que mudam de estampa com o calor.",
                afirmacao: "Incorreto! Isso não caracteriza a técnica de pintura Candy."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    cont posicao = Math floor(Math.random()*lista.lenght)
}
mostraPergunta();