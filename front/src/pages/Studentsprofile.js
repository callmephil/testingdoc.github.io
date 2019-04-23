import React, { Component } from 'react';
import {Chart} from 'primereact/chart';
import ProfileCard from '../components/ProfileCard';
import {InputTextarea} from 'primereact/inputtextarea';
import {Fieldset} from 'primereact/fieldset';




var images=[
  {source:'data:image/jpeg;base64,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', 
  thumbnail:'data:image/jpeg;base64,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', 
  title:'Student'},
];

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
      </>
);
};

const Commentsection = () => {
  return (
    <>
      <div className="p-col-12 p-md-2">
          <label htmlFor="textarea">Comments</label>
      </div>
      <div className="p-col-12 p-md-4">
          <InputTextarea id="textarea" rows={3} cols={30} autoResize={true}></InputTextarea>
      </div>

</>
  );
};

const Commentsview = () => {
  return (
    <>
        <div className="p-col-12">
             <div className="card card-w-title">
                  <Fieldset legend="Mentor name" toggleable={true}>
                      The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                       His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                       Through life of Michael the nature of the family business becomes clear. The business of the family is just like the head of the family,
                       kind and benevolent to those who give respect,
                        but given to ruthless violence whenever anything stands against the good of the family.
                    </Fieldset>
              </div>
        </div>
</>
  );
};


export default class Studentsprofile extends Component {

  constructor() {
    super();
    this.state = {

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
              <div className="p-grid p-fluid dashboard">

                      <ProfileCard></ProfileCard>
                      <h1></h1>
                      <div className="p-col-12">
                          <div className="card">
                          <div className="p-grid p-fluid dashboard">

                              <SkillMap Data = {this.state.radarData} />
                              <KeyCard /> 
                          <div className="p-col-12">
                          <div className="card">
                          <div className="p-grid p-fluid dashboard">

                              <Commentsection />
                              <Commentsview />
                              <Commentsview />
                              <Commentsview />

                            </div>
                            </div>
                            </div>
                      
                            </div>
                            </div>
                            </div>

                </div>
                </div>
          </div>
      </div>
)
  }
}



  
  
  
  
