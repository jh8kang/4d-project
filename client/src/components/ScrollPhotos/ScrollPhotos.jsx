import React, {Component} from 'react';
import './ScrollPhotos'
import axios from 'axios';

const applicationKey = "1dtGOdhNfXviwBcAMjesOeMbtpK1jmBP";
const applicationClientSecret = "byTVZU5BIWCPkeKQ";
const token = 'v2/MWR0R09kaE5mWHZpd0JjQU1qZXNPZU1idHBLMWptQlAvMjkyMTc2MzE3L2N1c3RvbWVyLzMvU09ZRDRCaWd6aGZ0ZzctbXhiWFJoUnJ3dURoZFQtOGVrZHdVZ0xVMTh5SXkwaFdqLUlEM0xZZElFSjJtc3B5Z2xvYXJaYkJWVGNLbUNSQ0trQUZwRGJGdFpCeW1BSDJMcDktR0JJTTNzYjNJWFNUaUtmUjdqZ0JzMUxsRXRFbjdia1JneFN0MWpwdEVKcXc0ajVKbUNZTGI2RHdyak9YeFlDRThOVFpWS0dFdEJRX0w2R2dRSjVZSDBRaFk0Ykp1R1pnWThNakVaYnpkZjNXXzJCM3BBdw'

class ScrollPhotos extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
        }
    }
    componentDidMount() {
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
    }
    
    render() {
        return (
            <div className="scroll-container">
                <h2 className="scroll-container__heading">View Title</h2>
                <div className="scroll-container__wrapper">
                    {this.state.photos.map(project=> 
                       
                        <div className="card">
                            <h2>idk</h2>
                        </div>  
                    )}
                </div>
            </div>
        )

    }
    
}

export default ScrollPhotos


