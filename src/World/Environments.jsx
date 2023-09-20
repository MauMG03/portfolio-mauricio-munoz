import { Sky, Sparkles, Stars } from "@react-three/drei";

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
                rayleigh={0.02}       
                turbidity={10}        
                exposure={0.1}
            />
            <Stars
                radius={80} 
                depth={10} 
                count={500} 
                factor={2} 
                saturation={0} 
            />
            <Sparkles
                color="white"
                position-x={2.5}
                count={40}
                size={3}
                fade={false}
                speed={0.5}
                scale={6}
            />
        </>
    )
}

export default Environments;