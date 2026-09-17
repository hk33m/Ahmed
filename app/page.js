"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ArrowLeft, ArrowUpLeft, Check, ChevronLeft, Menu, Moon, Search, Sparkles,
  Sun, X, MessageCircle, Layers3, Palette, GraduationCap, BarChart3,
  BookOpen, KeyRound, Bot, CircleDot, Plus, Clock3, ExternalLink, ShoppingBag
} from "lucide-react"

const WHATSAPP_NUMBER = "966597946670"

const serviceCategories = [
  {
    id: "academic",
    name: "الخدمات الأكاديمية",
    icon: GraduationCap,
    items: [
      ["assignment", "حل Assignments", "تنفيذ وترتيب متطلبات الـ Assignment حسب تفاصيلك."],
      ["homework", "حل الواجبات", "مساعدة في إنجاز الواجبات وتنظيم الإجابات."],
      ["research", "إعداد الأبحاث العلمية", "صياغة منظمة، مراجع وتنسيق أكاديمي واضح."],
      ["reports", "إعداد التقارير", "تقارير منظمة بصياغة واضحة وفق متطلباتك."],
      ["case-study", "دراسة الحالة", "تحليل الحالة وترتيب النتائج والاستنتاجات."],
      ["feasibility", "دراسة الجدوى", "تنظيم وتحليل عناصر دراسة الجدوى حسب المشروع."],
      ["research-paper", "إعداد ورقة علمية", "تنسيق وصياغة الورقة العلمية بصورة احترافية."],
      ["references", "تنسيق الأبحاث والمراجع", "تنسيق المراجع والاستشهادات حسب المطلوب."],
      ["academic-project", "إعداد المشاريع الأكاديمية", "تنظيم محتوى المشروع ومخرجاته الأكاديمية."],
      ["academic-presentation", "إعداد العروض الأكاديمية", "تحويل المحتوى الأكاديمي إلى عرض واضح ومقنع."],
    ],
  },
  {
    id: "creative",
    name: "التصميم والإبداع",
    icon: Palette,
    items: [
      ["powerpoint", "تصميم عروض PowerPoint احترافية", "عرض بصري يشرح فكرتك بثقة ووضوح."],
      ["cv", "تصميم سيرة ذاتية احترافية", "سيرة تعكس خبرتك وتترك الانطباع الصحيح."],
      ["logo", "تصميم شعار", "شعار متناسق وقابل للاستخدام عبر المنصات."],
      ["branding", "تصميم هوية بصرية متكاملة", "شعار وألوان وتطبيقات ودليل استخدام."],
      ["brand-guide", "تصميم دليل الهوية البصرية", "تنظيم قواعد استخدام الهوية بشكل واضح."],
      ["infographic", "تحويل البيانات إلى إنفوجرافيك", "تحويل المعلومات المعقدة إلى قصة بصرية سهلة الفهم."],
      ["print", "تصميم المطبوعات", "حلول تصميم للكروت والبروشورات والبانرات والفلايرات."],
      ["brochure", "تصميم بروشور", "تصميم بروشور مرتب وجاهز للطباعة."],
      ["banner", "تصميم بانر", "تصميم بانرات للإعلانات والمنصات المختلفة."],
      ["flyer", "تصميم فلاير", "فلاير بصري واضح وجذاب."],
      ["business-card", "تصميم كرت أعمال", "بطاقة أعمال احترافية ومتناسقة مع الهوية."],
      ["social", "تصاميم السوشيال ميديا", "محتوى بصري متناسق لمختلف المنصات."],
      ["visual-content", "تصميم المحتوى البصري", "تصميمات مخصصة للحملات والمحتوى الرقمي."],
      ["motion", "موشن جرافيك", "فيديوهات متحركة تشرح الفكرة وتلفت الانتباه."],
      ["ad-video", "فيديوهات إعلانية", "فيديوهات تسويقية للمنتجات والخدمات."],
      ["social-video", "فيديوهات للسوشيال ميديا", "مقاطع قصيرة مناسبة لمنصات التواصل."],
    ],
  },
  {
    id: "education",
    name: "الخدمات التعليمية",
    icon: BookOpen,
    items: [
      ["portfolio-teacher", "ملفات إنجاز للمعلمين والمعلمات", "ملفات إنجاز مرتبة بصريًا وقابلة للتخصيص."],
      ["teaching-strategies", "ملفات شرح استراتيجيات التدريس", "شرح بصري منظم للاستراتيجيات التعليمية."],
      ["evidence", "تنسيق الشواهد", "تنظيم الشواهد وتجهيزها بصريًا."],
      ["remedial", "الخطط العلاجية", "تنسيق الخطط العلاجية للطلاب بصورة واضحة."],
      ["educational-files", "ملفات وأنشطة تعليمية", "مواد وأنشطة تعليمية مرتبة وجاهزة للاستخدام."],
      ["teaching-materials", "تصميم المواد التعليمية", "تحويل المحتوى التعليمي إلى مادة بصرية جذابة."],
    ],
  },
  {
    id: "data",
    name: "تحليل البيانات",
    icon: BarChart3,
    items: [
      ["excel-analysis", "تحليل بيانات Excel", "تحويل أرقامك إلى نتائج ومؤشرات قابلة للفهم."],
      ["excel-cleaning", "تنظيف وتنظيم البيانات", "ترتيب البيانات وتجهيزها للتحليل."],
      ["dashboards", "لوحات البيانات والتصور البصري", "عرض البيانات بطريقة منظمة وسهلة القراءة."],
      ["results", "صياغة النتائج والاستنتاجات", "تحويل مخرجات التحليل إلى نتائج مكتوبة واضحة."],
      ["data-infographic", "تحويل البيانات إلى Infographic", "تلخيص البيانات في قصة بصرية جذابة."],
      ["custom-digital", "خدمة رقمية مخصصة", "إذا لم تجد احتياجك، اشرح لنا ما تريد."],
    ],
  },
]

