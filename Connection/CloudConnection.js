import { BUILDENV } from "../Environment/BuildEnv.js";
import { DEVELOPMENTENV } from "../Environment/DevelopmentEnv.js";
import { PRODUCTIONENV } from "../Environment/ProductionEnv.js";
import { SUBPRODUCTIONENV } from "../Environment/SubPageBuild.js";
import { CONDITION } from "../Library/Functions/DataBase/Condition/Condition.js";
import { LOCALDELETE } from "../Library/Functions/DataBase/LocalDelete/LocalDelete.js";

export const CLOUDCONNECTION=()=>{

    CONDITION(localStorage.getItem("Environment") === "Development",()=>{

        DEVELOPMENTENV();

    },()=>{

        CONDITION(localStorage.getItem("Build"),()=>{

            LOCALDELETE("Named");

            BUILDENV();

        },()=>{

            CONDITION(localStorage.getItem("Named"),()=>{

                LOCALDELETE("Build");

                SUBPRODUCTIONENV();

            },()=>{

                LOCALDELETE("Build");

                LOCALDELETE("Named");

                PRODUCTIONENV();

            });

        });

    });

};