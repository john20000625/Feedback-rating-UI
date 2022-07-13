import Card from "../shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
      </div>
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage