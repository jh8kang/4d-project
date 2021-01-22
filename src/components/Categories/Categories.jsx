import React, { Component } from 'react';
import axios from 'axios';
import './Categories.scss';
import NavBarTrends from '../NavBarTrends/NavBarTrends';

let apiKey = 'NYEj1uiiXqIHNO07eYF40ZePRJek7o1v';
let apiScecret = 'ajIvWpyFx1e6emkW';
let apiToken = 'v2/TllFajF1aWlYcUlITk8wN2VZRjQwWmVQUkplazdvMXYvMjkyMTg0Mzk3L2N1c3RvbWVyLzMvWlpZc3J0Z1RxY2VhWENkbWZka1RPR0NMcl85S1V5cDNCVFEwXzF6OWwyZGVheWkxdVJ2SEFkOUkzVDR4ZUZVNnRDUU1ZWW9kQ093ejlIMks4eEVGc3NZMHJSam9scWpVMXFOMHUybmp1dFExRlJ6UVRIallNR1dJVVMzbXMzVzlNbm9HdjhuRWJwRkJaeDJJaVBlaDZ3X2JZNWtpT3NpbXBHNUNTS3RLQ1Zma2ZldHk3NDhpeE9HSUVaRU5kSHUzX2NDQklzSFZaQzlxZVJsVnNZOVV0Zw';

export default class Categories extends Component {
    state = {
        cat1: [],
        vid: []
    }

    componentDidMount() {
        axios.get(`https:/api.shutterstock.com/v2/images/search`, {
            params: {
                query: "urban",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        })
            .then(
                item => {
                    console.log(item.data.data);
                    this.setState({ cat1: [item.data.data[0], item.data.data[2], item.data.data[3], item.data.data[4], item.data.data[5], item.data.data[6]] })
                }
            ).catch(error => console.log(error));

        //video API call
        axios.get(`https:/api.shutterstock.com/v2/videos/search`, {
            params: {
                query: "urban",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        })
            .then(
                item => {
                    console.log(item.data.data);
                    this.setState({
                        vid: [
                            item.data.data[0], item.data.data[1]
                        ]
                    })
                }
            ).catch(error => console.log(error));


    }


    exercise = (e) => {
        axios.get(`https:/api.shutterstock.com/v2/images/search`, {
            params: {
                query: "exercise",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        }).then(img2 => {
            console.log(img2.data.data);
            this.setState({ cat1: [img2.data.data[0], img2.data.data[2], img2.data.data[3], img2.data.data[4], img2.data.data[5], img2.data.data[6]] })
        })

        //video API call
        axios.get(`https:/api.shutterstock.com/v2/videos/search`, {
            params: {
                query: "exercise",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        })
            .then(
                item => {
                    console.log(item.data.data);
                    this.setState({
                        vid: [
                            item.data.data[0], item.data.data[1]
                        ]
                    })
                }
            ).catch(error => console.log(error));
    }

    farmhouse = (e) => {
        axios.get(`https:/api.shutterstock.com/v2/images/search`, {
            params: {
                query: "farmhouse",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        }).then(img2 => {
            console.log(img2.data.data);
            this.setState({ cat1: [img2.data.data[0], img2.data.data[2], img2.data.data[3], img2.data.data[4], img2.data.data[5], img2.data.data[6]] })
        })

        //video API call
        axios.get(`https:/api.shutterstock.com/v2/videos/search`, {
            params: {
                query: "farmhouse",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        })
            .then(
                item => {
                    console.log(item.data.data);
                    this.setState({
                        vid: [
                            item.data.data[0], item.data.data[1]
                        ]
                    })
                }
            ).catch(error => console.log(error));
    }

    sport = (e) => {
        axios.get(`https:/api.shutterstock.com/v2/images/search`, {
            params: {
                query: "football",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        }).then(img2 => {
            console.log(img2.data.data);
            this.setState({ cat1: [img2.data.data[0], img2.data.data[2], img2.data.data[3], img2.data.data[4], img2.data.data[5], img2.data.data[6]] })
        })

        //video API call
        axios.get(`https:/api.shutterstock.com/v2/videos/search`, {
            params: {
                query: "football",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        })
            .then(
                item => {
                    console.log(item.data.data);
                    this.setState({
                        vid: [
                            item.data.data[0], item.data.data[1]
                        ]
                    })
                }
            ).catch(error => console.log(error));
    }

    render() {
        return (
            <section className="categories">
                <NavBarTrends />
                <h2 className="categories__title">Trending Images/Contributors</h2>
                <div className="categories__gallery">
                    <div className="categories__gallery__col1">
                        <p
                            onClick={this.exercise}
                            className="categories__gallery__text">exercise</p>
                        <p
                            onClick={this.farmhouse}
                            className="categories__gallery__text">vintage</p>
                        <p
                            onClick={this.sport}
                            className="categories__gallery__text">sport</p>
                    </div>

                    <div className="categories__gallery__col2">

                        <div className="categories__gallery__card">
                            {this.state.vid.map(url => {
                                return <video
                                    className="categories__gallery__img"
                                    key={url.id}
                                    src={url.assets.preview_webm.url}
                                    controls></video>
                            })}
                        </div>

                        <div className="categories__gallery__vid-card">
                            {this.state.cat1.map(item => {
                                return <div className="categories__gallery__card"
                                    key={item.id}>

                                    <img
                                        className="categories__gallery__img"
                                        src={item.assets.huge_thumb.url}
                                        alt="category" />
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
