import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default class Intro extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h1>Fingerprint Me!</h1>

                {/* Provide introductory information about the project 
                    What is the project
                    Who we are
                    The purpose of this experiment       
                */}
                <p>Welcome to Fingerprint Me! This website aims to determine the ability to distinguish between device models 
                using JavaScript APIs. Specifically, we hope to determine if vibrations done through the browser can have a
                unique fingerprint from one device model to another. This experiment will run a vibration sequence on 
                your phone through this web page. The vibrations will register through a sensor in your phone called the 
                accelerometer. This sensor calulates the acceleration of a phone when it is vibrating or it is in motion.
                The data from these sensors will serve as the bulk of the data we need to run the experiment. 

                Fingerprinting is the ability to identify a device model oor a browser through discriminating characteristics
                that can be exploited by malicious users. The ability to identify these charactersitics that are making users
                more identifiable need to be discovered in order to change their characteristics or at least make people 
                aware of their fingerprinting abilities. 

                My name is Nadim El Habr and I am a postgraduate student currently studying at the University of York. My postgraduate degree is 
                in Cyber Security. With the help of my supervisor, Siamak F. Shahandashti, I hope to be able to find some evidence 
                of fingerprinting ability in the vibration and motion APIs of JavaScript, or determine that they are safe to
                be used and should not worry safety concious users.

                Thank you for helping us achieve this goal. Good luck!
                </p>
        
                <div>
                    <Link to='/Consent'>
                        <Button bsStyle="primary">Next</Button>
                    </Link>
                </div>
                
            </div>
        )  
    }
}
