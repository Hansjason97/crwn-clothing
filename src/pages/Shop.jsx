import React, { Component } from "react";
import SHOP_DATA from "../data/shopData";
import PreviewCollection from "../components/PreviewCollection";

class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
       const {collections} = this.state;
        return <div className="shopPage">
            {
                collections.map(({id, ...otherCollectionProps})=>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>;
    }
}

export default ShopPage;