import {Button} from 'primereact/button';
import React, {Component} from 'react'
import Spinner from '../components/Preloader';

import './styles/login.scss';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        const discord_client_id = process.env.REACT_APP_DISCORD_CLIENT_ID;
        const discord_redirect_path = process.env.REACT_APP_DISCORD_REDIRECT_PATH;
        this.state = {
        }
    }


    render() {
        const redirect_url = process.env.REACT_APP_DISCORD_AURH_URL;
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="login-wrapper">
                        {redirect_url}
                        <Button className={'btn-login'} label="Login" icon="pi pi-external-link"
                                onClick={() => window.open(redirect_url)}/>
                    </div>

                </div>
            </div>
        );
    }

}
