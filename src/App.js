import React, { Component } from "react";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import profileData from "./profileData.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData: profileData.landing,
      portfolio: profileData.portfolio,
      skills: profileData.skills,
      contact: profileData.contact
    };
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <About bio={this.state.landingData} />
          <hr className="m-0" />
          <Portfolio portfolio={this.state.portfolio} />
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Contact awards={this.state.contact} />
        </div>
      </div>
    );
  }
}

export default App;
