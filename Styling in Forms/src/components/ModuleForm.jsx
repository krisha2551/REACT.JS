import React from "react";
import styles from "./ModuleForm.module.css";

const ModuleForm = () => {
  return (
    <form className={styles.form}>
      <h3 className={styles.title}>CSS Module Form</h3>
      <input type="text" placeholder="Name" className={styles.input} />
      <input type="email" placeholder="Email" className={styles.input} />
      <textarea placeholder="Message" className={styles.input}></textarea>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
};

export default ModuleForm;
