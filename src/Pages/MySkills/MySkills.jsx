import Container from "../../Components/Container/Container";

const MySkills = () => {
  return (
    <div className="font-lora my-12 ">
      <Container>
        <div className="">
          <h2 className="text-center text-4xl font-bold text-white ">
            My Skills
          </h2>
          <p className="text-[#A7A7A7] italic text-xl text-center mt-4">
            Technologies I’ve been working with recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:px-10 mt-12">
          {/* Frontend  */}

          <div className="">
            <h3 className="text-2xl font-extrabold mb-2">Frontend</h3>
            <ul className="ml-6 space-y-2">
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">Html</span>
                  <span className="text-base font-medium text-white">95%</span>
                </div>
                <div className="w-full">
                  <progress
                    className="progress progress-primary "
                    value="95"
                    max="100"
                  ></progress>
                </div>
              </li>

              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">CSS</span>
                  <span className="text-base font-medium text-white">80%</span>
                </div>
                <div className="w-full">
                  <progress
                    className="progress progress-info "
                    value="80"
                    max="100"
                  ></progress>
                </div>
              </li>
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    Java Script
                  </span>
                  <span className="text-base font-medium text-white">70%</span>
                </div>
                <div className="w-full">
                  <progress
                    className="progress progress-error "
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </li>
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">React</span>
                  <span className="text-base font-medium text-white">60%</span>
                </div>
                <div className="w-full">
                  <progress
                    className="progress progress-accent "
                    value="60"
                    max="100"
                  ></progress>
                </div>
              </li>
            </ul>
          </div>
          {/* backend  */}
          <div className="">
            <h3 className="text-2xl font-extrabold mb-2">Backend</h3>
            <ul className="ml-6 space-y-2">
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    Node js
                  </span>
                  <span className="text-base font-medium text-white">50%</span>
                </div>
                <div className="w-full">
                  <progress
                    className="progress progress-error "
                    value="50"
                    max="100"
                  ></progress>
                </div>
              </li>

              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    Express js
                  </span>
                  <span className="text-base font-medium text-white">50%</span>
                </div>
                <div className="w-full">
                  <progress
                    className="progress progress-secondary "
                    value="50"
                    max="100"
                  ></progress>
                </div>
              </li>
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    MongoDB
                  </span>
                  <span className="text-base font-medium text-white">50%</span>
                </div>
                <div className="w-full">
                  <progress
                    className="progress progress-success "
                    value="50"
                    max="100"
                  ></progress>
                </div>
              </li>
            </ul>
          </div>
          {/* Others  */}
          <div className="">
            <h3 className="text-2xl font-extrabold mb-2">Others</h3>
            <ul className="ml-6 space-y-2">
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    Git & GitHub
                  </span>
                  <span className="text-base font-medium text-white">75%</span>
                </div>
                <div className="w-full">
                <progress className="progress progress-warning " value="75" max="100"></progress>
                </div>
              </li>
              
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    Firebase
                  </span>
                  <span className="text-base font-medium text-white">80%</span>
                </div>
                <div className="w-full">
                <progress className="progress progress-error " value="80" max="100"></progress>
                </div>
              </li>
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    Tailwind CSS
                  </span>
                  <span className="text-base font-medium text-white">90%</span>
                </div>
                <div className="w-full">
                <progress className="progress progress-secondary " value="90" max="100"></progress>
                </div>
              </li>
              <li>
                <div className="flex justify-between -mb-1">
                  <span className="text-xl font-medium  text-white">
                    Material UI 
                  </span>
                  <span className="text-base font-medium text-white">60%</span>
                </div>
                <div className="w-full">
                <progress className="progress progress-primary " value="60" max="100"></progress>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MySkills;
