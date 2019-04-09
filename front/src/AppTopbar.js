import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { OverlayPanel } from "primereact/overlaypanel";
import "./layout/AppTopbar.css";

export class AppTopbar extends Component {
  static defaultProps = {
    onToggleMenu: null
  };

  static propTypes = {
    onToggleMenu: PropTypes.func.isRequired
  };

  openPage = link => {
    window.location = link;
  };

  mobileDisplay = () => {
    return (
      <>
        <button
          className="p-link layout-menu-button"
          onClick={this.props.onToggleMenu}
        >
          <span className="pi pi-bars" />
        </button>
        <div className="layout-topbar-icons">
          <button className="p-link"  onClick={event => this.overlayPanel.toggle(event)}>
            <span className="layout-topbar-item-text">Events</span>
            <span className="layout-topbar-icon pi pi-calendar" />
            <span className="layout-topbar-badge">5</span>
          </button>
        </div>
      </>
    );
  };

  desktopDisplay = () => {
    return (
      <>
        <button className="p-link layout-menu-button" onClick={this.props.onToggleMenu}>
          <img
            src="assets/layout/images/avatar_2.png"
            width="27"
            alt="avatar2"
          />
          <span
            style={{
              marginLeft: "10px",
              fontSize: "18px",
              paddingTop: "2px",
              position: "absolute"
            }}
          >
            Username
          </span>
        </button>
        <div className="layout-topbar-icons">
          <span className="layout-topbar-search">
            <InputText
              style={{ width: "180px" }}
              type="text"
              placeholder="Search"
            />
            <span className="layout-topbar-search-icon pi pi-search" />
          </span>
          <button
            className="p-link"
            onClick={event => this.overlayPanel.toggle(event)}
          >
            <span className="layout-topbar-item-text">Events</span>
            <span className="layout-topbar-icon pi pi-calendar" />
            <span className="layout-topbar-badge">5</span>
          </button>
          <button className="p-link" onClick={() => this.openPage("/")}>
            <span className="layout-topbar-item-text">User</span>
            <span className="layout-topbar-icon pi pi-user" />
          </button>
          <button className="p-link" onClick={() => this.openPage("/settings")}>
            <span className="layout-topbar-item-text">Settings</span>
            <span className="layout-topbar-icon pi pi-cog" />
          </button>
          <button className="p-link" onClick={() => this.openPage("/")}>
            <span className="layout-topbar-item-text">Logout</span>
            <span className="layout-topbar-icon pi pi-fw pi-power-off" />
          </button>
        </div>
      </>
    );
  };

  render() {
    const MobileDisplay = this.mobileDisplay;
    const DesktopDisplay = this.desktopDisplay;
    return (
      <div className="layout-topbar clearfix">
        <div className="top-bar-mobile-container">
          <MobileDisplay />
        </div>
        <div className="top-bar-desktop-container">
          <DesktopDisplay />
        </div>

        <OverlayPanel ref={el => (this.overlayPanel = el)}>
          <div className="top-bar-overlay-width">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
            <br />
            <br />
            <br />
            Secret Message : Would be cool to display the calendar here instead.
          </div>
        </OverlayPanel>
      </div>
    );
  }
}
