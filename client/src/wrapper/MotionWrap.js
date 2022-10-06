import React from "react";
import {motion} from 'framer-motion';

const MotionWrap = (Component, classNames) => () => {
    return (
        <motion.div
            whileInView={{opacity:[100,50,1]}}
            transition={{duration:0.5}}
            className={`${classNames} app__flex`}
        >
            <Component/>
        </motion.div>
    )
}

export default MotionWrap;