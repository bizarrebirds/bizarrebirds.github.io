export default function FolderPage({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-full min-h-screen px-4 py-4 ${className}`}>
            {children}
        </div>
    );
}