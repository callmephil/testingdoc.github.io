import React, {Component} from 'react'
import axios from 'axios'
import Spinner from '../components/Preloader';

export const callback_status = {
    LOIDING: 'loading',
    INVALID_CALLBACK: 'invalid_callback',
    INVALID_TOKEN: 'invalid_token',
    AUTH_SUCCESS: 'auth_success',
}

export const CallBackStatus = ({status}) => {
    const {LOIDING, INVALID_CALLBACK, INVALID_TOKEN, AUTH_SUCCESS} = callback_status;
    // if (status === LOIDING) {
    //     return status;
    // }
    return (
        <p style={{color: 'red'}}>{ status } sss</p>
    )

}

export default class DiscordCallback extends Component {

    constructor(props) {
        super(props);

        const discord_client_id = process.env.REACT_APP_DISCORD_CLIENT_ID;
        const discord_redirect_path = process.env.REACT_APP_DISCORD_REDIRECT_PATH;
        var search = this.props.location.search.substring(1);
        var callback_query = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

        this.state = {
            status: callback_status.LOIDING,
            callback_query,
            callback_code: callback_query.code,
            invalid_callback: false,

        }
    }

    componentDidMount() {
        const {callback_code} = this.state;
        if (typeof this.state.callback_code !== 'undefined' && this.state.callback_code !== '') {
            axios({
                method: 'get',
                url: `http://localhost:8080/discord/callback?code=${callback_code}`,
            }).then(response => {
                console.log('response' , response);
                this.setState({
                    status: callback_status.AUTH_SUCCESS,
                })
            }).catch(err => {
                console.log('err')
                this.setState({
                    status: callback_status.INVALID_TOKEN,
                })
            });
        } else {
            this.setState({
                status: callback_status.INVALID_CALLBACK,
            })
        }
    }

    render() {
        const {status} = this.state;

        return (
            <div>
                <Spinner visible={callback_status.LOIDING === status} spinnerColor={'#ff6ca8'} spinnerWidth={8}
                         size={160}/>
                         <CallBackStatus status={status} />
            </div>
        )
    }


}
