export const INSTALLER=()=>{

    DEVICE((MyData)=>{

        const Data={
            "InstallDate":new Date(),
            "Device":MyData
        };
    
        CONDITION(localStorage.getItem("Installed"),()=>{

            TIMENOW((time)=>{

                const VISITDATA={
                    "Date":new Date(),
                    "Time":time,
                    "Device":MyData
                };
                
                JSONADDER(localStorage.getItem("AppUsageData"),[VISITDATA],(data)=>{
                    
                    LOCALSTORE("AppUsageData",data);
                    
                });

            });
            
        },()=>{

            LOCALSTORE("AppUsageData","[]");
    
            JSONADDER(localStorage.getItem("Installed"),[Data],(data)=>{
    
                LOCALSTORE("Installed",data);
    
            });
    
        });

    });

};