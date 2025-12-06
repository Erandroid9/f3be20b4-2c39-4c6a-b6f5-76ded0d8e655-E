import { BORDERED } from "../DataBase/Bordered/Bordered.js";
import { PADDED } from "../DataBase/Padded/Padded.js";
import { RADIUSED } from "../DataBase/Radiused/Radiused.js";

export const STYLEDCONNECTION=()=>{
const DATA=`const BORDERED=${BORDERED};
const RADIUSED=${RADIUSED};
const PADDED=${PADDED};
`;
localStorage.setItem('STYLES',DATA);
};

`
const PADDED=${PADDED};

`