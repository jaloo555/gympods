import gql from "graphql-tag"
import Link from "next/link"
import {graphql} from "react-apollo"
import {
  Card,
  CardBody,
  CardImg,
  CardGroup,
  CardColumns,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap"

const ProductList = (
  { data: { loading, error, supplements }, search },req
  ) => {
    if (error) return "Error loading supplements"
    if (supplements && supplements.length) {
      //searchQuery
      const searchQuery = supplements.filter(query =>
        query.name.toLowerCase().includes(search)
      );
      if (searchQuery.length != 0) {
        return (
        <div>
          <div className="h-100">
            <CardGroup>
              {searchQuery.map(res => (
                <Card
                  style={{ width: "30%", margin: "0 10px" }}
                  body
                  className="text-center"
                  key={res._id}
                >
                  <CardImg
                    top={true}
                    style={{ height: 375 }}
                    src={`http://localhost:1337${res.image.url}`}
                  />
                  <CardBody>
                    <CardTitle>{res.name}</CardTitle>
                    <CardText>{res.description}</CardText>
                  </CardBody>
                  <div className="card-footer">
                    <Link
                      as={`/supplements/${res._id}`}
                      href={`/supplements?id=${res._id}`}
                    >
                      <a className="btn btn-primary">View</a>
                    </Link>
                  </div>
                </Card>
              ))}
            </CardGroup>
          </div>
          <style jsx>{`

          `}
          </style>
        </div>
      )
    } else {
      return <h1>No products found</h1>
    }
  }
  return <h1>Loading...</h1>
}

const query = gql`
  {
    supplements {
      _id
      name
      description
      image {
        url
      }
    }
  }
`

export default graphql(query, {
  props: ({data})=> ({
    data
  })
})(ProductList)