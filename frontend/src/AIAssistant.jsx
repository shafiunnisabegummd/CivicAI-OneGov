function AIAssistant() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🤖 CivicAI Assistant</h1>
      <p>AI Assistant page is working!</p>

      <input
        type="text"
        placeholder="Ask something..."
        style={{
          padding: "12px",
          width: "300px",
        }}
      />

      <button
        type="button"
        style={{
          padding: "12px 20px",
          marginLeft: "10px",
        }}
        onClick={() => alert("Send button is working!")}
      >
        Send
      </button>
    </div>
  );
}

export default AIAssistant;