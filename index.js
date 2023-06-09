// import React from 'react'
// import ReactDOM from 'react.dom'
// function MainContent(){
//     return(
//         <h1>I am learning react</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent/>
//     </div>, document.getElementById('root')
// )

//ReactDOM.render(<h1>hello</h1>, document.getElementById('root'))

const page = (
    <div className="header">
        <img src="React-icon.svg.png" width="40px"/>
        <h1>Fun facts about react</h1>
        <ul>
            <li>Was released in 2013</li>
            <li>Was originally created by jordan walke</li>
            <li>He well over 100k stars on github</li>
            <li>Is maintained by github</li>
            <li>power thousands of entreprise apps, including mobile apps</li>
        </ul>
    </div>
)
ReactDOM.render(page, document.getElementById('root'))