import React, {useState} from 'react'



const productDetail = ({product}) => {
    const stocks = product.stock
    const initial = 1
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const { addproduct } = useCartContext()
    

    const productQuantity = (count) => {
        setQuantity(count)
    }

    const addToCart = () => {
        addproduct(product, quantity)
        setAdd(true)
    }


    return (
        
        <div className="">
            <div className="">
                <img src={product.img} alt={product.id}/>
            </div>
            <div className="">
                <h3>{product.name}</h3>
                <p className="">{product.descripcion}</p>
                <p className="">{product.precio}</p>
                <productCount stocks={stocks}
                    initial={initial}
                    onAdd={productQuantity}
                />
                <button className="" onClick={addToCart}>Agregar</button>
                <button className="">Comprar Ahora</button>
            </div>
        </div>
           
    )
}

export default productDetail