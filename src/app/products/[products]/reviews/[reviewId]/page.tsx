import { notFound } from 'next/navigation'
import React from 'react'

const Review = ({params}:any) => {
    if(params.reviewId > 20){
        notFound()
    }
  return (
    <div>
      Review {params.reviewId} for product {params.products}
    </div>
  )
}

export default Review
