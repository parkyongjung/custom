import { motion } from 'framer-motion';

interface AnimatedTextWordProps {
    text: string;
    size?: string;
    children?: React.ReactNode;
    color?: string;
    fontWeight?: string;
    margin?: string;
}

interface AnimatedTextCharacterrops {
    text: string;
    size?: string;
    children?: React.ReactNode;
    color?: string;
    fontWeight?: string;
    margin?: string;
}

export const AnimatedTextWord = (props: AnimatedTextWordProps) => {
    const words = props.text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{
                overflow: 'hidden',
                display: 'flex',
                fontSize: props.size,
                fontWeight: props.fontWeight,
                color: props.color,
                margin: props.margin,
            }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: '5px' }} key={index}>
                    {word}
                </motion.span>
            ))}
            {props.children}
        </motion.div>
    );
};

export const AnimatedTextCharacter = (props: AnimatedTextCharacterrops) => {
    const letters = Array.from(props.text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{
                overflow: 'hidden',
                display: 'flex',
                fontSize: props.size,
                fontWeight: props.fontWeight,
                color: props.color,
                margin: props.margin,
            }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
            {props.children}
        </motion.div>
    );
};
