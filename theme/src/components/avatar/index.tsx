import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { AvatarProps } from './interfaces';

const StyledAvatar = styled(Img)<AvatarProps>`
    max-width: 55px;
    border-radius: 100%;
`;

/**
 * Placeholder component which shows your avatar.
 */
const Avatar: FunctionComponent<AvatarProps> = ({ alt, style }) => {
    const logo = useStaticQuery(graphql`
        query {
            file(
                sourceInstanceName: { eq: "themeAssets" }
                name: { eq: "logo" }
            ) {
                childImageSharp {
                    fixed(width: 55, height: 55) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <StyledAvatar
            fixed={logo.file.childImageSharp.fixed}
            alt={alt}
            style={style}
        />
    );
};

export default Avatar;
