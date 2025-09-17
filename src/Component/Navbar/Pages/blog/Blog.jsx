import React from 'react'
import Back from "../Back"
import RecentCard from "../recent/RecentCard"
import "../recent/recent.css"
import img from "../about.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
          <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog