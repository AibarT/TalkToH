import { createContext, useContext, useState } from "react"

function UseContext(){
    return(
        <GrandParent/>
    )
}

const ToyContext = createContext()
const ThemeContext = createContext()
const LangContext = createContext()

function GrandParent(){
    const [toy, setToy] = useState('ball')
    const [theme, setTheme] = useState('white')
    const [lang, setLang] = useState('eng')
    return(

        <ThemeContext.Provider value={theme}>
        <ToyContext.Provider value={toy}>
        <LangContext.Provider value={{lang, setLang

        }} >    
            <Parent/>
        </LangContext.Provider>
        </ToyContext.Provider>
        </ThemeContext.Provider>

    )
}

function Parent(){
    return(
        <Child/>
    )
}

function Child(){
    const toy = useContext(ToyContext)
    const theme = useContext(ThemeContext)
    const lang = useContext(LangContext)
    return(
        <div style={{backgroundColor: theme}}>{lang.lang === 'eng' ? 'My toy:': lang.lang === 'rus' ? 'Моя игрушка: ': 'Менің ойыншығым:'} {toy}
        <select onChange={(e)=>lang.setLang(e.target.value)}>
        <option value="rus">rus</option>
        <option value="eng">eng</option>
        <option value="kaz">kaz</option>
        </select> 
        </div>
    )
}

export default UseContext