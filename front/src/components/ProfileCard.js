import React, { Component } from "react";
import "./ProfileCard.scss";

// JS FOR BUTTON ?
// var messageBox = document.querySelector('.js-message');
//   var btn = document.querySelector('.js-message-btn');
//   var card = document.querySelector('.js-profile-card');
//   var closeBtn = document.querySelectorAll('.js-message-close');

//   btn.addEventListener('click',function (e) {
//       e.preventDefault();
//       card.classList.add('active');
//   });

//   closeBtn.forEach(function (element, index) {
//      console.log(element);
//       element.addEventListener('click',function (e) {
//           e.preventDefault();
//           card.classList.remove('active');
//       });
//   });

const ProfileStatsInfo = ({ state }) => {
  return (
    <div className="profile-card-inf">
      {state &&
        state.map((info, index) => (
          <div key={index} className="profile-card-inf__item">
            <div className="profile-card-inf__title">{info.value}</div>
            <div className="profile-card-inf__txt">{info.title}</div>
          </div>
        ))}
    </div>
  );
};

// TODO SVG ICONS
const ProfileIconLinks = ({ state }) => {
  return (
    <div className="profile-card-social">
    {state &&
        state.map((info, index) => (
        <a key={index} href={info.link} className={"profile-card-social__item " + info.type} target="_blank">
          <span className="icon-font">
              <svg className="icon"><use href={"#icon-" + info.type}></use></svg>
          </span>
        </a>
        ))}
    </div>
  );
}

export default class ProfileCard extends Component {
  constructor() {
    super();
    this.state = {
        stats: [
          {
            title: 'Followers',
            value: '1598',
          },
          {
            title: 'Following',
            value: '65',
          },
          {
            title: 'Articles',
            value: '123',
          },
          {
            title: 'Works',
            value: '85',
          },
        ],
        iconLinks: [
          {
            link: 'https://www.facebook.com/iaMuhammedErdem', 
            type: 'facebook'
          },
          {
            link: 'https://twitter.com/iaMuhammedErdem', 
            type: 'twitter'
          },
        ]
    };
  };

  render() {
    return (
        <div className="wrapper">
  <div className="profile-card js-profile-card">
    <div className="profile-card__img">
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg" alt="profile card" />
    </div>

    <div className="profile-card__cnt js-profile-cnt">
      <div className="profile-card__name">Muhammed Erdem</div>
      <div className="profile-card__txt">Front-end Developer from <strong>Mesopotamia</strong></div>
      <div className="profile-card-loc">
        <span className="profile-card-loc__icon">
          <svg className="icon"><use href="#icon-location"></use></svg>
        </span>

        <span className="profile-card-loc__txt">
          Istanbul, Turkey
        </span>
      </div>

      <ProfileStatsInfo state={this.state.stats} />

      <ProfileIconLinks state={this.state.iconLinks} />
      
      {/* @TODO ADD JAVASCRIPT TO THIS FORM */}
      <div className="profile-card-ctr">
        <button className="profile-card__button button--orange js-message-btn">Comment</button>
      </div>
    </div>

    {/* @TODO MOVE THIS TO ACTION FORM */}
    <div className="profile-card-message js-message">
      <form className="profile-card-form">
        <div className="profile-card-form__container">
          <textarea placeholder="Say something..."></textarea>
        </div>

        <div className="profile-card-form__bottom">
          <button className="profile-card__button button--blue js-message-close">
            Send
          </button>

          <button className="profile-card__button button--gray js-message-close">
            Cancel
          </button>
        </div>
      </form>

      <div className="profile-card__overlay js-message-close"></div>
    </div>

  </div>
</div>
    );
  }
}
