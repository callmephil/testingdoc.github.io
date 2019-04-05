import React, {Component} from 'react';
import {TabMenu} from 'primereact/tabmenu';
import { Dashboard } from './Dashboard'


export class DashboardMentor extends Component {
    constructor() {
        super();
        this.state = {
            tabMenuItems: [
                {label: 'Activity', icon: 'pi pi-fw pi-home'},
                {label: 'Students', icon: 'pi pi-fw pi-calendar'},
                {label: 'Teams', icon: 'pi pi-fw pi-pencil'},
                {label: 'Projects & Tasks', icon: 'pi pi-fw pi-file'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog'}
            ],
            activeItem: [
                {label: 'Activity', icon: 'pi pi-fw pi-home'}
            ],
        }
    }

    renderActivityPage = () => {
        return (
            <>
                <Dashboard />
            </>
        );
    }

    renderComponents = (label) => {
        switch (label)
        {
            case 'Activity':
                return this.renderActivityPage();
            case 'Calendar':
                return <TabMenu model={this.state.tabMenuItems} />
            default:
                return <div> In Developement </div>
        }
    }

    render() {
        console.log(this.state.activeItem)
        const pageToLoad = this.renderComponents(this.state.activeItem.label);
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <TabMenu model={this.state.tabMenuItems} 
                        activeItem={this.state.activeItem} 
                        onTabChange={(e) => this.setState({activeItem: e.value})}
                        />
                    </div>
                    <div>  {pageToLoad} </div>
                </div>
            </div>
        );
    }
}