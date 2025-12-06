export const ELEMENTCHECKER=(CLOUDELEMENT,LOCALELEMENT,MESSAGE,callback)=>{

    CONDITION(CLOUDELEMENT === LOCALELEMENT,()=>{

        callback();

    },()=>{

        TOAST(MESSAGE);

    });

};