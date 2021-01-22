import React, { Component } from 'react';
import axios from 'axios';
import './Categories.scss';

let apiKey = 'NYEj1uiiXqIHNO07eYF40ZePRJek7o1v';
let apiScecret = 'ajIvWpyFx1e6emkW';
let apiToken = 'v2/TllFajF1aWlYcUlITk8wN2VZRjQwWmVQUkplazdvMXYvMjkyMTg0Mzk3L2N1c3RvbWVyLzMvWlpZc3J0Z1RxY2VhWENkbWZka1RPR0NMcl85S1V5cDNCVFEwXzF6OWwyZGVheWkxdVJ2SEFkOUkzVDR4ZUZVNnRDUU1ZWW9kQ093ejlIMks4eEVGc3NZMHJSam9scWpVMXFOMHUybmp1dFExRlJ6UVRIallNR1dJVVMzbXMzVzlNbm9HdjhuRWJwRkJaeDJJaVBlaDZ3X2JZNWtpT3NpbXBHNUNTS3RLQ1Zma2ZldHk3NDhpeE9HSUVaRU5kSHUzX2NDQklzSFZaQzlxZVJsVnNZOVV0Zw';

export default class Categories extends Component {
    state = {
        cat1: [],
        cat2: []
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
                    this.setState({ cat1: [item.data.data[0], item.data.data[2], item.data.data[3]] })
                }
            ).catch(error => console.log(error));

        axios.get(`https:/api.shutterstock.com/v2/images/search`, {
            params: {
                query: "farmhouse",
            },
            headers: {
                Authorization: `Bearer ${apiToken}`,
            }
        }).then(img2 => {
            console.log(img2.data.data);
            this.setState({ cat2: [img2.data.data[0], img2.data.data[2], img2.data.data[3]] })
        })
    }

    render() {
        return (
            <section className="categories">
                <h2 className="categories__title">Trending Images/Contributors</h2>
                <div className="categories__gallery">

                    {this.state.cat1.map(item => {
                        return <div className="categories__gallery__card">
                            <p className="categories__gallery__text">exercise</p>
                            <img
                                className="categories__gallery__img"
                                src={item.assets.huge_thumb.url}
                                alt="category" />
                        </div>
                    })}

                    {this.state.cat2.map(item => {
                        return <div className="categories__gallery__card">
                            <p className="categories__gallery__text">
                                farmhouse
                            </p>
                            <img
                                className="categories__gallery__img"
                                src={item.assets.huge_thumb.url}
                                alt="category" />
                        </div>
                    })}


                </div>
            </section>
        )
    }
}
