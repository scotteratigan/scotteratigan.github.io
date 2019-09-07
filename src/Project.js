import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
// hmm, calling this function 14 times per render isn't ideal I suppose...

class Project extends Component {
  state = {
    imageFirst: this.props.index % 2 === 0 ? true : false
  };

  textAlign = () => {
    let textAlign = "text-center";
    if (this.props.winSize >= 2) {
      if (this.state.imageFirst) textAlign = "text-left";
      else textAlign = "text-right";
    }
    return textAlign;
  };

  render = () => {
    return (
      <>
        <div className="container my-2">
          <div className="row align-items-center">
            <ProjectImage
              link={this.props.link}
              imgSrc={this.props.imgSrc}
              imageFirst={this.state.imageFirst}
              winSize={this.props.winSize}
            />
            <ProjectDescription
              link={this.props.link}
              title={this.props.title}
              description={this.props.description}
              textAlign={this.textAlign()}
              winSize={this.props.winSize}
            />
          </div>
        </div>
      </>
    );
  };
}

const ProjectImage = props => {
  // Alternate ordering of columns when display is medium or larger, otherwise text is always first.
  return (
    <div
      className={`col-md-6 order-1 ${
        props.imageFirst ? "order-md-1" : "order-md-3"
      }`}
    >
      <div className={props.winSize >= 2 ? "p-4" : "p-1 mb-5"}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            className="img-fluid img-thumbnail"
            src={"/images/" + props.imgSrc}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

const ProjectDescription = props => {
  return (
    <div className={`col-md-6 order-md-2 ${props.textAlign}`}>
      <div className={props.winSize >= 2 ? "p-4" : "p-1 mt-5"}>
        {/* // 'p-5' */}
        <h1>
          <ScrollAnimation
            animateIn="fadeIn"
            initiallyVisible={false}
            animateOnce={true}
          >
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              {props.title}
            </a>
          </ScrollAnimation>
        </h1>
        <p>
          <ScrollAnimation
            animateIn="fadeIn"
            initiallyVisible={false}
            animateOnce={true}
          >
            {props.description}
          </ScrollAnimation>
        </p>
      </div>
    </div>
  );
};

export default Project;
