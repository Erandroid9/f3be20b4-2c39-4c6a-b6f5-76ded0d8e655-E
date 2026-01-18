import { USSD } from "../DataBase/RunUssd/RunUssd.js";
import { onUSSDResponse } from "../DataBase/UssdResponse/UssdResponse.js";

export const PLUGINCONNECTIONS=()=>{

const DATA=`const USSD=${USSD};
const onUSSDResponse=${onUSSDResponse};
`;

localStorage.setItem("PLUGINS",DATA);

};

`
const onUSSDResponse=${onUSSDResponse};
`