import { apple_store, fb, google_play, insta, original, return_window, twitter, yt } from './../images/images.jsx';
import './Css/About.css';
function About() {
  return (
    <div className="Aboutback p-5 d-flex flex-column align-items-center">
      <div className="About">
        <div className="col col1">
          <ul>
            <li className="py-2 heading"><b>ONLINE SHOPPING</b></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
          <ul>
            <li className="py-2 heading"><b>USEFUL LINKS</b></li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
          </ul>
        </div>
        <div className="col col2">
          <ul>
            <li className="py-2 heading"><b>CUSTOMER POLICY</b></li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Gievance Officer</li>
          </ul>
        </div>
        <div className="col col3">
          <ul>
            <li className="py-2 mb-2 heading"><b>EXPERIENCE MYNTRA APP ON MOBILE</b></li>
            <li>
              <img src={google_play} />
              <img src={apple_store} />
            </li>
            <li className="py-2 mb-2 heading"><b>KEEP IN TOUCH</b></li>
            <li>
              <img src={fb} />
              <img src={twitter} />
              <img src={yt} />
              <img src={insta} />
            </li>
          </ul>
        </div>
        <div className="col col4">
          <ul>
            <li className="d-flex mb-4">
              <img src={original} className="m-1" />
              <span><b>100% ORIGINAL</b> guarantee for all products at mynsta.com</span>
            </li>
            <li className="d-flex">
              <img src={return_window} className="m-1" />
              <span><b>Return within 14days </b>of receiving your order</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="popular-searches d-flex align-items-center">
        <div className="heading"><b>POPULAR SEARCHES</b></div>
        <div></div>
      </div> */}
      <div>
      </div>
    </div>
  );
}

export default About;