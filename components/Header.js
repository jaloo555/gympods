import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser,faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
    <nav id="header" className="alt">
            <ul>
                <li className="links"><FontAwesomeIcon icon={faUser}/></li>
                <li className="links"><FontAwesomeIcon icon={faSearch}/></li>
                <li className="logo"><a href="/">Gympods</a></li>
                <li className="links"><FontAwesomeIcon icon={faShoppingCart}/></li>
                <li className="links"><a href="/" className="signin-button">Sign in</a></li>
            </ul>

        <style jsx>{`
            #header {
                background-color: rgba(0,0,0,0.4);
                color: white;
                position: fixed;
                width: 100vw;
                transform: 0.3s;
            }
            ul {
                list-style: none;
                display: flex;
                line-height: 50px;
                padding: 0;
            }
            .logo {
                font-size: 2em;
                font-weight: 700;
                margin-left: auto;
                margin-right: auto;
                font-style: italic;
                text-transform: uppercase;
                padding-top: 20px;
                text-decoration: none;
            }
            ul > .links {
                font-size: 20px;
                padding: 20px;
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
            //  border-color:#DDDDDD;
            }
            a.signin-button:active{
             color:#BBBBBB;
             border-color:#BBBBBB;
            }
            @media all and (max-width:30em){
             a.signin-button{
              display:block;
              margin:0.4em auto;
             }
            }


        `}
        </style>
    </nav>
)

export default Header
