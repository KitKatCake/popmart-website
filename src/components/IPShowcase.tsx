'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ips = [
  {
    name: 'MOLLY',
    creator: '创作者：Kenny Wong',
    desc: '湖绿色大眼睛、标志性雀斑，泡泡玛特最成功的IP。20+主题系列，从经典到联名，Molly已成为潮玩界的超级明星。',
    tag: '顶流IP',
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=400&fit=crop',
    color: 'from-pop-pink to-pop-pink-dark',
  },
  {
    name: 'LABUBU',
    creator: '创作者：Kasing Lung',
    desc: '精灵怪趣的森林精灵形象，以6556万+互动量登顶泡泡玛特十大IP榜首。独特的尖耳朵和淘气的笑容让人过目难忘。',
    tag: '人气冠军',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop',
    color: 'from-pop-mint to-emerald-400',
  },
  {
    name: 'DIMOO',
    creator: '创作者：Ayan',
    desc: '以梦境为主题，有着纯真眼神的小男孩。常与奇幻元素结合——动物、植物、精灵，营造出梦幻超现实的氛围。',
    tag: '梦幻系列',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=400&h=400&fit=crop',
    color: 'from-pop-blue to-blue-400',
  },
  {
    name: 'SKULLPANDA',
    creator: '创作者：熊喵',
    desc: '哥特与赛博朋克的完美融合。独特的骷髅头饰与甜酷造型形成强烈反差，深受追求个性的年轻消费者喜爱。',
    tag: '暗黑甜酷',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=400&fit=crop',
    color: 'from-pop-purple to-violet-400',
  },
  {
    name: 'PUCKY',
    creator: '创作者：Pucky',
    desc: '温暖治愈的精灵形象，圆润可爱的造型搭配梦幻配色。Pucky的世界充满了童话般的温柔与奇幻。',
    tag: '治愈系',
    image: 'https://images.unsplash.com/photo-1559715544-33be62554ff7?w=400&h=400&fit=crop',
    color: 'from-pop-orange to-amber-300',
  },
]

export default function IPShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ips" className="py-[100px] px-[5%] bg-gradient-to-b from-pop-dark to-[#2D1B4E] text-white">
      <div className="text-center mb-[70px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-semibold tracking-[3px] uppercase text-pop-pink mb-4 px-5 py-1.5 bg-white/10 rounded-full"
        >
          Popular IPs
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4"
        >
          热门IP形象
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-lg max-w-[600px] mx-auto"
        >
          每一个形象背后，都有一位艺术家和一个故事
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-[1200px] mx-auto">
        {ips.map((ip, index) => (
          <motion.div
            key={ip.name}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-[28px] p-[35px_25px_30px] text-center transition-all duration-400 hover:bg-white/10 hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 group"
          >
            <div className="w-[160px] h-[160px] mx-auto mb-5 rounded-full overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${ip.color} opacity-20 rounded-full`} />
              <img
                src={ip.image}
                alt={ip.name}
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-[1.3rem] font-bold mb-2">{ip.name}</h3>
            <div className="text-[0.8rem] opacity-60 mb-3">{ip.creator}</div>
            <p className="text-[0.9rem] opacity-80 leading-relaxed">{ip.desc}</p>
            <span className="inline-block px-4 py-[5px] rounded-full text-[0.75rem] font-semibold mt-4 bg-white/10">
              {ip.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
