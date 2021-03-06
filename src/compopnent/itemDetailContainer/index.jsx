import React from 'react';
import Products from '../itemList/itemList';
import ItemDetail from '../itemDetail' ;

const getItems = new Promise((res, rej)=>{
    setTimeout(() => {
        res(Products)
    }, 2000);
})
const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = React.useState()

    React.useEffect(()=>{
        getItems.then((Products)=>{
            setItemDetail(Products[0])
        })

    },[])


    return(
        <>

            {itemDetail ? <ItemDetail item={itemDetail} /> : null}

        </>

)   
}
export default ItemDetailContainer; 