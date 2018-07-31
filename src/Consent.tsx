import * as React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Consent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            agreed: false
        };
    }

    render() {
        return (
            <div>
                <h1>Fingerprint Me!</h1>
                <h2>Participant Consent</h2>
                <div>
                    <p>This page is to confirm your consent in participting in this experiment. By checking the box
                        below you agree to the following conditions:</p>
                        <ul>
                            <li>Participation is totally voluntary.</li>
                            <li>All data gathered from the study will be treated in a cofidential manner:
                                all identifying information will be removed and the data will be archived in a 
                                secure location.
                            </li>
                            <li>A sanitised version of the data that is free of any discriminating information
                                will be made available for future research.
                            </li>
                            <li>Any seemingly discriminating information we might ask of you will be hashed 
                                so as not to make participants identifiable.
                            </li>
                            <li>There are no known risks to participating in the experiment.</li>
                            <li>You are free to withdraw from the experiment at any time by sending an 
                                email to: neh516@york.ac.uk
                            </li>
                        </ul>
                </div>
                {/* consent info */}

                <div>
                    <label htmlFor="consent">Your consent:</label>
                    <input type="checkbox" id="consent" name="consent" 
                    placeholder="Consent" onClick={this._consented.bind(this)} 
                    />
                </div>

                <ButtonToolbar>
                    <Link to="/">
                        <Button bsStyle="danger">Back</Button>
                    </Link>
                    <Link to='/Testing'>
                        <Button disabled = {!this.state.agreed} bsStyle="primary">Next</Button>
                    </Link>
                </ButtonToolbar>
            </div>   
        )
    }

    private _consented(): void {
        if ((document.getElementById('consent') as HTMLInputElement).checked) {
            this.setState({
                agreed: true
            }) 
        } else {
            this.setState({
                agreed: false
            })
        }     
    }
}

export default withRouter(Consent);