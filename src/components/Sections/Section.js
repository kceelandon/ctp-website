import React from 'react';
import { Container } from '../../globalStyles';
import { 
    ContentSection,
    InfoRow, 
    InfoColumn, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle,
    ImgWrapper,
    Img
} from './Section.elements';

const Section = ({ 
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText, 
    lightTextDesc, 
    description, 
    headline, 
    topLine,
    img,
    alt,
    start
}) => {
    return (
        <div>
            <ContentSection lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </ContentSection>
        </div>
    )
}

export default Section;