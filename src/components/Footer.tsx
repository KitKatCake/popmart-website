'use client'

export default function Footer() {
  return (
    <footer className="bg-pop-dark text-white py-[60px] px-[5%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
        <div>
          <div className="text-2xl font-black mb-4 flex items-center gap-2.5">
            <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
              <circle cx="20" cy="20" r="14" fill="url(#footerLogoGrad)"/>
              <circle cx="16" cy="17" r="3" fill="white"/>
              <circle cx="24" cy="17" r="3" fill="white"/>
              <path d="M15 24 Q20 28 25 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <defs>
                <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#FF6B9D"/>
                  <stop offset="100%" stopColor="#FFB347"/>
                </linearGradient>
              </defs>
            </svg>
            POP MART
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            泡泡玛特（09992.HK）成立于2010年，是全球领先的潮流文化娱乐集团。我们围绕IP孵化与运营、潮流玩具零售、主题乐园体验和数字娱乐，为全球消费者创造潮流，传递美好。
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold mb-5 text-pop-pink">探索</h4>
          <ul className="list-none space-y-2.5">
            <li><a href="#story" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">品牌故事</a></li>
            <li><a href="#values" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">品牌理念</a></li>
            <li><a href="#ips" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">热门IP</a></li>
            <li><a href="#blindbox" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">盲盒文化</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold mb-5 text-pop-pink">关于</h4>
          <ul className="list-none space-y-2.5">
            <li><a href="#timeline" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">发展历程</a></li>
            <li><a href="#global" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">全球布局</a></li>
            <li><a href="#" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">艺术家合作</a></li>
            <li><a href="#" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">投资者关系</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold mb-5 text-pop-pink">联系</h4>
          <ul className="list-none space-y-2.5">
            <li><a href="https://www.popmart.com.cn" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">官方网站</a></li>
            <li><a href="#" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">门店查询</a></li>
            <li><a href="#" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">客户服务</a></li>
            <li><a href="#" className="text-white/60 text-sm no-underline transition-colors hover:text-pop-pink">加入我们</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-white/50 text-xs">
          © 2026 POP MART 泡泡玛特. 本站为品牌文化展示页面，仅供学习参考。所有品牌版权归泡泡玛特国际集团有限公司所有。
        </p>
      </div>
    </footer>
  )
}
