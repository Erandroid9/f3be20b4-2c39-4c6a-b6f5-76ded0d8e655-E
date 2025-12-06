export const POSTDRIVEFILE = (FILENAME, FILEDATA, DRIVEFOLDER, callback, callback1) => {
    
    CHECKER(navigator.onLine,()=>{

        fetch(POSTDRIVEFILELINK, {
            method: "Post",
            body: JSON.stringify({ fileName: FILENAME + ".txt", content: FILEDATA, folderId: DRIVEFOLDER }),
        })
            
        .then((res) => res.json())
            
        .then((data) => {
               
            callback(data);
            
        })
    
        .catch((error) => {
                
            callback1(error);
            
        });

    });

};