
export default function Header() {
  return (
    <div className="p-4 flex items-center justify-between">
   

      <img src="/Logo-Sine-MTE-2025.png" alt="Logo" className="w-40" />
      <div className="flex items-center justify-between gap-4">
        <a href="https://wa.me/+5582976045269" target="_blank" className="  flex items-center justify-between gap-4 font-semibold">
          <div className="w-20 bg-cyan-600 rounded-full overflow-hidden">

          <img src="/logo-CIDA.png" alt="Logo" className="w-20 rounded-full" />
          </div>
          <span className="text-cyan-600 text-sm font-semibold hover:text-cyan-800 transition-colors text-xl">
          Contato CIDA: 82 97604-5269
          </span>
        </a>
      </div>
      
    </div>
  )
}
