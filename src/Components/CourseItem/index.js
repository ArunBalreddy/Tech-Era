import {Link} from 'react-router-dom'
import {CourseListItem, CourseLogo, CourseName} from './styledComponents'
import './index.css'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <CourseListItem>
      <Link className="anchor-link" to={`/courses/${id}`}>
        <CourseLogo src={logoUrl} alt={name} />
        <CourseName>{name}</CourseName>
      </Link>
    </CourseListItem>
  )
}

export default CourseItem
