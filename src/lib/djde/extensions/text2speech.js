// DJDE Studio (D-07, D-15): extensão "Texto para Fala" sem servidor externo.
// Herda a original do scratch-vm (mesmo id, mesmos blocos, vozes e idiomas) e troca a
// chamada a synthesis-service.scratch.mit.edu pela voz do próprio navegador
// (Web Speech API). Sem suporte no navegador, o bloco termina sem som, como a original
// faz quando o servidor falha.

import Cast from 'scratch-vm/src/util/cast';
import Scratch3Text2SpeechBlocks from 'scratch-vm/src/extensions/scratch3_text2speech';

// Mesmo limite de texto da original.
const MAX_CHARS = 128;

// A voz do navegador não escolhe gênero; as vozes do Scratch viram altura e velocidade.
const VOICE_PARAMS = {
    ALTO: {pitch: 1, rate: 1},
    TENOR: {pitch: 0.7, rate: 1},
    SQUEAK: {pitch: 2, rate: 1.2},
    GIANT: {pitch: 0.1, rate: 0.8},
    KITTEN: {pitch: 1.8, rate: 1.1}
};

// Códigos do serviço do Scratch que não são BCP 47 para o navegador.
const BROWSER_LOCALE = {
    'arb': 'ar',
    'cmn-CN': 'zh-CN'
};

// Se o navegador nunca disparar "end" (acontece em alguns), o bloco não pode travar a
// thread para sempre: termina após um tempo proporcional ao texto.
const fallbackTimeoutMs = text => 2000 + (text.length * 150);

const getSynth = () => {
    try {
        return (typeof window !== 'undefined' && window.speechSynthesis) || null;
    } catch (e) {
        return null;
    }
};

class DJDEText2SpeechBlocks extends Scratch3Text2SpeechBlocks {
    _stopAllSpeech () {
        super._stopAllSpeech();
        const synth = getSynth();
        if (synth) synth.cancel();
    }

    speakAndWait (args, util) {
        const synth = getSynth();
        if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
            return Promise.resolve();
        }

        const state = this._getState(util.target);
        let words = Cast.toString(args.WORDS);
        let locale = this._getSpeechSynthLocale();
        if (state.voiceId === 'KITTEN') {
            words = words.replace(/\S+/g, 'meow');
            locale = this.LANGUAGE_INFO[this.DEFAULT_LANGUAGE].speechSynthLocale;
        }
        words = words.substring(0, MAX_CHARS);

        const params = VOICE_PARAMS[state.voiceId] || VOICE_PARAMS.ALTO;
        const utterance = new SpeechSynthesisUtterance(words);
        utterance.lang = BROWSER_LOCALE[locale] || locale;
        utterance.pitch = params.pitch;
        utterance.rate = params.rate;

        return new Promise(resolve => {
            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                clearTimeout(timeout);
                resolve();
            };
            const timeout = setTimeout(finish, fallbackTimeoutMs(words));
            utterance.onend = finish;
            utterance.onerror = finish;
            try {
                synth.speak(utterance);
            } catch (e) {
                finish();
            }
        });
    }
}

export default DJDEText2SpeechBlocks;
