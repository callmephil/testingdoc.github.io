import React, { Component } from "react";
import "./ProfileCard.css";

export default class ProfileCard extends Component {
  render() {
    return (
        <div className="custom-card">
          <div className="custom-additional">
            <div className="custom-user-card">
              <div className="custom-level custom-center">Student</div>
              <div className="custom-points custom-center">5,312 Keys</div>
              <img className="custom-center"
                      src={"assets/layout/images/profile.png"}
                      width="56"
                      alt={"Test"}
                />
            </div>
            <div className="custom-more-info">
              <h1>Jane Doe</h1>
              <div className="custom-coords">
                <span>Group Name</span>
                <span>Joined January 2019</span>
              </div>
              <div className="custom-coords">
                <span>Student</span>
                <span>Codi</span>
              </div>
              <div className="custom-stats">
                <div>
                  <div className="custom-title">Awards</div>
                  <i className="custom-fa fa-trophy" />
                  <div className="custom-value">2</div>
                </div>
                <div>
                  <div className="custom-title">Matches</div>
                  <i className="custom-fa fa-gamepad" />
                  <div className="custom-value">27</div>
                </div>
                <div>
                  <div className="custom-title">Pals</div>
                  <i className="custom-fa fa-group" />
                  <div className="custom-value">123</div>
                </div>
                <div>
                  <div className="custom-title">Coffee</div>
                  <i className="custom-fa fa-coffee" />
                  <div className="custom-value custom-infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-general">
            <h1>Jane Doe</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
              pulvinar.
            </p>
            <span className="custom-more">
              Mouse over the card for more info
            </span>
          </div>
        </div>
    );
  }
}
