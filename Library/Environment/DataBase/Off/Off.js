import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const OFFENVIRONMENT=()=>{

    const style = document.createElement('style');

    style.textContent = `

    `;

    document.head.appendChild(style);

    DISPLAYLOADER("75%");

    fetch("./SetUp/Project.js")

    .then(res =>res.text())

    .then(data =>{

        DISPLAYLOADER("100%");

        if (localStorage.getItem("OffConfig")) {

            localStorage.setItem("PROJECT",data);

            localStorage.setItem("Packaged",new Date())
            
        } else {

            const ERANDES=()=>{

                DISPLAY(BODY,`
                    
                `);

            };

            localStorage.setItem("PROJECT",`const ERANDES=${ERANDES};`);

            location.reload();

            localStorage.setItem("Packaged",new Date())
            
        };

    })

    .catch(error=>{console.log(error)})

};