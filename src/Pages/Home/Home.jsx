import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreProduct from '../../Components/ExploreProduct/ExploreProduct'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreProduct category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
    </div>
  )
}

export default Home