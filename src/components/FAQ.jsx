import React from "react";
import faq from "../images/faq.png";
import "../css/faq.css";

const FAQ = () => {
  return (
    <div className="container">
      <div className="faq">
        <div className="faq-text">
          <h2>Frequently Asked Questions</h2>
          <details className="faq-detail">
            <summary className="faq-summary">What is Dixtro</summary>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              doloribus, beatae provident debitis nostrum, officiis optio
              eveniet suscipit, culpa hic blanditiis iusto sed odit enim odio
              excepturi quo nemo inventore?
            </p>
          </details>

          <details className="faq-detail">
            <summary className="faq-summary">
              What payment methods are supported?
            </summary>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              doloribus, beatae provident debitis nostrum, officiis optio
              eveniet suscipit, culpa hic blanditiis iusto sed odit enim odio
              excepturi quo nemo inventore?
            </p>
          </details>

          <details className="faq-detail">
            <summary className="faq-summary">
              What options for AllSpace plans are available?
            </summary>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              doloribus, beatae provident debitis nostrum, officiis optio
              eveniet suscipit, culpa hic blanditiis iusto sed odit enim odio
              excepturi quo nemo inventore?
            </p>
          </details>

          <details className="faq-detail">
            <summary className="faq-summary">
              Can I specify search anything on AllSpace?
            </summary>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              doloribus, beatae provident debitis nostrum, officiis optio
              eveniet suscipit, culpa hic blanditiis iusto sed odit enim odio
              excepturi quo nemo inventore?
            </p>
          </details>
        </div>

        <div className="faq-image">
          <img src={faq} alt="" className="faq-img" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
