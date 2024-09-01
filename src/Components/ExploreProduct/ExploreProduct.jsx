import React from 'react';
import './ExploreProduct.css';
import { product_list } from '../../assets/assets';

function ExploreProduct({ category, setCategory }) {
  return (
    <div className='explore-product' id='explore-product'>
      <h1>Explore Our Products</h1>
      <p className='explore-product-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <div className='explore-product-list'>
        {product_list.map((item, index) => (
          <div
            onClick={() => {
              const newCategory = category === item.product_name ? 'All' : item.product_name;
              setCategory(newCategory);
              console.log('Selected Category:', newCategory);
            }}
            key={index}
            className={`explore-product-list-item ${category === item.product_name ? 'active' : ''}`}
          >
            <img
              src={item.product_image}
              alt={item.product_name}
              width={100}
            />
            <p>{item.product_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreProduct;
