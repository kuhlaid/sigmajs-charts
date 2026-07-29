/**
 * Creates a wrapper for child components (page.tsx)
 * @param param0 
 * @returns 
 */
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
            {children}
            </body>
        </html>
    );
}