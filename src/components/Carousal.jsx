import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Carousal = () => {
    return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjust scrolling logic to ensure all images scroll
    const x = useTransform(scrollYProgress, [0, 1], ["100%", windowWidth >= 768 ? '-0%' : '-80%']);
    const scaleLast = useTransform(scrollYProgress, [0.8, 1], [1, 2]);
    const translateLast = useTransform(scrollYProgress, [0.8, 1], [0, 0]); // Keep it centered

    return (
        <section ref={targetRef} className="relative h-[150vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-3">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                            isLast={index === cards.length - 1}
                            scaleLast={scaleLast}
                            scrollYProgress={scrollYProgress} // Pass scroll progress
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card, isLast, scaleLast, scrollYProgress }) => {
    const positionStyles = isLast
        ? { scale: scaleLast, translateX: "50%" } // Center the last image
        : { scale: 1 };

    // Create a fade-in effect based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div
            className="group relative w-[70vw] max-w-[250px] h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden"
            style={{ ...positionStyles, opacity }} // Apply fade-in effect
        >
            <img
                src={card.url}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
        </motion.div>
    );
};

export default Carousal;

const cards = [
    {
        url: "/01.png",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/02.png",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/03.png",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/04.png",
        title: "Title 4",
        id: 4,
    },
];
