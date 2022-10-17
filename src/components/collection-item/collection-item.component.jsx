import React from "react";

import "./collection-item.styles.css"

// this component, is the main thing. like, this is the box which has everything (like images, price tag, button, and the prodduct name in it)

const CollectionItem = ({id, price, imageUrl, name_text_value}) => (

    <div className="collection-item">

        <div className="image"
             style = {{
                backgroundImage: `url(${imageUrl})`
             }}  
        />

        <div className="collection-footer">
            <span className="name"> {name_text_value}</span>
            <span className="price"> {price}</span>
        </div>
    </div>
);

export default CollectionItem; 