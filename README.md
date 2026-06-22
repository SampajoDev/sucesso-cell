# Sucesso Cell — Site (React + Tailwind v4 + Framer Motion)

Refeito do zero como projeto React de verdade, mantendo a identidade visual
preto + dourado, mas com um sistema de design consistente e animações reais
(Framer Motion), em vez de CSS solto num único HTML.

## O que mudou (resumo)

- **Stack**: Vite + React + Tailwind CSS v4 + Framer Motion + lucide-react.
- **Paleta nova**: preto (`void`), grafite, dourado metálico (`gold`),
  cobre (`copper`) — referência direta a placa de circuito / microsoldagem,
  em vez do dourado "banner de luxo" genérico.
- **Tipografia**: Space Grotesk (títulos) + Inter (texto) + JetBrains Mono
  (números/specs, tipo "13 anos", "0.2mm", código de serviço).
- **Hero**: trilhas de circuito animadas em SVG (substituindo a foto de
  bancada), com texto revelado em sequência ao carregar a página, e um
  painel "diagnóstico em tempo real" como elemento de assinatura.
- **Carrossel → comparador**: troquei os carrosséis automáticos por um
  slider "antes/depois" que o visitante arrasta com o dedo/mouse — mais
  interativo e sem o problema de acessibilidade dos carrosséis automáticos.
- **Motion**: scroll-reveal nos cards de serviço, 3D e depoimentos; hover
  com leve glow dourado nos cards (efeito "esquentando" a solda).
- **Acessibilidade**: foco visível no teclado, `prefers-reduced-motion`
  respeitado, textos alternativos em todas as imagens.

## Como editar o conteúdo (textos, telefone, endereço)

Tudo fica em **`src/data/content.js`**. Não precisa tocar nos componentes
para mudar texto — só editar esse arquivo.

## Como editar cores/fontes

Os tokens de design ficam no topo de **`src/index.css`**, dentro do bloco
`@theme`. Trocar uma cor ali (ex: `--color-gold`) atualiza o site inteiro.

## Como rodar localmente

```bash
npm install
npm run dev       # abre em http://localhost:5173
```

## Como gerar a versão final para publicar

```bash
npm run build      # gera a pasta dist/
npm run preview    # testa a versão de produção localmente
```

A pasta `dist/` é o que você sobe num servidor (Vercel, Netlify, Hostinger,
qualquer hosting de site estático).

## Imagens — IMPORTANTE

As fotos reais (antes/depois dos reparos, peças 3D, foto do Marcel) **não
vieram no HTML enviado** — só os nomes dos arquivos. Coloquei placeholders
SVG em `public/img/` com os mesmos nomes, só para o site não quebrar.

**Troque esses arquivos pelas fotos reais**, mantendo exatamente os mesmos
nomes (ou ajuste os caminhos em `src/data/content.js`):

- `ip17pmxquebrado.jpeg` / `ip17resolvido.jpeg`
- `telaip11.jpeg` / `ip11trocado.jpeg`
- `vidroappwatch.jpeg` / `appwatchtrocado.jpeg`
- `14pmaxtampatraseiraquebrada.jpeg` / `14pmaxtrocadotampatraseira.jpeg`
- `mario americ 36.jpeg`, `chiquinha 3d.jpeg`, `kiko3d.jpeg`, `chaves3d.jpeg`
- `marcel sampaio.jpeg`

## Sobre as ferramentas pedidas

- **Framer Motion**: usado de verdade em todos os componentes (`motion.div`,
  `whileInView`, `AnimatePresence` no carrossel de impressão 3D).
- **21st.dev**: é uma galeria de componentes React/Tailwind para inspiração
  visual — não é uma lib que se instala. Apliquei manualmente os padrões que
  ela populariza (cards com glow no hover, seções com `SectionHeading`
  consistente, microinterações em botões).
- **ui-ux-pro-max-skill** (GitHub): é uma skill para agentes de código (Claude
  Code, Cursor) que gera sistemas de design — não algo que se "chama" direto
  num chat. Apliquei manualmente o método que ela propõe: paleta nomeada,
  tipografia em camadas, estrutura de seção com eyebrow/título/descrição, e
  um elemento de assinatura único (o painel de diagnóstico no hero) em vez
  de decoração genérica.
