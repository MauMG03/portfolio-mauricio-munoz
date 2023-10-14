import { CameraProvider } from "../Context/CameraContext";
import { RotationProvider } from "../Context/RotationContext";
import AboutMe from "./Scenes/AboutMe/AboutMe";
import ContactInfo from "./Scenes/ContactInfo/ContactInfo";
import Skills from "./Scenes/Skills/Skills";
import Welcome from "./Scenes/Welcome/Welcome";

const Experience = () => {
    return (
        <>
            <CameraProvider>
                <RotationProvider>
                    <Welcome />
                    <AboutMe />
                    <Skills />
                    <ContactInfo />
                </RotationProvider>
            </CameraProvider>
        </>
    );
}

export default Experience;