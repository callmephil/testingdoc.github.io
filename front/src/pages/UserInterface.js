import React, { Component } from 'react';
import {CarService} from '../service/Examples/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Chart} from 'primereact/chart';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {FullCalendar} from 'primereact/fullcalendar';
// import ProfileCard from '../components/ProfileCard'

const KeyCard = () => {
  return (
    <>
      <div className="p-col-12 p-lg-4">
        <div className="card summary">
          <span className="title">Earned Key</span>
          <span className="detail">Number of key earned</span>
          <span className="count visitors">213</span>
        </div>
      </div>
      <div className="p-col-12 p-lg-4">
        <div className="card summary">
          <span className="title">Group Key</span>
          <span className="detail">Number of key earned by your group</span>
          <span className="count purchases">534</span>
        </div>
      </div>
      <div className="p-col-12 p-lg-4">
        <div className="card summary">
          <span className="title">Cohort Key</span>
          <span className="detail">Number of key earned by this Cohort</span>
          <span className="count revenue">3200</span>
        </div>
      </div>
      <div className="p-col-12 p-md-6 p-xl-3">
        <div className="highlight-box">
          <div
            className="initials"
            style={{ backgroundColor: "#007be5", color: "#00448f" }}
          >
            <span>TV</span>
          </div>
          <div className="highlight-details ">
            <i className="pi pi-search" />
            <span>Total Task</span>
            <span className="count">130</span>
          </div>
        </div>
      </div>
    </>
  );
};

const TaskStatsCard = () => {
  return (
    <>
      <div className="p-col-12 p-md-6 p-xl-3">
        <div className="highlight-box">
          <div
            className="initials"
            style={{ backgroundColor: "#ef6262", color: "#a83d3b" }}
          >
            <span>TI</span>
          </div>
          <div className="highlight-details ">
            <i className="pi pi-question-circle" />
            <span>Total Task Left</span>
            <span className="count">81</span>
          </div>
        </div>
      </div>
      <div className="p-col-12 p-md-6 p-xl-3">
        <div className="highlight-box">
          <div
            className="initials"
            style={{ backgroundColor: "#20d077", color: "#038d4a" }}
          >
            <span>OI</span>
          </div>
          <div className="highlight-details ">
            <i className="pi pi-filter" />
            <span>Total Task Completed</span>
            <span className="count">21</span>
          </div>
        </div>
      </div>
      <div className="p-col-12 p-md-6 p-xl-3">
        <div className="highlight-box">
          <div
            className="initials"
            style={{ backgroundColor: "#f9c851", color: "#b58c2b" }}
          >
            <span>CI</span>
          </div>
          <div className="highlight-details ">
            <i className="pi pi-check" />
            <span>Total Task Verified</span>
            <span className="count">60</span>
          </div>
        </div>
      </div>
    </>
  );
};

