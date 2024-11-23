import React from "react";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import { ReactComponent as IconSite } from "./assets/icons/lumina.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="https://www.luminavoice.com" title="LuminaVoice">
              {/* <IconSite className="icon" /> */}
              <img src="/public/images/lumina.png" />
            </a>
            {/* <img src="./assets/lumina.svg" alt='LOGO' /> */}
          </div>
          {/* <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div> */}
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Lumina Voice</h1>
            <p>
              Website coming soon. Please check back to know more. Shoot us an
              email if you're curious.
            </p>
          </div>
          <a href="mailto:luminavoicehf@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>
          LUMINA VOICE PRIVATE LIMITED
          B/102 TRICITY REALITY, SECTOR 30, Kharghar, Panvel, Raigarh(MH)- 410210, Maharashtra
          </span>
        </div>
      </div>
    );
  };
}

export default App;
