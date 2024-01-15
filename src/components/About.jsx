import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>Dilli Dining: Where Every Bite Feels Royal!</p>
          </div>
          <p className="mid">
            Discover the regal charm of Delhi at Dilli Dining. Home to the globally renowned Shahi
            Paneer, our menu showcases a delightful fusion of North Indian classics and
            international flavors. Each dish is a tribute to Delhi's rich culinary heritage,
            offering a royal experience in every bite. Indulge in the essence of Delhi's grandeur at
            Dilli Dining - where every meal is a celebration of diverse and exquisite flavors.
          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
