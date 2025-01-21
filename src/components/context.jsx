import { createContext, useContext, useState } from 'react'

const MyContext = createContext()

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <MyContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </MyContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(MyContext)
}
