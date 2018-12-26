import {Input, InputGroupAddon, Button} from 'reactstrap'
const SocialBanner = (props) => {
  return (
    <div>
      <div className="main">
        <h1 className="desktopH1">Sign up for our latest offerings and events:</h1>
        <h1 className="mobileH1">Sign up now!</h1>
        <div className="inputgrp">
          <Input type="text" name="email" className="emailInput" placeholder="Sign up now!"/>
        </div>
        <style jsx>{`
          .main {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 30px;
            height: 150px;
            background-color: black;
            color: white;
            font-family: 'Bai Jamjuree', sans-serif;
          }
          .inputgrp {
            padding-top: 10px;
            width: 40%;
          }
          .mobileH1 {
            display: none;
          }
          .desktopH1 {
            display: contents;
          }
          @media all and (max-width:900px){
            .main {
              height: 20vh;
              justify-content: center;
            }
            .desktopH1 {
              display: none;
            }
            .mobileH1 {
              display: contents;
            }
            .inputgrp {
              width: 50%;
              padding-top: 30px;
            }
          }
        `}
        </style>
      </div>
    </div>
  )
}

export default SocialBanner