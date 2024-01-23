import React from "react";
import "./index.scss";

const OurChef = () => {
  return (
    <section id="ourchef">
      <div className="chefbox">
        <div className="img">
          <img
            src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp"
            alt=""
          />
        </div>
        <div className="abouttasty">
          <div className="foryou">
            <h4>About Tasty</h4>
            <h2>Our chef cooks the most delicious food for you</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurChef;
