import React, {Component} from 'react';
import './Insights.scss';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

import face1 from '../../assets/images/faces/face1.png';
import face2 from '../../assets/images/faces/face2.png';
import face3 from '../../assets/images/faces/face3.png';
import face4 from '../../assets/images/faces/face4.png';
import die1 from '../../assets/images/tiedie/die1.png';
import die2 from '../../assets/images/tiedie/die2.png';
import die3 from '../../assets/images/tiedie/die3.png';
import iden1 from '../../assets/images/identity/identity1.png';
import iden2 from '../../assets/images/identity/identity2.png';
import iden3 from '../../assets/images/identity/identity3.png';
import iden4 from '../../assets/images/identity/identity4.png';
import iden5 from '../../assets/images/identity/identity5.png';
import life1 from '../../assets/images/innerlife/life1.png';
import life2 from '../../assets/images/innerlife/life2.png';
import life3 from '../../assets/images/innerlife/life3.png';
import life4 from '../../assets/images/innerlife/life4.png';
import life5 from '../../assets/images/innerlife/life5.png';
import fan1 from '../../assets/images/fan/fantasy1.png';
import fan2 from '../../assets/images/fan/fantasy2.png';
import fan3 from '../../assets/images/fan/fantasy3.png';
import fan4 from '../../assets/images/fan/fantasy4.png';

const applicationKey = "1dtGOdhNfXviwBcAMjesOeMbtpK1jmBP";
const applicationClientSecret = "byTVZU5BIWCPkeKQ";
const token = 'v2/MWR0R09kaE5mWHZpd0JjQU1qZXNPZU1idHBLMWptQlAvMjkyMTc2MzE3L2N1c3RvbWVyLzMvU09ZRDRCaWd6aGZ0ZzctbXhiWFJoUnJ3dURoZFQtOGVrZHdVZ0xVMTh5SXkwaFdqLUlEM0xZZElFSjJtc3B5Z2xvYXJaYkJWVGNLbUNSQ0trQUZwRGJGdFpCeW1BSDJMcDktR0JJTTNzYjNJWFNUaUtmUjdqZ0JzMUxsRXRFbjdia1JneFN0MWpwdEVKcXc0ajVKbUNZTGI2RHdyak9YeFlDRThOVFpWS0dFdEJRX0w2R2dRSjVZSDBRaFk0Ykp1R1pnWThNakVaYnpkZjNXXzJCM3BBdw'

class Insights extends Component {
    constructor() {
        super();
        this.state = {
            design: [face1, face2, face3, face4, die1, die2, die3],
            fantasy: [fan1, fan2, fan3, fan4],
            identity: [iden1, iden2, iden3, iden4, iden5],
            innerlife:[life1, life2, life3, life4, life5]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="insights__box">
                <h2>Insights</h2>
                    <div className="insights__box__row">

                        <div className="insight">
                            <p className="insight__title">Design</p>

                            <div className="insight__box">
                                {this.state.design.map(image=> {
                                    return <img key={uuid()} src={image} className="insight__img"/>
                                })}
                            </div>
                        </div>
            
                        <div className="insight">
                            <p className="insight__title">Fantasy</p>
                            <div className="insight__box">
                                {this.state.fantasy.map(image=> {
                                    return <img key={uuid()} src={image} className="insight__img"/>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="insights__box__row">
                        <div className="insight">
                            <p className="insight__title">Identity</p>
                            <div className="insight__box">
                                {this.state.identity.map(image=> {
                                    return <img key={uuid()} src={image} className="insight__img"/>
                                })}
                            </div>
                        </div>
                        <div className="insight">
                            <p className="insight__title">Inner Life</p>
                            <div className="insight__box">
                                {this.state.innerlife.map(image=> {
                                    return <img key={uuid()} src={image} className="insight__img"/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Insights


