import { useState } from 'react';
import { MdContentCopy } from "react-icons/md";

const CopyButton = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="bg-[#15B3B6] text-white px-4 py-2 rounded hover:bg-pink-300 transition"
        >
            {copied ? "Copied!" : <MdContentCopy />
}
        </button>
    );
};

export default CopyButton;
