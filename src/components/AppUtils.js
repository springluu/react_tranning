import React from "react";

export async function inputChange (e, setState) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(
        setState
    )
    // setState( {
    //     [name] : value
    // });
};

export default {
    inputChange
};
