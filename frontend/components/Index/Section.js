const Section = (props) => (
    <div className="container" id="section">
        <p>We started Gympods because we thought it was
            about time someone created a protein that 
            was convenient, portable and tastes freakin delicious.
            Then, we shoved all that goodness into an edible pod.</p>
        <style jsx>{`
            .container {
                background-color: rgb(250, 245, 243);
                width: 100vw;
                max-width: 100%;
                height: 50vh;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-family: 'Bai Jamjuree', sans-serif;
                font-size: 1.8em;
            }
            p {
                width: 50%;
                
            }
            @media only screen and  (max-width: 768px) {
                .container {
                    height: auto;
                    padding-top: 95px;
                    padding-bottom: 95px;
                    overflow-wrap: break-word;
                }
                p {
                    font-size: 20px;
                }
            }
        `}</style>
    </div>
)

export default Section