import './MainPage.style.css'

export const MainPage = () => {
    return (
 <div className="main-page">   

        
    <div className='skills-container'>
        <h2>My Skills</h2>

        <div className='my-skills'>
        <ul className='skills-list'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>GIT</li>
        </ul>

        <div className='borders'>
            <div className="border">
                <div className='inside1'></div>
            </div>
            <div className="border">
                <div className='inside1'></div>
            </div>
            <div className="border">
                <div className='inside2'></div>
            </div>
            <div className="border">
                <div className='inside2'></div>
            </div>
            <div className="border">
                <div className='inside3'></div>
            </div>
            <div className="border">
                <div className='inside1'></div>
            </div>
        </div>
        </div>
    
       
    </div>

         <div className='main-page-experience'>
            <h2>Work experience</h2>
            With ReactNinjas Team during course. <br></br>
            For more still waiting.
         </div>

         <div className='main-page-courses'>
            <h2>Completed courses</h2>
            <p>Junior Front-end Developer course made by infoShareAcademy 240h with Git, HTML, CSS, JavaScript, HTTP, React and Scrum</p>
            
            <p>50h Free React Ninja courses on Youtube</p>

            <p>And lots of own worked hours in visual studio code</p>
         </div>
</div> 
    )
}