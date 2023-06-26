import { FaTelegramPlane, FaUserCircle } from 'react-icons/fa';

const greetins = `Olá, Eu sou o VM-D26.
Estou aqui para ajudar com qualquer dúvida ou problema que você tenha. Para iniciar nosso atendimento irei precisar de algumas de suas informações. Vamos lá?!`

export default function Chatbot() {
    return (

        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-white">

            {/* Header */}
            <div className="flex sm:items-center justify-between pb-6 border-b-2 border-gray-200">

                {/* Chatbot Icon */}
                <div className="relative flex items-center space-x-4">
                    <div className="relative">
                        <span className="absolute text-green-500 right-0 bottom-0">
                            <svg width="16" height="16">
                                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                            </svg>
                        </span>

                        <img src="/images/vmd26.jpg" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"></img>

                    </div>
                    <div className="flex flex-col leading-tight">
                        <div className="text-2xl mt-1 flex items-center">
                            <span className="text-gray-700 mr-3">VM-D26</span>
                        </div>
                        <span className="text-lg text-gray-600">Chatbot</span>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-2">

                <button>
                    <img src="/images/en.png" alt="" className="sm:w-8 sm:h-8 rounded-full"></img>
                </button>

                <button>   
                    <img src="/images/es.png" alt="" className="sm:w-8 sm:h-8 rounded-full"></img>
                </button>    

                <button>
                    <img src="/images/pt.png" alt="" className="sm:w-8 sm:h-8 rounded-full"></img>
                </button>

                </div>
            </div>


            {/* Messages */}
            <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch h-full">

                {/* Message Chatbot> */}
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                {greetins}
                            </span>
                        </div>
                    </div>

                    <img src="/images/vmd26.jpg" alt="My profile" className="w-7 h-6 rounded-full order-1"></img>

                </div>


                {/* Message User> */}
                <div className="flex items-end justify-end">

                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                Some Response.
                            </span>
                        </div>
                    </div>

                    <FaUserCircle className='text-zinc-300 w-7 h-7 rounded-full order-2'/>
                    
                </div>
                
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">

                <input type="text" placeholder="Write your Message" className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                name="message" required />

                <button type="submit">
                    <FaTelegramPlane className='text-zinc-300 w-7 h-7 rounded-full order-2'/>
                </button>
            
            </div>

        </div>

    )
}
  