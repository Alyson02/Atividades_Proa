import React from "react";

function Content() {
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>Minhas</h1>
                        <h1>emoçoes atuais</h1>
                        <br />
                        <h6 className="bold-four">
                            Aqui mostro algumas de minhas emoçoes utilizando o framework react.
                    </h6>
                        <br />
                    </div>
                    <div className="col-sm-9 showcase-img">
                        {/* <div className="circle"></div> */}
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Content;