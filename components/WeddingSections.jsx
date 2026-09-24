"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState ,useMemo} from "react";

/* =========================================================
   بيانات الدعوة
========================================================= */

export const weddingData = {
  bride: "نهى",
  groom: "يونس",
  families: "آل صبره و آل العكام",
  weddingDate: "2026-10-01",
  venue: "قاعة قصر اوركست - المحافظة ",
  venueMapUrl: "https://maps.app.goo.gl/nrJBQ8uVJxMezjmR9",
};

/* =========================================================
   Animation Variants
========================================================= */

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

/* =========================================================
   FadeIn
========================================================= */

export function FadeIn({
  children,
  delay = 0,
  className = "",
  amount = 0.2,
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   RevealText
========================================================= */

export function RevealText({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   زخرفة
========================================================= */

function GoldOrnament({ className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-[#C8A96B]/70" />

      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute h-2 w-2 rotate-45 border border-[#C8A96B]" />
        <span className="h-1 w-1 rounded-full bg-[#C8A96B]" />
      </span>

      <span className="h-px w-10 bg-[#C8A96B]/70" />
    </div>
  );
}

/* =========================================================
   SectionTitle
========================================================= */

export function SectionTitle({
  children,
  subtitle,
  className = "",
}) {
  return (
    <div className={`text-center ${className}`}>
     

      <motion.h2
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-serif text-2xl font-medium tracking-wide text-[#5A1720] sm:text-3xl"
      >
        {children}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.12,
          }}
          className="mt-3 text-xs tracking-[0.18em] text-[#332A27]/50"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function FallingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 0 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        size: 8 + Math.random() * 10,
        duration: 8 + Math.random() * 7,
        delay: Math.random() * 8,
        drift: Math.random() * 18 - 9,
        rotate: 360 + Math.random() * 360,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-0"
          initial={{
            left: `${petal.left}vw`,
            y: "-10vh",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            opacity: [0, 0.85, 0.8, 0],
            rotate: petal.rotate,
            x: [
              0,
              `${petal.drift}px`,
              `${petal.drift * -0.7}px`,
              `${petal.drift}px`,
            ],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${petal.size}px`,
            height: `${petal.size * 0.65}px`,
          }}
        >
          <span
            className="
              block
              h-full
              w-full
              rounded-[100%_0_100%_0]
              border
              border-[#C8A96B]/50
              bg-[#E8C8C8]/80
              shadow-[0_2px_8px_rgba(90,23,32,0.12)]
            "
          />
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   WeddingIntro
========================================================= */

export function WeddingIntro() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden  px-5 py-20 sm:px-8 sm:py-24"
    >
        
      <div className="mx-auto max-w-xl text-center">
        

        <RevealText>
          <p className=" text-lg tracking-wide text-[#5A1720] sm:text-xl">
            {weddingData.families}
          </p>
        </RevealText>

        <RevealText delay={0.30}>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-8 text-[#332A27]/65 sm:text-base">
            نتشرف بدعوتكم لمشاركتنا فرحة زفاف
          </p>
        </RevealText>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            delay: 0.40,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6"
        >
          <h1  className="name text-5xl font-medium tracking-wide text-[#5A1720] sm:text-6xl">
            {weddingData.bride}<br></br>
            <span className="mx-3 text-3xl font-light text-[#C8A96B]">
              &
            </span><br></br>
            {weddingData.groom}
          </h1>
        </motion.div>

        <GoldOrnament className="mt-8" />
      </div>
    </section>
  );
}

/* =========================================================
   WelcomeSection
========================================================= */

export function WelcomeSection() {
     const [showScrollHint, setShowScrollHint] = useState(true);

     useEffect(() => {
  const handleScroll = () => {
    setShowScrollHint(window.scrollY < 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <section
      dir="rtl"
      className="bg-[#FFFDF8] px-5  pb-20 sm:px-8 sm:py-24 "
    >
          
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
    className=" text-center py-10"
  >
    {showScrollHint && (
        <>
    <p className="text-[14px] tracking-[0.2em] text-[#5A1720]/75">
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
    </>
    )}
  </motion.div>

        <div className="relative">
  <img
    src="/images/flowers.webp"
    alt=""
    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-44 z-20 pointer-events-none"
  />

  {/* محتوى السكشن */}
</div>
      <div className="mx-auto max-w-xl text-center">
      
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-10"
        >
          <motion.p
            variants={fadeUpVariants}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-2xl text-[#5A1720] sm:text-3xl"
          >
            أهلًا بكم في فرحتنا
          </motion.p>
          <GoldOrnament className="mb-5" />
          <motion.p
            variants={fadeUpVariants}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-md text-[15px] leading-8 text-[#332A27]/70 sm:text-base sm:leading-9"
          >
            بعض اللحظات لا تكتمل إلا بمن نحب،
            <br />
            لأن أجمل الذكريات هي تلك التي تجمعنا بمن نحب.
            <br />
            ننتظر أن نعيش هذه الليلة معكم.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CountdownUnit
========================================================= */

export function CountdownUnit({ value, label }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex min-w-0 flex-col items-center"
    >
      <div className="flex h-[68px] w-full items-center justify-center rounded-xl border border-[#C8A96B]/30 bg-[#F8F0E3]/45 px-2 sm:h-[76px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="font-serif text-2xl font-medium tabular-nums text-[#5A1720] sm:text-3xl"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="mt-2 text-[11px] tracking-wide text-[#332A27]/55 sm:text-xs">
        {label}
      </span>
    </motion.div>
  );
}

/* =========================================================
   CountdownSection
========================================================= */

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date(
      `${weddingData.weddingDate}T00:00:00`
    ).getTime();

    const calculateTimeLeft = () => {
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        setIsFinished(true);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    calculateTimeLeft();

    const interval = setInterval(
      calculateTimeLeft,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      dir="rtl"
      className="bg-[#F8F0E3] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-xl">
       <div className="relative">
  <img
    src="/images/fs.webp"
    alt=""
    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-44 z-20 pointer-events-none"
  />

  {/* محتوى السكشن */}
</div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 overflow-hidden rounded-[24px] border border-[#C8A96B]/55 bg-[#FFFDF8] px-4 py-8 shadow-[0_15px_45px_rgba(90,23,32,0.08)] sm:px-8 sm:py-10"
        >
          {/* الزخرفة العلوية */}
          <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-[#C8A96B]" />

          <div className="text-center">
            <p className="font-serif text-2xl text-[#5A1720]">
              موعد الفرح
            </p>

            <p className="mt-2 text-xs tracking-[0.16em] text-[#332A27]/50">
              تبقى على فرحتنا
            </p>
          </div>

          {isFinished ? (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="py-12 text-center"
            >
              <p className="font-serif text-2xl text-[#5A1720]">
                اليوم هو يوم فرحتنا
              </p>

              <div className="mx-auto mt-5 h-px w-16 bg-[#C8A96B]" />
            </motion.div>
          ) : (
            <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4">
              <CountdownUnit
                value={timeLeft.days}
                label="الأيام"
              />

              <CountdownUnit
                value={timeLeft.hours}
                label="الساعات"
              />

              <CountdownUnit
                value={timeLeft.minutes}
                label="الدقائق"
              />

              <CountdownUnit
                value={timeLeft.seconds}
                label="الثواني"
              />
            </div>
          )}

          {/* التاريخ */}
          <div className="mt-9 border-t border-[#C8A96B]/20 pt-7 text-center">
            <p
              dir="ltr"
              className="font-serif text-xl tracking-[0.18em] text-[#5A1720] sm:text-2xl"
            >
              1 — 10 — 2026
            </p>

            <p className="mt-3 font-serif text-lg text-[#332A27]">
              الخميس
            </p>

            <p className="mt-1 text-xs tracking-[0.18em] text-[#332A27]/50">
              أكتوبر 2026
            </p>
          </div>

          <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-[#C8A96B]" />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   Location Icon
========================================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* =========================================================
   Map Preview
========================================================= */

function MapPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ead9c0]">
  <iframe
    src="https://www.google.com/maps?q=13.9688395,44.1795565&hl=ar&z=19&output=embed"
    width="100%"
    height="180"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
  );
}

/* =========================================================
   VenueSection
========================================================= */

export function VenueSection() {
  return (
    <section
      dir="rtl"
      className="bg-[#FFFDF8] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-xl">
        <SectionTitle>مكان الاحتفال</SectionTitle>

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 rounded-[24px] border border-[#C8A96B]/45 bg-[#FFFDF8] p-4 shadow-[0_15px_45px_rgba(90,23,32,0.07)] sm:p-6"
        >
          <div className="mb-5 text-center">
            <p className="text-xs tracking-[0.15em] text-[#332A27]/45">
              نلتقي هناك
            </p>

            <h3 className="mt-2 font-serif text-2xl text-[#5A1720] sm:text-3xl">
              {weddingData.venue}
            </h3>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <MapPreview />
          </motion.div>

          <motion.a
            href={weddingData.venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5A1720] px-5 py-3.5 text-sm text-[#FFFDF8] shadow-[0_8px_20px_rgba(90,23,32,0.14)] transition hover:bg-[#6b1b26]"
          >
            <LocationIcon />
            <span>عرض الموقع</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   Note Icon
========================================================= */

function NoteIcon() {
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C8A96B]/40 text-[#C8A96B]"
      aria-hidden="true"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}

/* =========================================================
   NotesSection
========================================================= */

const notes = [
  "دعوا هواتفكم جانبًا أثناء المراسم، واستمتعوا باللحظة معنا.",
  "جنة الأطفال منازلهم"
];

export function NotesSection() {
  return (
    <section
      dir="rtl"
      className="bg-[#F8F0E3] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-xl">
        <SectionTitle>ملاحظات لطيفة</SectionTitle>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-10 space-y-4"
        >
          {notes.map((note) => (
            <motion.div
              key={note}
              variants={fadeUpVariants}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-4 border-b border-[#C8A96B]/20 pb-4"
            >
              <NoteIcon />

              <p className="text-[14px] leading-7 text-[#332A27]/70 sm:text-base">
                {note}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* الهدية */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-7 border-y border-[#C8A96B]/35 py-6 text-center"
        >
          <p className="font-serif text-xl text-[#5A1720] sm:text-2xl">
            وجودكم هو أجمل هدية لنا.
          </p>
        </motion.div>

        {/* الأطفال */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-7 text-center"
        >
          

          
        </motion.div>
        
      </div>
    </section>
  );
}

/* =========================================================
   WeddingFooter
========================================================= */

export function WeddingFooter() {
  return (
    <footer
      dir="rtl"
      className="bg-[#FFFDF8] px-5 pb-14 pt-16 text-center sm:pb-20"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <p className="font-serif text-3xl text-[#5A1720]">
          {weddingData.bride}
          <span className="mx-2 text-xl text-[#C8A96B]">
            &
          </span>
          {weddingData.groom}
        </p>

        <GoldOrnament className="my-6" />

        <p className="text-sm tracking-wide text-[#332A27]/55">
          ننتظركم بكل حب
        </p>
      </motion.div>
    </footer>
  );
}

/* =========================================================
   WeddingSections
   جميع الأقسام بعد صورة الدعوة
========================================================= */

export default function WeddingSections() {
  return (
    <>
      <WeddingIntro />

      <WelcomeSection />

      <CountdownSection />

      <VenueSection />

      <NotesSection />

      <WeddingFooter />
    </>
  );
}