/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import QRCode from "react-qr-code";

const Pay = ({pricing}) => {
  // UPI Link for collecting 200 rupees
  const upiLink = `upi://pay?pa=shivhare.kunal@ybl&am=${pricing}&url=${encodeURIComponent(
    "https://vaishyasamajshaadi.com/"
  )}`;

  return (
    <div className="paypage">
      <h2 className="mb-5">Scan QR Code to Pay &#8377; {pricing} INR</h2>
      <QRCode value={upiLink} />
    </div>
  );
};

export default Pay;
