// Example: FadeInWrapper.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInWrapperProps {
    children: ReactNode;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }} // Start off-screen to the left (x: -100) with 0 opacity
            animate={{ opacity: 1, x: 0 }}    // Animate to full opacity and slide to the original position
            transition={{ duration: 1.5 }}    // Adjust duration of the animation
            className=' w-full h-full flex items-center justify-center'
        >
            {children}  {/* All children will be wrapped with the fade-in effect */}
        </motion.div>
    );
};

export default FadeInWrapper;
