import React from "react";
import labwork from "../img/labwork.svg";
import analysis from "../img/analysis.svg";
import responsive from "../img/responsive.svg";

export default function LandingPage() {
  return (
    <div className="contents container">
      <div className="row section backgroundImage">
        <h1 className="center-align fgc">eLuminous</h1>
        <h3 className="center-align textShadow">
          To help expand learning for everyone{" "}
        </h3>
      </div>
      <br />
      <div className="row section">
        <div className="col s12 l6">
          <img
            id="info-svg-signin"
            width="300"
            className="responsive-img"
            src={labwork}
          />
        </div>
        <div className="col s12 l6">
          <h5 className="fgc">Lab Work</h5>
          <p className="landingPageParagraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
      <div className="row section">
        <div className="col s12 l6">
          <h5 className="fgc">Analysis</h5>
          <p className="landingPageParagraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div className="col s12 l6">
          <img
            id="info-svg-signin"
            width="300"
            className="responsive-img"
            src={analysis}
          />
        </div>
      </div>
      <div className="row section">
        <div className="col s12 l6">
          <img
            id="info-svg-signin"
            width="300"
            className="responsive-img"
            src={responsive}
          />
        </div>
        <div className="col s12 l6">
          <h5 className="fgc">Responsive</h5>
          <p className="landingPageParagraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
    </div>
  );
}
