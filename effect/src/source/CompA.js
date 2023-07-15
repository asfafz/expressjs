import React, {createContext} from 'react';
import CompB from './CompB';

const BioData = createContext();

function CompA() {
    return (

        <BioData.Provider value={"Masood Textile Mills"}>
        <CompB />
        </BioData.Provider>

    );
}

export default CompA;
export {BioData}