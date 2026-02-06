export const REDUXEDDATA=(LINK,NAME,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        REDUX(Data,(element)=>{

            CALLBACK(element);

        });

    });

};