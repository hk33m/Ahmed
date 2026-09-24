"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WeddingSections, {
  WelcomeSection,
  CountdownSection,
  VenueSection,
  NotesSection,
  WeddingFooter,
  WeddingIntro,
  FallingPetals
} from "@/components/WeddingSections";

export default function WeddingInvitation() {
  const [intro, setIntro] = useState(true);
  const [stage, setStage] = useState("opening");
  const [showScrollHint, setShowScrollHint] = useState(true);
 

  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      audioRef.current?.pause();
    }
  };

  const handlePageHide = () => {
    audioRef.current?.pause();
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handlePageHide);

  return () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("pagehide", handlePageHide);
  };
}, []);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollHint(window.scrollY < 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const openInvitation = async () => {
    const video = videoRef.current;

    if (!video) return;

    setStage("playing");

    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
   
    } catch {
      video.muted = true;

      try {
        await video.play();
      } catch {}

   
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
  
  };

  const handleVideoEnd = async () => {
    setStage("invitation");

    setTimeout(async () => {
      try {
        await audioRef.current?.play();
      } catch {}
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#F8F0E3]">

      <audio
        ref={audioRef}
        src="/audio/wedding.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence mode="wait">

        {/* شاشة البداية */}
        {intro && (
          <motion.section
            key="intro"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className="fixed inset-0 z-[100] flex h-[100dvh] w-full items-center justify-center bg-white"
          >
            <div className="flex flex-col items-center">

              {/* N */}
              <div className="flex items-center gap-5">

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-serif text-6xl font-light tracking-widest text-[#5A1720]"
                >
                  N
                </motion.span>

                {/* & */}
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="font-serif text-3xl font-light text-[#C8A96B]"
                >
                  &
                </motion.span>

                {/* Y */}
                <motion.span
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-serif text-6xl font-light tracking-widest text-[#5A1720]"
                >
                  Y
                </motion.span>

              </div>

              {/* الخط */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 96,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="mt-5 h-px bg-[#C8A96B]"
              />

              {/* Progress */}
              <div className="mt-8 h-[2px] w-32 overflow-hidden bg-[#eee]">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-[#5A1720]"
                />

              </div>

            </div>
          </motion.section>
        )}

        {/* الفيديو */}
        {!intro &&
          (stage === "opening" || stage === "playing") && (
            <motion.section
              key="video"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="fixed inset-0 z-50 h-[100dvh] w-full overflow-hidden bg-black"
            >

              <video
                ref={videoRef}
                src="/videos/envelope.webm"
                playsInline
                preload="auto"
                onEnded={handleVideoEnd}
                onClick={
                  stage === "opening"
                    ? openInvitation
                    : undefined
                }
                className={`absolute inset-0 h-full w-full object-cover ${
                  stage === "opening"
                    ? "cursor-pointer"
                    : "cursor-default"
                }`}
              />

              {/* طبقة */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

              {/* النص السفلي */}
             <AnimatePresence>
  {stage === "opening" && (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
  opacity: [1, 0.35, 1],
}}
transition={{
  delay: 0.5,
  duration: 4.2,
  repeat: Infinity,
  ease: "easeInOut",
}}
      className="pointer-events-none absolute bottom-40 left-0 right-0 z-20 flex justify-center text-center"
    >
      <div>
        <div className="mx-auto mt-3 h-px w-12 bg-[#E8C88F]" />

        <p className="mt-2 text-[16px] tracking-[0.25em] text-white/80">
          اضغط على الظرف
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>

              {/* زر الصوت */}
             

            </motion.section>
          )}

        {/* الدعوة + المحتوى */}
{!intro && stage === "invitation" && (
  <motion.section
    key="invitation"
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
      ease: "easeOut",
    }}
    className="min-h-screen bg-[#F8F0E3]"
  >
    {showScrollHint && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: [0, 6, 0] }}
    transition={{
      opacity: { duration: 0.6 },
      y: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="fixed bottom-30 left-1/2 z-[90] -translate-x-1/2 text-center"
  >
    <p className="text-xs tracking-[0.2em] text-[#5A1720]/75">
      مرر للأسفل
    </p>

    <div className="mx-auto mt-2 flex h-8 w-5 items-start justify-center rounded-full border border-[#C8A96B]/70 pt-1">
      <motion.span
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-1.5 w-1.5 rounded-full bg-[#5A1720]"
      />
    </div>
  </motion.div>
)}
     <FallingPetals />
    {/* صورة الدعوة الأصلية */}
    <div className="relative w-full overflow-hidden">
  <div className="flex w-full justify-center">
    <motion.img
      src="/images/invitation.webp"
      alt="دعوة زفاف"
      initial={{
        opacity: 0,
        scale: 1.03,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className="block h-auto w-full max-w-[650px]"
    />
  </div>

  {/* السكشن الأول فوق الصورة */}
  <div className="absolute inset-x-0 top-40 z-10">
    <WeddingIntro />
  </div>
</div>

    {/* جميع أقسام الدعوة الجديدة */}
  
    <WelcomeSection />
<CountdownSection />
<VenueSection />
<NotesSection />
<WeddingFooter />
  </motion.section>
)}

      </AnimatePresence>

    </main>
  );
}