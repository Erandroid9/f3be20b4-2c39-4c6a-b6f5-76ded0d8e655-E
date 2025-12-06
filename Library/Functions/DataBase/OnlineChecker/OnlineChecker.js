export const ONLINECHECKER=()=>{

    CHECKER(localStorage.getItem("Environment") === "Production"||"Web"||"Desktop",()=>{

        CHECKER(navigator.onLine,()=>{

            fetch(ONLINECHECKERLINK)

            .then(res => res.text())

            .then(data =>{

            })
            
            .catch(Error => {

                TOAST("No Internet Connection");

            });

        });

    });

};