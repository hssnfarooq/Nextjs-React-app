import CryptoJS from "crypto-js"; 
// import { EncryptStorage } from "storage-encryption";
//todo: keep variable  in .env
const NEXT_PUBLIC_SECRET_KEY = "oQ16VzIQHr3ZmM3yKr0rdZkcplMq9kEX";
// export const encryptStorage = new SecureLS();
// export const encryptStorage = new EncryptStorage(NEXT_PUBLIC_SECRET_KEY);
// export const encryptData = (data: any) =>
//   CryptoJS.AES.encrypt(JSON.stringify(data), NEXT_PUBLIC_SECRET_KEY).toString();

// export const decryptData = (ciphertext: any) => {
//   const bytes = CryptoJS.AES.decrypt(ciphertext, NEXT_PUBLIC_SECRET_KEY);
//   console.log("bytes", bytes.toString(CryptoJS.enc.Utf8));
//   try {
//     return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//   } catch (err: any) {
//       console.log("err crypto", err.message)
//     return null;
//   }
// };
