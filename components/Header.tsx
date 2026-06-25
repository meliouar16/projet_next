import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-marine text-white flex items-center justify-between px-6 py-4">
      <Link href="/">
        <Image src="/logo.svg" alt="DEV" width={100} height={32} />
      </Link>
      <nav className="flex gap-4">
        <Link href="/offres">Offres</Link>
        <Link href="/profil">Profil</Link>
      </nav>
    </header>
  );
}
