const DATABASELINK="https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing";

const ERANDES=()=>{

    DISPLAY("",`

        <header>

            <p class="LeftText">Qel Medistore</p>

            <img  class="RightIcon" src="${WHITEUSERICON}"/>
        
        </header>

        <div class="DataLoader"></div>

        <footer>

            <p class="">All Rights Reserved at Qel Medsitore</p>

            <p class="App"> Download Android App</p>

            <p class="terms">Terms and Conditions</p>
        
        </footer>

    `);

    CLICKED(".App",()=>{
        location.href="https://eliterobustontology.github.io/Elite/Assets/Apps/Qel.apk"
    });


    CLICKED(".terms",()=>{
        location.href="https://qelmedistore.site/Policy.html"
    });


    NAMER(".DataLoader",(LOADS)=>{

        PRODUCTSLOADER(LOADS)

    });

};

const PRODUCTSLOADER=(LOADS)=>{

    DISPLAY(LOADS,`

        <p>Please Wait</p>
        
    `);

    GETDATA(DATABASELINK,"Products",(data)=>{

        DISPLAY(LOADS,``);

        REDUX(data,(DATA)=>{

            CHECKER(DATA.ProductPrice,()=>{

                ADD(LOADS,"div","DataHolders",(ELEMENTS)=>{

                    DISPLAY(ELEMENTS,`

                        <img class="HolderImages" src="${DATA.ProductImage}"/>

                        <footer>

                            <footer class="NameHolder">

                                <p>${DATA.ProductName}</p>
                            
                            </footer>

                            <p class="ProductPrice"> UGX:${DATA.ProductPrice}</p>

                        </footer>

                    `);

                    ELEMENTS.addEventListener("click",()=>{

                        NEWPRODUCTS(DATA);

                    });

                });

            });

        });
        
    });

};

const NEWPRODUCTS=(DATA)=>{

    console.log(DATA)

    DISPLAY("",`

        <header>

            <img  class="LeftIcon" src="${WHITEBACKICON}"/>

            <p class="RightText">${DATA.ProductName}</p>
        
        </header>

        <div class="DataLoader">

            <img class="ProductImages" src="${DATA.ProductImage}"/>

            <h1>PRICE:UGX=>${DATA.ProductPrice}</h1>

            <h2>Notice</h2>

            <p class="WrappedText">The Product Above Will Be Transported at a Ugx:5000</p>

            <h2>Product Details</h2>

            <p>${DATA.ProductDetails}</p>

            <h2>>Catergory:${DATA.ProductCatergory}</h2>

            <footer class="YellowFooter" >
        
                <p>BUY:${Number(DATA.ProductPrice)+5000}</p>

            </footer>
        
        </div>
        
    `);

    CLICKED(".LeftIcon",()=>{
        ERANDES();
    });

};