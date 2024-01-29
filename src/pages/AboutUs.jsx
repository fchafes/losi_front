
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="container-aboutUs">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            molestiae perferendis. Consequatur recusandae nam quibusdam, ad
            voluptatum officia? Vero, eum earum! Autem totam expedita accusantium
            veritatis odio voluptatibus ut perspiciatis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Unde harum tenetur, illum ipsum,
            perspiciatis optio quaerat quae molestias non quidem sunt aperiam
            porro explicabo fugiat quo, distinctio reprehenderit quis temporibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae iure
            accusamus recusandae? Veritatis rerum quae officiis debitis,
            recusandae architecto dicta velit officia ad excepturi mollitia
            numquam ipsum molestias quia?
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
