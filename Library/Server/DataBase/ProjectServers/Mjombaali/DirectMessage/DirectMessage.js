export const MJOMBAALIDIRECTMESSAGE=()=>{

    const DATA=["Device","Time","Message","Replies","Location","ChatterId"];

    DEVICE((Data)=>{

        CONDITION(localStorage.getItem("ChatId"),()=>{

        },()=>{

            const INFO=[Data,new Date(),[sessionStorage.getItem("Message")],[],"",localStorage.getItem("ChatterId")];

            INSERTDATA(MJOMBAALIDATABASELINK,"WebSiteContacts",DATA,INFO,(ResData)=>{

                DATASTORE(" ","ChatId",ResData.Id);

                console.log(ResData)

            });

        });

    });

};