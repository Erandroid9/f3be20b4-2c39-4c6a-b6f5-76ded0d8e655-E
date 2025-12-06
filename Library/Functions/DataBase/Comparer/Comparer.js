export const COMPARER=(CLOUDDATA,LOCALDATA,INFO,callback)=>{

    CONDITION(CLOUDDATA != LOCALDATA,()=>{

        TOAST(INFO);

    },()=>{

        callback();

    });

};