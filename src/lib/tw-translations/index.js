import twTranslations from './generated-translations.json';
// DJDE Studio: textos próprios (en, pt, pt-br, es). Arquivo nosso, fora do gerado pela TurboWarp.
import djdeTranslations from './djde-translations.json';

const addAdditionalTranslations = editorMessages => {
    for (const locale of Object.keys(editorMessages)) {
        const toMixIn = twTranslations[locale.toLowerCase()];
        if (toMixIn) {
            Object.assign(editorMessages[locale], toMixIn);
        }
        const djde = djdeTranslations[locale.toLowerCase()];
        if (djde) {
            Object.assign(editorMessages[locale], djde);
        }
    }

    // We reuse our `es` translations for `es-419` instead of maintaining separate translations.
    Object.assign(editorMessages['es-419'], twTranslations.es, djdeTranslations.es);
};

export default addAdditionalTranslations;
