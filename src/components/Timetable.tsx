
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Weekly timetable
                </p>
              </div>
            </div>

            <div className="bg-[#F7F5F0] p-3 sm:p-5">
              <div className="overflow-x-auto overflow-y-hidden rounded-2xl border border-slate-200 bg-white shadow-inner">
                <div className="flex min-w-max justify-center p-3 sm:p-5">
                  <img
                    src={selectedCourse.image}
                    alt={`${selectedCourse.name} timetable`}
                    className="block h-auto w-[900px] max-w-none rounded-lg object-contain"
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4 text-[#C9A24D]"
                  aria-hidden="true"
                >
                  <path d="M8 5v14M16 5v14" />
                  <path d="m5 8 3-3 3 3M13 16l3 3 3-3" />
                </svg>
                <p className="text-[10px] font-medium text-slate-400">
                  Swipe horizontally to view the full timetable
                </p>
              </div>
            </div>
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

  if (year) {
    return (
      <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-6 text-[#14213D] sm:px-6">
        <Header
          eyebrow="Step 2 of 2"
          title="Choose your course"
          onBack={() => setYear(null)}
        />

        <section className="mx-auto mt-7 max-w-2xl">
          <p className="text-sm leading-6 text-slate-500">
            Select your course to view the timetable.
          </p>

          <div className="mt-6 space-y-3">
            {courses[year].map((course, index) => (
              <button
                key={course.name}
                onClick={() => setSelectedCourse(course)}
                className="group flex min-h-[72px] w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:border-[#C9A24D] hover:shadow-md active:scale-[0.99]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14213D] text-xs font-bold text-[#C9A24D]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold text-[#14213D]">
                    {course.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-slate-400">
                    View timetable
                  </span>
                </span>
                <span className="shrink-0 text-lg text-[#C9A24D]">
                  →
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-6 text-[#14213D] sm:px-6">
      <Header
        eyebrow="Academic Schedule"
        title="Timetable"
        onBack={onBack}
      />

      <section className="mx-auto mt-8 max-w-2xl">
        <p className="text-sm leading-6 text-slate-500">
          Choose your academic year to view the available courses and timetables.
        </p>

        <div className="mt-7 space-y-3">
          <button
            onClick={() => setYear('year2')}
            className="group flex min-h-[90px] w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] hover:border-[#C9A24D]"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#14213D] text-sm font-bold text-[#C9A24D]">
              02
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-bold">Year 2</span>
              <span className="mt-1 block text-xs text-slate-400">
                {courses.year2.length} courses available
              </span>
            </span>
            <span className="text-xl text-[#C9A24D]">→</span>
          </button>

          <button
            onClick={() => setYear('year3')}
            className="group flex min-h-[90px] w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] hover:border-[#C9A24D]"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#14213D] text-sm font-bold text-[#C9A24D]">
              03
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-bold">Year 3</span>
              <span className="mt-1 block text-xs text-slate-400">
                {courses.year3.length} courses available
              </span>
            </span>
            <span className="text-xl text-[#C9A24D]">→</span>
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
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#14213D] shadow-sm hover:border-[#C9A24D]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
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
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  )
}
