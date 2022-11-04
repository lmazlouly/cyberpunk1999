import React from "react";
import Header from "./../components/Header";
import Background from "./../components/Background";
import Characters from "./../components/Characters"



function David() {
    return(
        <section>
            <Background name='background david'/>
            <Header/>
            <Characters/>
        </section>
    );
}

export default David;