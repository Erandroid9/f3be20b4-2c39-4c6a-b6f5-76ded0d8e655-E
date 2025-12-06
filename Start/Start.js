import { CLOUDSTART } from "../Connection/Cloud.js";
import { CLOUDCONNECTION } from "../Connection/CloudConnection.js";
import { FUNCTIONS } from "../Connection/Functions.js";
import { ASSETSCONNECTION } from "../Library/Assets/Connection/Connection.js";
import { COLORCONNECTION } from "../Library/Colors/Connection/Connection.js";
import { COMPONENTSCONNECTION } from "../Library/Components/Connection/Connection.js";
import { CONSTANTS } from "../Library/Constants/Connection/Constants.js";
import { PLUGINSCONECTION } from "../Library/Plugins/Connection/Connection.js";
import { STYLEDCONNECTION } from "../Library/Style/Connection/Connection.js";
import { SERVER } from "../Server/Connection/Connection.js";

export const START=()=>{

    COLORCONNECTION();

    STYLEDCONNECTION();

    COMPONENTSCONNECTION();

    ASSETSCONNECTION();

    PLUGINSCONECTION();

    FUNCTIONS();

    SERVER();

    CONSTANTS();

    CLOUDSTART();

    CLOUDCONNECTION();

};