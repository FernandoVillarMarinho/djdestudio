// DJDE Studio: celular = jogar, tablet/computador = programar.
// Celular = tela de toque cuja menor dimensão é < 600 px (iPad e tablets ficam no editor).

const isPhone = () => {
    try {
        const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
        return Boolean(coarse) && Math.min(window.screen.width, window.screen.height) < 600;
    } catch (e) {
        return false;
    }
};

// ?editor=1 abre o editor mesmo no celular.
const wantsEditorAnyway = () => new URLSearchParams(location.search).get('editor') === '1';

export {
    isPhone,
    wantsEditorAnyway
};
