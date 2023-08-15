import React from 'react'

import { motion } from 'framer-motion';

const Hover = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
        <motion.div 
            className="w-[200px] h-[200px] rounded-xl border-4 border-[#f50c0c] border-dotted bg-pink-300"
            whileHover={{ scale: [null, 1.6, 1.4] }}
            transition={{ duration: 0.3 }}
        >            
        </motion.div>
        <motion.button
            className='mt-10 w-[150px] h-[50px] rounded-xl border-4 border-[#5e56ed] bg-blue-300' 
            initial={{ opacity: 0.6 }}
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
        >Click Me!</motion.button>
    </div>
  )
}

export default Hover