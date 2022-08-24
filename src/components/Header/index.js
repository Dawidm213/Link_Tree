import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import {Wrapper, Content} from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <h2>Interesting Websites to:</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to='/CB'>Cure Boredom</Link>
                        </li>
                        <li>
                            <Link to='/PE'>Powerfull Extenstions</Link>
                        </li>
                        <li>
                            <Link to='/PW'>Powerfull Websites</Link>
                        </li>
                    </ul>
                </nav>
            <h2>Provided by @setupspawn</h2>
        </Content>
    </Wrapper>
);

export default Header;