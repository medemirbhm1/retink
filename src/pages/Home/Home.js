import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import avatar from "../../images/Retink-avatar.svg";
import explainer from "../../images/explainer.png";
import aiIcon from "../../images/artificial-intelligence-svgrepo-com 1.svg";
import filesIcon from "../../images/Group.svg";
import newsIcon from "../../images/news.svg";
import twoIcon from "../../images/two.svg";
import indexIcon from "../../images/Vector.svg";
import services1 from "../../images/services1.jpg";
import services2 from "../../images/services2.jpg";
import services3 from "../../images/services3.jpg";
import services4 from "../../images/services4.png";
import services5 from "../../images/services5.jpg";
import services6 from "../../images/services6.jpg";
import logo from "../../images/Logo.svg";
import footer1 from "../../images/footer1.png";
import footer2 from "../../images/footer2.png";
import footer3 from "../../images/footer3.png";
import footer4 from "../../images/footer4.png";
import footer5 from "../../images/footer5.png";
import footer6 from "../../images/footer6.png";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      {/* HEADER */}
      <header>
        <div className="container">
          <Nav />
          <div className="land">
            <div className="text">
              <h1>
                Get Advanced AI + Expert Created <span>Logos</span>
              </h1>
              <p>
                Boost your sales <span>10x faster</span> with content customized
                by our unique partnership of
                <span> human creativity and AI optimization </span>
              </p>
              <h3>Sign Up For The BETA!</h3>
              <form>
                <input type="text" placeholder="Business Name" />
                <p>would like a beta invite sent to </p>
                <input type="email" placeholder="@email address" />
                <p>when it's ready!</p>
              </form>
              <div className="btns">
                <button className="btn-solid">Notfiy me</button>
                <button className="btn-reg" onClick={() => navigate("/signup")}>
                  Sign up as a freelance partner
                </button>
              </div>
            </div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </header>
      {/* EXPLAINER */}
      <div className="explainer">
        <div className="container">
          <h2 className="sec-title">EXPLAINER VIDEO</h2>
          <img src={explainer} alt="video" />
          <div className="cards">
            <div className="card">
              <img src={aiIcon} alt="" />
              <h3>MakeAI-assisted Content Choices</h3>
              <p>
                Access and Order from an extensive catalogue in any language and
                on your budget’s terms. If unsure, our AI guides you to the
                best.
              </p>
            </div>
            <div className="card">
              <img src={filesIcon} alt="" />
              <h3>Upload and Maintain your Brand Identity</h3>
              <p>
                Add your preferences and brand assets to ensure the contents is
                consistent with your brand identity. No brand asset? We can make
                for you!
              </p>
            </div>
            <div className="card">
              <img src={indexIcon} alt="" />
              <h3>Be informed as we create</h3>
              <p>
                Your details are translated and sent to the AI, FP, or both (per
                your choice) as you relax and receive continuous updates.
              </p>
            </div>
            <div className="card">
              <img src={twoIcon} alt="" />
              <h3>Receive and Review</h3>
              <p>
                The finished content is delivered and you can make corrections
                that we will effect to satisfy your requirements.
              </p>
            </div>
            <div className="card">
              <img src={newsIcon} alt="" />
              <h3>Publish and Monitor your contents’ progress</h3>
              <p>
                The finished content is delivered and you can make corrections
                that we will effect to satisfy your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <div className="services">
        <div className="container">
          <h2 className="sec-title">Transform your Creation Process</h2>
          <p>
            With a new approach toordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </p>
          <h2 className="sec-title">
            Activate your business growth with RetinkContent.
          </h2>
          <p>
            Save time and maintain your brand identity within your budget range
            or sign up for affordable plans and still access multiple content
            services like:
          </p>
          <div className="cards">
            <div className="card">
              <img src={services1} alt="" />
              <h3>Logos</h3>
              <p>
                Have a unique & creative logo designed to express and represent
                your brand identity.
              </p>
            </div>
            <div className="card">
              <img src={services2} alt="" />
              <h3>Blog Writing</h3>
              <p>
                {" "}
                Write SEO enriched blog posts as long or short articles on any
                topic of your choice .
              </p>
            </div>
            <div className="card">
              <img src={services3} alt="" />
              <h3>Animated Videos</h3>
              <p>
                Bring animated characters to life to keep your viewers engaged
                and entertained.
              </p>
            </div>
            <div className="card">
              <img src={services4} alt="" />
              <h3>Product Demo</h3>
              <p>
                Introduce your product to potential customers in a clear and
                creative video.
              </p>
            </div>
            <div className="card">
              <img src={services5} alt="" />
              <h3>Copywriting</h3>
              <p>
                Have creative and compelling copies written to boost your
                product, brand, service or company.
              </p>
            </div>
            <div className="card">
              <img src={services6} alt="" />
              <h3>Social Media Ads</h3>
              <p>
                Boost sales and awareness with tailor made ads from experts.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT */}
      <div className="contact">
        <div className="container">
          <h2 className="sec-title">Sign Up For The BETA to see more</h2>
          <form>
            <div className="cont">
              <input type="text" placeholder="Business Name" />
              <input type="email" placeholder="Email" />
            </div>
            <button className="btn-solid" type="submit">
              Notify me
            </button>
            <button className="btn-reg" type="button" onClick={()=>navigate("/signup")}>
              Sign up as a freelance partner
            </button>
          </form>
        </div>
      </div>
      {/* FOOTER */}
      <footer>
        <div className="gray">
          <div className="container">
            <div className="cont">
              <img src={logo} alt="" />
              <div className="smedia">
                connect with us <br />
                <div className="icons">
                  <img src={footer1} alt="" />
                  <img src={footer2} alt="" />
                  <img src={footer3} alt="" />
                  <img src={footer4} alt="" />
                  <img src={footer5} alt="" />
                  <img src={footer6} alt="" />
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="col">
                <p>Product by Retink Media UG</p>
                <p>Bonn, Germany</p>
              </div>
              <div className="col">
                <p>Get Early Acess</p>
                <p>Provide Feedback</p>
              </div>
            </div>
          </div>
        </div>
        <div className="black">
          <p>Copyright © 2021 Retink</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
