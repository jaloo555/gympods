import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="#"><FontAwesomeIcon icon={}/><span className="label">Facebook</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={}/><span className="label">Instagram</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Gympods</li><li>Design: <a href="https://github.com/jaloo555">jaloo55</a></li>
            </ul>
        </div>
        <style jsx>{`
            .footer {
                background-color: #000000;
                display: flex;
            }
            .icons {
                display: flex;
                list-style: none;
                justify-content: center;
            }
            .copyright {
                display: flex;
                list-style: none;
            }
        `}
        </style>

    </footer>
)

export default Footer
