"use client";
import QuoteForm from "@/component/form/QuoteForm";
import React from "react";

const App = () => {
  const handleFormSubmit = async (submissionData) => {
    console.log("Form submitted to parent:", submissionData);

    const formDataToSend = new FormData();

    formDataToSend.append("type", submissionData.type);
    formDataToSend.append("service", JSON.stringify(submissionData.service));
    formDataToSend.append("data", JSON.stringify(submissionData.data));
    formDataToSend.append("timestamp", submissionData.timestamp);

    Object.keys(submissionData.files).forEach((key) => {
      submissionData.files[key].forEach((file) => {
        formDataToSend.append(key, file.file);
      });
    });

    try {
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <QuoteForm formType='homeowners' onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
