import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Contact</h2>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xbjdelqg"
            method="POST"
          >
            <div class="form-group">
              <input
                type="name"
                class="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <input
                type="name"
                class="form-control"
                id="name"
                name="name"
                aria-describedby="emailHelp"
                placeholder="Your Name"
              />

              <textarea
                class="form-control"
                id="message"
                name="message"
                rows="3"
                placeholder="Tell me something!"
              ></textarea>

              {status === "SUCCESS" ? (
                <p>Thanks! I'll be in touch soon!</p>
              ) : (
                <button>Submit</button>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
          </form>
        </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
