"use client";

// clsx imports
import clsx from "clsx";

// react imports
import { useState } from "react";

// react icons imports
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function CopyPublicKey({ publicKey }: { publicKey: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator)
      return await navigator.clipboard.writeText(text);
    else return document.execCommand("copy", true, text);
  }

  function handleOnCopy() {
    copyTextToClipboard(publicKey)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((error) => {
        console.log(`Error while coping public key: ${error}`);
      });
  }

  return (
    <div className="border-2 border-gray-500 rounded-lg p-1 w-min flex">
      <input type="text" value={publicKey} readOnly className="" />
      <div className="pr-2">
        <button onClick={handleOnCopy} className="p-1.5 rounded-lg bg-gray-200">
          <span>{isCopied ? <TiTick /> : <FaCopy />}</span>
        </button>
      </div>
    </div>
  );
}
