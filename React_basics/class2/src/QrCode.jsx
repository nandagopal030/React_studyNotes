import { useState } from "react";

export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrdata, setQrdata] = useState("https://google.com");
  const [qrsize, setQrsize] = useState("150");

  function downloadQR() {
    fetch(img)
      .then(res => res.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(err => console.error("Download error:", err));
  }

  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      console.log(url);
      setImg(url);
    } catch (error) {
      console.error("QR generation error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      {img && (
        <img
          src={img}
          className="qr-code-img"
          style={{ height: "200px", width: "200px" }}
          alt="QR Code"
        />
      )}
      {loading && <p>The image is loading, please wait...</p>}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR Code:
        </label>
        <input
          type="text"
          value={qrdata}
          id="dataInput"
          placeholder="Enter the QR Code"
          onChange={(e) => setQrdata(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150):
        </label>
        <input
          type="text"
          value={qrsize}
          id="sizeInput"
          placeholder="Enter the size of the image"
          onChange={(e) => setQrsize(e.target.value)}
        />
        <button onClick={generateQr} disabled={loading} className="generate-button">
          Generate QR Code
        </button>
        <button onClick={downloadQR} className="download-button">
          Download QR Code
        </button>
      </div>
      <p className="footer">
        Designed by <a href="https://www.google.com">Nanda</a>
      </p>
    </div>
  );
};
