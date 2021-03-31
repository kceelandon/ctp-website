import React from 'react';
import Section from '../../components/Sections/Section';
import { homeOne, homeTwo } from './Data';

function Home() {
    return (
        <div>
            <Section {...homeOne}></Section>
            <Section {...homeTwo}></Section>
        </div>
    );
}

export default Home;
