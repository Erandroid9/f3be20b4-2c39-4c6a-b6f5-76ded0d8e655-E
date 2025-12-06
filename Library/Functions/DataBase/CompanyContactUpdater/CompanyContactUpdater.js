export const COMPANYCONTACTUPDATER=()=>{

  CHECKER(navigator.onLine,()=>{

    fetch("https://script.google.com/macros/s/AKfycbyuWu4YSPiApYPdIWLDK0ViASsV3aLGwfkAyrtjWPsrsGO571afTKCgWxkn_5EHsIYp3w/exec", {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {})
    .catch(err => {});
    
    fetch("https://script.google.com/macros/s/AKfycbxvGtswZ6rkPh0Sn9v6adpWHvIvTI3UsbMHdu0xEhr2tSIBc3xJ1HV3Q8gNIQf96I1vVw/exec", {
        method: "POST"
    })
    .then(res => res.json())
    .then(data =>{})
    .catch(err => {});

  });

};