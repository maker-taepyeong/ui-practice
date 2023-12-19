"use client";

import React from "react";
import styles from "@/styles/pages/accordion.module.css";

export default function AccordionPage() {
  /* TODO: Keyboard Interaction 내용 추가 */

  return (
    <main className={styles.container}>
      <h1>
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/">
          Accordion
        </a>
      </h1>
      <p>
        아코디언은 표시할 내용이 많아 스크롤이 필요한 경우, 사용자의 스크롤
        수고를 덜어주기 위해 사용한다.
      </p>
      <h2>구조</h2>
      <p>아코디언은 헤더와 패널로 구성한다.</p>
      <h3>Accordion Header</h3>
      <p>
        내용을 짐작할 수 있는 제목을 보여주고, 패널을 열고 닫는 컨트롤 역할을
        한다.
      </p>
      <h3>Accordion Panel</h3>
      <p>아코디언 헤더와 연결된 내용을 보여주는 섹션</p>
      <h2>예시</h2>
      <section className={styles.accordion}>
        <Accordion />
      </section>
    </main>
  );
}

function Accordion() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        id="personal-information"
        aria-expanded={isOpen}
        aria-controls="personal-information-section"
        className={styles["accordion-header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.title}>Personal Information</span>
        <span className={styles.icon}></span>
      </button>
      <div
        id="personal-information-section"
        role="region"
        aria-labelledby="personal-information"
        className={styles["accordion-panel"]}
        hidden={!isOpen}
      >
        <fieldset>
          <p>
            <label htmlFor="cufc1">
              Name<span aria-hidden="true">*</span>:
            </label>
            <input
              type="text"
              value=""
              name="Name"
              id="cufc1"
              className={styles.required}
              aria-required="true"
            />
          </p>
          <p>
            <label htmlFor="cufc2">
              Email<span aria-hidden="true">*</span>:
            </label>
            <input
              type="text"
              value=""
              name="Email"
              id="cufc2"
              aria-required="true"
            />
          </p>
          <p>
            <label htmlFor="cufc3">Phone:</label>
            <input type="text" value="" name="Phone" id="cufc3" />
          </p>
          <p>
            <label htmlFor="cufc4">Extension:</label>
            <input type="text" value="" name="Ext" id="cufc4" />
          </p>
          <p>
            <label htmlFor="cufc5">Country:</label>
            <input type="text" value="" name="Country" id="cufc5" />
          </p>
          <p>
            <label htmlFor="cufc6">City/Province:</label>
            <input type="text" value="" name="City_Province" id="cufc6" />
          </p>
        </fieldset>
      </div>
    </>
  );
}
