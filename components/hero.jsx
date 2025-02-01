"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current; // Get the image element

    const handleScroll = () => {
      const scrollValue = window.scrollY; // Get the scroll value
      const scrollThreshold = 100;

      if (scrollValue > scrollThreshold) {
        imageElement.classList.add("Scrolled");
      } else {
        imageElement.classList.remove("Scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> With AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights
        </p>

        <div className="flex justify-center space-x-8">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=egS6fnZAdzk">
            <Button variant="outline" size="lg" className="px-8">
              Watch Demo !
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/backdrop.png"}
              alt="ai-managing-finances"
              width={1100}
              height={650}
              className="rounded-lg shadow-2xl border mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
