import React , {Component} from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        };
    }
    
    render() {
        const {collections} = this.state; 
        // Alternatively, instead of doing this while thign, writing this.state.collections in the below lines, could also have worked.
        return (
        <div className="shop-page">
            {
                collections.map(({id, ...everythinElse}) => (
                    <CollectionPreview  key = {id} {...everythinElse}/>
                // ...everythingElse has - 
                // (parameter) everythinElse: {
                //     title: string;
                //     routeName: string;
                //     items: {}[];
                // }
                ))
            }

            {/* <div > hello</div> */}
                
        </div>
    )}

}

export default ShopPage; 