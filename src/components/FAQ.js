import React, { useState } from "react";
import sections from "../api";

export default function FAQ() {
    const [expandedSection, setExpandedSection] = useState(null); // Tracks which section is expanded
    const [expandedQuestion, setExpandedQuestion] = useState({}); // Tracks expanded questions within sections

    function toggleSection(sectionId) {
        // If the section is already open, it closes it. (set to null)
        // If the section is closed, it opens it.
        setExpandedSection(expandedSection === sectionId ? null : sectionId);
    }

    // sectionId is which section a question belongs to
    // questionIndex is which specific question is expanded
    function toggleQuestion(sectionId, questionIndex) {
        setExpandedQuestion((prevState) => ({
            ...prevState,
            [sectionId]:
                // If the question in the section is already open, it closes it. (set to null)
                // If the question in the section is closed, it opens it.
                prevState[sectionId] === questionIndex ? null : questionIndex,
        }));
    }

    return (
        <div className="container">
            <h1>Frequently Asked Questions</h1>
            {sections.map((section) => (
                <div key={section.id} className="faq-section">
                    {/* Section Title */}
                    <h3
                        onClick={() => toggleSection(section.id)}
                        className="faq-section-title"
                    >
                        {section.name}
                        <span
                            style={{
                                float: "right",
                                cursor: "pointer",
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            {expandedSection === section.id ? "-" : "+"}
                        </span>
                    </h3>

                    {/* Questions (accordion within the section) */}
                    {/* THIS ONLY GETS RENDERED IF SECTION IS EXPANDED */}
                    {expandedSection === section.id && ( 
                        <div className="faq-questions">
                            {section.questions.map((question, index) => (
                                <div key={index} className="faq-question">
                                    {/* Question Title */}
                                    <h4
                                        onClick={() => toggleQuestion(section.id, index)}
                                        className="faq-question-title"
                                    >
                                        {question.title}
                                        <span
                                            style={{
                                                float: "right",
                                                cursor: "pointer",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {expandedQuestion[section.id] === index ? "-" : "+"}
                                        </span>
                                    </h4>

                                    {/* Question Answer */}
                                    {/* THIS ONLY GETS RENDERED IF THE QUESTION IS EXPANDED */}
                                    {expandedQuestion[section.id] === index && (
                                        <p className="faq-answer">{question.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
