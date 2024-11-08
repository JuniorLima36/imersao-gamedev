# 🎮 Imersão Alura GameDev 
As Aventuras de Hipsta este é um jogo interativo criado com **p5.js**, que coloca os jogadores no mundo de aventuras de Hipsta! Desenvolvido para treinar e aprimorar habilidades em programação de jogos 2D, o projeto é modularizado para facilitar a expansão e a manutenção.

## 📋 Sobre o Projeto
"As Aventuras de Hipsta" é um jogo de plataforma desenvolvido com **p5.js**. O objetivo do projeto é oferecer uma experiência de jogo divertida e imersiva, com uma narrativa interativa e obstáculos desafiadores.

## 🧊 Funcionalidades
  - **Cenários Dinâmicos:** Cenários de fundo que se movem de acordo com o progresso no jogo, proporcionando uma experiência imersiva.
  - **Personagens e Inimigos:** Personagem principal com animações e movimentos fluídos e inimigos com comportamentos variados.
  - **Sistema de Vida e Pontuação:** Controla o número de vidas e calcula a pontuação de acordo com o desempenho do jogador.
  - **Tela Inicial e Jogo Principal:** Com uma tela inicial interativa, o jogo começa apenas quando o jogador decide, aumentando a interatividade.
  - **Detecção de Colisões:** Utiliza a biblioteca p5.collide2D para detecção de colisão entre o personagem e os inimigos.

## 🛠️ Tecnologias Utilizadas
- **p5.js**: Biblioteca de JavaScript para desenho e criação de animações interativas.
- **p5.sound.js**: Para adicionar efeitos sonoros e trilhas ao jogo.
- **p5.collide2D.js**: Para gerenciar colisões entre o personagem e os obstáculos/inimigos.

## 📝 Estrutura do Projeto
O projeto foi dividido em múltiplos arquivos JavaScript para facilitar a manutenção e organização do código:
- **variables.js**: Armazena variáveis globais e constantes.
- **load.js**: Carrega imagens, sons e outros elementos antes do início do jogo.
- **life.js e score.js**: Controlam o sistema de vidas e a pontuação do jogador.
- **animation.js, character.js, enemy.js**: Gerenciam a animação e as ações do personagem principal e dos inimigos.
- **scenario.js**: Define o cenário de fundo e seu movimento.
- **initialScreen.js e game.js**: Controlam a tela inicial e a lógica principal do jogo.
- **main.js**: Script principal que inicializa o jogo e orquestra as diferentes cenas.

## 🎨 Layout e Estilo
O jogo utiliza elementos visuais e sonoros integrados com **p5.js** e **p5.sound.js** para uma experiência envolvente. Imagens e animações foram cuidadosamente escolhidas para criar uma estética atraente e divertida.
