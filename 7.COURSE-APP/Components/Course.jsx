import React from 'react'

function Course({course}) {
    const{id,title,description,price,link,image} = course;
    {/* destructing ile açtık aşağıda tek tek uğraşmamak için */}
  return (
        <div className="course-card">

    <div classname = 'course'>
        <div className='course'>
            <img src ={image} width={300} height={150} />
            <h4 className='course-title'>{title}</h4>
            <h5 className='course-desc'>{description}</h5>
            <h3 className='course-price'>{price}£</h3>
            <div className='course-link'><a  href={link}>Satın Almak İçin</a></div>
        </div>
    </div>
            </div>

  )
}

export default Course