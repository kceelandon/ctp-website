/* Contains the Info section component */
import React from 'react';
import { Container } from '../../globalStyles';
import { ContentSection, InfoRow, InfoColumn, ImgWrapper, Img, Heading } from '../Sections/Section.elements';
import { ParagraphWrapper, Information } from './Info.elements';

const Info = ({
    lightBg, 
    imgStart, 
    lightText,
    information, 
    headline,
    img,
    alt,
    start,
    altTextLight,
    lightTextDesc
}) => {
    return (
        <div>
            <ContentSection lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <ParagraphWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Information lightTextDesc={lightTextDesc}>{information}</Information>
                            </ParagraphWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} altTextLight={altTextLight}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </ContentSection>
        </div>
    )
}

export default Info;