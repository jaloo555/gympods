import Layout from "../components/Layout/Layout";
import withData from "../lib/apollo";
import {compose} from 'recompose'
import {withRouter} from 'next/router'
import Listing from "../components/Product/Listing";

const Supplements = (props) => {
  return (
    <Layout>
      <div className="main">
        <Listing id={props.router.query.id}/>
      </div>
      <style jsx>
      {`
        .main {
          padding-top: 65px;
        }
      `}</style>
    </Layout>
  )
}


export default compose(
  withRouter,
  withData
)(Supplements)