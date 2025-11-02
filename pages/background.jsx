import { useState } from "react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import Edu_Card from "../components/Background/Edu_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {
  const [boldAll, setBoldAll] = useState(false);
  const router = useRouter();
  const { isLoading, error, data } = useQuery("background", () =>
    axios
      .get("api/background")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching background:", error))
  );

  const eduCards = data?.[0]?.eduCards ?? [];

  return (
    <BannerLayout>
      <div className="min-h-screen flex items-center justify-center relative px-4 py-16">
        {/* Back button (top-left) */}
        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          aria-label="Go back"
          className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/6 border border-white/8 text-Snow hover:bg-white/10 transition-shadow shadow-sm"
        >
          <BsArrowLeft className="text-lg" />
          <span className="hidden sm:inline text-sm font-medium">Back</span>
        </button>

        {/* Decorative gradient blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-yellow-400/30 to-pink-500/20 filter blur-3xl opacity-60 animate-blob"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-600/20 filter blur-3xl opacity-50 animate-blob animation-delay-2000"
        />

        <div className="relative z-10 w-full max-w-4xl">
          <header className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-Snow">
              Education
            </h1>
            <p className="mt-2 text-sm text-LightGray max-w-xl mx-auto">
              A snapshot of formal training and qualifications — concise and
              focused.
            </p>
          </header>

          <main className="space-y-6">
            {isLoading
              ? [1, 2, 3].map((i) => (
                  <div key={i} className="mx-auto">
                    <ParagraphSkeleton className={"p-6 w-full max-w-2xl"} />
                  </div>
                ))
              : eduCards.length > 0
              ? eduCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="mx-auto w-full max-w-2xl"
                    onMouseEnter={() => setBoldAll(true)}
                    onMouseLeave={() => setBoldAll(false)}
                  >
                    <Edu_Card data={card} bold={boldAll} />
                  </div>
                ))
              : (
                <div className="text-center text-LightGray">
                  No education records found.
                </div>
              )}
          </main>
        </div>

        <style>{`
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(20px, -30px) scale(1.05); }
            66% { transform: translate(-20px, 20px) scale(0.95); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}</style>
      </div>

      <Footer />
    </BannerLayout>
  );
}

export default Background;
