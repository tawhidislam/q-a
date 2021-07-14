import React, { useState } from "react";

import FAQ from "./FAQ";

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "How can book ticket with travel vela",
      answer: "answer",
      open: false,
    },
    {
      question: "where does travelvela located?",
      answer: "answer",
      open: false,
    },
    {
      question: "How can book ticket with travel vela",
      answer: "answer",
      open: false,
    },
    {
      question: "where does travelvela located?",
      answer: "answer",
      open: false,
    },
    {
      question: "How can book ticket with travel vela",
      answer: "answer",
      open: false,
    },
    {
      question: "where does travelvela located?",
      answer: "answer",
      open: false,
    },
    {
      question: "How can book ticket with travel vela",
      answer: "answer",
      open: false,
    },
    {
      question: "where does travelvela located?",
      answer: "answer",
      open: false,
    },
    {
      question: "How can book ticket with travel vela",
      answer: "answer",
      open: false,
    },
    {
      question: "where does travelvela located?",
      answer: "answer",
      open: false,
    },
    {
      question: "How can book ticket with travel vela",
      answer: "answer",
      open: false,
    },
    {
      question: "where does travelvela located?",
      answer: "answer",
      open: false,
    },
    {
      question: "How can book ticket with travel vela",
      answer: "answer",
      open: false,
    },
    {
      question: "where does travelvela located?",
      answer: "answer",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
