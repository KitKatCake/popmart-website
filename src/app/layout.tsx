import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'POP MART 泡泡玛特 - 创造潮流，传递美好',
  description: '泡泡玛特成立于2010年，是全球领先的潮流文化娱乐集团，旗下拥有Molly、Labubu、Dimoo等热门IP。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
