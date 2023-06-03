

export default function Home() {
  return (
      <div className="bg-gradient-to-b from-purple-950 to-pink-950 h-screen">
        <nav>
            <div className='flex'>
                <a href="#" className="text-4xl font-bold text-white">
                    CRYPTO-COIN
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className=" font-bold text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-bold text-white">
                            Market
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-bold text-white">
                            Join us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
  )
}
