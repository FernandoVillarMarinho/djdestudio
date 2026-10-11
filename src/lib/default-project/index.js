import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import overrideDefaultProject from '!arraybuffer-loader!./override-default-project.sb3';
import backdrop from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
// DJDE Studio: a Íris (robô do DJDE) substitui o Dango Cat como personagem inicial.
import irisIdle from '!arraybuffer-loader!./iris-idle.png';
import irisWalk1 from '!arraybuffer-loader!./iris-walk-1.png';
import irisWalk2 from '!arraybuffer-loader!./iris-walk-2.png';
/* eslint-enable import/no-unresolved */
import {TextEncoder} from '../tw-text-encoder';

const defaultProject = translator => {
    if (overrideDefaultProject.byteLength > 0) {
        return [{
            id: 0,
            assetType: 'Project',
            dataFormat: 'JSON',
            data: overrideDefaultProject
        }];
    }

    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: '56c24ca4bd6d94884a2e403475721028',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(irisIdle)
    }, {
        id: '8803e072df9f8456a515d697b942a086',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(irisWalk1)
    }, {
        id: '9b0121064975b1320cb433dcf30d8355',
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: new Uint8Array(irisWalk2)
    }];
};

export default defaultProject;
