import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <nav style={{ width: "200px" }}> {/* Sidebar */}
                <ul>
                    <li><Link href="/Common/About">About Us</Link></li>
                    <li><Link href="/Common/Contact">Contact Us</Link></li>
                </ul>
            </nav>
            <main style={{ flex: 1 }}>{children}</main> {/* Nested pages rendered here */}
        </div>
    );
}