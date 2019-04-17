import React, {Component} from 'react';
import {Panel} from 'primereact/panel';



//// added students card ////
const Studentslistcard = () => {
    return (
      <>
        <div className="p-col-12 p-lg-4 contacts">
          <Panel header="Students list">
            <ul>
              <li>
                <button className="p-link" >
                  <img
                    src="assets/layout/images/avatar_1.png"
                    width="35"
                    alt="avatar1"
                  />
                  <span className="name">Claire Williams</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_2.png"
                    width="35"
                    alt="avatar2"
                  />
                  <span className="name">Jason Dourne</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_3.png"
                    width="35"
                    alt="avatar3"
                  />
                  <span className="name">Jane Davidson</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_4.png"
                    width="35"
                    alt="avatar4"
                  />
                  <span className="name">Tony Corleone</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_4.png"
                    width="35"
                    alt="avatar4"
                  />
                  <span className="name">Tony Corleone</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_4.png"
                    width="35"
                    alt="avatar4"
                  />
                  <span className="name">Tony Corleone</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_4.png"
                    width="35"
                    alt="avatar4"
                  />
                  <span className="name">Tony Corleone</span>
                </button>
              </li>

            </ul>
          </Panel>
        </div>
      </>
    );
  };
  
export class StudentPanel extends Component {
    constructor() {
        super();
        this.state = null;
    }
    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Student Panel</h1>
                        <p>Use this page to start from scratch and place your custom content.</p>

                        <div className="p-grid p-fluid dashboard">
                            <Studentslistcard></Studentslistcard>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }