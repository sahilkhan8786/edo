import React from "react";

const FAQCards = ({ faq, index, toggleFAQ }) => {
    return (
        <div
            className={"faq " + (faq.open ? "open border-2 border-primary-green" : "")}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
        </div>
    );
};

export default FAQCards;
