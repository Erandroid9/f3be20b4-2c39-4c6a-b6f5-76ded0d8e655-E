export const EMAILSERVER=(EMAIL,SUBJECT,MESSAGE,callBack)=>{

    const DATA={
        "recipientEmail":EMAIL,
        "subject":SUBJECT,
        "body":MESSAGE
    };

    CLOUDPOST(EMAILLINK,DATA,(Data)=>{

        CHECKER(Data.status === "success",()=>{

            callBack(Data);

        });

    });

};