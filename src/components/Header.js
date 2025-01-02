import React from 'react'


const Header = ({handlePrint}) => {
  return (
    <div>
         <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-4">
              Invoicer
            </h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex wrap">
              <li>
                <button onClick={handlePrint}  className="  mt-8 bg-green-500 text-white font-bold  rounded-md py-2 px-8 border-2 border-blue-500 hover:text-blue-500 hover:bg-transparent transtion-all duration-300 gap-6 mr-2 ">Print</button>
              </li>
              <li>
                <button  
                className="  mt-8 bg-blue-500 text-white font-bold  rounded-md py-2 px-8 border-2 border-blue-500 hover:text-blue-500 hover:bg-transparent transtion-all duration-300 gap-6 mr-2">Download</button>
              </li>
              <li>
                <button  className="  mt-8 bg-red-500 text-white font-bold  rounded-md py-2 px-8 border-2 border-blue-500 hover:text-blue-500 hover:bg-transparent transtion-all duration-300 gap-6 ">Send</button>
              </li>
            </ul>
          </div>
        </header>
    </div>
  )
}

export default Header
