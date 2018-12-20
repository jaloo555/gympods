import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser,faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
    <nav id="header" className="alt">
            <a className="logo" href="/">Gympods</a>
            <ul>
                <Link href="#"><li className="links"><a href="/">We Are</a></li></Link>
                <li className="links"><a href="/">Products</a></li>
                <li className="links"><a href="/">Gear</a></li>
                <li className="links"><a href="/" className="signin-button">Sign in</a></li>
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
                margin-left: 1.2em;
                margin-right: auto;
                font-family: 'Allerta Stencil', sans-serif;
                text-transform: uppercase;
                padding-top: 5px;
                text-decoration: none;
            }
            ul > .links {
                font-size: 20px;
                padding-right: 25px;
                padding-bottom: 10px;
                padding-top: 25px;
                text-transform: uppercase;
                font-weight: 600;
                font-style: italic;
            }
            a {
                text-decoration: none;
                color: inherit;
            }
            a.signin-button {
                border: 0.1em solid #FFFFFF;
                border-radius: 5px;
                padding: 0.4em 0.6em;
                box-sizing: border-box;
                font-weight: 300;
                color: #000000;
                background-color: white;
                transition: all 0.15s;
                border-color: black;
                font-size: 15px;
            }
            a.signin-button:hover{
             color:#DDDDDD;
             border-color:#DDDDDD;
            }
            a.signin-button:active{
             color:#BBBBBB;
             border-color:#BBBBBB;
            }
            @media all and (max-width:762px){
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
