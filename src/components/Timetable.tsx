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

export default function Timetable({ school, onBack }: Props) {
  const [year, setYear] = useState<Year | null>(null)

  const [selectedCourse, setSelectedCourse] = useState<{
    name: string
    image: string
  } | null>(null)

  // Timetables are currently available for STEM only.
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

  // Display the selected course timetable.
  if (selectedCourse) {
    return (
      <main className="min-h-screen bg-[#F7F5F0] px-4 pb-10 pt-6 text-[#14213D] sm:px-6">
        <Header
          eyebrow="Timetable"
          title={selectedCourse.name}
          onBack={() => setSelectedCourse(null)}
        />

        <section className="mx-auto mt-7 max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(20,33,61,0.06)]">
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">
                <CalendarIcon />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold text-[#14213D]">
                  {selectedCourse.name}
                </p>
