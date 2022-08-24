import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

//Components
import Header from './Header';
import LinksCB from './LinksCB';
import Grid from './Grid';
import Stopka from './Stopka';

//NoImage
import noImage from '../Images/noImage.jpg'

//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

const Home = () => {
    const {LinkCB, setLinkCB, LinkPW, setLinkPW, LinkPE, setLinkPE} = useHomeFetch();
    console.log(LinkCB);

    return (
        <>
            <Switch>
                <Route path='/CB' >
                    <Grid>
                        <ul>
                            {LinkCB && LinkCB.map(data => (
                                <li>
                                    <LinksCB
                                    header={data.title}
                                    key={data.id}
                                    link={data.website}
                                    image={data.image || noImage}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Route>
                <Route path='/PE'>
                    <Grid>
                        <ul>
                            {LinkPE && LinkPE.map(data => (
                                <li>
                                    <LinksCB
                                    header={data.title}
                                    key={data.id}
                                    link={data.website}
                                    image={data.image || noImage}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Route>
                <Route path='/PW'>
                    <Grid>
                        <ul>
                            {LinkPW && LinkPW.map(data => (
                                <li>
                                    <LinksCB
                                    header={data.title}
                                    key={data.id}
                                    link={data.website}
                                    image={data.image || noImage}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Route>
            </Switch>
        </>
    )
};

export default Home;

/* <Switch>
                <Route path='/CB'>
                    <CB />
                </Route>
            </Switch>*/