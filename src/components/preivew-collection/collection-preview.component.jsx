
import React , {Component} from "react";
import './collection-preview.styles.css'

const CollectionPreview = ({title, items}) =>{
    // remember, these things ^ are the props, which are passed in terms of js. 
    <div className="collection-preivew">

        {/* Aight, so this is basically the thing which would be displayed under the main section  */}
        <h1 className="title">{title.toUpperCase()}</h1>

        <div className="preview">
            
            {items
                .filter( (item, idx) => idx<4)
                .map(item => (
                // and this basically means that we're just returning a div. 
                <div key = {item.id}> {item.name} </div>
            ))}

        </div>

    </div>
}

export default CollectionPreview;