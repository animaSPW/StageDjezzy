/**
 * for the views and components styling
 * -- avoid inline styles
 * -- put the styles in a different file (you can use another method, it just needs to be clean and readable)
 * -- don't use color literals
 * 
 * for the typing in views and components
 * -- use proptypes to define the types of the variables
 * 
 * general advice
 * -- use functional components not class components
 * -- use react hooks (useState, useEffect, useMemo)
 * -- use redux for global state management (even if you use it only to store the location, the goal is to understand its usefullness)
 * -- you can use plugins like eslint to define clean code rules (indentation, proptypes, inline styles, color literals, prettier..)
 * -- constantly check and correct the errors in the devtools
 */

import useViewModel from "../viewModels/WeatherVM";

export default function WeatherPage() {
    const { fetchData } = useViewModel();

    return (
        <div>
            This is the weather page
        </div>
    )
}