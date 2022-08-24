import React from "react";

import { Wrapper, Content } from "./Grid.styles"


const Grid = ({ header, children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default Grid;