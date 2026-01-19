import { USSD } from "../DataBase/RunUssd/RunUssd.js";
import {USSDDISPLAY } from "../DataBase/UssdResponse/UssdResponse.js";

export const PLUGINCONNECTIONS=()=>{

const DATA=`const USSD=${USSD};
const USSDDISPLAY=${USSDDISPLAY};
`;

localStorage.setItem("PLUGINS",DATA);

};

`
const onUSSDResponse=${USSDDISPLAY};
`