const services = serviceCategories.flatMap((category) =>
  category.items.map(([id, name, description], index) => ({
    id,
    name,
    description,
    category: category.name,
    categoryId: category.id,
    icon: String(index + 1).padStart(2, "0"),
  }))
)

const coursePlatforms = [
  ["coursera", "Coursera", "دورات وشهادات في تخصصات أكاديمية ومهنية متنوعة."],
  ["udemy", "Udemy", "دورات عملية في البرمجة والتصميم والأعمال وغيرها."],
  ["edx", "edX", "محتوى أكاديمي وتقني من جامعات ومؤسسات تعليمية."],
  ["offsec", "Offensive Security", "مسارات ودورات متخصصة في الأمن السيبراني."],
  ["hsoub", "أكاديمية حسوب", "محتوى عربي في البرمجة والتقنية والعمل الحر."],
  ["saheh", "منصة صحيح", "محتوى تعليمي وتدريبي متنوع حسب المنصة."],
  ["linkedin-learning", "LinkedIn Learning", "دورات مهنية ومهارات عملية."],
  ["pluralsight", "Pluralsight", "مسارات تقنية وتطوير مهني."],
  ["datacamp", "DataCamp", "تعلم تحليل البيانات والبرمجة وعلوم البيانات."],
  ["other-course-platform", "منصة أخرى", "اكتب اسم المنصة التي تبحث عنها."],
]

const aiCategories = {
  "المساعدات الذكية": ["ChatGPT", "Gemini", "Claude", "Grok", "Perplexity", "Microsoft Copilot"],
  "التصميم والصور": ["Canva", "Midjourney", "Leonardo AI", "Adobe Firefly", "Ideogram"],
  "الفيديو والموشن": ["Runway", "Pika", "Kling AI", "Luma", "Synthesia"],
  "البرمجة": ["GitHub Copilot", "Cursor", "Replit", "Windsurf", "CodeRabbit"],
  "الصوت": ["ElevenLabs", "Murf", "Suno"],
}

const aiTools = Object.entries(aiCategories).flatMap(([category, names]) =>
  names.map((name, index) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || `ai-${index}`,
    name,
    category,
  }))
)

const licenseCategories = {
  "التصميم والإبداع": ["Adobe Creative Cloud", "Figma", "Affinity"],
  "البرمجة والتطوير": ["JetBrains", "GitHub Copilot", "Visual Studio"],
  "الأمن السيبراني": ["Burp Suite", "Nessus", "Acunetix"],
  "الإنتاجية والأعمال": ["Microsoft Office", "Microsoft 365"],
  "أنظمة التشغيل": ["Microsoft Windows"],
}

const licenses = Object.entries(licenseCategories).flatMap(([category, names]) =>
  names.map((name, index) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || `license-${index}`,
    name,
    category,
  }))
)

