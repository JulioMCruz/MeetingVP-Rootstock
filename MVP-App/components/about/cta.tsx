'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core'

export function AboutCTA() {
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
    <section className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the revolution in professional meeting management. Start using Meeting Value Protocol today and experience the future of secure, verifiable meetings.
          </p>


          {/* <Button 
            size="lg"
            onClick={() => router.push('/signup')}
            className="bg-primary hover:bg-primary/90"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}


          { isLoggedIn && (
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => router.push('/dashboard')}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          )}
          { !isLoggedIn && (
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={login}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          )}


        </motion.div>
      </div>
    </section>
  );
}