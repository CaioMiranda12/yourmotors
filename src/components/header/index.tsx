import Link from "next/link";

export function Header(){
    return (
        <header className="w-full">
            <div className="max-w-screen-xl mx-auto w-full px-3.5 h-16 flex items-center justify-between">
                <div>
                    <Link href='/' className="text-xl sm:text-3xl font-bold">
                        Your Motors
                    </Link>
                </div>

                <nav className="flex gap-4 sm:gap-6">
                    <Link href='/' className="text-base sm:text-lg hover:font-bold">
                        HOME
                    </Link>
                    <Link href='#servicos' className="text-base sm:text-lg hover:font-bold">
                        SERVIÇOS
                    </Link>
                    <Link href='#contatos' className="text-base sm:text-lg hover:font-bold">
                        CONTATOS
                    </Link>
                </nav>
            </div>
        </header>
    )
}