import React, { Component } from "react";

class Portfolio extends Component {
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
        <div className="container">
          <div className="row">
            <div className="col-xl-12 mx-auto mb-3">
              <h2 className="abouthead">Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div
                className="view overlay hm-black-strong"
                data-toggle="modal"
                data-target="#modal1"
              >
                <img
                  src="http://localhost:3000/images/dealmazing.JPG"
                  className="portfolio-image"
                  alt="sample"
                />
                <div className="p-2 bg-info text-white">Deals Website</div>
                <div className="mask flex-center">
                  <p className="white-text">View Project</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div
                className="view overlay hm-black-strong"
                data-toggle="modal"
                data-target="#modal2"
              >
                <img
                  src="http://localhost:3000/images/crypto-portal.JPG"
                  className="portfolio-image"
                  alt="sample"
                />
                <div className="p-2 bg-info text-white">
                  Cryptocurrency Portal
                </div>
                <div className="mask flex-center">
                  <p className="white-text">View Project</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div
                className="view overlay hm-black-strong"
                data-toggle="modal"
                data-target="#modal3"
              >
                <img
                  src="http://localhost:3000/images/phonebook.JPG"
                  className="portfolio-image"
                  alt="sample"
                />
                <div className="p-2 bg-info text-white">Phonebook</div>
                <div className="mask flex-center">
                  <p className="white-text">View Project</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div
                className="view overlay hm-black-strong"
                data-toggle="modal"
                data-target="#modal4"
              >
                <img
                  src="http://localhost:3000/images/blog-app.JPG"
                  className="portfolio-image"
                  alt="sample"
                />
                <div className="p-2 bg-info text-white">Blog Application</div>
                <div className="mask flex-center">
                  <p className="white-text">View Project</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div
                className="view overlay hm-black-strong"
                data-toggle="modal"
                data-target="#modal5"
              >
                <img
                  src="http://localhost:3000/images/all-vintage-search.JPG"
                  className="portfolio-image"
                  alt="sample"
                />
                <div className="p-2 bg-info text-white">
                  Ebay Vintage Card Search
                </div>
                <div className="mask flex-center">
                  <p className="white-text">View Project</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div
                className="view overlay hm-black-strong"
                data-toggle="modal"
                data-target="#modal6"
              >
                <img
                  src="http://localhost:3000/images/all-vintage-cards.JPG"
                  className="portfolio-image"
                  alt="sample"
                />
                <div className="p-2 bg-info text-white">Vintage Card Blog</div>
                <div className="mask flex-center">
                  <p className="white-text">View Project</p>
                </div>
              </div>
            </div>

