import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Gympods</title>
                    <meta name="description" content="Gympods" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script> 
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Allerta+Stencil" rel="stylesheet"/>
                    
                </Head>

                <div id="wrapper">
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
                <style jsx>{`
                `}
                </style>
            </div>
        )
    }
}

export default Layout
