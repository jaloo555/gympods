import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
const Banner = (props) => (
    <div className="main">
        <section id="banner" className="major-section">
            <div className="inner">
                <header className="major-header">
                    <h1>Never compromise.</h1>
                </header>
                <div className="content">
                    <p>Convenient. Portable. Customizable.</p>
                    <Link href="#productList"><a href="/" className="explore-button">Shop Now</a></Link>
                </div>
                <div className="arrow bounce">
                    <Link href="#section"><FontAwesomeIcon icon={faAngleDown}/></Link>
                </div>
            </div>
            <style jsx global>{`
                html, body {
                    scroll-behavior: smooth;
                }
                .major-section {
                    background-image: url('static/gym-bg.png');
                    height: 90vh;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                    display: flex;
                    color: white;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-family: 'Bai Jamjuree', sans-serif;
                    overflow: hidden;
                    font-size: 1.8vw;
                    position: relative;
                    margin: 0;
                    padding: 0;
                }
                .major-header > h1 {
                    font-size: 50px;
                    margin: 0 0 0.2em;
                    font-weight: 700;
                    padding-bottom: 20px;
                }
                .content {
                    text-transform: uppercase;
                }
                .content > p {
                    margin: 0 0 40px;
                    font-size: 30px;
                    font-weight: 300;
                }
                a.explore-button {
                    border: 2px solid #FFFFFF;
                    padding: 0.5em 3em;
                    box-sizing: border-box;
                    text-decoration: none;
                    font-weight: 400;
                    font-size: 20px;
                    color: #FFFFFF;
                    transition: all 0.15s;
                    border-color: tomato;
                }
                a.explore-button:hover{
                    color:#DDDDDD;
                    background-color: tomato;
                    -webkit-transition: all 0.3s ease-in-out 0s;
                    transition: all 0.3s ease-in-out 0s;
                }
                a.explore-button:active{
                     color:#BBBBBB;
                     border-color:#BBBBBB;
                }
                .arrow {
                    cursor: pointer;
                    position: absolute;
                    color: white;
                    bottom: 2rem;
                    left: 50%;
                    font-size: 35px;
                }
                .bounce {
                    -moz-animation: bounce 2s infinite;
                    -webkit-animation: bounce 2s infinite;
                    animation: bounce 2s infinite;
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                    }
                    40% {
                    transform: translateY(-30px);
                    }
                    60% {
                    transform: translateY(-15px);
                    }
                }
                @media all and (max-width:30em){
                     a.explore-button{
                      margin:0.4em auto;
                     }
                }

            `}
            </style>
        </section>
    </div>
)

export default Banner