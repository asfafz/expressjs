import React, {useContext} from 'react';
import {BioData} from './CompA';
function CompC() {
const channelname  = useContext(BioData);
    return (

        <h1>Comp C {channelname}</h1>

    );
}

export default CompC;