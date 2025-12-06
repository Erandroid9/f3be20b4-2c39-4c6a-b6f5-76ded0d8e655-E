import { BLACK } from "../DataBase/Black/Black.js";
import { FORESTGREEN } from "../DataBase/Forestgreen/ForestGreen.js";
import { GREEN } from "../DataBase/Green/Green.js";
import { TRANSPARENT } from "../DataBase/Transparent/Transparent.js";
import { WHITE } from "../DataBase/White/White.js";

export const COLORCONNECTION=()=>{
const DATA=`const WHITE="${WHITE}";
const BLACK="${BLACK}";
const GREEN="${GREEN}";
const TRANSPARENT="${TRANSPARENT}";
const FORESTGREEN="${FORESTGREEN}";
`;
localStorage.setItem('COLORS',DATA);
};

`
const FORESTGREEN="${FORESTGREEN}";

`