import Layout from "../components/Layout/Layout";
import ProductList from "../components/Index/ProductList";
import withData from "../lib/apollo";

const Product = () => {
  return (
    <Layout>
      <ProductList search=""/>
    </Layout>
  )
}

export default withData(Product)