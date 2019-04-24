import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';




export class CurriculumnPanel extends Component {
    constructor() {
        super();
        this.state = {
            dropdownCity: null,
            cities: [
                {label: 'Select a Team', value: null},
                {label: 'Group 1', value: 'Group 1'},
                {label: 'Group 2', value: 'Group 2'},
                {label: 'Group 3', value: 'Group 3'},
                {label: 'Group 4', value: 'Group 4'},
                {label: 'Group 5', value: 'Group 5'}
            ],

        }

        
    }
    render() {
        return (
            <div>
            <div className="p-grid p-fluid">
            <div className="p-col-12 p-lg-6">
            <div className="card card-w-title">
                <h1>Create New Project</h1>
                <div className="p-col-12 p-md-4">
                <p>Project Name</p>
                        <InputText placeholder="Project Name"/>
                </div>
                <div className="card card-w-title">
                        <h1>Project Description</h1>
                        <InputTextarea rows={3} cols={30} placeholder="Description" autoResize={true} />
                </div>
                
                <div className="card card-w-title">
                    <h1>Assign For a Team</h1>
                        <Dropdown options={this.state.cities} value={this.state.dropdownCity} onChange={event => this.setState({dropdownCity: event.value})} autoWidth={false} />
                </div>



            </div>
            </div>
            </div>

            <div className="p-col-12 p-lg-6">
            <div className="card card-w-title">
                    <h1>Create New Task</h1>
            <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                            <InputText placeholder="Task Name"/>
                            <label htmlFor="cb1" className="p-checkbox-label"></label>
                    </div>

            </div>
            </div>
            </div>



                
            </div>



            
        );
    }
}