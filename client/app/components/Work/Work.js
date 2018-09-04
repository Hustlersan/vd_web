import React, {Component} from 'react';
import {Section} from 'react-fullpage';



class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    }
  };


  render() {
    return (
      <Section id="geon-homepage" className="container-fluid portfolio" style={{backgroundImage: 'url(/assets/img/trianglify.png)'}}>
        <div className="work">
          <div className="work__overlay"><span className="work__overlay-text">GEON Property</span></div>
          <img src="/assets/img/geon_homepage.jpg" alt="Geon Homepage" className="work__image img-fluid"/>
          <span className="work__link"><a href="http://geonproperty.com.au">Go to: http://geonproperty.com.au</a></span>
          <span className="work__description">Description</span>
        </div>
      </Section>
    )
  }
}

export default Work;
