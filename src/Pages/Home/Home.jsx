import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreProduct from '../../Components/ExploreProduct/ExploreProduct'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
import BrandMarquee from '../../Components/BrandMarquee/BrandMarquee'
function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreProduct category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
      <h1>Available here</h1>
      <BrandMarquee direction={'ltr'} />
      <BrandMarquee direction={'rtl'}/>
    </div>
  )
}

export default Home