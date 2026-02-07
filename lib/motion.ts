/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion as framerMotion, AnimatePresence as FramerAnimatePresence } from 'framer-motion';

/**
 * Re-export motion with `any` type cast to bypass strict typing issues
 * This is necessary because framer-motion's ESM types don't properly 
 * recognize HTML attributes like className, onMouseEnter, etc.
 * 
 * The code works correctly at runtime - this is purely a TypeScript workaround.
 */
export const motion = framerMotion as any;
export const AnimatePresence = FramerAnimatePresence;
