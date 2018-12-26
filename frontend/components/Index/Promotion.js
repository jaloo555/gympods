const Promotion = (props) => (
  <div className="container" id="Promotion">
      <h1>Join the revolution</h1>
      <h3>Follow @Gympods to see our athletes</h3>
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
          h1 {
              width: 50%;   
          }
          @media only screen and  (max-width: 768px) {
              .container {
                  height: auto;
                  padding-top: 95px;
                  padding-bottom: 95px;
                  overflow-wrap: break-word;
              }
              h1 {
                  font-size: 40px;
              }
          }
      `}</style>
  </div>
)

export default Promotion