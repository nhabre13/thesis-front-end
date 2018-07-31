import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default class Conclusion extends React.Component<any,any> {
    render () {
        return (
            <div>
                <h1>Fingerprint Me!</h1>
                <h2>Thank you!</h2>

                {/* Reiterate that their data will be anonymised and sanitised
                    Thank them for their time and cooperation                
                */}
                <p>The data you have provided is invaluable to our experiment. 
                    We would like to reiterate that this data will be anonymised and sanitised to protect your 
                    anonymity. If the data is promising, we will post a version of the paper to this webpage 
                    around September. Keep an eye out for it!

                    Stay safe, stay secure.
                </p>

                <div>
                    <Link to="/Testing">
                        <Button bsStyle="danger">Back</Button>
                    </Link>
                </div>
            </div>
        )
    }
}