// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {items} = props
  return (
    <ul className="blogList">
      {items.map(item => (
        <BlogItem key={item.id} eachItem={item} />
      ))}
    </ul>
  )
}

export default BlogList