            {/*Modal One */}
            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              id="modal1"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Deals Website</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="container modal-body">
                    <div className="row">
                      <div className="col">
                        <p>
                          {" "}
                          <img
                            src="http://localhost:3000/images/dealmazing.JPG"
                            className="img-fluid"
                            alt="sample"
                          />
                        </p>
                      </div>
                      <div className="col">
                        <h5>Description</h5>
                        <p>
                          Built a curated deals based website utilizing Django
                          and Python. Includes complete user registration and
                          authentication.
                        </p>
                        <h5>Technology Used</h5>
                        <span className="btn-warning mr-2">Python</span>
                        <span className="btn-info m-2">Django</span>
                        <span className="btn-info m-2">Material Design</span>
                        {/* <span className="btn-success m-2">
                          Windows XP, Vista, 7
                        </span> */}
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="https://github.com/pythoncreate/dealmazing">
                        <button type="button" className="btn btn-secondary">
                          Github
                        </button>
                      </a>
                      <a href="http://web.archive.org/web/20180412035039/http://dealmazing.com/">
                        <button type="button" className="btn btn-primary">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Modal 2 */}
            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              id="modal2"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Cryptocurrency Portal</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="container modal-body">
                    <div className="row">
                      <div className="col">
                        <p>
                          {" "}
                          <img
                            src="http://localhost:3000/images/crypto-portal.JPG"
                            className="img-fluid"
                            alt="sample"
                          />
                        </p>
                      </div>
                      <div className="col">
                        <h5>Description</h5>
                        <p>
                          I built a back end server in Node/Express to serve
                          three different API routes for my application. One
                          utilizing data from Poloniex to power my graphs
                          utilizing the React High Charts NPM package. Another
                          API utilizes data from Coin Market Cap to display the
                          CryptoCurrency statistics. The third API utilizes the
                          Twitter API in order to display the most recent tweets
                          for any requested ticker. The front end is built using
                          React along with Bootstrap and custom CSS.
                        </p>
                        <h5>Technology Used</h5>
                        <span className="btn-warning mr-2">JavaScript</span>
                        <span className="btn-info m-2">React</span>
                        <span className="btn-info m-2">Bootstrap</span>
                        <span className="btn-success m-2">Node</span>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="https://github.com/pythoncreate/twit-stocks">
                        <button type="button" className="btn btn-secondary">
                          Github
                        </button>
                      </a>
                      <a href="https://treehouse-crypto.herokuapp.com/">
                        <button type="button" className="btn btn-primary">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Modal 3 */}
            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              id="modal3"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Phonebook</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="container modal-body">
                    <div className="row">
                      <div className="col">
                        <p>
                          {" "}
                          <img
                            src="http://localhost:3000/images/phonebook.JPG"
                            className="img-fluid"
                            alt="sample"
                          />
                        </p>
                      </div>
                      <div className="col">
                        <h5>Description</h5>
                        <p>
                          Built this phonebook using express and Mongo for the
                          backend, along with React on the front end. The
                          phonebook allows visitors to add a new phone number,
                          edit and delete existing users.
                        </p>
                        <h5>Technology Used</h5>
                        <span className="btn-warning mr-2">JavaScript</span>
                        <span className="btn-info m-2">React</span>
                        <span className="btn-info m-2">Bootstrap</span>
                        <span className="btn-success m-2">Node</span>
                        <span className="btn-info m-2">Mongo</span>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="https://github.com/pythoncreate/full-stack-open/tree/master/part3/phonebook-backend">
                        <button type="button" className="btn btn-secondary">
                          Github
                        </button>
                      </a>
                      <a href="https://whispering-plains-76785.herokuapp.com/">
                        <button type="button" className="btn btn-primary">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Modal 4 */}
            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              id="modal4"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Blog Application</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="container modal-body">
                    <div className="row">
                      <div className="col">
                        <p>
                          {" "}
                          <img
                            src="http://localhost:3000/images/blog-app.JPG"
                            className="img-fluid"
                            alt="sample"
                          />
                        </p>
                      </div>
                      <div className="col">
                        <h5>Description</h5>
                        <p>
                          This was the final project for the FullStackOpen
                          course. I built a blog application using React and
                          Redux on the front end along with node, express and
                          mongo for the back end. This was the first time I've
                          used semantic ui and I think i might actually like it
                          better than Bootstrap. I learned a lot about redux on
                          this one as I was required to use reducers for all of
                          the various states required throughout the project.
                        </p>
                        <h5>Technology Used</h5>
                        <span className="btn-warning mr-2">JavaScript</span>
                        <span className="btn-info m-2">React</span>
                        <span className="btn-success m-2">Redux</span>
                        <span className="btn-info m-2">Semantic UI</span>
                        <span className="btn-success m-2">Node</span>
                        <span className="btn-info m-2">Mongo</span>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="https://github.com/pythoncreate/full-stack-open/tree/master/part7/blog-test">
                        <button type="button" className="btn btn-secondary">
                          Github
                        </button>
                      </a>
                      <a href="https://serene-brushlands-08534.herokuapp.com/">
                        <button type="button" className="btn btn-primary">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Modal 5 */}
            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              id="modal5"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">eBay Vintage Card Search</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="container modal-body">
                    <div className="row">
                      <div className="col">
                        <p>
                          {" "}
                          <img
                            src="http://localhost:3000/images/all-vintage-search.JPG"
                            className="img-fluid"
                            alt="sample"
                          />
                        </p>
                      </div>
                      <div className="col">
                        <h5>Description</h5>
                        <p>
                          I designed a third party search application utilizing
                          the eBay API. The site has a niche focus of vintage
                          baseball cards and is customized as such. The site
                          uses a Node/Express backend along with a Mongo DB and
                          a React/Redux Front end.
                        </p>
                        <h5>Technology Used</h5>
                        <span className="btn-warning mr-2">JavaScript</span>
                        <span className="btn-info m-2">React</span>
                        <span className="btn-success m-2">Redux</span>
                        <span className="btn-info m-2">Semantic UI</span>
                        <span className="btn-success m-2">Node</span>
                        <span className="btn-info m-2">Mongo</span>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="https://github.com/pythoncreate/vintage-cards">
                        <button type="button" className="btn btn-secondary">
                          Github
                        </button>
                      </a>
                      <a href="https://www.allvintagesearch.com">
                        <button type="button" className="btn btn-primary">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Modal 6*/}
            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              id="modal6"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Vintage Cards Blog</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="container modal-body">
                    <div className="row">
                      <div className="col">
                        <p>
                          {" "}
                          <img
                            src="http://localhost:3000/images/all-vintage-cards.JPG"
                            className="img-fluid"
                            alt="sample"
                          />
                        </p>
                      </div>
                      <div className="col">
                        <h5>Description</h5>
                        <p>
                          This site is mostly an example of my SEO skills and
                          front end abilities. While the site uses a third party
                          theme, I highly customized the website for my own
                          needs. The focus on high quality articles has led to
                          tremendous search engine success with Google.
                        </p>
                        <h5>Technology Used</h5>
                        <span className="btn-warning mr-2">JavaScript</span>
                        <span className="btn-info m-2">React</span>
                        <span className="btn-success m-2">Wordpress</span>
                        <span className="btn-info m-2">SEO</span>
                        <span className="btn-success m-2">CSS</span>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="https://www.allvintagecards.com">
                        <button type="button" className="btn btn-primary">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="hovereffect">
                <img
                  className="img-responsive"
                  src="http://localhost:3002/images/dealmazing.JPG"
                  alt=""
                />
                <div className="overlay">
                  <h2>Deals Website</h2>
                  <a className="info" href="google.com">
                    link here
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="hovereffect">
                <img
                  className="img-responsive"
                  src="http://localhost:3002/images/dealmazing.JPG"
                  alt=""
                />
                <div className="overlay">
                  <h2>Deals Website</h2>
                  <a className="info" href="google.com">
                    link here
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="hovereffect">
                <img
                  className="img-responsive"
                  src="http://localhost:3002/images/dealmazing.JPG"
                  alt=""
                />
                <div className="overlay">
                  <h2>Deals Website</h2>
                  <a className="info" href="google.com">
                    link here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="hovereffect">
                <img
                  className="img-responsive"
                  src="http://localhost:3002/images/dealmazing.JPG"
                  alt=""
                />
                <div className="overlay">
                  <h2>Deals Website</h2>
                  <a className="info" href="google.com">
                    link here
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="hovereffect">
                <img
                  className="img-responsive"
                  src="http://localhost:3002/images/dealmazing.JPG"
                  alt=""
                />
                <div className="overlay">
                  <h2>Deals Website</h2>
                  <a className="info" href="google.com">
                    link here
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
