          <button
            onClick={() => setYear('year3')}
            className="group flex min-h-[90px] w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:border-[#C9A24D] hover:shadow-md active:scale-[0.99]"
          >

            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#14213D] text-sm font-bold text-[#C9A24D]">
              03
            </span>


            <span className="min-w-0 flex-1">

              <span className="block text-base font-bold text-[#14213D]">
                Year 3
              </span>

              <span className="mt-1 block text-xs text-slate-400">
                {courses.year3.length} courses available
              </span>

            </span>


            <span className="shrink-0 text-xl text-[#C9A24D] transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>

          </button>

        </div>

      </section>


      <footer className="mx-auto mt-10 max-w-2xl border-t border-slate-200 pt-5 text-center">

        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C9A24D]">
          CVV Academic Pulse
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          Academic schedules, connected.
        </p>

      </footer>

    </main>
  )
}


/* =====================================================
   HEADER
===================================================== */

function Header({
  eyebrow,
  title,
  onBack,
}: {
  eyebrow: string
  title: string
  onBack: () => void
}) {
  return (
    <header className="mx-auto flex max-w-2xl items-center gap-4">

      <button
        onClick={onBack}
        aria-label="Go back"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#14213D] shadow-sm transition-all duration-200 hover:border-[#C9A24D] active:scale-95"
      >

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>

      </button>


      <div className="min-w-0">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
          {eyebrow}
        </p>

        <h1 className="mt-0.5 truncate text-xl font-bold text-[#14213D]">
          {title}
        </h1>

      </div>

    </header>
  )
}


/* =====================================================
   CALENDAR ICON
===================================================== */

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="17"
        rx="2"
      />

      <path d="M16 2v4M8 2v4M3 10h18" />
