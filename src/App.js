import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import Project from "./Project";
import Navigation from "./Navigation";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "./projects.json";

class App extends Component {
  state = {
    winSize: 1
  };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    // determine screen size, based on bootstrap breakpoints
    // xs: 1 (width < 768)
    // sm: 2 (768 >= width < 992)
    // md: 3 (992 >= width < 1200)
    // lg: 4 (width >= 1200)
    let winSize;
    switch (true) {
      case window.innerWidth >= 1200:
        winSize = 4;
        break;
      case window.innerWidth >= 992:
        winSize = 3;
        break;
      case window.innerWidth >= 768:
        winSize = 2;
        break;
      default:
        winSize = 1;
    }
    this.setState({ winSize });
  };

  render() {
    return (
      <>
        <Navigation />
        <header className="masthead text-center text-white">
          <div className="masthead-content">
            <div className="container">
              <h1 className="masthead-heading mb-0">
                <ScrollAnimation animateIn="fadeIn" initiallyVisible={false}>
                  Full Stack Web Developer
                </ScrollAnimation>
              </h1>
              <h2 className="masthead-subheading mb-0">
                <ScrollAnimation
                  animateIn="flipInY"
                  initiallyVisible={false}
                  animateOnce={true}
                >
                  Experience with MERN stack and more.
                </ScrollAnimation>
              </h2>
              <a
                href="#portfolio"
                className="btn btn-primary btn-xl rounded-pill mt-5"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          <div className="bg-circle-4 bg-circle" />
        </header>

        <main>
          <div className="container my-4">
            <h1 className="text-center display-4">About Me</h1>
            <p>
              I'm a computer geek, with years of experience developing internal
              business tools for operations management, training, financial
              analysis and planning and logistics. I'm also a motorcycle rider
              who is obsessed with application performance (why await traffic?).
            </p>
            <p>
              I have a strong professional drive - I previously worked my way up
              from an entry level cashier role through 5 promotions to
              Operations Manager for a retail chain, teaching myself next-level
              skills along the way.
            </p>
            <p>
              I love working in React and Node. I also like building full stack
              websites - below are some of my favorites.
            </p>
          </div>
          <hr className="mx-3" />
          <div className="container my-4">
            <a
              href="#portfolio"
              name="portfolio"
              style={{ "text-decoration": "none", color: "black" }}
            >
              <h1 className="text-center display-4">Portfolio</h1>
            </a>
          </div>

          {projects.map((p, index) => (
            <Project
              key={index}
              index={index}
              title={p.title}
              description={p.description}
              imgSrc={p.imgSrc}
              link={p.link}
              winSize={this.state.winSize}
            />
          ))}
        </main>

        <footer className="py-5 bg-dark text-white text-center">
          <div className="container">
            <a href="#contact" name="contact">
              {" "}
            </a>
            <h1 className="my-3">Contact Me</h1>
            <h2 className="my-3">
              Email:{" "}
              <a className="text-white" href="mailto:scotteratigan@gmail.com">
                scotteratigan@gmail.com
              </a>
            </h2>
            <div className="my-2">
              <a
                href="https://www.linkedin.com/in/scotteratigan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://scotteratigan.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="small">Copyright &copy; Scott E Ratigan 2019</div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
