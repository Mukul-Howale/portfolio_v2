'use client'

import React, { useState, useRef, useCallback } from 'react';
import { Github, Linkedin, Mail, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from './BlurFade';

const ContactMe = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [copied, setCopied] = useState(false);
  const touchRef = useRef(null);
  const phoneNumber = "+919082736553";

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section className="py-20 my-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-4">
        <BlurFade>
          <h2 className="text-4xl font-bold mb-16 text-center text-text-light dark:text-text-dark">Contact</h2>
        </BlurFade>
        <div className="flex flex-col items-center text-center space-y-12">
          <BlurFade delay={0.2}>
            <div className="mb-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">Let's Collaborate!</h3>
              <p className="text-lg text-text-light dark:text-text-dark">
                Working in a collaborative environment is the best and I love it. If you have some work for me, we can get in{' '}
                <span 
                  ref={touchRef}
                  className="text-primary cursor-pointer relative"
                  onMouseEnter={() => setShowPhone(true)}
                  onMouseLeave={() => setShowPhone(false)}
                  onClick={copyToClipboard}
                >
                  touch
                </span>.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
      <AnimatePresence>
        {showPhone && touchRef.current && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bg-background-light dark:bg-background-dark border border-primary rounded-md p-2 shadow-lg"
            style={{
              top: `${touchRef.current.getBoundingClientRect().bottom + window.scrollY}px`,
              left: `${touchRef.current.getBoundingClientRect().left}px`,
            }}
          >
            <p className="text-text-light dark:text-text-dark flex items-center">
              {phoneNumber}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="ml-2 text-green-500"
                  >
                    <Check size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactMe;