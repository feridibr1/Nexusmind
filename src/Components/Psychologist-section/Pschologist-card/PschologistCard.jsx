import './PschologistCard.scss'

function PsychologistsCard({children, image, name, speciality}) {


    return( 
        <div className="card-container">
            <img src={image} alt="pschologist's image" className="psychologist-image"/>
            <h3 className='psychologist-name'>{name}</h3>
            <p className='psychologist-speciality'>{speciality}</p>
        </div>
    )
}

export default PsychologistsCard;