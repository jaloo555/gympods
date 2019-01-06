import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { unsetToken } from "../../lib/auth";


const Header = (props) => (
    <nav id="header" className="alt">
        <div className="box">
            <ul className="leftList">
                <li className="links one"><a href="/">We Are</a></li>
                <li className="links two"><a href="/">Pods</a></li>
            </ul>
        </div>
        <div className="box">
            <a className="logo" href="/">Gympods</a>
        </div>
        <div className="box">
            <ul className="rightList">
                <li className="links cart">
                    <div className="snipcart-summary">
                        <a href="/" className="snipcart-checkout snipcart-summary">
                            Cart(<span className="snipcart-total-items"> </span>)
                        </a>
                    </div>
                </li>
                <li className="links three">
                    <Link href="/">                            
                        <a href="#" className="snipcart-user-email snipcart-user-profile">
                            Login
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        <style jsx>{`
            .container {
                display: flex;
                width: 100%;
            }
            #header {
                background-color: rgba(256,256,256,1.0);
                color: black;
                position: fixed;
                z-index: 1;
                width: 100vw;
                transform: 0.3s;
                display: flex;
            }
            .box {
                flex: 1;
                display: flex;
                justify-content: center;
            }
            .box:first-child > ul {
                margin-right: auto;
                justify-content: flex-start;
            }
            .box:last-child > ul {
                margin-left: auto;
            }
            .rightList > li {
                padding-right: 1.5em;
            }
            .leftList > li {
                padding-left: 1.5em;
            }
            ul {
                list-style: none;
                display: flex;
                line-height: 10px;
                padding: 0;
            }
            .logo {
                font-size: 2.2em;
                font-family: 'Allerta Stencil', sans-serif;
                text-transform: uppercase;
                padding-top: 5px;
                text-decoration: none;
            }
            ul > .links {
                font-size: 15px;
                padding-bottom: 10px;
                padding-top: 25px;
                text-transform: uppercase;
                font-weight: 600;
                font-style: italic;
            }
            // animating underline border
            .links > a {
                position: relative;
            }
            .links > a:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: tomato;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
                visibility: hidden;
            }
            .cart > a:before {
                background-color: #00b2f6;
            }
            .links > a:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }
            a {
                text-decoration: none;
                color: inherit;
            }
            .links > a.hover {
                color: inherit;
            }

            // tablet/phone styles
            @media all and (max-width:900px)  {
                ul {
                    display: none;
                }
                .logo {
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 2.5em;
                }
            }

        `}
        </style>
    </nav>
)

export default Header
