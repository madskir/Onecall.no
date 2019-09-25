import React from 'react';
import Logo from '../assets/OneCall_logo.png';

class Index extends React.Component {
    state = {
        shortcuts : [
            "Bli kunde",
            "DelBetaling",
            "Utlandspriser",
            "WiFi Tale",
            "Priser",
            "Fylle på saldo",
            "Se forbruk",
            "Mine Fakturaer",
            "PIN- og PUK kode",
            "Endre abonnent",
            "Aktiver SIM-kort",
            "Kjøp mobildata"
        ]
    }

    render() {
        const items = this.state.shortcuts.map((item) =>
            <li>{item}<hr/></li>
        );
        return (     
            <div className="wrapper">
                <div className="container">
                    <div className="title">
                        <h3>Snarveier</h3>
                        <br/>
                    </div>   
                    <div className="shortcuts">
                        <ul>{items}</ul>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/> 
                <br/>
                <br/>
                <br/>
                <br/>                     
                <div class="row">
                    <div class="column">
                        <div class="card">                            
                            <img src={Logo} className="App-logo" height="220px" alt="logo" />
                            <br/>
                            <button className="btn btn-danger">Bestill nå</button>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Logo} className="logo" height="220px" alt="logo" />
                            <br/>
                            <button className="btn btn-danger float-right">Bestill</button>                                 
                        </div>
                    </div>                    
                </div>     
                <button type="button" class="btn btn-outline-danger text-align-center">Se våre mobilabonnement</button>   
                <br/>              
            </div>
        );
    }
}

export default Index;
