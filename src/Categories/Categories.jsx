import React, { Component } from 'react';
import axios from 'axios';

let apiKey ='NYEj1uiiXqIHNO07eYF40ZePRJek7o1v';
let apiScecret = 'ajIvWpyFx1e6emkW';

export default class Categories extends Component {
    state={
        data: []
    }

    componentDidMount(){

    }

    render() {
        return (
            <section>
                <h2>Trending Images/Contributors</h2>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </section>
        )
    }
}
