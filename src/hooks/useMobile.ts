import {useEffect, useReducer} from "react";

const mobileReducer = (state:{isMobile: boolean}, action:{type: string})=>{
    if(action.type === 'MOBILE_DEVICE'){
        return {
            isMobile: true,
        }
    }
    if(action.type === 'DESKTOP_DEVICE'){
        return {
            isMobile: false,
        }
    }
        return {isMobile: false};
}
const initState = ()=>{
    if(window.innerWidth >= 1076){
        return {isMobile: false}
    } else {
        return {isMobile: true}
    }
}

export const useMobile = ()=>{
    const [mobileState, dispatchMobile] = useReducer(mobileReducer, { isMobile: false }, initState);
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth >= 1076){
                dispatchMobile({type: 'DESKTOP_DEVICE'});
            } else {
                dispatchMobile({type: 'MOBILE_DEVICE'});
            }
        }
        window.addEventListener('resize', handleResize);

        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    })
    return mobileState.isMobile;
}

