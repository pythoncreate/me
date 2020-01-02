import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    this.bio = props.bio;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h2 className="abouthead">About Me</h2>
          <p>
            I’m passionate about JavaScript and building web applications. After
            a long career in the financial services industry, I’ve decided to
            follow my passion for programming. I am self-taught and have been
            building websites since the early 2000's, starting out with simple
            HTML/CSS and morphing into a bit of JavaScript, PHP and (ASP--way
            back in the day). Some of the highlights include a New England
            travel deals (built using PHP) website styled after Groupon (Insider
            Trips), a stock short selling subscription website (Shortzilla) and
            a more recent deals website (Dealmazing) built using Python and
            Django.
          </p>
          <p>
            It has really been the last few years in which I found a love for
            JavaScript and started immersing myself in anything I could get my
            hands on to build my knowledge. I also formally expanded my skillset
            by completing both a Full Stack JavaScript and Python Techdegree
            from Treehouse. My latest accomplishment was the completion of the
            Full Stack Open course from the University of Helsinki, which
            provides a deep dive on JavaScript, React and Graph QL.
          </p>
          <p>
            Due to my strong entrepreneurial drive I've learned a lot about the
            best practices for SEO and SEM, while also building appealing, user
            friendly interfaces. My goal is to build web applications with the
            best practices and latest technology while continuing to refine and
            enhance my programming skills. Besides coding, I enjoy traveling and
            investing, running, sports, and spending time with my wife, two
            girls and dog.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
