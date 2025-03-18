import React, { useState, useEffect } from "react";

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState(
    "<h1>Hello welcome to my world!</h1>"
  );
  const [cssCode, setCssCode] = useState(
    `h1 {
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: #282c34;
    color: white;
    font-family: Lato, sans-serif;
    font-size: 2rem;
}`
  );
  const [jsCode, setJsCode] = useState("console.log('Hello World');");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <h2>HTML</h2>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            style={{ width: "100%", height: "150px", fontFamily: "monospace" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2>CSS</h2>
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            style={{ width: "100%", height: "150px", fontFamily: "monospace" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2>JavaScript</h2>
          <textarea
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            style={{ width: "100%", height: "150px", fontFamily: "monospace" }}
          />
        </div>
      </div>

      <h2>Live Preview</h2>
      <iframe
        title="Live Preview"
        sandbox="allow-scripts"
        srcDoc={srcDoc}
        style={{ width: "100%", height: "300px", border: "1px solid #ddd" }}
      />
    </div>
  );
};

export default CodeEditor;
