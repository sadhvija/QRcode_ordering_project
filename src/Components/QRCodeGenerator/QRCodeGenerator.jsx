import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./QRCodeGenerator.css"; 

const QRCodeGenerator = () => {
  const landingPageURL = window.location.origin + "/home"; // Dynamic URL based on the domain
  const navigate = useNavigate();
  return (
    <div className="qr-container">
      <div className="qr-card">
        <h2>Scan The QR</h2>
        <div className="qr-code">
          <QRCodeCanvas value={landingPageURL} size={180} />
        </div>
        {/* <p>Scan the QR code to visit our landing page and install the app.</p> */}
        <p>Scan the QR code to visit our landing page and install the app.</p>
        <button onClick={() => navigate("/home")}>Go to Website</button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;