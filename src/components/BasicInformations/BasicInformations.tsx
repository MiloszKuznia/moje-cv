import myimg from '../BasicInformations/miloszphoto.jpg'
import gitimg from '../BasicInformations/gitimg.jpg'
import homeimg from '../BasicInformations/homeimg.png'
import callimg from '../BasicInformations/callimg.png'
import mailimg from '../BasicInformations/mailimg.png'
import './BasicInformations.style.css'
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';



export const BasicInformations = () => {
    
        const myName = (
            <div className='first-block'>
            <ul className="my-name">
                <li>Milosz Kuznia</li>
                <li>Junior Frontend Developer</li>
            </ul>
            <div className="my-photo">
            <img className='my-photo' src={myimg}/>
             </div>
             </div>
            )

       

        const myInformations = (
            <ul className='second-block'>
                <li> <img src={homeimg} className="my-icons"/>Gdańsk</li>
                <li> <img src={callimg} className="my-icons"/> 693-064-429</li>
                <li> <img src={mailimg} className="my-icons"/> miloszkuznia@gmail.com</li>
                <li> <img src={gitimg} className="my-icons-git"/> <a href="https://github.com/MiloszKuznia">https://github.com/MiloszKuznia</a></li>
            </ul>
        )    

        

            
    return (
        <div className="basic-informations">
              <Grid sx={{
            mt: 20
        }} container>
            <Grid item xs>
                {myName}
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item xs>
                {myInformations}
            </Grid>
            </Grid>
            <Divider></Divider>
        </div>
    )
}
