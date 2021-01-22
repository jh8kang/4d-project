import React, {Component} from 'react';
import './Insights.scss';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

const applicationKey = "1dtGOdhNfXviwBcAMjesOeMbtpK1jmBP";
const applicationClientSecret = "byTVZU5BIWCPkeKQ";
const token = 'v2/MWR0R09kaE5mWHZpd0JjQU1qZXNPZU1idHBLMWptQlAvMjkyMTc2MzE3L2N1c3RvbWVyLzMvU09ZRDRCaWd6aGZ0ZzctbXhiWFJoUnJ3dURoZFQtOGVrZHdVZ0xVMTh5SXkwaFdqLUlEM0xZZElFSjJtc3B5Z2xvYXJaYkJWVGNLbUNSQ0trQUZwRGJGdFpCeW1BSDJMcDktR0JJTTNzYjNJWFNUaUtmUjdqZ0JzMUxsRXRFbjdia1JneFN0MWpwdEVKcXc0ajVKbUNZTGI2RHdyak9YeFlDRThOVFpWS0dFdEJRX0w2R2dRSjVZSDBRaFk0Ykp1R1pnWThNakVaYnpkZjNXXzJCM3BBdw'


class Insights extends Component {
    constructor() {
        super();
        this.state = {
            zoom: [],
            innerLife: [],
            exercise: [],
            greenFoods:[]
        }
    }

    componentDidMount(){
        axios
        .get(`https:/api.shutterstock.com/v2/images/search`, {
          params: {
            query: "zoom background",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((res) => {
          this.setState({
            zoom: [res.data.data[0], res.data.data[1], res.data.data[2], res.data.data[3]],
          })
        })

        axios
        .get(`https:/api.shutterstock.com/v2/images/search`, {
          params: {
            query: "home life",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((res) => {
          this.setState({
            innerLife: [res.data.data[4], res.data.data[5], res.data.data[6], res.data.data[7]],
          })
        })

        axios
        .get(`https:/api.shutterstock.com/v2/images/search`, {
          params: {
            query: "exercise",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((res) => {
          this.setState({
            exercise: [res.data.data[4], res.data.data[5], res.data.data[6], res.data.data[7]],
          })
        })

        axios
        .get(`https:/api.shutterstock.com/v2/images/search`, {
          params: {
            query: "green foods",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((res) => {
          this.setState({
            greenFoods: [res.data.data[4], res.data.data[5], res.data.data[6], res.data.data[7]],
          })
        })


    }
    render() {
        return (
            <div className="container">
                <h2>Insights</h2>
                <div className="insights__box">
                    <div className="insights__box__row">

                        <div className="insight">
                            <p className="insight__title">Zoom Backgrounds</p>
                            <div className="insight__box">
                                {this.state.zoom.map(image=> {
                                    console.log(image.assets)
                                    return <img src={image.assets.large_thumb.url} className="insight__img"/>
                                })}
                            </div>
                        </div>
                        <div className="insight">
                            <p className="insight__title">Inner Life</p>
                            <div className="insight__box">
                                {this.state.innerLife.map(image=> {
                                    console.log(image.assets)
                                    return <img src={image.assets.large_thumb.url} className="insight__img"/>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="insights__box__row">
                        <div className="insight">
                            <p className="insight__title">Exercise</p>
                            <div className="insight__box">
                                {this.state.exercise.map(image=> {
                                    console.log(image.assets)
                                    return <img src={image.assets.large_thumb.url} className="insight__img"/>
                                })}
                            </div>
                        </div>
                        <div className="insight">
                            <p className="insight__title">Green Foods</p>
                            <div className="insight__box">
                                {this.state.greenFoods.map(image=> {
                                    console.log(image.assets)
                                    return <img src={image.assets.large_thumb.url} className="insight__img"/>
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
