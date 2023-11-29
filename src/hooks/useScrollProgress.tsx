"use client";

import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progress = parseFloat(
          ((currentProgress / scrollHeight) * 100).toFixed(2)
        );
        setCompletion(progress);
      }
    };
    window.addEventListener("scroll", updateScrollCompletion);

    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
