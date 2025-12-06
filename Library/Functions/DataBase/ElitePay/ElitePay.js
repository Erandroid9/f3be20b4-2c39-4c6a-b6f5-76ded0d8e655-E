export const ELITEPAY=(AMOUNT,DETAILS,EMAIL,NUMBER,USERNAME,LOCATION,WEBSITEBACK,callback)=>{

    CHECKER(navigator.onLine,()=>{

        fetch(TOKENLINK,{
            method:"GET",
            mode:"cors"
        })
        .then(res =>res.json())
        .then(data =>{
            
            const Token=data.token;
    
            const TOKENDATA={
                "token":Token,
                "site":ELITEWEBLINK
            };
            fetch(IPIZATION,{
                method:"Post",
                body:JSON.stringify(TOKENDATA)
            })
            .then(res=>res.json())
            .then(datata =>{
    
                const HEADER=["Name","Reason","Email","Number","Website","Amount"];
    
                const Info=[USERNAME,DETAILS,EMAIL,NUMBER,WEBSITEBACK,AMOUNT];
    
                 const DATA={
                    "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1wez9KwMHDo9WVgofpMJL4CqB9gJSaoJGIk6M02eKjPQ/edit?usp=sharing",
                    "sheetName":"ElitePay",
                    "Headers":HEADER,
                    "Data":Info
                };
    
                const APIS="https://script.google.com/macros/s/AKfycbys7SiB-Ifs1zwccTrXSL4NJwXhkqixg65DQS59YcyQ0VbKBmKDIEJFm6KVgSTNTh8PDw/exec";
    
                fetch(APIS,{
                    method:"Post",
                    mode:"cors",
                    body:JSON.stringify(DATA)
                })
    
                .then(res => res.json())
    
                .then(dataets =>{
    
                    if (dataets.error === false ) {
    
                        const MYDATA={
                            "token": Token,
                            "id": datata.ipn_id,
                            "amount": AMOUNT,
                            "currency": "UGX",
                            "description":DETAILS||"Payment for Order"+datata.ipn_id,
                            "callback_url":ELITEWEBLINK+"/AfterPay.html?ID="+dataets.uniqueId,
                            "notification_id": datata.ipn_id,
                            "billing_address": {
                                "email_address": EMAIL||"",
                                "phone_number":NUMBER|| "",
                                "country_code": "",
                                "first_name": USERNAME||"",
                                "middle_name": "",
                                "last_name": "",
                                "line_1": "",
                                "line_2": "",
                                "city":LOCATION|| "",
                                "state": "",
                                "postal_code": "",
                                "zip_code": ""
                            }
                        };
    
                        fetch(SUMB,{
                            method:"Post",
                            mode:"cors",
                            body:JSON.stringify(MYDATA)
                        })
                        .then(res =>res.json())
                        .then(datateses =>{
    
                            callback(datateses.redirect_url)
    
                        })
    
                        .catch(error=>console.error(error))
                        
                    } else {
    
                        alert("Failed to Process Payment");
                        
                    };
    
                })
                .catch(Error => console.log(Error)
                );
    
            })
            .catch(error=>console.error(error))
        } )
        .catch(error=>console.error(error))

    });

};