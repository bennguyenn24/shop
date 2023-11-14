export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="flex justify-center py-8">{children}</div>;
}
