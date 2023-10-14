import React, { createContext, useState, useContext } from 'react';

const rotationContext = React.createContext();
const rotationToggleContext = React.createContext();

export function useRotationContext() {
    return useContext(rotationContext);
}

export function useRotationToggleContext() {
    return useContext(rotationToggleContext);
}

export function RotationProvider({children}) {
    const [rotation, setRotation] = useState([0,0.35]);

    const setRot = (rotation) => {
        setRotation(rotation);
    }

    return (
        <rotationContext.Provider value={rotation}>
            <rotationToggleContext.Provider value={setRotation}>
                {children}
            </rotationToggleContext.Provider>
        </rotationContext.Provider>
    );
}