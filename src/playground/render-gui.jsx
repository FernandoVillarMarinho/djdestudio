import React from 'react';
import GUI from '../containers/gui.jsx';

// DJDE Studio: variáveis de nuvem desligadas (D-07). Nenhum servidor de nuvem é contatado.

const RenderGUI = props => (
    <GUI
        cloudHost={null}
        canUseCloud={false}
        hasCloudPermission={false}
        canSave={false}
        basePath={process.env.ROOT}
        canEditTitle
        enableCommunity
        {...props}
    />
);

export default RenderGUI;
