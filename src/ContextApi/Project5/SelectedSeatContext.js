import React, { createContext, useState } from "react";

export const SelectedSeatContext = createContext({
    setmakan: () => { },
    clickseat: () => { },
    makan: () => { },
});

export const SelectedSeatContextProvider = (props) => {
    const { children } = props;
    const [makan, setmakan] = useState([]);

    const clickseat = (index, radif) => {
    if(makan.length == 8){
        const existe = makan.some(
            (item) => item.radif == radif && item.seat === index + 1);

        if (existe) {
            const removeitem = makan.filter(
                (item) => item.seat !== index + 1 || item.radif !== radif
            );
            setmakan(removeitem);
            return;}    
    }
        if (makan.length < 8) {
            const existe = makan.some(
                (item) => item.radif == radif && item.seat === index + 1
            );

            if (existe) {
                const removeitem = makan.filter(
                    (item) => item.seat !== index + 1 || item.radif !== radif
                );
                setmakan(removeitem);
            } else {
                setmakan([...makan, { seat: index + 1, radif: radif }]);
            }
        } else {
             
            alert("رزرو بیش از 8 صندلی در هر پرداخت مجاز نیست.");
        }
    
    };
 
    const SeatValue = {
        setmakan,
        clickseat,
        makan,
        
    };
 
    return (
        <SelectedSeatContext.Provider value={SeatValue}>
            {children}
        </SelectedSeatContext.Provider>
    );
};


export default SelectedSeatContextProvider