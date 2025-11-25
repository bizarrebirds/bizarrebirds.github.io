export function Subheading({ text }) {
    return <h2 className="text-2xl font-semibold my-4">{text}</h2>;
}

export function Description({ text, inline = false }) {
    return <p className={`text-lg my-2 ${inline ? "inline" : ""}`}>{text}</p>;
}