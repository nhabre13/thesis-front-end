import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';

Promise = require('es6-promise');

export default class Testing extends React.Component<any, any> {

    constructor (props: any) {
        super(props);

        this.state = {
            hashEmail: '',
            model: '',
            os: '',
            browser: '',
            environment: '',
            userAgent: ''
        }

        this._changeBrowser = this._changeBrowser.bind(this);
        this._changeEmail = this._changeEmail.bind(this);
        this._changeModel = this._changeModel.bind(this);
        this._changeOs = this._changeOs.bind(this);
        this._changeEnvironment = this._changeEnvironment.bind(this);
        this._getUserAgent = this._getUserAgent.bind(this);
        this._submitData = this._submitData.bind(this);
    }

    private _handleMotionEvent(event: any) {
        if ((window as any).DeviceMotionEvent) {
            window.addEventListener('devicemotion', function(event){
                var time = new Date();

                var acceleration = event.acceleration;

                var x = acceleration.x;
                var y = acceleration.y;
                var z = acceleration.z;

            });
        } else {
            alert("Motion not supported!");
        }
    }

    private async _handleVibration(event: any){
        await this._handleMotionEvent(event);

        if (window.navigator.vibrate) {
            window.addEventListener('click', function(event){
                navigator.vibrate([500, 100, 500, 100, 500, 100, 500]);
                navigator.vibrate([300, 100, 300, 100, 300, 100, 300]);
                navigator.vibrate([100, 100, 100, 100, 100, 100, 100]);
            });
        } else {
            alert("Vibration not supported in this broswer :(");
        }
    }

    private _getUserAgent(): void {
        var txt = navigator.userAgent;
        this.setState({userAgent: txt});
    }

    private _changeEmail(event: any){
        this.setState({hashEmail: event.target.value});
    }

    private _changeEnvironment(event: any){
        this.setState({environment: event.target.value})
    }

    private _changeModel(event: any){
        this.setState({model: event.target.value});
    }

    private _changeOs(event: any){
        this.setState({os: event.target.value});
    }

    private _changeBrowser(event: any){
        this.setState({browser: event.target.value});
    }

    private _submitData(event: any): void{
        axios.post('http://localhost:8081/put', {
            hashEmail: this.state.hashEmail,
            model: this.state.model,
            os: this.state.os,
            environment: this.state.environment,
            browser: this.state.browser,
            userAgent: navigator.userAgent
        }).then(response => this._handleVibration(event), err=> console.log(err));
    }

    render () {
        return (
            <div id = "primary" onLoad = {this._getUserAgent}>
                <h1>Fingerprint Me!</h1>
                <h2>Experiment Page</h2>
                <div>
                    <div>
                        <label htmlFor="hashEmail">Email Address: </label>
                        <input type="email" id="hashEmail" name="hashEmail" 
                            required onChange={this._changeEmail}/>
                    </div>
                    <div>
                        <label htmlFor="model">Your phone model: </label>
                        <p>This can be found in your phones Settings app. If you open the Settings and 
                            look for the System option. In the System page, you can navigate to the "About" 
                            button, which lets you know the exact name of your phone model. You can also gather
                            the operating system version from this page (for the next field)
                        </p>
                        <input type="text"id="model" name="model"
                            required onChange = {this._changeModel}/>
                    </div>
                    <div>
                        <label htmlFor="os">Your phone's operating system and version: </label>
                        <input type="text"id="os" name="os"
                            required onChange = {this._changeOs}/>
                    </div>
                    <div>
                        <label htmlFor="browser">Your browser model and version: </label>
                        <p>To gather this information, navigate to the Settings of the browser and 
                            locate the About option. If you enter that page you should be able to find the 
                            proper name of the browser with the version number.
                        </p>
                        <input type="text"id="browser" name="browser"
                            required onChange = {this._changeBrowser}/>
                    </div>
                    <div>
                        <label htmlFor="environment">Surrounding environment: </label>
                        <p>Please describe the environment your device is in at the time of the experiment.
                            Any information is pertinent, such as any noises in the room, the stability of the table
                            the device will be placed on, etc...
                        </p>
                        <input type="text"id="environment" name="environment"
                            required onChange = {this._changeEnvironment}/>
                    </div>
                    <div>
                        <p>If you have gotten this far, well done! Your phone is ready to be fingerprinted.
                            Place your device on a table.
                            Press the button below to initiate the vibration sequence and await until we get your fingerprint.
                        </p>
                        <Button onClick={this._submitData} bsStyle="success">Press me!</Button>
                    </div>
                </div>

                <div>
                    <Link to="/Consent">
                        <Button bsStyle="danger">Back</Button>
                    </Link>
                </div>

                <div>
                    <Link to='/Conclusion'>
                        <Button bsStyle="primary">Next</Button>
                    </Link>
                </div>
            </div>
        )
    }
}