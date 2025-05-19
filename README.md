# SVG Editor Interativo

Autor: Gustavo Palma Figueroa

## Descrição do Projeto

Este projeto é um **Editor SVG Interativo** desenvolvido em Angular 19. Ele permite criar, selecionar, mover, redimensionar e editar propriedades de formas SVG, como **retângulos** e **estrelas**, diretamente em uma interface visual. O objetivo é oferecer uma experiência intuitiva para manipulação de gráficos vetoriais, com painel de propriedades dinâmico e ferramentas de edição.

### Funcionalidades Implementadas

- **Adicionar Retângulos e Estrelas** ao canvas.
- **Selecionar** elementos SVG com clique.
- **Mover** e **redimensionar** elementos usando handles.
- **Editar propriedades** (cor de preenchimento, cor da borda, espessura, raio de borda, número de pontas da estrela, proporção das pontas, posição e tamanho) no painel lateral posicionado à direita.
- **Excluir elementos** selecionados.
- **Limpar o canvas**.
- **Persistência local** dos elementos SVG usando LocalStorage.
- **Feedback visual** ao selecionar e editar elementos (borda azul, handles de redimensionamento).
- **Responsividade** e interface amigável com PrimeNG.

### Decisões de Arquitetura e Design

- **Angular Standalone Components**: Utilização de componentes standalone para facilitar a modularização e manutenção.
- **State Management Simples**: Uso de signals e computed properties para gerenciamento de estado dos elementos SVG, evitando dependências externas.
- **Entidades para Formas**: Cada forma (retângulo, estrela) possui uma entidade própria, responsável por gerar seus pontos e propriedades SVG.
- **Painel de Propriedades Dinâmico**: O painel lateral exibe controles específicos conforme o tipo de elemento selecionado, tornando a edição mais intuitiva.
- **Persistência Local**: Elementos são salvos no LocalStorage para garantir que o trabalho do usuário não seja perdido ao recarregar a página.
- **PrimeNG**: Utilização de componentes visuais do PrimeNG para botões, sliders, color pickers e inputs.

### Instruções para Rodar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd SVG-Editor
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Execute o projeto localmente:**
   ```sh
   ng serve
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:4200
   ```

### Versões Utilizadas/Recomendadas

- **Node.js:** 22.14
- **Angular CLI:** 19
- **PrimeNG:** 19

---

Sinta-se à vontade para contribuir ou sugerir melhorias!
