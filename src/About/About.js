import React from 'react';
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-3">
                <h3 className="mb-3">Информация</h3>
                <p className="mt-2"></p>
                <p className="mt-2"></p>
                <p className="mt-2"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
