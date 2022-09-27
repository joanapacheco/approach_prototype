import React from 'react'
/*<h3>Framework Description</h3>*/
const Header = () => {

  return (
    <><header>
      <div className="intro-logo jumbo-bg">
        <h1>A Requirements Engineering Approach Prototype</h1>
        
        <div className="intro-button">
          <a style={{fontSize:'20.5px'}} //</div>href="/instructions"
          >Instructions</a>
        </div>
        <div className="intro-button">
          <a style={{fontSize:'20.5px'}} href="/workspace" >Workspace</a>
        </div>
        <div className="intro-button">
          <a style={{fontSize:'20.5px'}} href="/genderinclusiveproperties">Gender Inclusion Properties</a>
        </div>
        <div className="intro-button">
          <a style={{fontSize:'20.5px'}} href="/example">DriveNow - Example</a>
        </div>
      </div>

      <style jsx>{`
        header {
          height: 100vh;
          paddingBottom: 0rem:
        }

        .intro-logo {
          display: flex;
          position: absolute;
          top: 4rem;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: flex start;
          align-items: center;
          text-align: center;
          background-image: url(./exp.png);
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          
        }

        .intro-logo h1 {
          margin-top: 3.0em;
          font-size: 5rem;
          font-weight: 500;
          font-family: 'Calibri Light', sans-serif;
          color: black;
        }

        .intro-logo h3 {
          font-size: 1.5rem;
          font-weight: 300;
          color: black;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5rem;
          }
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }

        .intro-button {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .intro-button a {
          padding: 0.65em 2rem;
          border-radius: 10px;
          color: var(--brand-color);
          border: 1.8px solid var(--brand-color);
          background: #7bbcce; 
          transition: all 0.5s;
        }

        .intro-button a:hover {
          background-color: white;
          color: black;
        }
      `}</style>
    </header><body style={{ height: '0vh' }}></body></>

  )
}

export default Header
