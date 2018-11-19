import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <div>
                <ul>
                    <li><a href="mailto:chisanch@outlook.com" className="icons"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                    <li><a href="#" className="icons"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    <li><a href="#" className="icons"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href="https://github.com/jaloo555" className="icons"><FontAwesomeIcon icon={faGithub}/></a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>&copy; Gympods Ltd.</p>
            </div>
        </div>
        <style jsx>{`
            #footer {
                background-color: #080808;
                color: white;
            }
            .icons {
                text-decoration: none;
                color: white;
                font-size: 30px;
                margin: 0;
                padding-right: 20px;
                padding-left: 20px;
            }
            .inner {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-left: auto;
                margin-right: auto;
            }
            ul {
                display: flex;
                list-style: none;
                
            }
            .copyright {
                display: flex;
                list-style: none;
                margin-left: auto;
                margin-right: auto;
                font-style: italic;
                color: gray;
            }
        `}
        </style>

    </footer>
)

export default Footer
