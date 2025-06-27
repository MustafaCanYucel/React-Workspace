import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from '../Components/Course'
import './css/Course.css';




function App() {

  return (
    <div className='body'>

      <Header />
    
    
     <div className='course-main'> {
    
        courses?.map((course)=>(
    <Course key={course.id} course ={ course}/>
   
        ))
      }
         

      </div>
    </div>
  )
}

export default App
{/*tanımlanan course componenti props olarak geçildi (2. yazılan course props name )
      key ile benzersiz dönüldü ve 3. yazılan course ile Course.jsx deki complemente rops olarak geçildi  */}
      
{/*Array olduğu için map ile her eleman tek tek dönüldü
    ? map dolu mu kontrol et demek */}