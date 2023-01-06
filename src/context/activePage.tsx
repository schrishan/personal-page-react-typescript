import React, {useState, createContext} from "react";

export type ActivePage ={
name:string
}

type SeletedPageContextType = {
    page:ActivePage | null
    setPage:React.Dispatch<React.SetStateAction<ActivePage | null>>
}

type SeletedPageContextProviderProps = {
    children: React.ReactNode
}

export const SeletedPageContext = createContext({} as SeletedPageContextType)

export const SeletedPageContextProvider = ({children}: SeletedPageContextProviderProps)=> {
    const [page, setPage] = useState<ActivePage|null>(null)
    return (
        <SeletedPageContext.Provider value={{page, setPage}}>
            {children}
        </SeletedPageContext.Provider>
    )
}