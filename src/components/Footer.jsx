const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">DILLI DINING</div>
          <div className="right">
            <p>Delhi, India</p>
            <p>Open: 12:00 PM - 02:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed with ❤ by Pranav</p>
          </div>
          <div className="right">
            <p>
              All Rights Reserved By{" "}
              <a href="https://pranavgupta.vercel.app/" target="_blank" rel="noreferrer">
                Pranav
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
