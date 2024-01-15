import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Dilli's</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img className="bendCorner" src="/hero1.jpg" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Favorite</h1>
                <h1 className="title dishes_title">Dining</h1>
                <img src="/threelines.svg" alt="three" />
              </div>
              <img src="/logo.png" alt="logo" className="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img className="bendCorner" src="/hero2.jpg" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Dining</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
