// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem
  return (
    <li className="outerItem">
      <div className="innerItem">
        <h1 className="title">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
