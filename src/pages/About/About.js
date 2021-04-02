import React from 'react';
import Info from '../../components/InfoSection/Info';
import { aboutOne } from './Data'; /* import data from the file and spread it in a section component */

function About() {
    return (
        <div>
            <Info {...aboutOne}></Info>
        </div>
    );
}

export default About;