export const HOSTINGUPDATER = () => {

    CHECKER(navigator.onLine,()=>{

        CONDITION(localStorage.getItem("Environment") === "Development" ,()=>{

        },()=>{

            GETDATA(HOSTINGUPDATERLINK,"Production",(data)=>{

                REDUX(data,(element)=>{

                    TIMECOMPARE(element.AppLogic,(result)=>{

                        CONDITION(result === false,()=>{

                        },()=>{

                            CONDITION(element.ID === localStorage.getItem("NAME"),()=>{

                                CONDITION(localStorage.getItem("State"),()=>{

                                    window.location.href = "/index.html";

                                },()=>{

                                    LOCALCLEAR();

                                    RELOAD();

                                });

                            },()=>{

                            });

                        });
  
                    });

                });

            });

        });

    });

};