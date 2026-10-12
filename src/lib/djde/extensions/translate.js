// DJDE Studio (D-07, D-15): extensão "Traduzir" sem servidor externo.
// Herda a original do scratch-vm (mesmo id, mesmos blocos, menus e textos) e só troca
// a chamada a trampoline.turbowarp.org: o bloco devolve o texto sem traduzir, que é o
// mesmo resultado da original quando o servidor falha. Projetos antigos continuam abrindo.

import Scratch3TranslateBlocks from 'scratch-vm/src/extensions/scratch3_translate';

class DJDETranslateBlocks extends Scratch3TranslateBlocks {
    getTranslate (args) {
        return args.WORDS;
    }
}

export default DJDETranslateBlocks;
