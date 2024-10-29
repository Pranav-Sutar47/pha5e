import { useContext, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "../components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "../components/ui/sheet"
import { motion, AnimatePresence } from 'framer-motion'
import LanguageContext from '../context/LanguageContext'
import Hero from './Hero'
import AnimatedBanner from './AnimatedBanner'
// import MenuItem from '@mui/material/MenuItem'



function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  //const [language, setLanguage] = useState('EN')

  const {language,setLanguage} = useContext(LanguageContext);

  const englishItems = [
  { label: 'Our Vision', href: '#vision' },
  { label: 'Our Team', href: '#team' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Contact Us', href: '#contact' },
]

const frenchItems = [
  { label: 'Notre vision', href: '#vision' },
  { label: 'Notre équipe', href: '#team' },
  { label: 'Nos projets', href: '#projects' },
  { label: 'Contactez-nous', href: '#contact' },
]

const [menuItems,setMenuItems] = useState(englishItems);
const [showBanner, setShowBanner] = useState(false);

useEffect(()=>{
  setMenuItems(language === 'EN' ? englishItems : frenchItems);
},[language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'FR' : 'EN');
    setShowBanner(true);

    setTimeout(()=>setShowBanner(false),1000)
  }

  const drawerVariants = {
    open: { y: 0, transition: { type: "spring", bounce: 0, duration: 0.4 } },
    closed: { y: "100%", transition: { type: "spring", bounce: 0, duration: 0.4 } }
  }


  const menuItemVariants = {
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { 
      opacity: 0, 
      y: -50, 
      transition: { duration: 0.2 } 
    }
  }

  return (
    <div>
        {showBanner && <AnimatedBanner/>}
    <nav className="bg-[#212121]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-xl font-bold text-white">PHA5E</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="ml-4 text-white cursor-pointer"
            >
              <span className={language === 'FR' ? 'underline' :''}>FR</span>
              <span className={language === 'EN' ? 'underline' :''}>EN</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={drawerVariants}
                    className="fixed inset-0 z-50 bg-white"
                  >
                    <SheetContent side="top" className="h-[100dvh] p-0 border-none">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                      <div className="flex flex-col h-full bg-[#212121]">
                        <div className="flex justify-end p-4">
                          <Button variant="ghost" size="icon" className='text-white' onClick={() => setIsOpen(false)}>
                    
                          </Button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                          <motion.nav 
                            className="flex flex-col space-y-4 p-6"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                              open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                              closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
                            }}
                          >
                            {menuItems.map((item) => (
                              <motion.a
                                key={item.label}
                                href={item.href}
                                className="text-white px-3 py-2 rounded-md text-xl font-medium text-left"
                                onClick={() => setIsOpen(false)}
                                variants={menuItemVariants}
                              >
                                {item.label}
                              </motion.a>
                            ))}
                            <motion.div variants={menuItemVariants}>
                              <a
                                onClick={() => {
                                  toggleLanguage()
                                  setIsOpen(false)
                                }}
                                variant="outline"
                                size="sm"
                                className="w-20 px-3 text-white cursor-pointer"
                              >
                                EN/FR
                              </a>
                            </motion.div>
                          </motion.nav>
                        </div>
                      </div>
                    </SheetContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