const TaskCard = ({onTaskChange, state}) => {
    return (
      <>
        <div className="p-col-12 p-md-6 p-lg-4">
          <Panel header="Tasks" style={{ height: "100%" }}>
            <ul
              className="task-list"
              style={{
                maxHeight: "240px",
                overflow: "hidden",
                overflowY: "scroll"
              }}
            >
              <li>
                <Checkbox
                  value="task1"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task1") > -1 ? true : false
                  }
                />
                <span className="task-name">Portfolio HTML</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task2"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task2") > -1 ? true : false
                  }
                />
                <span className="task-name">Portfolio CSS</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task3"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task3") > -1 ? true : false
                  }
                />
                <span className="task-name">Javascript 01</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task4"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task4") > -1 ? true : false
                  }
                />
                <span className="task-name">Client Meeting</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task5"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task5") > -1 ? true : false
                  }
                />
                <span className="task-name">Javascript 02</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task6"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task6") > -1 ? true : false
                  }
                />
                <span className="task-name">Javascript 03</span>
                <Button icon="pi pi-check" />
              </li>
            </ul>
          </Panel>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4">
          <Panel header="Group Tasks">
            <ul
              className="task-list"
              style={{
                maxHeight: "240px",
                overflow: "hidden",
                overflowY: "scroll"
              }}
            >
              <li>
                <Checkbox
                  value="task7"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task7") > -1 ? true : false
                  }
                />
                <span className="task-name">Research : What is SQL ?</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task8"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task8") > -1 ? true : false
                  }
                />
                <span className="task-name">
                  Research : Who's Linus Torvalds
                </span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task9"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task9") > -1 ? true : false
                  }
                />
                <span className="task-name">
                  Research : What is version control ?
                </span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task10"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task10") > -1 ? true : false
                  }
                />
                <span className="task-name">Client Meeting</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task11"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task11") > -1 ? true : false
                  }
                />
                <span className="task-name">
                  Group Project : Prefabricated House
                </span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task12"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task12") > -1 ? true : false
                  }
                />
                <span className="task-name">Group Meeting</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task7"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task7") > -1 ? true : false
                  }
                />
                <span className="task-name">Research : What is SQL ?</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task8"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task8") > -1 ? true : false
                  }
                />
                <span className="task-name">
                  Research : Who's Linus Torval
                </span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task9"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task9") > -1 ? true : false
                  }
                />
                <span className="task-name">
                  Research : What is version control ?
                </span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task10"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task10") > -1 ? true : false
                  }
                />
                <span className="task-name">Client Meeting</span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task11"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task11") > -1 ? true : false
                  }
                />
                <span className="task-name">
                  Group Project : Prefabricated House
                </span>
                <Button icon="pi pi-check" />
              </li>
              <li>
                <Checkbox
                  value="task12"
                  onChange={onTaskChange}
                  checked={
                    state.indexOf("task12") > -1 ? true : false
                  }
                />
                <span className="task-name">Group Meeting</span>
                <Button icon="pi pi-check" />
              </li>
            </ul>
          </Panel>
        </div>
      </>
    );
}

const GroupCard = ({groupData}) => {
  return (
    <>
      <div className="p-col-12 p-lg-4 contacts">
        <Panel header="Group Contacts">
          <ul>
              {groupData && groupData.map((el, index) => (
                <li key={index}>
                  <button className="p-link">
                    <img
                      src={el.avatar.src}
                      width="35"
                      alt={el.avatar.alt}
                    />
                    <span className="name">{ el.name }</span>
                    <span className="email">{ el.contact }</span>
                  </button>
                </li>
              ))}
          </ul>
        </Panel>
      </div>
    </>
  );
};

const SkillMap = ({Data}) => {
  return (
    <>
      <div className="p-col-12 p-lg-6">
        <div className="card">
          <h1 style={{ fontSize: "16px" }} className="centerText">
            Skill Map
          </h1>
          <Chart type="radar" data={Data} height="150" />
        </div>
      </div>
    </>
  );
};

const Calendar = ({events, fullcalendarOptions}) => {
    return (
        <>
        <div className="p-col-12 p-lg-8">
            <Panel header="Calendar" style={{height: '100%'}}> 
                <FullCalendar events={events} options={fullcalendarOptions}></FullCalendar>
            </Panel>
        </div>
        </>
    );
};

const ActivityCard = () => {
  return (
    <>
      <div className="p-col-12 p-lg-4">
        <Panel header="Activity" style={{ height: "100%" }}>
          <div className="activity-header">
            <div className="p-grid">
              <div className="p-col-6">
                <span style={{ fontWeight: "bold" }}>Last Activity</span>
                <p>Updated 1 minute ago</p>
              </div>
              <div className="p-col-6" style={{ textAlign: "right" }}>
                <Button label="Refresh" icon="pi pi-refresh" />
              </div>
            </div>
          </div>
          <ul className="activity-list">
            <li>
              <div className="count">$900</div>
              <div className="p-grid">
                <div className="p-col-6">Income</div>
                <div className="p-col-6">95%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#f9c851" }}>
                $250
              </div>
              <div className="p-grid">
                <div className="p-col-6">Tax</div>
                <div className="p-col-6">24%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#20d077" }}>
                $125
              </div>
              <div className="p-grid">
                <div className="p-col-6">Invoices</div>
                <div className="p-col-6">55%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#f9c851" }}>
                $250
              </div>
              <div className="p-grid">
                <div className="p-col-6">Expenses</div>
                <div className="p-col-6">15%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#007be5" }}>
                $350
              </div>
              <div className="p-grid">
                <div className="p-col-6">Bonus</div>
                <div className="p-col-6">5%</div>
              </div>
            </li>
            <li>
              <div className="count" style={{ backgroundColor: "#ef6262" }}>
                $500
              </div>
              <div className="p-grid">
                <div className="p-col-6">Revenue</div>
                <div className="p-col-6">25%</div>
              </div>
            </li>
          </ul>
        </Panel>
      </div>
    </>
  );
};


