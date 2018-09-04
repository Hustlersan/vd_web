import React, {Component} from 'react';
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


let options = {
  activeClass: 'active', // the class that is appended to the sections links
  anchors: [],
  arrowNavigation: true, // use arrow keys
  className: 'SectionContainer', // the class name for the section container
  delay: 1000, // the scroll animation speed
  navigation: true, // use dots navigatio
  scrollBar: false, // use the browser default scrollbar
  sectionClassName: 'Section', // the section class name
  sectionPaddingTop: '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign: true // align the content of each section vertical
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    };
    this.newWork = this.newWork.bind(this);
  }

  componentDidMount() {

    fetch('/api/works')
      .then(res => res.json())
      .then(json => {
        if (json.length === 0) {
          this.newWork()
        } else {
          this.setState({
            works: json
          });
          options.anchors = new Array(2 + this.state.works.length)
        }
      });
  }

  newWork() {
    fetch('/api/works', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        let data = this.state.works;
        data.push(json);

        this.setState({
          works: data
        });
      });
  }

  render() {
    return (
      <SectionsContainer {...options}>
        <Section>
          <Header/>
        </Section>
        {this.props.children}
        <Section>
          <Footer/>
        </Section>
      </SectionsContainer>
    )
  }
}

export default App;
