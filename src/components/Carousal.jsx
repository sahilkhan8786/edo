import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousal = () => {
    return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Move x axis for the scroll
    const x = useTransform(scrollYProgress, [0, 0.8], ["100%", "-40%"]);

    // Control the scale and position of the last image
    const scaleLast = useTransform(scrollYProgress, [0.8, 1], [1, 2]); // Zoom last image from 1 to 2x

    // Scale down other images as you scroll
    const scaleOthers = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);

    // Move other images out of the way
    const yOtherImages = useTransform(scrollYProgress, [0.8, 1], [0, -200]);
    const xLeft = useTransform(scrollYProgress, [0.8, 1], [0, -300]);
    const xRight = useTransform(scrollYProgress, [0.8, 1], [0, 300]);

    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex ">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                            isLast={index === cards.length - 1}
                            scaleLast={scaleLast}
                            scaleOthers={scaleOthers}
                            yOtherImages={yOtherImages}
                            xLeft={xLeft}
                            xRight={xRight}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({
    card,
    isLast,
    scaleLast,
    scaleOthers,
    yOtherImages,
    xLeft,
    xRight,
}) => {
    // Apply different transforms for the last card and others
    const positionStyles = isLast
        ? { scale: scaleLast } // Zoom in the last card
        : card.id % 2 === 0
            ? { y: yOtherImages, x: xRight, scale: scaleOthers } // Move even cards to the right and scale down
            : { y: yOtherImages, x: xLeft, scale: scaleOthers }; // Move odd cards to the left and scale down

    return (
        <motion.div
            key={card.id}
            className="group relative w-[80vw] max-w-[450px] h-[40vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden "
            style={positionStyles}
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
        url: "/01.webp",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/02.webp",
        title: "Title 1",
        id: 2,
    },
    {
        url: "/03.webp",
        title: "Title 1",
        id: 3,
    },
    {
        url: "/04.webp",
        title: "Title 1",
        id: 4,
    },
];
