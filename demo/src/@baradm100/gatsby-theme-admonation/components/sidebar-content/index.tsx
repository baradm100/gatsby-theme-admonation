import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Bio from '@baradm100/gatsby-theme-admonation/src/components/bio';

const StickySidebarContent = styled.div`
    position: sticky;
    top: 30px;
`;

const SidebarContent: FunctionComponent = () => {
    return (
        <StickySidebarContent>
            <Bio textAlign={`justify`} avatarStyle={{ display: 'none' }} />
        </StickySidebarContent>
    );
};

export default SidebarContent;
