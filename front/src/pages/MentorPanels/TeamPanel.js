import React, {Component} from 'react';
import {Button} from 'primereact/button';
import {PickList} from 'primereact/picklist';
import {ToggleButton} from 'primereact/togglebutton';
import {Panel} from 'primereact/panel';
import {Toolbar} from 'primereact/toolbar';
import {InputSwitch} from 'primereact/inputswitch';
import {Link} from 'react-router-dom';





//// Added Team card ////
class Createdteamscard extends React.Component {

  state = {
    toggleButtonValue: false,

  };


render(){
    return (
      
      <>
        <div className="p-col-12 p-lg-4 contacts">
          <Panel header="Team Members">
            <ul>
              <li><Link to="/">
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_1.png"
                    width="35"
                    alt="avatar1"
                  />
                  <span className="name">Claire Williams</span>
                </button>
                </Link>
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
            </ul>
            <div className="p-col-12 p-lg-6">
                <Button label="Edit Team" icon="pi pi-plus" className="p-button-info" style={{marginRight:'.25em'}} />
                <div className="p-col-12 p-md-4">
                    {/* <ToggleButton checked={this.state.toggleButtonValue} onChange={event => this.setState({toggleButtonValue: event.value})} /> */}
                    <InputSwitch onLabel="Yes" offLabel="No" checked={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                    <p>Activate Group</p>
                    
                </div>
            </div>

          </Panel>
        </div>
      </>
    );
}
  };
  
export class TeamPanel extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
            value: 0,
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#007be5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#20d077'
                    }
                ]
            },
            radarData: {
                labels: ['Presentation', 'Time Accuracy', 'Javascript', 'React', 'HTML', 'CSS', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            }
        };

    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Team Panel</h1>
                            <Toolbar>
                                <div className="p-toolbar-group-left">
                                    <Button label="Create New Team" icon="pi pi-plus" className="p-button-success" style={{marginRight:'.25em'}} />
                                </div>
                                <div className="p-toolbar-group-right">
                                    <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                                </div>
                            </Toolbar>
                            <PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate} 
                            onChange={(e) => this.setState({source: e.source, target: e.target})} responsive={true} />

                        
                            <h1>The Groups</h1>
                          <div className="p-grid p-fluid dashboard">
                             <Createdteamscard />
                             <Createdteamscard />
                             <Createdteamscard />
                             <Createdteamscard />

                          </div>
                    </div>
                </div>
            </div>
        );
    }
}