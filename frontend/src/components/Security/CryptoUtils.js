import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  try {
    const secretKey = process.env.REACT_APP_SECRET_KEY;
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey, {
      mode: CryptoJS.mode.CFB,
      padding: CryptoJS.pad.AnsiX923,
    });
    return encrypted.toString();
  } catch (error) {
    console.error("Encryption failed:", error.message);
    return null; // Return null to indicate failure
  }
};

export const decryptData = (encryptedData) => {
  try {
    const secretKey = process.env.REACT_APP_SECRET_KEY;
    const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey, {
      mode: CryptoJS.mode.CFB,
      padding: CryptoJS.pad.AnsiX923,
    });
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedText);
  } catch (error) {
    console.error("Decryption failed:", error.message);
    return null; // Return null to indicate failure
  }
};