const faqs = [
  ["هل الأسعار ثابتة؟", "لا. التكلفة تحدد بعد معرفة تفاصيل الطلب والموعد والصيغة المطلوبة، ثم نوضح لك الخيارات قبل البدء."],
  ["هل يمكن طلب خدمة غير موجودة في القائمة؟", "نعم. اختر «خدمة رقمية مخصصة» أو «خدمة أخرى» واشرح لنا ما تحتاجه."],
  ["كيف أطلب كورسًا؟", "اختر الكورسات، ثم حدد المنصة واكتب اسم الكورس الذي تبحث عنه. يمكنك إضافة رابط الكورس إن وجد."],
  ["هل أستطيع طلب أداة ذكاء اصطناعي غير الموجودة؟", "نعم. اختر «أداة أخرى» واكتب اسمها، وسنتحقق من الخيارات المتاحة عند التواصل."],
  ["كيف يتم تحديد سعر الخدمة؟", "بعد فهم المتطلبات والحجم والموعد المطلوب، يتم تحديد التكلفة والمدة المناسبة بالتواصل المباشر."],
  ["هل يوجد رفع ملفات داخل الموقع؟", "لا. حاليًا يتم شرح المتطلبات عبر واتساب، ويمكن ترتيب مشاركة الملفات بالطريقة المناسبة بعد التواصل."],
  ["هل الأسعار أو التوفر ظاهر في الموقع؟", "لا. لا نضع أسعارًا أو توفرًا افتراضيًا؛ يتم تأكيد التفاصيل الحالية عبر واتساب."],
]

function Logo() {
  return (
    <div className="brand-mark">
      <img src="/nizam-logo.jpg" alt="نظم للتقنية" className="brand-logo-image" />
      <span className="brand-fallback">نظم<span>للتقنية</span></span>
    </div>
  )
}

