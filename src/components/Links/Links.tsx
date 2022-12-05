import certyfikat from '../Links/certyfikat.jpg'
import './Links.style.css'

export const Links = () => {
    return (
        <div className="links-container">
            <div className="git-hub">
                <h2>Aplications with ReactNinjas Team</h2>
                <a href="https://github.com/infoshareacademy/jfddr7-team-react-ninjas">https://github.com/infoshareacademy/jfddr7-team-react-ninjas</a> <br />
                <a href="https://github.com/rajmanski/BookShare">https://github.com/rajmanski/BookShare</a>

                <h2>Certificate</h2>
                <img className='my-certificate' src={certyfikat}/>

            </div>
        </div>
    )
}