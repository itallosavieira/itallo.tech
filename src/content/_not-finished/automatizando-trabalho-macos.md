---
title: 'Automatizando Fluxo de Trabalho no macOS com yabai, skhd e tmux'
date: '08/02/2024'
category: 'setup'
---

### O Problema
Eu inicio meu dia de trabalho sempre da mesma forma, ligo o mac e começo a organizar o setup: 

##### 1. Organizo os Spaces dos Desktops
Crio 6 spaces de Desktops, sendo 3 no monitor 1, e outros 3 no monitor 2 e começo a abrir meus apps:
##### No Monitor 1:
* **Desktop 1**: Terminal
* **Desktop 2**: Browser pra uso pessoal
* **Desktop 3**: App de música

##### No Monitor 2:
* **Desktop 4**: Browser de desenvolvimento
* **Desktop 5**: Discord da empresa
* **Desktop 6**: Deixo disponível pra outros apps
<br/><br/>
Agora sim tá top:
[imagem das abas]

> "Pô, isso não demora nem 5 minutos pra fazer, por que isso é um problema? Para de ser fresco!". 

Pois é, mas fazer isso repetidas vezes enche o saco. Mas peraí que ainda não acabou.

##### 2. Organizo meu terminal
Crio uma sessão no tmux - Se você não conhece essa ferramenta, dá uma olhadinha [aqui](https://github.com/tmux/tmux/wiki), em resumo serve pra manter seções do terminal, criar abas, janelas e etc. - e crio 2 abas, uma pro ambiente do trabalho e outra pra comandos em geral.

##### Na aba do trabalho, faço um split de 4 janelas:
* **Janela 1**: Mocks
* **Janela 2**: Projeto principal
* **Janela 3**: Microfrontend atual
* **Janela 4**: Deixo disponivel no path dos repositórios
<br/><br/>
Fica assim:
[imagem dos splits do tmux]

Pronto, agora posso começar a trabalhar.

### A Solução: Automatizar tudo isso
Quando preciso fazer uma tarefa repetitiva, meu programador interior fica puto. 

Primeiro passo é achar um bom gerenciador de janelas.
Depois de um pouco de pesquisa achei o [Yabai](https://github.com/koekeishiya/yabai), que é um Tiling Window Manager, ou seja, ele ajuda demais no gerenciamento de janelas. - Pro pessoal do linux, é similar a um i3 da vida -.

Vou compartilhar  a forma que eu criei minhas configurações, de acordo com minhas necessidade, que provavelmente serão diferentes das suas. Tem a doc completa na [wiki](https://github.com/koekeishiya/yabai/wiki) do projeto.

### Yabai
##### Instalação
`brew install koekeishiya/formulae/yabai` 

##### Desabilitar o System Integrity Protection
Pro Yabai funcionar é necessário desabilitar o "System Integrity Protection" do mac. Passo a passo [aqui](https://github.com/koekeishiya/yabai/wiki/Disabling-System-Integrity-Protection). 

##### Instalação do jq
O [jq](https://jqlang.github.io/jq/) é essencial pra processar e lidar com o JSON retornado pelas queries do Yabai.
`brew install jq`

##### Criar Arquivo de Configuração
`mkdir -p ~/.config/yabai && touch ~/.config/yabai/yabairc`

##### Inicializar
No terminal:
`yabai --start-service`

##### Configuração inicial
no `yabairc`:

```shell
# Layout de inicialização das janelas
 yabai -m config layout bsp

 # Alguns comportamentos das janelas
 yabai -m config window_gap 8
 yabai -m config window_placement second_child
 yabai -m config window_opacity on
 yabai -m config active_window_opacity 1.0
 yabai -m config normal_window_opacity 0.9

 # Criando exceções
 yabai -m rule --add app="^System Settings$" manage=off
 yabai -m rule --add app="^Calculator$" manage=off

```

##### Configuração dos Spaces
Me certifico de deletar spaces (Desktops) extras, caso tenha mais de 6. Aqui você pode mudar pra quantidade que quiser.
```shell
for _ in $(yabai -m query --spaces | jq '.[].index | select(. > 6)'); do
   yabai -m space --destroy 7
 done

```
**yabai -m query --spaces**:<br/> 
Retorna um JSON com todas infos dos spaces

**.[].index**:<br/> 
Acessa o index de cada space

**select(. > 6)**:<br/> 
Filtra os indexes acima de 6

**yabai -m space --destroy 7**:<br/> 
Deleta todos o spaces acima do 6 até não ter mais.

Agora, eu quero criar meus 6 spaces atribuindo um label a cada um deles, e configurar a abertura dos meus apps em cada space específico.

Começando com um função pra criar meus spaces:
```shell
function setup_space {
  local idx="$1"
  local name="$2"
  local space=
  echo "setup space $idx : $name"

  space=$(yabai -m query --spaces --space "$idx")
  if [ -z "$space" ]; then
    yabai -m space --create
  fi

  yabai -m space "$idx" --label "$name"
}

```
Aqui não tem muito segredo, é uma função que recebe 2 parametros, idx e name. Ele cria os spaces ainda não criados e atribui um label a ele.

Meus spaces:
```shell
setup_space 1 terminal
 setup_space 2 social
 setup_space 3 music
 setup_space 4 web
 setup_space 5 discord
 setup_space 6 other

```

Fazendo cada app abrir em um space específico:
```shell
yabai -m rule --add app="^Allacritty$" space=^1
 yabai -m rule --add app="^Brave\ Browser$" space=^2
 yabai -m rule --add app="^Deezer$" space=^3
 yabai -m rule --add app="^Google\ Chrome$" space=^4
 yabai -m rule --add app="^Discord$" space=^5
 yabai -m rule --add app="^WhatsApp$" space=^6

```
Isso aqui é demais!

Por fim, no caso de estar usando 2 telas, criei essa condição pra distribuir 3 spaces em cada uma.
```shell
display_count=$(yabai -m query --displays | jq "length")

 if [ "$display_count" -gt 1 ]; then
   yabai -m space 6 --display 2
   sleep 1
   yabai -m space 5 --display 2
   sleep 1
   yabai -m space 4 --display 2
 fi 

```

##### Restart!
Agora só salvar e fechar o arquivo e reiniciar o Yabai:
`yabai --restart-service`

Bom, a organização dos meus spaces tá feita. Agora bora configurar alguns shortcuts pra facilitar a navegação sem depender tanto do mouse.
Pra isso escolhi o [skhd](https://github.com/koekeishiya/skhd), que facilita a criação de shortcuts no mac.

### skhd
##### Instalação
`brew install koekeishiya/formulae/skhd` 

##### Inicializar
`skhd --start-service`

##### Criar Arquivo de Configuração
`mkdir -p ~/.config/skhd && touch ~/.config/yabai/skhdrc`

##### Configuração
Aqui é bem simples,  segue o padrão de `teclas : ação`

no `skhdrc`:
```shell
# Pra navegar entre windows
 alt + shift - j : yabai -m window --focus south
 alt + shift - k : yabai -m window --focus north
 alt + shift - h : yabai -m window --focus west
 alt + shift - l : yabai -m window --focus east

 # Pra mudar o foco entre monitores
 alt - l : yabai -m display --focus east
 alt - h : yabai -m display --focus west

 # No Mac da pra mudar o foco dos spaces com ctrl - n.
 # Por algum motivo, só funciona até o space 4, adicionei até o 6
 ctrl - 5 : yabai -m space --focus 5
 ctrl - 6 : yabai -m space --focus 6

 # Pra mover a window entre spaces
 alt + shift - 1 : yabai -m window --space 1 --focus
 alt + shift - 2 : yabai -m window --space 2 --focus
 alt + shift - 3 : yabai -m window --space 3 --focus
 alt + shift - 4 : yabai -m window --space 4 --focus
 alt + shift - 5 : yabai -m window --space 5 --focus
 alt + shift - 6 : yabai -m window --space 6 --focus

 # Pra abrir ou dar foco nos apps mais utilizados
 alt - t : open /Applications/Alacritty.app
 alt - b : open /Applications/Google\ Chrome.app
 alt - d : open /Applications/Discord.app

 # Mover window pra próximo/anterior space
 alt + shift - n : yabai -m window --space next --focus
 alt + shift - p : yabai -m window --space prev --focus

```

##### Restart!
Agora só salvar e fechar o arquivo e reiniciar o skhd:
`skhd --restart-service`

Agora já consigo transitar entre meus spaces e apps de forma muito mais rápida. Top!

Agora só falta configurar o tmux. Bora lá!

### Tmux
É um terminal multiplexer.
> Mas que P*rr@ é essa?

Serve gerenciar várias sessões, janelas e painéis ao mesmo tempo. Pense nele como um organizador de janelas para o terminal. Depois de instalado, basta digitar `tmux` para rodá-lo.

##### Instalação
[Guia de instalação](https://github.com/tmux/tmux/wiki/Installing)

##### Criando um alias para os painéis do trabalho
Aqui é bem simples, como uso o zsh, vou criar um alias no meu .zshrc com comandos do tmux. Comandos de referência: [Tmux Cheat Sheet(https://tmuxcheatsheet.com/).

No `.zshrc`
```shell
alias twork="
 tmux split-window -v &&
 tmux split-window -h &&
 tmux split-window -h -t 0 &&
 tmux send-keys -t 0 'mocks' C-m &&
 tmux send-keys -t 1 portal C-m &&
 tmux send-keys -t 2 microfrontend C-m"

 alias dev="cd ~/Dev && clear"
 alias portal="cd ~/Dev/portal && clear"
 alias mocks="cd ~/Dev/mocks && git pull && clear"
 alias microfrontend="cd ~/Dev/microfrontend && clear"

```

Pronto, agora só dar um source no arquivo:
`source ~/.zshrc`

Prontinho, quando abrir meu terminal com tmux, basta digitar `twork`, que irá abrir tudo que preciso.

[imagem do twork]

### Conclusao
Pra alguns pode ser perda de tempo fazer tudo isso, mas eu gosto dessa sensação de configurar as coisas do meu jeito, e no final do dia aprendi uma coisa nova. 

Espero que isso tenha te ajudado de alguma forma! Qualquer feedback, dúvidas ou qualquer outra coisa, me chama no linkedin.

Todos os arquivos completos estáno no repo: github...
