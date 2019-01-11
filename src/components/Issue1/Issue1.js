import React from "react";
import Form from "./Form";
import Description from "./Description";
const styles = {
  div: {
    display: "flex",
    marginLeft: "20px"
  }
};

const Issue1 = () => (
  <div className={styles.div}>
    <h1>Temperature Converter</h1>
    <Form />
    <Description />
  </div>
);
export default Issue1;
