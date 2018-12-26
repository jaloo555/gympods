import Link from "next/link"
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap"

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    let {name, description, _id, image} = this.props.res
    return (
      <div>
        <Card body className="text-center" key={_id}>
          <CardImg
            top={true}
            style={{ height: 350 }}
            src={`http://localhost:1337${image.url}`}
          />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
          <div className="card-footer">
            <Link
              as={`/supplements/${_id}`}
              href={`/supplements?id=${_id}`}
            >
              <a className="btn btn-primary">View</a>
            </Link>
          </div>   
        </Card>
      </div>
    )
  } 
}
export default ProductCard