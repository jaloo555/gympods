import Link from 'next/link'

const Banner = (props) => (
    <section id="banner" className="major-section">
        <div className="inner">
            <header className="major-header">
                <h1>No compromise.</h1>
            </header>
            <div className="content">
                <p>Drop, shake, sip.</p>
                <Link><a href="#one" className="explore-button">Explore Now</a></Link>
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
                font-size: 3em;
                margin: 0 0 0.2em;
                font-weight: 700;
            }
            .content {
                text-transform: uppercase;
            }
            .content > p {
                margin: 0 0 1.5em;
                font-size: 30px;
                font-weight: 300;
            }
            a.explore-button {
                border: 0.16em solid #FFFFFF;
                padding: 0.5em 3em;
                box-sizing: border-box;
                text-decoration: none;
                font-weight: 400;
                font-size: 1.5em;
                color: #FFFFFF;
                transition: all 0.15s;
                border-color: white;
            }
            a.explore-button:hover{
             color:#DDDDDD;
             border-color:#DDDDDD;
            }
            a.explore-button:active{
             color:#BBBBBB;
             border-color:#BBBBBB;
            }
            @media all and (max-width:30em){
             a.explore-button{
              display:block;
              margin:0.4em auto;
             }
            }

        `}
        </style>
    </section>
)

export default Banner
