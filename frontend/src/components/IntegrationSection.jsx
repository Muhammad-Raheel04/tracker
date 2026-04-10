import { motion } from 'framer-motion'

const steps = [
  { step: "01", text: "Register your site" },
  { step: "02", text: "Get your unique token" },
  { step: "03", text: "Add one script tag" },
  { step: "04", text: "Done! Visits tracked automatically" },
]

const doubled = [...steps, ...steps];

const IntegrationSection = () => {
  return (
    <section className='py-20 bg-[#003F3A] overflow-hidden relative'>

      <h2 className='text-4xl font-bold text-center mb-14 text-white'>
        Integrate in Minutes
      </h2>

      <div className='relative flex overflow-hidden'>

        <div className='absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#002f2b] to-transparent z-10 pointer-events-none' />

        <motion.div
          className='flex gap-8'
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: 'linear',
            duration: 14,
            repeat: Infinity,
          }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className='flex items-center gap-4 
              bg-white/5 backdrop-blur-lg 
              border border-white/10 
              rounded-2xl px-6 py-4 
              shadow-[0_0_30px_rgba(20,234,216,0.08)] 
              min-w-max hover:scale-105 transition'
            >
              <span className='text-2xl font-bold text-[#14ead8]'>
                {item.step}
              </span>
              <span className='text-white/80 font-medium'>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        <div className='absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#002f2b] to-transparent z-10 pointer-events-none' />
      </div>

      <div className='mt-16 flex justify-center px-4'>
        <div className='relative bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-sm font-mono max-w-xl w-full shadow-lg'>
          <div className="absolute inset-0 rounded-2xl border border-[#14ead8]/20 pointer-events-none" />

          <p className='text-gray-400 mb-3'>
            {'<!-- Add this to your <head> in index.html -->'}
          </p>

          <div className='text-[#14ead8] space-y-1'>
            <p>{'<script'}</p>
            <p className='ml-4 text-white/80'>
              {'src="https://yourapi.com/analytics.js"'}
            </p>
            <p className='ml-4 text-white/80'>
              {'data-token="your-unique-token"'}
            </p>
            <p className='ml-4 text-white/80'>{'defer'}</p>
            <p>{'></script>'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection