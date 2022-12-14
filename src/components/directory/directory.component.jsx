import { computeHeadingLevel, getByTitle } from '@testing-library/react';
import React, { Component } from 'react';

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.css'
// import './directory.styles.scss'


class Directory extends Component{
    constructor(){
        // this is where everything's going to happen. 
        super();

        this.state = {
            // sections = [...]
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: '',
                  size: 'large'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: '',
                    size: 'large'
                }
              ]
        }

    }

    render(){

        return( 
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, title, imageUrl, size}) =>(
                        <MenuItem key={id} title = {title} imageUrl = {imageUrl} size = {size}/>
                    ))
                }
            </div>
        )

    }
}

export default Directory;