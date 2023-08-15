import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from '../util/Input';

const Animation1 = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <div className='flex flex-row items-center justify-center pt-20'>
            <div className=''>
                <motion.div 
                    className="w-[200px] h-[200px] rounded-xl border-4 border-[#f50c0c] border-dotted bg-pink-300"
                    animate={{
                        scale: [1, 2, 2, 1],
                        rotate: [0, 0, 180, -180],
                        borderRadius: ["0%", "0%", "0%", "0%"]
                    }}
                    transition={{ 
                        duration: 2, 
                        delay: 0.5, 
                        ease: "ease",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            </div>           
        </div>
    )
}

export default Animation1