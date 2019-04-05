import React, {Component} from 'react';

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
                    </div>
                </div>
            </div>
        );
    }
}