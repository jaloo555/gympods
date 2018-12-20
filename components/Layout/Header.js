import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser,faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
    <nav id="header" className="alt">
            <ul className="leftList">
                <li className="links one"><a href="/">We Are</a></li>
                <li className="links two"><a href="/">Pods</a></li>
            </ul>
            <a className="logo" href="/">Gympods</a>
            <ul className="rightList">
                <li className="links three"><a href="/">Gear</a></li>
                <li className="links cart"><a href="/">Cart</a></li>
            </ul>
        <style jsx>{`
            #header {
                background-color: rgba(256,256,256,1.0);
                color: black;
                position: fixed;
                width: 100vw;
                transform: 0.3s;
                display: flex;
            }
            ul {
                list-style: none;
                display: flex;
                line-height: 10px;
                padding: 0;
            }
            .logo {
                font-size: 2.2em;
                justify-item: center;
                margin: 0 auto;
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
            .leftList > .links {
                margin-left: 20px;  
            }
            .rightList > .links {
                margin-right: 25px;  
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
                background-color: #fff3cd;
            }
            .links > a:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }
            .links > a:hover {

            }
            a {
                text-decoration: none;
                color: inherit;
            }

            // tablet/phone styles
            @media all and (max-width:900px){
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
