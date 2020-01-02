import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      // <section
      //   className="resume-section p-3 p-lg-5 d-flex align-items-center"
      //   id="about"
      // >
      //       <div class="container h-100">
      //   <div class="row h-100 justify-content-center align-items-center">
      //     <form class="col-12">
      //       <div class="form-group">
      //         <label for="formGroupExampleInput">Example label</label>
      //         <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
      //       </div>
      //       <div class="form-group">
      //         <label for="formGroupExampleInput2">Another label</label>
      //         <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
      //       </div>
      //     </form>
      //   </div>
      // </div>
      <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <h1>Hi I'm Chris Stuart</h1>
          <h2>Full Stack Developer in Boston, MA</h2>
          <a
            className="btn btn-primary btn-lg mt-4"
            href="github.com"
            role="button"
          >
            View Resume
          </a>
          <a
            className="btn btn-primary btn-lg ml-3 mt-4"
            href="github.com"
            role="button"
          >
            Contact
          </a>
        </div>
      </div>
      // </section>
    );
  }
}

export default Landing;
