import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
const Banner = (props) => (
    <section id="banner" className="major-section">
        <div className="inner">
            <header className="major-header">
                <h1>Never compromise.</h1>
            </header>
            <div className="content">
                <p>Convenient. Portable. Customizable.</p>
                <Link href="/"><a href="/" className="explore-button">Shop Now</a></Link>
            </div>
            <div className="arrow bounce">
                <a href="/"><FontAwesomeIcon icon={faAngleDown}/></a>
            </div>
        </div>
        <style jsx>{`
            .major-section {
                background-image: url('static/gym-bg.png');
                height: 100vh;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                display: flex;
                color: white;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                overflow: hidden;
                font-size: 1.8vw;
            }
            .major-header > h1 {
                font-size: 50px;
                margin: 0 0 0.2em;
                font-weight: 700;
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
                margin-top: 40px;
                color: white;
            }
            .bounce {
                -moz-animation: bounce 2s infinite;
                -webkit-animation: bounce 2s infinite;
                animation: bounce 2s infinite;
              }
            @media all and (max-width:30em){
                 a.explore-button{
                  margin:0.4em auto;
                 }
            }

        `}
        </style>
    </section>
)

export default Banner