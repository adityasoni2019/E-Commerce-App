import React , {Component} from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from '../../components/preivew-collection/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        };
    }
    
    render() {

        return (
        <div className="shop-page">

            {
                this.state.collections.map(({id, title, items, routeName }) => (
                    <CollectionPreview  key = {id} routeName  = {routeName} title = {title} items= {items}/>
                ))
            }

            <div > hello</div>
                
        </div>)
    }

}

export default ShopPage; 