import { useState } from "react";
import "./App.css";
import attachedFile from "./assets/attached-file.png";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const uploadPdf = async () => {
    if (!file) return;

    setUploadStatus("Uploading PDF...");
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      setUploadStatus("Upload failed");
      throw new Error("PDF upload failed");
    }

    const data = await res.json();
    setUploadStatus(`Uploaded: ${data.filename}`);
  };

  const handleSend = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      if (file) {
        await uploadPdf(); 
      }

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>RAG CHATBOT</h1>

      <div style={{ position: "relative", width: "80%", margin: "0 auto" }}>
        <input
          type="text"
          className="input-box"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <input
          type="file"
          accept="application/pdf"
          style={{ display: "none" }}
          id="pdfUpload"
          onChange={(e) => {
            const selected = e.target.files?.[0] || null;
            setFile(selected);
            setUploadStatus(selected ? `Selected: ${selected.name}` : null);
          }}
        />

        <img
          src={attachedFile}
          alt="attach"
          className="attachment"
          title="Attach PDF"
          onClick={() => document.getElementById("pdfUpload")?.click()}
        />
      </div>

      {/* Show filename / upload status */}
      {uploadStatus && (
        <p style={{ marginTop: "8px" }}>{uploadStatus}</p>
      )}

      <button
        className="send-button"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Asking..." : "Send"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      {answer && (
        <p className="result">
          <strong>Answer:</strong> {answer}
        </p>
      )}
    </>
  );
}

export default App;