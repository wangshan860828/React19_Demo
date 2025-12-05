// import { useContext } from "react"
// import { ThemeContext } from "./ThemeContext"
import { useTheme } from "./useTheme"

export const GrandChild = () => {
    //方式一： 从 ThemeContext 中获取 theme 和 toggleTheme 函数
//     const {theme} = useContext(ThemeContext)
//   return (
//     <div>
//       <p>GrandChild-{theme}</p>
//     </div>
//   )

//方式二： 从 ThemeContext Consumer中获取 theme 和 toggleTheme 函数
// return (
//     <ThemeContext.Consumer>
//         {({theme}) => (
//             <div>
//                 <p>GrandChild：{theme}</p>
//             </div>
//         )}
//     </ThemeContext.Consumer>
// )

//方式三： 使用 useTheme 自定义 Hook 获取 theme
const theme = useTheme()
    return (
        <div>
            <p>GrandChild：{theme}</p>
        </div>
    )
    
}