import gql from 'graphql-tag'
import {graphql, Query} from 'react-apollo'
import {Container} from 'reactstrap'
import ProductView from './ProductView'

const Listing = ({id, data}) => {
  return (
    <Query query={GET_LISTING} variables={{id}}>
      {({loading, error, data}) => {
        if (loading) return <h1>Loading...</h1>
        if (error) return <h1>Error loading supplements.</h1>
        const supplement = data.supplement
        return (
          <Container fluid className="mainContainer">
            <ProductView supplement={supplement}/>

            {/* gotta change size of carousel */}

            <style jsx >{`
              .mainContainer {
                padding-top: 65px;
                background-color: blue;
              }

            `}</style>
          </Container>
        )
      }}
    </Query>
  )
}

const GET_LISTING = gql`
  query supplement($id: ID!){
    supplement(id: $id){
      name
      _id
      description
      image{
        url
      }
      sizes {
        price
        servings
      }
    }
  }
`

export default graphql(GET_LISTING, {
  options: ({id}) => ({
    variables: {
      id: id
    }
  }),
  props: ({data}) => ({
    data
  })
})(Listing)