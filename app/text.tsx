export function Subheading({ children, className = "", id = "" }) {
    return <h1 id={id} className={`text-3xl font-bold my-4 mt-8 ${className}`}>{children}</h1>;
}

export function Description({ children, className = "" }) {
    return <p className={`text-md my-4 text-wrap max-w-full ${className}`}>{children}</p>;
}