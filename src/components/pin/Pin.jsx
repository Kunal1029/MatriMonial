/* eslint-disable no-undef */
import { useState } from 'react';
import Data from './Data';

function Pin() {
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle pincode input change
  const handlePincodeChange = (e) => {
    const inputPincode = e.target.value;
    setPincode(inputPincode);

    // Find the address corresponding to the entered pincode
    const matchingData = Data.find((item) => item.pincode === inputPincode);
    if (matchingData) {
      setAddress(`${matchingData.pincode} ${matchingData.address}, ${matchingData.city}, ${matchingData.country}`);
    } else {
      setAddress('');
    }
  };

  return (
    <div>
      <label htmlFor="pincode">Pincode:</label>
      <input
        type="text"
        id="pincode"
        value={pincode}
        onChange={handlePincodeChange}
      />
      <br />
      <br />

      <textarea
        type="text"
        id="address"
        value={address}
        readOnly 
      ></textarea>

      <br />
      <br />
      <br />
      <br />
      <br />

      <label htmlFor="pincode">Pincode:</label>
      <input
        type="text"
        id="pincode"
        value={pincode}
        onChange={handlePincodeChange1}
      />
      <br />
      <br />

      <textarea
        type="text"
        id="address"
        value={address}
        readOnly 
      ></textarea>

     
    </div>
  );
}

export default Pin;
