"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-slate-50 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl"
      >
        {/* أيقونة الخطأ */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 shadow-inner animate-pulse">
            <AlertTriangle size={40} strokeWidth={1.8} />
          </div>
        </div>

        {/* رقم الخطأ */}
        <h1 className="mb-2 text-6xl font-black tracking-wider text-slate-900">
          404
        </h1>

        {/* العنوان */}
        <h2 className="mb-3 text-2xl font-bold text-slate-800">
          الصفحة غير موجودة
        </h2>

        {/* الوصف */}
        <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-slate-500">
          عذرًا، يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها، أو أن
          الرابط الذي أدخلته غير صحيح.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:shadow-lg sm:w-auto"
          >
            <Home size={18} />
            <span>الرئيسية</span>
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-200 sm:w-auto"
          >
            <ArrowLeft size={18} />
            <span>العودة للخلف</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

