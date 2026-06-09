'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pop-dark via-[#2D1B4E] to-pop-pink-dark flex items-center justify-center relative overflow-hidden px-[5%] pt-[100px] pb-[60px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08] animate-float"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #FF6B9D 2px, transparent 2px),
                            radial-gradient(circle at 80% 20%, #FFB347 2px, transparent 2px),
                            radial-gradient(circle at 60% 80%, #C084FC 2px, transparent 2px)`,
          backgroundSize: '60px 60px, 80px 80px, 100px 100px',
        }}
      />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] rounded-full top-[10%] left-[-5%] animate-float" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 70%)' }} />
        <div className="absolute w-[200px] h-[200px] rounded-full top-[60%] right-[5%] animate-float-slow" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 70%)', animationDelay: '2s' }} />
        <div className="absolute w-[150px] h-[150px] rounded-full top-[30%] right-[20%] animate-float" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 70%)', animationDelay: '4s', animationDuration: '7s' }} />
        <div className="absolute w-[100px] h-[100px] rounded-full bottom-[20%] left-[15%] animate-float-slow" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 70%)', animationDelay: '1s', animationDuration: '9s' }} />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] max-w-[1300px] w-full items-center">
        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-pop-pink font-medium tracking-[4px] uppercase text-[1.1rem] mb-4"
          >
            Create Trends, Share Joy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white leading-[1.15] mb-6"
          >
            创造潮流<br />
            <span className="bg-gradient-to-r from-pop-pink via-pop-orange to-pop-yellow bg-clip-text text-transparent">
              传递美好
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(1.1rem,2vw,1.5rem)] text-white/80 mb-5 font-light"
          >
            全球领先的潮流文化娱乐集团
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-base max-w-[480px] mb-9"
          >
            泡泡玛特成立于2010年，以IP为核心，围绕全球艺术家挖掘、IP孵化运营、潮流玩具零售、主题乐园体验和数字娱乐等领域，构建了覆盖潮流玩具全产业链的综合运营平台。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#story" className="px-8 py-3.5 rounded-full bg-gradient-to-br from-pop-pink to-pop-pink-dark text-white font-semibold shadow-[0_8px_30px_rgba(255,107,157,0.4)] transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_40px_rgba(255,107,157,0.5)] no-underline">
              探索品牌故事
            </a>
            <a href="#ips" className="px-8 py-3.5 rounded-full bg-transparent text-white border-2 border-white/30 font-semibold transition-all hover:bg-white/10 hover:border-white/50 no-underline">
              认识热门IP
            </a>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-center animate-float"
        >
          <div className="relative w-full max-w-[450px] animate-pulse-glow">
            <img
              src="https://images.unsplash.com/photo-1559715544-33be62554ff7?w=600&h=700&fit=crop"
              alt="潮流玩具展示"
              className="w-full h-auto rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-pop-pink-dark/30 to-transparent" />
          </div>

          {/* Floating Cards */}
          <div className="absolute top-[10%] left-0 bg-white/10 backdrop-blur-[15px] rounded-2xl px-5 py-4 border border-white/15 text-white text-sm animate-float-slow">
            <div className="text-xl font-extrabold">600+</div>
            <div className="text-xs opacity-80">全球门店</div>
          </div>
          <div className="absolute bottom-[20%] right-0 bg-white/10 backdrop-blur-[15px] rounded-2xl px-5 py-4 border border-white/15 text-white text-sm animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-xl font-extrabold">1400亿+</div>
            <div className="text-xs opacity-80">港元市值</div>
          </div>
          <div className="absolute top-1/2 right-[-10%] bg-white/10 backdrop-blur-[15px] rounded-2xl px-5 py-4 border border-white/15 text-white text-sm animate-float-slow" style={{ animationDelay: '4s' }}>
            <div className="text-xl font-extrabold">15+</div>
            <div className="text-xs opacity-80">国家地区</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
        <span>向下滚动</span>
        <div className="w-6 h-9 border-2 border-white/30 rounded-xl relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/50 rounded-full animate-float" />
        </div>
      </div>
    </section>
  )
}
