import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      Welcome home
      <Link href="/register">Register</Link>
    </div>
  )
}

export default Home
