import React, { useState, useEffect, useRef } from "react";

//to run the server for json file ''npx json-server --watch CB.json --port 8000''

export const useHomeFetch = () => {
    const [LinkCB, setLinkCB] = useState(null);
    const [LinkPW, setLinkPW] = useState(null);
    const [LinkPE, setLinkPE] = useState(null);

    
    useEffect(() => {
        fetch('http://localhost:8000/CB')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setLinkCB(data);
        })
    }, []);
    useEffect(() => {
        fetch('http://localhost:8000/PW')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setLinkPW(data);
        })
    }, []);
    useEffect(() => {
        fetch('http://localhost:8000/PE')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setLinkPE(data);
        })
    }, []);


    return {LinkCB, setLinkCB, LinkPW, setLinkPW, LinkPE, setLinkPE};
};

