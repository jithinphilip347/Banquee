import Account from "./components/Account"
import Blog from "./components/Blog"
import CTApp from "./components/CTApp"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Help from "./components/Help"
import Hero from "./components/Hero"
import Notification from "./components/Notification"
import Savings from "./components/Savings"
import Testimonial from "./components/Testimonial"
import Tools from "./components/Tools"
import Transaction from "./components/Transaction"

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Feature />
    <Transaction />
    <Savings />
    <Notification />
    <Tools />
    <Account />
    <Testimonial />
    <CTApp />
    <Help />
    <Blog />
    <Footer />
    </>
  )
}

export default App