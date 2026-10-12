# Registro de revisão da galeria DJDE

Checklist de 10 itens da spec da galeria (`galeria-djde-spec.md` §5). Revisor: Neo (12/10/2026). **Aprovação de publicação: Fernando Villar — pendente** (é o merge na `main` que publica).

## Como foi revisado (lote 1)

- **Estático (itens 2–8):** varredura de cada `.js` atrás de rede (`fetch`, `XMLHttpRequest`, `WebSocket`, `Image`/`Audio` com URL), execução dinâmica (`eval`, `new Function`, `setTimeout` com string), código remoto (`import()` de URL, `<script>`, CDN), armazenamento (`localStorage`, `indexedDB`, cookies), janelas/redirecionamento e mídia (`getUserMedia`, área de transferência, geolocalização), seguida de leitura dos trechos encontrados. Nenhuma das 15 faz requisição de rede, usa `eval`/`new Function` ou carrega código de fora.
- **Uso (item 9):** no editor DJDE (build de produção, galeria servida localmente no mesmo prefixo), para cada extensão: carregar pela galeria (sem modal, sem sandbox); abrir um projeto que aponta para a URL antiga `extensions.turbowarp.org/<slug>.js` (carregou a cópia); salvar `.sb3` e reabrir (o bloco continua). Nenhum host externo contatado. **Limite:** não foi feito teste funcional de cada bloco.
- **Item 1:** licença conferida no cabeçalho de cada arquivo (`LICENSES.md`).
- **Item 10:** nomes, descrições e capas conferidos; nada inadequado para sala de aula.

## Observação para quem mantém

Ao salvar no DJDE Studio, o projeto passa a gravar a URL da **galeria DJDE** (`…/djdestudio/galeria/<slug>.js`), não a da TurboWarp. **O endereço desta pasta não pode mudar**, ou projetos salvos deixam de achar as extensões.

## Lote 1 — 12/10/2026

| Slug | id | SHA-256 publicado | 1 Lic. | 2 Rede | 3 Remoto | 4 Eval | 5 Storage | 6 VM | 7 Mídia | 8 Janela | 9 Uso | 10 Sala | Resultado |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `lab/text` | `text` | `ddee6790dacc1c3cde9093eeed3b5d975554cede7ff5a2537474b243e1d0ddf7` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `stretch` | `stretch` | `e908eadfa754c4a64f9b8164da273db3235c5a4c9a67d7566a4bdec03feae277` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `JeremyGamer13/tween` | `jeremygamerTweening` | `ad56f2f2f0c2f286fbdab7eb41c505e16df8549603a3c42b9bbc12e8ff413892` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `SharkPool/Camera` | `SPcamera` | `e6bc383180417e668e707ecf398bc4698d1071d8f7ffc9a7b1fcf30c26545a1c` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `box2d` | `griffpatch` | `45a7e682f00d2210e54f6e7c4247fd8d575145a6ec8711e4af54a7459060f0b8` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `gamepad` | `Gamepad` | `d09d52e733188276dae9785cf30b64fa017977cacde6b12767e98694a1c502d2` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `Lily/ClonesPlus` | `lmsclonesplus` | `8b2e530f5f515e0cc44ae65cc29d794686e61c31113955ccf5ff3f0317924a49` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `Lily/MoreEvents` | `lmsMoreEvents` | `16d5808f0b1f2a943fd43c3f1e2aa82dd827a317d6d3fa8f7adcf321272c336b` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `local-storage` | `localstorage` | `ca82474d678530c2052e4434c91446e7153ec8a960d96e6f9ceeca165eb016be` | ok | ok | ok | ok | just. | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `NOname-awa/graphics2d` | `nonameawagraph` | `f05bac10da2e50873c12c1cc8a391cd7fc50cf2312b31a4d4ad74d3ec96de0b4` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `qxsck/data-analysis` | `qxsckdataanalysis` | `a123ed406c68d23b871eaee72f348dd52d1cc349fcc8ade1c06a0b06e29b7c75` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `true-fantom/math` | `truefantommath` | `c7a46df956add4e86c5e26055a475b2556c41bd0c6f699df9e30e4704508c164` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `text` | `strings` | `165504a4d6958a603f3eff91211a5968ddcbe5ee18519c821dfaeeab2c8d5a0e` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `Lily/ListTools` | `lmsData` | `ae1eb738d82605dc544f3217019baba7fa54ddadda39cb8f80bd9cc524e61ec7` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |
| `-SIPC-/time` | `sipctime` | `e5810793534aff721eea9f6b87fa70455e26810d7487d513a86bccddc608df50` | ok | ok | ok | ok | ok | ok | ok | ok | ok | ok | **aprovada (Neo)** |

### Observações por extensão

- **`lab/text`**: Usa Scratch.vm só para fontes do projeto e atualizar blocos (itens 5/6 ok). Aviso "replaceUnsafeChars" no console ao carregar projeto sintético; sem efeito visível.
- **`SharkPool/Camera`**: Câmera do PALCO (move a área visível), não webcam: nenhum getUserMedia (item 7 n/a).
- **`box2d`**: Dependência earcut 3.0.2 embutida no arquivo (o import do CDN aparece só em comentário; item 3 ok). Arquivo grande (594 KB). Usa Scratch.vm/renderer para física e colisão, coerente com os blocos (item 6 ok).
- **`gamepad`**: Sem dependência externa. Lê navigator.getGamepads (API de controle, não é câmera/microfone; item 7 n/a).
- **`Lily/ClonesPlus`**: Usa Scratch.vm.runtime para clones (16 usos), coerente com os blocos (item 6 ok).
- **`local-storage`**: Item 5 com justificativa: grava no localStorage, mas só em chaves com prefixo "extensions.turbowarp.org/local-storage:" + namespace do projeto; não alcança as chaves do editor ("tw:…"). Função declarada da extensão.
- **`true-fantom/math`**: Aviso "replaceUnsafeChars" no console ao carregar projeto sintético; sem efeito visível.
