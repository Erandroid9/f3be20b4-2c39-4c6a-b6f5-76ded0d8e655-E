export const PASSWORDCHECKER=(CLOUDPASSWORD,LOCALPASSWORD,callback)=>{

    CONDITION(CLOUDPASSWORD === LOCALPASSWORD,()=>{

        callback();

    },()=>{

        TOAST("Passwords Don't Match");

    });

};