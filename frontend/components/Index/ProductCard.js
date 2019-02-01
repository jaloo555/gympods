import Link from "next/link"
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap"
import CartButton from "../Cart/CartButton";

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    let {name, description, _id, image, price, flavors} = this.props.res
    var flavorKeys = (Object.keys(flavors[0]))
    var filteredFlavors = flavorKeys.filter((flavor)=> {
      return (flavors[0][flavor] == true)
    })
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
            {/* <Link
              as={`/supplements/${_id}`}
              href={`/supplements?id=${_id}`}
            >
              <a className="btn btn-primary">View</a>
            </Link> */}
            <CartButton 
              id={_id}
              name={name}
              price={price}
              desc={description}
              flavors={filteredFlavors}
            />
          </div>  
        </Card>
      </div>
    )
  } 
}
export default ProductCard