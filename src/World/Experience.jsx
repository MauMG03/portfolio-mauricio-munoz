import { Physics } from "@react-three/rapier";
import { CameraProvider } from "../Context/CameraContext";
import { RotationProvider } from "../Context/RotationContext";
import AboutMe from "./Scenes/AboutMe/AboutMe";
import ContactInfo from "./Scenes/ContactInfo/ContactInfo";
import Skills from "./Scenes/Skills/Skills";
import Welcome from "./Scenes/Welcome/Welcome";
import { Suspense } from "react";

const Experience = () => {
    return (
        <>
            <CameraProvider>
                <RotationProvider>
                    <Physics>
                        <Suspense fallback={null}>
                        <Welcome />
                        <AboutMe />
                        <Skills />
                        <ContactInfo />
                        </Suspense>
                    </Physics>
                </RotationProvider>
            </CameraProvider>
        </>
    );
}

export default Experience;