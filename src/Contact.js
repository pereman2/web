import React, { Component } from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

class Contact extends Component {
    constructor() {
        super();
        this.contact = React.createRef();
    }
    render() {
        return (
            <div ref={this.contact}>
                <footer>
                    <div  className="foot-social">
                        <h1 id="stay">STAY CONNECTED</h1>
                        <div>
                            <a href="https://github.com/pereman2" target="_blank">
                                <button>
                                    <FontAwesomeIcon size="3x" icon={faGithub} />
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/pere-d%C3%ADaz-bou-669340149/" target="_blank">
                                <button>
                                    <FontAwesomeIcon size="3x" icon={faLinkedin} />
                                </button>
                            </a>
                        </div>
                        <h1 id="mail">contact@peredb.com</h1>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Contact;
