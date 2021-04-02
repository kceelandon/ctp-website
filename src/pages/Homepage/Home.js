import React from 'react';
import Section from '../../components/Sections/Section';
import { homeOne, homeTwo } from './Data'; /* import data from the file and spread it in a section component */

function Home() {
    return (
        <div>
            <Section {...homeOne}></Section>
            <Section {...homeTwo}></Section>
        </div>
    );
}

export default Home;
