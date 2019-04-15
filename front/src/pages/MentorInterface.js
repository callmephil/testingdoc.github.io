import React, { Component } from 'react';
/* ================ Default Components ================ */
import { TabMenu } from 'primereact/tabmenu';
/* ================ Panels ================ */
import { ActivityPanel } from './MentorPanels/ActivityPanel';
import { StudentPanel } from './MentorPanels/StudentPanel';
import { TeamPanel } from './MentorPanels/TeamPanel';
import { CurriculumnPanel } from './MentorPanels/CurriculumnPanel';
import { SettingsPanel } from './MentorPanels/SettingsPanel';





export class DashboardMentor extends Component {
    constructor() {
        super();
        this.state = {
            tabMenuItems: [
                {label: 'Activity', icon: 'pi pi-fw pi-home', component: <ActivityPanel /> },
                {label: 'Students', icon: 'pi pi-fw pi-calendar', component: <StudentPanel /> },
                {label: 'Teams', icon: 'pi pi-fw pi-pencil', component: <TeamPanel /> },
                {label: 'Curriculum', icon: 'pi pi-fw pi-file', component: <CurriculumnPanel /> },
                {label: 'Settings', icon: 'pi pi-fw pi-cog', component: <SettingsPanel /> }
            ],
        }
    }
    
    componentWillMount() {
        if (!this.state.activeItem)
            this.setState({activeItem: this.state.tabMenuItems[0]})
    }

    render() {
        const panelComponent = this.state.activeItem.component;
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <TabMenu model={this.state.tabMenuItems} 
                        activeItem={this.state.activeItem} 
                        onTabChange={(e) => this.setState({activeItem: e.value})}
                        />
                    </div>
                    { panelComponent }
                </div>
            </div>
        );
        
    }
    
}