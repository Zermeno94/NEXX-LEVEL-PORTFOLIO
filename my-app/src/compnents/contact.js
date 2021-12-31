import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    const resumeInfo = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Reach out to me!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeInfo.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}