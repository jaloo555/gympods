const Section = (props) => (
    <div className="container">
        <h1 className="title">Fuel the body</h1>
        <p className="subtitle">Drop, Shake, Sip</p>
        <button className="exploreBtn">Explore Now</button>

    <style jsx>{`
        .container {
            color: gray;
            margin: 0 3%;
            line-height: 4em;
            font-size: 1.8vw;
        }
        .title {
            font-size: 3em;
            margin: 0 0 0.2em;
            font-weight: 700;
        }
        .subtitle {
            margin: 0 0 0.5em;
            font-weight: 300;
        }
        .exploreBtn {
            font-size: 14px;
            letter-spacing: 1.9px;
            font-weight: 100;
            margin: 0.5em 0.5em 0.5em 0;
            padding: 12px 2em;
            color: white;
            background-color: black;
            cursor: pointer;
            text-decoration: none;
            vertical-align: middle;
            font-family: Arial, sans-serif;
            border-radius: 2px;
            user-select: none;
            text-align: center;
            border: 0;
        }

        .exploreBtn:hover {
            background-color: #4b4c4f;
        }
    `}</style>
    </div>
)

export default Section