import React from 'react';
import Section from '../../components/Sections/Section';
import { homeOne } from './Data';

function Home() {
    return (
        <div>
            <Section {...homeOne}></Section>
        </div>
    );
}

export default Home;
