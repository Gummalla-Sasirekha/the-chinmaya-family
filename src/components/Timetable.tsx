import { useState } from 'react'
import type { School } from '../types'

type Props = {
  school: School
  onBack: () => void
}

type Year = 'year2' | 'year3'

const courses = {
  year2: [
    {
      name: 'CSE',
      image: import.meta.env.BASE_URL + 'timetables/stem/year2/year2-cse.jpg',
    },
    {
      name: 'AIML',
      image: import.meta.env.BASE_URL + 'timetables/stem/year2/year2-aiml.jpg',
    },
    {
      name: 'Cyber Security',
      image: import.meta.env.BASE_URL + 'timetables/stem/year2/year2-cy.jpg',
    },
    {
      name: 'Data Science',
      image: import.meta.env.BASE_URL + 'timetables/stem/year2/year2-ds.jpg',
    },
    {
      name: 'ECE',
      image: import.meta.env.BASE_URL + 'timetables/stem/year2/year2-ece.jpg',
    },
    {
      name: 'BCA 1',
      image: import.meta.env.BASE_URL + 'timetables/stem/year2/year2-bca1.jpg',
    },
    {
      name: 'BCA 2',
      image: import.meta.env.BASE_URL + 'timetables/stem/year2/year2-bca2.jpg',
    },
  ],

  year3: [
    {
      name: 'CSE 1',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-cse1.jpg',
    },
    {
      name: 'CSE 2',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-cse2.jpg',
    },
    {
      name: 'CSE 3',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-cse3.jpg',
    },
    {
      name: 'AIML 1',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-aiml1.jpg',
    },
    {
      name: 'AIML 2',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-aiml2.jpg',
    },
    {
      name: 'Cyber Security',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-cy.jpg',
    },
    {
      name: 'Data Science',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-ds.jpg',
    },
    {
      name: 'ECE',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-ece.jpg',
    },
    {
      name: 'BCA 1',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-bca1.jpg',
    },
    {
      name: 'BCA 2',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-bca2.jpg',
    },
    {
      name: 'BCA 3',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-bca3.jpg',
    },
    {
      name: 'BCA 4',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-bca4.jpg',
    },
    {
      name: 'BSc Computer Science',
      image: import.meta.env.BASE_URL + 'timetables/stem/year3/year3-BScCS.jpg',
    },
  ],
}

export default function Timetable({
  school,
  onBack,
}: Props) {
  const [year, setYear] = useState<Year | null>(null)

  const [selectedCourse, setSelectedCourse] = useState<{
    name: string
    image: string
  } | null>(null)


  /* =====================================================
     NON-STEM
  ===================================================== */

  if (school.id !== 'stem') {
    return (
      <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-6 text-[#14213D] sm:px-6">

        <Header
          eyebrow="Academic Schedule"
          title="Timetable"
          onBack={onBack}
        />

        <section className="mx-auto mt-10 max-w-2xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14213D] text-[#C9A24D]">
              <CalendarIcon />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#14213D]">
              Timetable unavailable
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Timetables are currently available for the School of Science,
              Technology, Engineering and Mathematics.
            </p>

          </div>

        </section>

      </main>
    )
  }


  /* =====================================================
     ACTUAL TIMETABLE
  ===================================================== */

  if (selectedCourse) {
    return (
      <main className="min-h-screen bg-[#F7F5F0] px-4 pb-10 pt-6 text-[#14213D] sm:px-6">

        <Header
          eyebrow="Timetable"
          title={selectedCourse.name}
          onBack={() => setSelectedCourse(null)}
        />


        <section className="mx-auto mt-7 max-w-4xl">

          {/* Timetable Card */}

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(20,33,61,0.06)]">

            {/* Card Header */}

            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">
                <CalendarIcon />
              </div>

              <div className="min-w-0">

                <p className="text-sm font-bold text-[#14213D]">
                  {selectedCourse.name}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Weekly timetable
                </p>

              </div>

            </div>


            {/* ================= IMAGE VIEWER ================= */}

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


              {/* Hint */}

              <div className="mt-3 flex items-center justify-center gap-2">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4 text-[#C9A24D]"
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


        {/* Footer */}

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
     COURSE SELECTION
  ===================================================== */

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


                <span className="shrink-0 text-lg text-[#C9A24D] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>

              </button>

            ))}

          </div>

        </section>

      </main>
    )
  }


  /* =====================================================
     YEAR SELECTION
  ===================================================== */

  return (
    <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-6 text-[#14213D] sm:px-6">

      <Header
        eyebrow="Academic Schedule"
        title="Timetable"
        onBack={onBack}
      />


      <section className="mx-auto mt-8 max-w-2xl">

        <p className="text-sm leading-6 text-slate-500">
          Choose your academic year to view the available courses and
          timetables.
        </p>


        <div className="mt-7 space-y-3">

          {/* Year 2 */}

          <button
            onClick={() => setYear('year2')}
            className="group flex min-h-[90px] w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:border-[#C9A24D] hover:shadow-md active:scale-[0.99]"
          >

            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#14213D] text-sm font-bold text-[#C9A24D]">
              02
            </span>


            <span className="min-w-0 flex-1">

              <span className="block text-base font-bold text-[#14213D]">
                Year 2
              </span>

              <span className="mt-1 block text-xs text-slate-400">
                {courses.year2.length} courses available
              </span>

            </span>


            <span className="shrink-0 text-xl text-[#C9A24D] transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>

          </button>


          {/* Year 3 */}

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

      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  )
}
