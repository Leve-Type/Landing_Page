export const Header = () => {
    return (
        <header className="flex items-center justify-center gap-5 bg-gray-950 py-5">
            <img className="w-14 rounded-sm" src="https://github.com/Leve-Type.png" alt="leve type logo" />
            <h2 className="text-cyan-50 text-4xl pr-10">LeveType</h2>
            <nav>
                <ul className="flex gap-5 text-cyan-50">
                    <li><a href="/events">Events</a></li>
                    <li><a href="/aboutus">About us</a></li>
                    <li><a href="/community">Community</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}