import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Section} from 'react-fullpage';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    }
  };

  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Section className="container-fluid portfolio"  style={{backgroundImage: 'url(assets/img/works/geon/trianglify.png)'}}>
        <div className="work">
          <div className="work__overlay"><span className="work__overlay-text">GEON Property</span></div>
          <img src="assets/img/works/geon/geon_homepage.jpg" alt="Geon Homepage" className="work__image img-fluid"/>
          <span className="work__link"><Link to="/portfolio/:id">Go to: http://geonproperty.com.au</Link></span>
          <span className="work__description">Description</span>
        </div>
      </Section>
    )
  }
}

export default Portfolio;
