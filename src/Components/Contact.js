import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.portfolio = props.portfolio;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="google.com" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="oogl.com" class="btn btn-primary">
              Go somewhere
            </a>
          </div>{" "}
          */}
        </div>
      </section>
    );
  }
}

export default Contact;
