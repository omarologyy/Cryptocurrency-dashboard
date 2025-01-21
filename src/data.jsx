import React from 'react'

//icons
import { FaHome } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { RiPieChart2Fill } from 'react-icons/ri'
import { IoBarChart } from 'react-icons/io5'
import { SiBitcoinsv } from 'react-icons/si'
import { BsGear } from 'react-icons/bs'
import { IoMdHelpCircle } from 'react-icons/io'
import { CiLogout } from 'react-icons/ci'

//sideicons
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/user',
    text: 'User',
    icon: <FaCircleUser />,
  },
  {
    id: 3,
    url: '/portfolio',
    text: 'Portfolio',
    icon: <RiPieChart2Fill />,
  },
  {
    id: 4,
    url: '/stocks',
    text: 'Stocks',
    icon: <IoBarChart />,
  },
  {
    id: 5,
    url: '/cryptocurrency',
    text: 'Cryptocurrency',
    icon: <SiBitcoinsv />,
  },
  {
    id: 6,
    url: '/settings',
    text: 'Settings',
    icon: <BsGear />,
  },
  {
    id: 7,
    url: '/help',
    text: 'Help',
    icon: <IoMdHelpCircle />,
  },

  {
    id: 8,
    url: '/logout',
    text: 'Logout',
    icon: <CiLogout />,
  },
]
