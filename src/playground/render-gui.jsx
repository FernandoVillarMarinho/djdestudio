import React from 'react';
import GUI from '../containers/gui.jsx';

// DJDE Studio: variáveis de nuvem desligadas (D-07). Nenhum servidor de nuvem é contatado.
// DJDE Studio: sem enableCommunity, some o botão "Veja a Página do Projeto" (scratch.mit.edu) até o servidor DJDE (M4).

const RenderGUI = props => (
    <GUI
        cloudHost={null}
        canUseCloud={false}
        hasCloudPermission={false}
        canSave={false}
        basePath={process.env.ROOT}
        canEditTitle
        {...props}
    />
);

export default RenderGUI;
