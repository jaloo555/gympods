import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Index/Banner'
import Section from '../components/Index/Section'
import ProductList from '../components/Index/ProductList';
import Promotion from '../components/Index/Promotion'
import withData from "../lib/apollo";

class Index extends React.Component{
  render() {
    return (
      <Layout>
        <Banner/>
        <Section/>
        <ProductList search=""/>
        <Promotion/>
      </Layout>
    )
  }
} 
  
export default withData(Index)
