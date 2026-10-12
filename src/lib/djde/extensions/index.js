// DJDE Studio: extensões embutidas que substituem as originais do scratch-vm.
// Registradas antes de qualquer projeto carregar; um projeto antigo que use o mesmo id
// recebe a versão DJDE (extension-manager.js: builtinExtensions é por instância).

import DJDETranslateBlocks from './translate';
import DJDEText2SpeechBlocks from './text2speech';

const registerDJDEExtensions = vm => {
    vm.extensionManager.addBuiltinExtension('translate', DJDETranslateBlocks);
    vm.extensionManager.addBuiltinExtension('text2speech', DJDEText2SpeechBlocks);
};

export default registerDJDEExtensions;
