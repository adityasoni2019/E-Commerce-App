
import React , {Component} from "react";
import './collection-preview.styles.css'

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) =>(

    // remember, these things ^ are the props, which are passed in terms of js. 
    <div className="collection-preivew">

        {/* Aight, so this is basically the thing which would be displayed under the main section  */}
        <h1 className="title">{title.toUpperCase()}</h1>

        <div className="preview">
            
            {items
                .filter( (item, idx) => idx<4)
                .map(({id,name_text_value , ...everythingElse}) => (
                    // and this basically means that we're just returning a div. 
                    <CollectionItem key = {id} name_text_value = {name_text_value} {...everythingElse} />
            ))}

        </div>

    </div>

)

export default CollectionPreview;