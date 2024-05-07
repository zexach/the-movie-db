import React from "react";
import './ItemList.scss'
import { IMedia } from "../../../models/media";
import NoResults from "../../NoResults/Noresults";
import ItemCard from "../ItemCard/ItemCard";

type Props = {
    children?: React.ReactNode,
    itemList: IMedia[]
}

const ItemList: React.FC<Props> = ({ itemList }) => {

    return(
        <>
        <div className="item-list">
            { itemList ? itemList.map((item) => <ItemCard key={item.id} item={item} />) : <NoResults message="No results were found" /> }
        </div>
        </>
    );
}

export default ItemList;