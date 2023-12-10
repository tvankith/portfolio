'use client';
import React, { useState, useEffect, useImperativeHandle, ForwardedRef } from 'react';

export const Typewriter = React.forwardRef(({ text, className, onFinish, autoStart, speed, animation = true }: { text: string; className: string; onFinish?: () => void, autoStart: boolean, speed: number, animation?: boolean }, ref: ForwardedRef<{ start: () => void }>,) => {
  const [displayText, setDisplayText] = useState(!animation ? text : '');
  const [charIndex, setCharIndex] = useState(0);
  const [start, setStart] = useState(false)
  useImperativeHandle(ref, () => {
    return {
      start: () => {
        setStart(true)
      }
    }
  }, [])

  useEffect(() => {
    setStart(autoStart)
  }, [autoStart])

  useEffect(() => {
    let interval: NodeJS.Timer
    if (!start || !animation) {
      // 
    } else {
      interval = setInterval(() => {
        if (charIndex <= text.length - 1) {
          setCharIndex((i) => i + 1)
          setDisplayText(c => c + text[charIndex])
        } else {
          if (onFinish)
            onFinish()
          clearInterval(interval as unknown as number);
        }
      }, speed || 100);
    }
    return () => {
      clearInterval(interval as unknown as number);
    };
  }, [charIndex, text, start, speed, onFinish, animation]);

  return <h5 className={className}>
    {displayText}
  </h5>;
});

Typewriter.displayName = 'Typewriter';
