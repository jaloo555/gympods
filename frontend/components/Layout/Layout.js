import React from 'react'
import Heading from './Heading'
import Header from './Header'
import Footer from './Footer'
import Link from "next/link";
import { unsetToken } from "../../lib/auth";
import { Container, Nav, NavItem } from "reactstrap";
import defaultPage from "../../hocs/defaultPage";

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps({req}) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps, isAuthenticated}
    }

    render() {
        const { isAuthenticated, children } = this.props;
        return (
            <div>
                <Heading/>
                <div id="wrapper">
                    <Header isAuthenticated={isAuthenticated}/>
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Layout
