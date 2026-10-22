import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  amount?: number
}>

export default function Reveal({ children, className, delay = 0, amount = 0.18 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
