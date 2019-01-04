import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <div className="iconContainer">
                <a href="mailto:chisanch@outlook.com" className="icons"><FontAwesomeIcon icon={faEnvelope}/></a>
                <a href="#" className="icons"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="#" className="icons"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://github.com/jaloo555" className="icons"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
            <div className="copyright">
                <p>&copy; Gympods Ltd.</p>
            </div>
        </div>
        <style jsx>{`
            #footer {
                background-color: white;
                color: black;
                // position: fixed;
                // width: 100%;
                // bottom: 0;
                // left: 0;
            }
            .iconContainer {
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 10px;
            }
            .icons {
                text-decoration: none;
                color: black;
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
                font-style: italic;
                color: gray;
            }
        `}
        </style>

    </footer>
)

export default Footer
