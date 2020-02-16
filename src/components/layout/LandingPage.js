import React from "react";
import landinggif from "../img/landing.gif";

export default function LandingPage() {
  return (
    <div className="contents">
      <h2 className="center-align teal-text text-darken-2">
        To help expand learning for everyone
      </h2>
      <h5 className="center-align">
        Working to support education through our products, programs, and
        philanthropy.{" "}
      </h5>
      <p className="center-align">
        <img
          width="380"
          className="responsive-img"
          src={landinggif}
          alt="landinggif"
        />
      </p>
    </div>
  );
}
