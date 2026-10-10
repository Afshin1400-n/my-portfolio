import React from 'react'

function Footer() {
  return (
    <div> 
          <footer className="border-t border-neutral-900/10 bg-lime-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 font-bold">
            این یه پورتوفیلو شخصی 
          </p>
          <div className="flex gap-6 text-sm font-bold text-neutral-500">
            <a href="https://github.com/Afshin1400-n" className="hover:text-lime-600 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/afshin-undefined-2468ab43b" className="hover:text-fuchsia-600 
            transition-colors">LinkedIn</a>
            <a href="mailto:Afshin1993norouzi@outlook.com" className="hover:text-lime-600 transition-colors">Email</a>
          </div>
        </div>
      </footer></div>
  )
}

export default Footer