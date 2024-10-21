import React, { useState, useCallback } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactMe = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+919082736553";

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section className="bg-background-light dark:bg-background-dark max-w-2xl mx-auto my-24">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold mb-16 text-center text-text-light dark:text-text-dark">Contact</h2>
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="mb-8 max-w-2xl">
            <h3 className="text-6xl font-bold mb-6 text-text-light dark:text-text-dark">Let's Collaborate!</h3>
            <p className="text-lg text-text-darkGrey dark:text-text-lightGrey">
              Working in a collaborative environment is the best and I love it. If you have some work for me, here is my {' '}
              <span 
                className="text-primary cursor-pointer relative group inline-block"
                onClick={copyToClipboard}
              >
                number.
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-8 pt-2 bg-background-light dark:bg-background-dark border border-primary rounded-md p-2 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {phoneNumber}
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="ml-2 text-green-500 inline-flex items-center"
                      >
                        <Check size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;