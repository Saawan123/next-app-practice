import Link from 'next/link'
import React from 'react'

const productList = () => {
    const products = 100;
  return (
    <div>
        <Link href = "/">Home</Link>
      <div className="h1"> <Link href ="products/1">1</Link></div>
      <div className="h1"><Link href ="products/2" replace>2</Link></div>
      <div className="h1"><Link href ={`products/${products}`}> products {products}</Link></div>
    </div>
  )
}

export default productList
