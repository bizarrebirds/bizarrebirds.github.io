export default function FolderPage({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-full min-h-screen px-10 py-10 ${className}`}>
            {children}
        </div>
    );
}