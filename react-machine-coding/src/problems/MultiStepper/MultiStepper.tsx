import React, { useRef, useState } from "react";
import "./MultiStepper.styles.css";

export function MultiStepper({ title, config, submit }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const stepperRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (step === config.length || submitted) return;
    if (step === config.length - 1) {
      setSubmitted(true);
      return submit();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const Component = config[step].Component;

  return (
    <div className="app">
      <h2>{title}</h2>
      <div className="stepper-container" ref={stepperRef}>
        {config.map((item, index) => {
          let className = "";
          if (step === index) {
            className = "active";
          }
          if (step > index || submitted) {
            className = "done";
          }
          return (
            <div key={index} className={`step`}>
              <div className={`step-count ${className}`}>{index + 1}</div>
              <p>{item.title}</p>
            </div>
          );
        })}
        <div className="line">
          <div
            className="progress"
            style={{
              width: `${Math.round((step / (config.length - 1)) * 100)}%`,
            }}
          />
        </div>
      </div>
      <div className="step-component">
        {!submitted ? (
          <Component next={handleNext} />
        ) : (
          <h3>You are form has been submitted.</h3>
        )}
      </div>
    </div>
  );
}

const config = [
  {
    title: "User Details",
    Component: ({ next }) => (
      <div className="component">
        <p>Provide user details</p>
        <button onClick={next}>next</button>
      </div>
    ),
  },
  {
    title: "Product Details",
    Component: ({ next }) => (
      <div className="component">
        <p>Provide product details</p>
        <button onClick={next}>next</button>
      </div>
    ),
  },
  {
    title: "Address Details",
    Component: ({ next }) => (
      <div className="component">
        <p>Provide address details</p>
        <button onClick={next}>next</button>
      </div>
    ),
  },
  {
    title: "Payment Details",
    Component: ({ next }) => (
      <div className="component">
        <p>Provide payment details</p>
        <button onClick={next}>next</button>
      </div>
    ),
  },
];

export function MultiStepperExample() {
  const submit = () => {
    console.log("API call to submit form details");
  };
  return (
    <MultiStepper
      title="This is an example of Multi Stepper Component"
      config={config}
      submit={submit}
    />
  );
}