export class Dashboard extends Component {

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

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    createTeam() {
        this.team = [
            { 
                avatar: {
                    src: "assets/layout/images/avatar_1.png",
                    alt: "avatar1"
                },
                name: "Claire Williams",
                contact: "clare@pf-sigma.com"
            },
            { 
                avatar: {
                    src: "assets/layout/images/avatar_2.png",
                    alt: "avatar2"
                },
                name: "Jason Dourne",
                contact: "jason@pf-sigma.com"
            },
            { 
                avatar: {
                    src: "assets/layout/images/avatar_3.png",
                    alt: "avatar3"
                },
                name: "Jane Davidson",
                contact: "jane@pf-sigma.com"
            },
            { 
                avatar: {
                    src: "assets/layout/images/avatar_4.png",
                    alt: "avatar4"
                },
                name: "Tony Corleone",
                contact: "tony@pf-sigma.com"
            }
        ]
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
        this.createTeam();
    }

    // !TODO MOVE THIS TO INDIVIDUAL STATE COMPONENT (Re-use in MENTOR DASHBOARD)
    AssignmentsList = () => {
        return (
        <>
            <div className="p-col-12 p-lg-6">
                <div className="card">
                <h1 style={{fontSize:'16px'}}>Assignments</h1>
                    <DataTable value={this.state.cars}  style={{marginBottom: '20px'}} responsive={true}
                        selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.value})}>
                        <Column field="Mentor" header="Mentor" sortable={false} />
                        <Column field="Deadline" header="Deadline" sortable={true} />
                        <Column field="Message" header="Message" sortable={false} />
                        <Column field="Link" header="Link" sortable={false} />
                    </DataTable>
                </div>
            </div>
        </>
        );
    }

    render() {
        let fullcalendarOptions = {
			defaultDate: '2019-04-01',
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true
		};

        let events = [
			{
				"id": 1,
				"title": "All Day Event",
				"start": "2019-04-01"
			},
			{
				"id": 2,
				"title": "Long Event",
				"start": "2019-04-07",
				"end": "2019-04-10"
			},
			{
				"id": 3,
				"title": "Repeating Event",
				"start": "2019-04-09T16:00:00"
			},
			{
				"id": 4,
				"title": "Repeating Event",
				"start": "2019-04-16T16:00:00"
			},
			{
				"id": 5,
				"title": "Conference",
				"start": "2019-04-11",
				"end": "2019-04-13"
			},
			{
				"id": 6,
				"title": "Meeting",
				"start": "2019-04-12T10:30:00",
				"end": "2019-04-12T12:30:00"
			},
			{
				"id": 7,
				"title": "Lunch",
				"start": "2019-04-12T12:00:00"
			},
			{
				"id": 8,
				"title": "Meeting",
				"start": "2019-04-12T14:30:00"
			},
			{
				"id": 9,
				"title": "Happy Hour",
				"start": "2019-04-12T17:30:00"
			},
			{
				"id": 10,
				"title": "Dinner",
				"start": "2019-04-12T20:00:00"
			},
			{
				"id": 11,
				"title": "Birthday Party",
				"start": "2019-04-13T07:00:00"
			},
			{
				"id": 12,
				"title": "Click for Google",
				"url": "http://google.com/",
				"start": "2019-04-28"
			}
        ];
        
        const AssignmentsListComponent = this.AssignmentsList;
        return (
            <div className="p-grid p-fluid dashboard">
                {/* <ProfileCard /> Fix Responsiveness */}
                <KeyCard />
                <TaskStatsCard />

                <TaskCard onTaskChange= { this.onTaskChange } 
                state = { this.state.tasks }/>

                <GroupCard groupData={this.team}/>

                {/* TODO MOVE THIS TO INDIVIDUAL COMPONENT */}
                <AssignmentsListComponent />
                {/* TODO MOVE THIS TO INDIVIDUAL COMPONENT */}

                <SkillMap Data = {this.state.radarData} />
                
                <Calendar events= {events} fullcalendarOptions={fullcalendarOptions} />

                <ActivityCard />
            </div>
        );
    }
}