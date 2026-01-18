import { USSD } from "../DataBase/RunUssd/RunUssd.js";

export const PLUGINCONNECTIONS=()=>{

const DATA=`const USSD=${USSD};
`;

localStorage.setItem("PLUGINS",DATA);

};

`
const USSD=${USSD};
`