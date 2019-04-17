import React, {Component} from 'react';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import ProfileCard from '../../components/ProfileCard';




export class ActivityPanel extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
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

    AssignmentsList = () => {
        return (
        <>
            <div className="p-col-12 p-lg-6">
                <div className="card">
                <h1 style={{fontSize:'16px'}}>Assignments</h1>
                     <DataTable value={this.state.cars}  style={{marginBottom: '20px'}} responsive={true}
                        selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.value})}>
                        <Column field="Student" header="Student" sortable={false} />
                        <Column field="Present" header="Present" sortable={false} />
                        <Column field="Late" header="Late" sortable={false} />
                        <Column field="Late time" header="Late time" sortable={false} />
                        <Column field="Lateness Reason" header="Lateness Reason" sortable={false} />
                        <Column field="Absence Reason" header="Absence Reason" sortable={false} />

                    </DataTable>    
                </div>
            </div>
        </>
        );
    }

    render() {
        const Assignments = this.AssignmentsList;
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Activity Panel</h1>
                        <p>Attendece sheet</p>
                        <Assignments></Assignments>
                    </div>
                </div>
            </div>
        );
    }
}