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
      image: '/the-chinmaya-family/timetables/stem/year2/year2-cse.jpg',
    },
    {
      name: 'AIML',
      image: '/the-chinmaya-family/timetables/stem/year2/year2-aiml.jpg',
    },
    {
      name: 'Cyber Security',
      image: '/the-chinmaya-family/timetables/stem/year2/year2-cy.jpg',
    },
    {
      name: 'Data Science',
      image: '/the-chinmaya-family/timetables/stem/year2/year2-ds.jpg',
    },
    {
      name: 'ECE',
      image: '/the-chinmaya-family/timetables/stem/year2/year2-ece.jpg',
    },
    {
      name: 'BCA 1',
      image: '/the-chinmaya-family/timetables/stem/year2/year2-bca1.jpg',
    },
    {
      name: 'BCA 2',
      image: '/the-chinmaya-family/timetables/stem/year2/year2-bca2.jpg',
    },
  ],

  year3: [
    {
      name: 'CSE 1',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-cse1.jpg',
    },
    {
      name: 'CSE 2',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-cse2.jpg',
    },
    {
      name: 'CSE 3',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-cse3.jpg',
    },
    {
      name: 'AIML 1',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-aiml1.jpg',
    },
    {
      name: 'AIML 2',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-aiml2.jpg',
    },
    {
      name: 'Cyber Security',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-cy.jpg',
    },
    {
      name: 'Data Science',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-ds.jpg',
    },
    {
      name: 'ECE',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-ece.jpg',
    },
    {
      name: 'BCA 1',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-bca1.jpg',
    },
    {
      name: 'BCA 2',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-bca2.jpg',
    },
    {
      name: 'BCA 3',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-bca3.jpg',
    },
    {
      name: 'BCA 4',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-bca4.jpg',
    },
    {
      name: 'BSc Computer Science',
      image: '/the-chinmaya-family/timetables/stem/year3/year3-BScCS.jpg',
    },
  ],
