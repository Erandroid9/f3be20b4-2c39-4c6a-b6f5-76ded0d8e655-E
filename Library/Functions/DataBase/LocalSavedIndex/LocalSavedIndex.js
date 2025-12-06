export const LOCALSAVEDINDEX = ( data, NAMED, callback) => {

    const Data = { Name: NAMED, data: data };

    STOREINDEXED(NAMED, NAMED, Data, (resback) => {

        CONDITION(resback === false,() => {

            UPDATEINDEX(NAMED, NAMED, Data, () => {});

        },() => {

            callback();

        });

    });
    
};