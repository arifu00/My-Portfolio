import { Typewriter } from "react-simple-typewriter";
import banner from "../../assets/banner/banner.jpg";
import profile from "../../assets/banner/profile.jpeg";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <div id="aboutMe">
      <Container>
        <div
          className="hero h-[80vh] mt-12 font-lora rounded-lg "
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content md:py-12">
            <div className="flex justify-between gap-20 items-center">
              <div className="">
                <h1 className="font-bold text-3xl">
                  Hi, <br />
                  I'm{" "}
                  <span className="text-blue-500 italic">
                    <Typewriter
                      words={["Arif", "a Junior Frontend Web Developer"]}
                      cursor="true"
                      typeSpeed={150}
                      delaySpeed={1000}
                      loop="true"
                      deleteSpeed={100}
                    ></Typewriter>
                  </span>
                </h1>
                <p className="my-5 ">
                I'm a junior Frontend based web developer. <br />I create interactive web experiences <br />  combining HTML5, CSS3, and JavaScript. <br /> Want to learn more about MERN (MongoDB, Express.js, React.js, Node.js),
                </p>
                <button className="btn btn-primary text-white"><a href="../../assets/resume/resume.pdf" download="arif-resume">Get Resume</a></button>
              </div>
              <div className="md:max-w-[150px] lg:max-w-xs">
                <img
                  className="rounded-full border-4 shadow-2xl border-blue-600 hidden md:block "
                  src={profile}
                  alt="my image"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
