export const CONDITION=(TERM,callback,callbackOne)=>{

    if (TERM) {

        callback();

    } else {

        callbackOne();
        
    };

};