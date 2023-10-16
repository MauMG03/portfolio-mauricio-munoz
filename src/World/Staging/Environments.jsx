import { Sky, Sparkles } from "@react-three/drei";

const Environments = () => {
    return(
        <>
            <Sky
                sunPosition={[0, 0, -1]} 
                inclination={0.2}       
                azimuth={180}  
                mieCoefficient={0}  
                elevation={5}          
                mieDirectionalG={0}   
                rayleigh={0.1}       
                turbidity={10}        
                exposure={0.1}
            />
            <Sparkles
                color="white"
                position-x={2.5}
                count={20}
                size={3}
                fade={false}
                speed={0.5}
                scale={6}
            />
        </>
    )
}

export default Environments;