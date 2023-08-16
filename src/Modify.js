import React from 'react';
import Mheader from './Mheader';
import Mcontent from './Mcontent';

function Modify({cusBrand, setCusBrand, input,getInput}) {
    return (
        <div>
            <Mheader cusBrand={cusBrand} input={input} />
            <Mcontent setCusBrand={setCusBrand} input={input} getInput={getInput}/>
        </div>
    );
}

export default Modify;