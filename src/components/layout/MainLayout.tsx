import { ReactNode } from 'react'
import Header from '@/components/layer/header/Header'
import Contents from '@/components/layer/contents/Contents'
import Footer from '@/components/layer/footer/Footer'
interface MainLayoutProps {
  children?: ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </>
  )
}

export default MainLayout
