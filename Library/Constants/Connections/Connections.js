import { BODY } from "../DataBase/Body/Body.js";
import { CONNECTIONLINK } from "../DataBase/ConnectionLink/ConnectionLink.js";
import { CREATEDATABASELINK } from "../DataBase/CreateDataBaseLink/CreateDataBase.js";
import { CREATETABLELINK } from "../DataBase/CreateTableLink/CreateTableLink.js";
import { EMAILLINK } from "../DataBase/EmailLink/EmailLink.js";
import { GETDATALINK } from "../DataBase/GetDataLink/GetDataLink.js";
import { INSERTDATALINK } from "../DataBase/InsertDataLink/InsertDataLink.js";
import { UPDATEDATALINK } from "../DataBase/UpdateDataLink/UpdateDataLink.js";

export const CONSTANTSCONNECTION=()=>{

const DATA=`const BODY=${BODY};
const CONNECTIONLINK="${CONNECTIONLINK}";
const CREATEDATABASELINK="${CREATEDATABASELINK}";
const CREATETABLELINK="${CREATETABLELINK}";
const INSERTDATALINK="${INSERTDATALINK}";
const UPDATEDATALINK="${UPDATEDATALINK}";
const GETDATALINK="${GETDATALINK}";
const EMAILLINK="${EMAILLINK}";
`;

localStorage.setItem("CONSTANTS",DATA);

};

`
const EMAILLINK="${EMAILLINK}";
`