function WhatsAppButton({ children = "تواصل معنا", onClick, outline = false }) {
  return (
    <button onClick={onClick} className={outline ? "wa-button outline" : "wa-button"}>
      <MessageCircle size={16} />
      {children}
    </button>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function SystemVisual({ compact = false }) {
  const labels = ["أبحاث", "هوية", "Excel", "AI", "تصميم", "تراخيص", "CV", "عروض"]
  return (
    <div className={`system-visual ${compact ? "compact" : ""}`}>
      <div className="system-grid" />
      <div className="system-orbit orbit-one" />
      <div className="system-orbit orbit-two" />
      {labels.map((label, i) => <span key={label} className={`node node-${i}`}>{label}</span>)}
      <div className="system-core"><span>ن</span><b>ظم</b><small>كل شيء في مكانه</small></div>
    </div>
  )
}

function OrderModal({ initialOrder, onClose }) {
  const [step, setStep] = useState(1)
  const [type, setType] = useState(initialOrder?.type || "service")
  const [selectedId, setSelectedId] = useState(initialOrder?.item?.id || null)
  const [search, setSearch] = useState("")
  const [details, setDetails] = useState("")
  const [deadline, setDeadline] = useState("مرن")
  const [quantity, setQuantity] = useState("")
  const [notes, setNotes] = useState("")
  const [platform, setPlatform] = useState("")
  const [courseName, setCourseName] = useState("")
  const [courseUrl, setCourseUrl] = useState("")
  const [courseRequest, setCourseRequest] = useState("أريد معرفة توفر الكورس")
  const [aiDuration, setAiDuration] = useState("أريد معرفة الخيارات المتاحة")
  const [licenseType, setLicenseType] = useState("لا أعرف، أريد المساعدة")
  const [os, setOs] = useState("لا أعرف")
  const [customName, setCustomName] = useState("")

  useEffect(() => {
    setType(initialOrder?.type || "service")
    setSelectedId(initialOrder?.item?.id || null)
    setStep(initialOrder?.item ? 2 : 1)
  }, [initialOrder])

  const selectedService = services.find((s) => s.id === selectedId)
  const selectedAI = aiTools.find((t) => t.id === selectedId)
  const selectedLicense = licenses.find((l) => l.id === selectedId)
  const selectedPlatform = coursePlatforms.find(([id]) => id === platform)

  const filteredServices = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return services
    return services.filter((s) => `${s.name} ${s.category} ${s.description}`.toLowerCase().includes(q) || s.name.includes(search))
  }, [search])

  const selectedLabel =
    type === "service" ? selectedService?.name :
    type === "ai" ? selectedAI?.name :
    type === "license" ? selectedLicense?.name :
    courseName || "كورس تعليمي"

  function chooseType(nextType) {
    setType(nextType)
    setSelectedId(null)
    setSearch("")
    setStep(2)
  }

  function nextToReview() {
    if (type === "service" && !selectedService) return
    if (type === "course" && !platform) return
    if (type === "ai" && !selectedAI && !customName) return
    if (type === "license" && !selectedLicense && !customName) return
    if (type === "course" && !courseName.trim()) return
    setStep(3)
  }

  function buildMessage() {
    if (type === "service") {
      return `السلام عليكم، أرغب في طلب خدمة ${selectedService?.name || "خدمة رقمية مخصصة"}.

تفاصيل الطلب:
${details || "أرغب بمعرفة التفاصيل المتاحة."}

الموعد المطلوب:
${deadline}

الكمية / الحجم:
${quantity || "غير محدد"}

ملاحظات:
${notes || "لا توجد ملاحظات إضافية."}

أرغب بمعرفة التكلفة والمدة المناسبة.`
    }

    if (type === "course") {
      return `السلام عليكم، أرغب في الاستفسار عن كورس تعليمي.

المنصة:
${selectedPlatform?.[1] || "منصة أخرى"}

اسم الكورس:
${courseName}

الرابط:
${courseUrl || "غير متوفر"}

نوع الطلب:
${courseRequest}

ملاحظات:
${notes || "لا توجد ملاحظات إضافية."}

أرغب بمعرفة التفاصيل والخيارات المتاحة.`
    }

    if (type === "ai") {
      return `السلام عليكم، أرغب في الاستفسار عن اشتراك أداة ذكاء اصطناعي.

الأداة:
${selectedAI?.name || customName}

المدة المطلوبة:
${aiDuration}

ملاحظات:
${notes || "لا توجد ملاحظات إضافية."}

أرغب بمعرفة الخيارات والتفاصيل المتاحة.`
    }

    return `السلام عليكم، أرغب في الاستفسار عن ترخيص برنامج.

البرنامج:
${selectedLicense?.name || customName}

نوع الترخيص:
${licenseType}

نظام التشغيل:
${os}

ملاحظات:
${notes || "لا توجد ملاحظات إضافية."}

أرغب بمعرفة الخيارات والتفاصيل المتاحة.`
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="order-modal smart-order" onMouseDown={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="إغلاق"><X size={20} /></button>

        <div className="order-head">
          <span className="eyebrow">نظام الطلب الذكي</span>
          <h3>{step === 1 ? "ماذا تحتاج من نظم؟" : step === 2 ? "لنرتب تفاصيل طلبك" : "راجع طلبك قبل الإرسال"}</h3>
          <p>
            {step === 1
              ? "اختر نوع احتياجك وسنفتح لك المسار المناسب."
              : step === 2
              ? "لن نعرض عليك حقولًا لا تخص طلبك."
              : "تأكد من البيانات، ثم أرسلها مباشرة إلى واتساب."}
          </p>
        </div>

        <div className="order-steps">
          {[["01", "نوع الطلب"], ["02", "التفاصيل"], ["03", "المراجعة"]].map(([n, label], i) => (
            <div key={n} className={`order-step ${step >= i + 1 ? "active" : ""}`}>
              <span>{n}</span><small>{label}</small>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="order-type-grid">
            {[
              ["service", "خدمة مخصصة", "لديك مشروع أو مهمة وتحتاج إلى تنفيذها.", Layers3],
              ["course", "كورس تعليمي", "تبحث عن كورس من منصة تعليمية.", GraduationCap],
              ["ai", "اشتراك أداة", "تريد أداة ذكاء اصطناعي أو منصة رقمية.", Bot],
              ["license", "ترخيص برنامج", "تحتاج إلى ترخيص أصلي لبرنامج.", KeyRound],
            ].map(([id, title, text, Icon]) => (
              <button key={id} className={`order-type-card ${type === id ? "selected" : ""}`} onClick={() => chooseType(id)}>
                <span className="order-type-icon"><Icon size={21} /></span>
                <strong>{title}</strong>
                <small>{text}</small>
                <ArrowLeft size={16} />
              </button>
            ))}
          </div>
        )}

        {step === 2 && type === "service" && (
          <div className="order-body">
            <div className="order-field">
              <label>اختر الخدمة</label>
              <div className="order-search"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ابحث عن الخدمة..." /></div>
            </div>

            <div className="service-picker">
              {filteredServices.map((service) => (
                <button key={service.id} className={`picker-item ${selectedId === service.id ? "selected" : ""}`} onClick={() => setSelectedId(service.id)}>
                  <span>{service.icon}</span>
                  <div><strong>{service.name}</strong><small>{service.category}</small></div>
                  {selectedId === service.id && <Check size={17} />}
                </button>
              ))}
            </div>

            {selectedService && (
              <div className="context-fields">
                <label>تفاصيل الطلب<textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="اكتب ما تحتاجه بالتفصيل، وما المطلوب إنجازه..." /></label>
                <div className="two-fields">
                  <label>الموعد المطلوب<select value={deadline} onChange={(e) => setDeadline(e.target.value)}><option>مرن</option><option>خلال 24 ساعة</option><option>خلال 2–3 أيام</option><option>خلال أسبوع</option><option>موعد آخر</option></select></label>
                  <label>الكمية / الحجم<input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="مثال: 20 شريحة / 10 صفحات" /></label>
                </div>
                <label>ملاحظات إضافية<textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="أي تفاصيل أخرى تساعدنا على فهم طلبك..." /></label>
              </div>
            )}

            <button className="back-link" onClick={() => setStep(1)}><ArrowUpLeft size={15} /> تغيير نوع الطلب</button>
            <button className="modal-submit" disabled={!selectedService} onClick={nextToReview}>مراجعة الطلب <ArrowLeft size={18} /></button>
          </div>
        )}

        {step === 2 && type === "course" && (
          <div className="order-body">
            <div className="order-callout"><BookOpen size={18} /><div><strong>اطلب أي كورس</strong><small>لا نقيّدك بقائمة جاهزة. اكتب اسم الكورس الذي تبحث عنه حتى لو لم يكن ظاهرًا هنا.</small></div></div>
            <div className="course-platforms">
              {coursePlatforms.map(([id, name, description]) => (
                <button key={id} className={`platform-card ${platform === id ? "selected" : ""}`} onClick={() => setPlatform(id)}>
                  <span>{name.slice(0, 2)}</span><div><strong>{name}</strong><small>{description}</small></div>{platform === id && <Check size={16} />}
                </button>
              ))}
            </div>
            <div className="context-fields">
              <label>اسم الكورس المطلوب<input value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="اكتب اسم الكورس كما هو..." /></label>
              <label>رابط الكورس <span className="optional">اختياري</span><input value={courseUrl} onChange={(e) => setCourseUrl(e.target.value)} placeholder="https://..." dir="ltr" /></label>
              <label>نوع الطلب<select value={courseRequest} onChange={(e) => setCourseRequest(e.target.value)}><option>أريد معرفة توفر الكورس</option><option>أريد الاشتراك في الكورس</option><option>أريد الاستفسار عن السعر</option><option>أريد الاستفسار عن التفاصيل</option></select></label>
              <label>ملاحظات إضافية<textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="أي تفاصيل إضافية..." /></label>
            </div>
            <button className="back-link" onClick={() => setStep(1)}><ArrowUpLeft size={15} /> تغيير نوع الطلب</button>
            <button className="modal-submit" disabled={!platform || !courseName.trim()} onClick={nextToReview}>مراجعة طلب الكورس <ArrowLeft size={18} /></button>
          </div>
        )}

        {step === 2 && type === "ai" && (
          <div className="order-body">
            <div className="order-callout"><Bot size={18} /><div><strong>اختر أداة الذكاء الاصطناعي</strong><small>يمكنك اختيار أداة موجودة أو طلب أداة أخرى بالاسم.</small></div></div>
            {Object.entries(aiCategories).map(([category, names]) => (
              <div className="catalog-group" key={category}>
                <div className="group-title">{category}</div>
                <div className="mini-picker">
                  {names.map((name) => {
                    const item = aiTools.find((x) => x.name === name)
                    return <button key={name} className={selectedId === item?.id ? "selected" : ""} onClick={() => { setSelectedId(item?.id); setCustomName("") }}>{name}{selectedId === item?.id && <Check size={14} />}</button>
                  })}
                </div>
              </div>
            ))}
            <label>أداة أخرى <span className="optional">اختياري</span><input value={customName} onChange={(e) => { setCustomName(e.target.value); setSelectedId(null) }} placeholder="اكتب اسم الأداة..." /></label>
            <label>المدة المطلوبة<select value={aiDuration} onChange={(e) => setAiDuration(e.target.value)}><option>شهر</option><option>3 أشهر</option><option>6 أشهر</option><option>سنة</option><option>أريد معرفة الخيارات المتاحة</option></select></label>
            <label>ملاحظات إضافية<textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="أي تفاصيل إضافية..." /></label>
            <button className="back-link" onClick={() => setStep(1)}><ArrowUpLeft size={15} /> تغيير نوع الطلب</button>
            <button className="modal-submit" disabled={!selectedAI && !customName.trim()} onClick={nextToReview}>مراجعة الطلب <ArrowLeft size={18} /></button>
          </div>
        )}

        {step === 2 && type === "license" && (
          <div className="order-body">
            <div className="order-callout"><KeyRound size={18} /><div><strong>اختر البرنامج</strong><small>لا نضع أسعارًا أو توفرًا افتراضيًا؛ نتحقق من الخيارات الحالية عند التواصل.</small></div></div>
            {Object.entries(licenseCategories).map(([category, names]) => (
              <div className="catalog-group" key={category}>
                <div className="group-title">{category}</div>
                <div className="mini-picker">
                  {names.map((name) => {
                    const item = licenses.find((x) => x.name === name)
                    return <button key={name} className={selectedId === item?.id ? "selected" : ""} onClick={() => { setSelectedId(item?.id); setCustomName("") }}>{name}{selectedId === item?.id && <Check size={14} />}</button>
                  })}
                </div>
              </div>
            ))}
            <label>برنامج آخر <span className="optional">اختياري</span><input value={customName} onChange={(e) => { setCustomName(e.target.value); setSelectedId(null) }} placeholder="اكتب اسم البرنامج..." /></label>
            <label>نوع الترخيص<select value={licenseType} onChange={(e) => setLicenseType(e.target.value)}><option>فردي</option><option>أعمال</option><option>طالب / تعليمي</option><option>لا أعرف، أريد المساعدة</option></select></label>
            <label>نظام التشغيل<select value={os} onChange={(e) => setOs(e.target.value)}><option>Windows</option><option>macOS</option><option>Linux</option><option>لا أعرف</option></select></label>
            <label>ملاحظات إضافية<textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="أي تفاصيل إضافية..." /></label>
            <button className="back-link" onClick={() => setStep(1)}><ArrowUpLeft size={15} /> تغيير نوع الطلب</button>
            <button className="modal-submit" disabled={!selectedLicense && !customName.trim()} onClick={nextToReview}>مراجعة الطلب <ArrowLeft size={18} /></button>
          </div>
        )}

        {step === 3 && (
          <div className="review-screen">
            <div className="review-icon"><Check size={22} /></div>
            <h4>طلبك جاهز</h4>
            <p>هذه هي المعلومات التي ستنتقل إلى محادثة واتساب.</p>
            <div className="review-card">
              <div><span>نوع الطلب</span><strong>{type === "service" ? "خدمة مخصصة" : type === "course" ? "كورس تعليمي" : type === "ai" ? "اشتراك أداة" : "ترخيص برنامج"}</strong></div>
              <div><span>{type === "course" ? "المنصة" : "الاختيار"}</span><strong>{type === "course" ? (selectedPlatform?.[1] || "منصة أخرى") : selectedLabel}</strong></div>
              {type === "course" && <div><span>اسم الكورس</span><strong>{courseName}</strong></div>}
              {type === "service" && <><div><span>الموعد</span><strong>{deadline}</strong></div><div><span>التفاصيل</span><strong>{details || "لم تتم إضافة تفاصيل"}</strong></div></>}
              {type === "ai" && <div><span>المدة</span><strong>{aiDuration}</strong></div>}
              {type === "license" && <><div><span>نوع الترخيص</span><strong>{licenseType}</strong></div><div><span>النظام</span><strong>{os}</strong></div></>}
            </div>
            <div className="review-note"><MessageCircle size={16} /> سيتم تحديد التكلفة والموعد أو تفاصيل التوفر عبر واتساب.</div>
            <div className="review-actions">
              <button className="back-link" onClick={() => setStep(2)}>تعديل الطلب</button>
              <a className="modal-submit" href={whatsappHref} target="_blank" rel="noreferrer">إرسال الطلب عبر واتساب <ArrowLeft size={18} /></a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)
  const [query, setQuery] = useState("")
  const [order, setOrder] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem("nizam-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDark(saved ? saved === "dark" : prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("nizam-theme", dark ? "dark" : "light")
  }, [dark])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return services
    return services.filter((s) => `${s.name} ${s.category} ${s.description}`.toLowerCase().includes(q) || s.name.includes(query))
  }, [query])

  const openService = (service) => setOrder({ type: "service", item: service })

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="navbar">
          <a href="#top"><Logo /></a>
          <div className={`nav-links ${menu ? "mobile-open" : ""}`}>
            <a href="#services" onClick={() => setMenu(false)}>الخدمات</a>
            <a href="#store" onClick={() => setMenu(false)}>المتجر</a>
            <a href="#how" onClick={() => setMenu(false)}>كيف نعمل؟</a>
            <a href="#why" onClick={() => setMenu(false)}>لماذا نظم؟</a>
            <a href="#contact" onClick={() => setMenu(false)}>تواصل معنا</a>
          </div>
          <div className="nav-actions">
            <button className="theme-button" onClick={() => setDark(!dark)} aria-label="تبديل النمط">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <WhatsAppButton onClick={() => setOrder({ type: "service" })}>ابدأ طلبك</WhatsAppButton>
            <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="القائمة">{menu ? <X /> : <Menu />}</button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="kicker"><span className="status-dot" /> نظام واحد، لكل احتياج</div>
            <h1>كل ما تحتاجه<br /><em>لإنجازك.</em> في نظام واحد.</h1>
            <p>خدمات أكاديمية، حلول رقمية، تصميمات إبداعية، كورسات، تراخيص وأدوات ذكية — نرتب احتياجك ونحوّل فكرتك إلى خطوة واضحة.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => setOrder({ type: "service" })}>ابدأ طلبك <ArrowLeft size={18} /></button>
              <a className="text-link" href="#services">استكشف خدماتنا <ArrowUpLeft size={17} /></a>
            </div>
            <div className="trust-note"><Check size={15} /> خدمات ومسارات مصممة حول احتياجك، وليس حول قالب جاهز.</div>
          </div>
          <SystemVisual />
        </section>

        <section className="ticker">
          {["أبحاث", "تصميم", "بيانات", "ذكاء اصطناعي", "تراخيص", "كورسات", "خدمات تعليمية"].map((x, i) => <span key={x}>{x}{i < 6 && <i />}</span>)}
        </section>

        <section className="discover section-pad" id="services">
          <SectionIntro eyebrow="اكتشف الحل المناسب" title={<>ماذا تحتاج <em>اليوم؟</em></>} text="ابدأ بكلمة واحدة، ودع نظم يرتب لك المسار المناسب." />
          <div className="search-box"><Search size={20} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث عن بحث، تصميم، Excel، كورس، أداة أو ترخيص..." /><kbd>Ctrl K</kbd></div>
          <div className="quick-tags"><span>اختصارات</span>{["بحث", "PowerPoint", "Excel", "سيرة ذاتية", "ذكاء اصطناعي", "ترخيص"].map((x) => <button key={x} onClick={() => setQuery(x)}>{x}</button>)}</div>

          <div className="service-summary"><strong>{filtered.length}</strong><span>خدمة قابلة للطلب والاستفسار</span><button onClick={() => setOrder({ type: "service" })}>افتح نظام الطلب <ArrowLeft size={15} /></button></div>

          <div className="service-grid">
            {filtered.map((s) => (
              <article className="service-card" key={s.id} onClick={() => openService(s)}>
                <div className="card-top"><span className="service-index">{s.icon}</span><ArrowUpLeft size={19} /></div>
                <span className="card-category">{s.category}</span>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <span className="card-cta">اطلب الخدمة <ArrowLeft size={15} /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band">
          <div><span className="eyebrow">منصة واحدة، مسارات متعددة</span><h2>فكرة واحدة،<br /><em>مسارات متعددة.</em></h2><p>من ورقة بحثية إلى هوية مشروعك، ومن كورس تقني إلى أداة ذكاء اصطناعي — لا تحتاج أن تعرف المسار مسبقًا. فقط أخبرنا بما تحتاج.</p></div>
          <div className="mini-ecosystem"><div className="eco-line" /><span><Layers3 size={18} /> أكاديمي</span><span><Palette size={18} /> إبداعي</span><span><Bot size={18} /> رقمي</span><span><ShoppingBag size={18} /> متجر</span></div>
        </section>

        <section className="catalog section-pad" id="store">
          <SectionIntro eyebrow="المتجر الرقمي" title={<>أدوات تكبر <em>معك.</em></>} text="كورسات ومنصات، اشتراكات أدوات ذكاء اصطناعي، وتراخيص برمجية — كل مسار له طريقة طلبه الخاصة." />
          <div className="catalog-layout">
            <div className="catalog-panel ai-panel">
              <div className="panel-head"><span className="panel-icon"><Bot size={19} /></span><div><h3>اشتراكات الذكاء الاصطناعي</h3><p>اختر الأداة ثم حدد المدة التي تريد الاستفسار عنها</p></div><Sparkles size={18} /></div>
              <div className="tool-list">{aiTools.slice(0, 16).map((t, i) => <button key={t.id} onClick={() => setOrder({ type: "ai", item: t })}><span className="tool-letter">{t.name.slice(0, 1)}</span>{t.name}<ChevronLeft size={15} /></button>)}</div>
              <button className="panel-link" onClick={() => setOrder({ type: "ai" })}>استكشف كل الأدوات واطلب أداة أخرى <ArrowLeft size={16} /></button>
            </div>

            <div className="catalog-side">
              <div className="catalog-panel license-panel">
                <div className="panel-head"><span className="panel-icon"><KeyRound size={19} /></span><div><h3>التراخيص الأصلية</h3><p>استفسار حسب المنتج ونوع الترخيص</p></div></div>
                <div className="license-list">{licenses.slice(0, 8).map((l) => <button key={l.id} onClick={() => setOrder({ type: "license", item: l })}><span>{l.name.slice(0, 2)}</span>{l.name}<ChevronLeft size={15} /></button>)}</div>
                <button className="panel-link" onClick={() => setOrder({ type: "license" })}>عرض كل التراخيص <ArrowLeft size={16} /></button>
              </div>

              <button className="course-strip" onClick={() => setOrder({ type: "course" })}>
                <BookOpen size={20} /><div><strong>الكورسات والمنصات التعليمية</strong><small>Coursera · Udemy · edX · Offensive Security · حسوب · وغيرها</small></div><ArrowLeft size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="courses-highlight section-pad">
          <div className="courses-copy">
            <span className="eyebrow">لا تبحث عن اسم جاهز فقط</span>
            <h2>اكتب اسم الكورس،<br /><em>ونرتب لك الطلب.</em></h2>
            <p>اختر المنصة التي تريدها ثم اكتب اسم الكورس أو ألصق رابطه. تجربة الطلب مصممة لتوصل المعلومة الصحيحة إلى واتساب بدل إرسال رسالة عامة.</p>
            <button className="primary-button" onClick={() => setOrder({ type: "course" })}>اطلب كورسًا <ArrowLeft size={18} /></button>
          </div>
          <div className="course-stack">
            {coursePlatforms.slice(0, 6).map(([id, name], i) => <div key={id} style={{ "--i": i }}><span>{String(i + 1).padStart(2, "0")}</span><strong>{name}</strong><ArrowLeft size={15} /></div>)}
          </div>
        </section>

        <section className="flow section-pad" id="how">
          <SectionIntro eyebrow="كيف نعمل؟" title={<>من الفكرة إلى <em>النتيجة.</em></>} text="مسار واضح، وتواصل مباشر، ومعلومة تصل إلى الشخص المناسب من أول رسالة." />
          <div className="flow-track">
            {[["01", "استقبال الفكرة والمتطلبات", "شاركنا ما تحتاجه عبر واتساب."], ["02", "فهم المتطلبات وعرض الخيارات", "نراجع احتياجك ونحدد التفاصيل والتكلفة والموعد."], ["03", "التنفيذ والمراجعة", "نبدأ العمل ونشاركك المسودة عند الحاجة ونطبق الملاحظات."], ["04", "التسليم النهائي", "تستلم العمل بالصيغة المناسبة والجاهزة للاستخدام."]].map((x, i) => <div className="flow-step" key={x[0]}><span>{x[0]}</span><div className="flow-dot" /><h3>{x[1]}</h3><p>{x[2]}</p>{i < 3 && <div className="flow-connector" />}</div>)}
          </div>
        </section>

        <section className="why section-pad" id="why">
          <div className="why-copy"><SectionIntro eyebrow="لماذا نظم؟" title={<>لأن احتياجك<br /><em>ليس قالبًا.</em></>} text="نستمع أولًا، ثم نبني المسار الذي يناسبك — خدمة، كورس، أداة أو ترخيص." /><WhatsAppButton onClick={() => setOrder({ type: "service" })}>تحدث مع نظم</WhatsAppButton></div>
          <div className="why-grid">{["فهم الاحتياج", "تنوع الحلول", "تنفيذ مخصص", "تواصل مباشر", "مراجعات واضحة", "تسليم منظم"].map((x, i) => <div key={x} className="why-item"><span>0{i + 1}</span><strong>{x}</strong><Plus size={15} /></div>)}</div>
        </section>

        <section className="faq section-pad">
          <SectionIntro eyebrow="أسئلة شائعة" title={<>كل ما يدور <em>في بالك.</em></>} />
          <div className="faq-list">{faqs.map((f, i) => <div className={`faq-item ${openFaq === i ? "opened" : ""}`} key={f[0]}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{f[0]}</span>{openFaq === i ? <X size={18} /> : <Plus size={18} />}</button>{openFaq === i && <p>{f[1]}</p>}</div>)}</div>
        </section>

        <section className="final-cta" id="contact">
          <SystemVisual compact />
          <div><span className="eyebrow">جاهز لترتيب خطوتك التالية؟</span><h2>قل لنا ما تحتاج...<br /><em>ونظمها معك.</em></h2><p>خدمة، كورس، أداة أو ترخيص. ابدأ من نوع احتياجك واترك التفاصيل لنظام الطلب الذكي.</p><button className="primary-button" onClick={() => setOrder({ type: "service" })}>ابدأ طلبك عبر واتساب <ArrowLeft size={18} /></button></div>
        </section>
      </main>

      <footer>
        <div><Logo /><p>حلول أكاديمية، إبداعية ورقمية في مكان واحد.</p></div>
        <div className="footer-links"><a href="#services">الخدمات</a><a href="#store">المتجر الرقمي</a><a href="#how">كيف نعمل؟</a><a href="#contact">تواصل معنا</a></div>
        <div className="footer-contact"><span>واتساب</span><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">+966 59 794 6670</a><CircleDot size={18} /></div>
        <div className="copyright">© 2026 نظم للتقنية. جميع الحقوق محفوظة.</div>
      </footer>

      {order && <OrderModal initialOrder={order} onClose={() => setOrder(null)} />}
    </div>
  )
}
