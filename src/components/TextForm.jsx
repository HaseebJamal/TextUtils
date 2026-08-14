import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const getUpper = () => {
    setText(text.toUpperCase());
  };

  const getLower = () => {
    setText(text.toLowerCase());
  };

  const reverseWord = () => {
  setText(text.split("").reverse().join(""));
};

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text Copied");
    } catch (error) {
      console.log("Failed to Copy");
    }
  };

  const clearBtn = () => {
    setText("");
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length !== 0).length;

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here..."
            style={{
              backgroundColor: props.mode === "dark" ? "#2b2b2b" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border:
                props.mode === "dark"
                  ? "1px solid #666"
                  : "1px solid #ced4da",
            }}
          ></textarea>
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-primary" onClick={getUpper}>
            Uppercase
          </button>

          <button className="btn btn-secondary" onClick={getLower}>
            Lowercase
          </button>

          <button className="btn btn-warning" onClick={reverseWord}>
            Reverse
          </button>

          <button className="btn btn-success" onClick={handleCopy}>
            Copy Text
          </button>

          <button className="btn btn-danger" onClick={clearBtn}>
            Clear Text
          </button>
        </div>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>

        <p>
          <strong>{wordCount}</strong> Words and{" "}
          <strong>{text.length}</strong> Characters
        </p>

        <p>
          <strong>{(0.008 * wordCount).toFixed(2)}</strong> Minutes Read
        </p>

        <h2>Preview</h2>

        <p>
          {text.length > 0
            ? text
            : "Nothing to preview. Please enter some text."}
        </p>
      </div>
    </>
  );
};

export default TextForm;