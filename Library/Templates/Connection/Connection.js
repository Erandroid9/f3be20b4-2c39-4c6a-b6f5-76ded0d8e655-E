import { HEADERVIEW } from "../DataBase/Components/HeaderView/HeaderView.js";
import { LEFTTEXTVIEW } from "../DataBase/Components/LeftTextView/LeftTextView.js";

export const TEMPLATESCONNECTION=()=>{
const DATA=`const HEADERVIEW=${HEADERVIEW};
const LEFTTEXTVIEW=${LEFTTEXTVIEW};
`;
    
localStorage.setItem("TEMPLATES",DATA);

};

`
const LEFTTEXTVIEW=${LEFTTEXTVIEW};
`