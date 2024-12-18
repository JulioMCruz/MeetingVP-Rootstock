'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core'

export function Hero() {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();
  const { setShowAuthFlow } = useDynamicContext()


  function login() {
    if (!isLoggedIn) {
        setShowAuthFlow(true)
    } else {
      //toast.warning('user is already logged in')
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container relative text-center max-w-4xl mx-auto px-4"
      >
        <div className="mb-8 inline-block">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            Web3 Meetings Reimagined
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Revolutionize Your Professional Meetings
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create immutable digital records of your meetings with our decentralized platform. 
          Perfect for DevRels and mentors who need secure, verifiable proof of engagement.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          { isLoggedIn && (
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90"
            onClick={() => router.push('/dashboard')}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          )}
          { !isLoggedIn && (
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90"
            onClick={login}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          )}
          {/* <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 hover:bg-primary/10">
            Learn More
          </Button> */}
        </div>
      </motion.div>
    </section>
  );
}