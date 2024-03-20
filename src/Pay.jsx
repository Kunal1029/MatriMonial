import QRCode from "react-qr-code";

const Pay = () => {
  // UPI Link for collecting 200 rupees
  const upiLink = `upi://pay?pa=shivhare.kunal@ybl&am=2.5&url=${encodeURIComponent(
    "https://vaishyasamajshaadi.com/"
  )}`;

  return (
    <div className="text-danger">
      <h2>Scan QR Code to Pay</h2>
      <QRCode value={upiLink} />
    </div>
  );
};

export default Pay;
