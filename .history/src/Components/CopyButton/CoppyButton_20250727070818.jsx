import { useState } from 'react';

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
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
            {copied ? "Copied!" : "Copy"}
        </button>
    );
};

export default CopyButton;
