// DJDE Studio: galeria de extensões DJDE (D1–D3 de Villar, 12/10/2026).
// Mora em /djdestudio/galeria/ no próprio Pages; o build recebe a raiz em DJDE_GALLERY_URL
// (com barra final). Vazia = sem galeria: nada é confiável por aqui e nada é buscado.
//
// Itens copiados da galeria TurboWarp mantêm o mesmo caminho (slug), então um projeto antigo
// que aponte para https://extensions.turbowarp.org/<slug>.js passa a carregar a cópia DJDE.

const GALLERY_ROOT = process.env.DJDE_GALLERY_URL || '';
const TURBOWARP_GALLERY_ROOT = 'https://extensions.turbowarp.org/';

let gallerySlugs = null;
let gallerySlugsPromise = null;

/**
 * Lê o catálogo da galeria DJDE uma vez (formato extensions-v0.json).
 * @returns {Promise<Set<string>>} slugs publicados na galeria DJDE
 */
const loadGallerySlugs = () => {
    if (!GALLERY_ROOT) {
        gallerySlugs = new Set();
        return Promise.resolve(gallerySlugs);
    }
    if (!gallerySlugsPromise) {
        gallerySlugsPromise = fetch(`${GALLERY_ROOT}generated-metadata/extensions-v0.json`)
            .then(res => (res.ok ? res.json() : {extensions: []}))
            .then(data => new Set((data.extensions || []).map(extension => extension.slug)))
            .catch(() => new Set())
            .then(slugs => {
                gallerySlugs = slugs;
                return slugs;
            });
    }
    return gallerySlugsPromise;
};

const normalizeURL = url => {
    try {
        return new URL(url).href;
    } catch (e) {
        return null;
    }
};

/**
 * @param {string} url URL de uma extensão
 * @returns {boolean} true se a URL está dentro do prefixo da galeria DJDE (não vale o github.io inteiro)
 */
const isDJDEGalleryURL = url => {
    if (!GALLERY_ROOT) return false;
    const normalized = normalizeURL(url);
    return normalized !== null && normalized.startsWith(GALLERY_ROOT);
};

/**
 * @param {string} url URL de uma extensão
 * @returns {boolean} true se a URL aponta para a galeria TurboWarp
 */
const isTurboWarpGalleryURL = url => {
    const normalized = normalizeURL(url);
    return normalized !== null && normalized.startsWith(TURBOWARP_GALLERY_ROOT);
};

/**
 * Só responde depois de loadGallerySlugs() ter terminado.
 * @param {string} url URL de uma extensão da galeria TurboWarp
 * @returns {string|null} URL da cópia na galeria DJDE, ou null se não houver cópia
 */
const toDJDEGalleryURL = url => {
    if (!GALLERY_ROOT || !gallerySlugs || !isTurboWarpGalleryURL(url)) return null;
    const slug = normalizeURL(url)
        .slice(TURBOWARP_GALLERY_ROOT.length)
        .replace(/[?#].*$/, '')
        .replace(/\.js$/, '');
    return gallerySlugs.has(slug) ? `${GALLERY_ROOT}${slug}.js` : null;
};

export {
    GALLERY_ROOT,
    loadGallerySlugs,
    isDJDEGalleryURL,
    isTurboWarpGalleryURL,
    toDJDEGalleryURL
};
