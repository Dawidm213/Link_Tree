import React from "react";

import { Image, Wrapper, Header, Link } from './LinksCB.Styled';

const LinksCB = ({ image, header, link }) => (
    <Wrapper>
        <Link href={link}>
        <Image >
            <img src={image} alt='movie-thumb' />
        </Image>
        </Link>
        <Header>{header}</Header>
    </Wrapper>
    
);

export default LinksCB;