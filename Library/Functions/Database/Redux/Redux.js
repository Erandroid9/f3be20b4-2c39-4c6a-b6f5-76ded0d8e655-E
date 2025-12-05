export const REDUX=(Data,callback)=>{

    Data.forEach(element => {
        
        callback(element);

    });

};