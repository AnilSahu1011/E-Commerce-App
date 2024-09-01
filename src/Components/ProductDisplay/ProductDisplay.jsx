import React, { useContext } from 'react'
import './ProductDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import ProductCard from '../ProductCard/ProductCard'
function ProductDisplay({category}) {

    const {product_about} = useContext(StoreContext)

  return (
    <div className='product-display' id='product-display'>
        <h2>Top Products near you</h2>
        <div className='product-display-list'>
          {
            product_about.map((item,index)=>{
              if(category==="All" || category===item.category)
              {
                return <ProductCard key={index} id = {item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              }
            })
          }
        </div>
    </div>
  )
}

export default ProductDisplay