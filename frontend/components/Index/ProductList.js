import gql from "graphql-tag"
import Link from "next/link"
import {graphql} from "react-apollo"
import ProductCard from "./ProductCard"
import {
  Container,
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
        let productCards = searchQuery.map(res=>(
          <Col sm="4">
            <ProductCard key={res._id} res={res}/>
          </Col>
        ))
        return (
        <div className="main" id="productList">
          <h1 className="title">Our Products</h1>
          <Container fluid>
            <Row>
              {productCards}
            </Row>
          </Container>
          <style jsx>{`
            .main {
              font-family: 'Bai Jamjuree', sans-serif;
              margin: 40px 20px 20px 20px;
            }
            .title {
              text-align: center;
              margin: 20px;
            }
            .cards {
              display: flex;
            }
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