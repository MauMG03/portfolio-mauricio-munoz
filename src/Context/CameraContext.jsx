import React, { createContext, useState, useContext } from 'react';

const cameraContext = React.createContext();
const cameraToggleContext = React.createContext();

export function useCameraContext() {
    return useContext(cameraContext);
}

export function useCameraToggleContext() {
    return useContext(cameraToggleContext);
}

export function CameraProvider({children}) {
    const [cameraPos, setCameraPos] = useState([2, 0, 5]);

    const setCameraPosition = (position) => {
        setCameraPos(position);
    }

    return (
        <cameraContext.Provider value={cameraPos}>
            <cameraToggleContext.Provider value={setCameraPosition}>
                {children}
            </cameraToggleContext.Provider>
        </cameraContext.Provider>
    );
}