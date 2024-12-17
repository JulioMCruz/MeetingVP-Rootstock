'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Wallet, Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

import {
  DynamicWidget,
  // useDynamicContext,
} from "../../lib/dynamic";
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core'


export function Navbar() {

  const isLoggedIn = useIsLoggedIn();
  const { handleLogOut, setShowAuthFlow } = useDynamicContext()
  const router = useRouter()

  function login() {
    if (!isLoggedIn) {
        setShowAuthFlow(true)
    } else {
      //toast.warning('user is already logged in')
    }
  }

  async function logout() {
    await handleLogOut()
    router.push('/')
    //setIsMenuOpen?.(false)
  }  

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">MVP</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">

            { !isLoggedIn && (
              <Button variant="ghost" className="hidden md:flex" onClick={login}>
                <Wallet className="mr-2 h-4 w-4" />
                Login
              </Button>
            )}

            { isLoggedIn && (
              <>
              <DynamicWidget />
              <Button variant="ghost" className="hidden md:flex" onClick={logout}>
                <Wallet className="mr-2 h-4 w-4" />
                Logout
              </Button>
              </>
            )}

            <Button variant="outline" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}