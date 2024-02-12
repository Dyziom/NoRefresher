// ==UserScript==
// @name         Wyłacz minutnik
// @namespace    http://tampermonkey.net/
// @version      2024-02-12
// @description  wyłącza licznik odświeżający stronę
// @author       Marcin Maćkowiak
// @match        *://uam-hip.pfsl.poznan.pl/*
// @grant        GM_addStyle
// ==/UserScript==

var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + '⌚</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    closeTime+=90000;
    zNode.style.background = "none";
    zNode.style.border = "none";
    zNode.innerHTML = '';
}

GM_addStyle ( `
    #myContainer {
        position:               absolute;
        top:                    128px;
        left:                   200px;
        font-size:              20px;
        background:             #132D4E;
        border:                 2px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );