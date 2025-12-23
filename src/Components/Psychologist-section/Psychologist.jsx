import PsychologistsCard from './Pschologist-card/PschologistCard';
import './Psychologist-section.scss'
import psychologist1 from '../../assets/images/pschologist-1.png'
import psychologist2 from '../../assets/images/pschologist-2.png'
import psychologist3 from '../../assets/images/pschologist-3.png'
import psychologist4 from '../../assets/images/pschologist-4.png'
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';

const psychologistList =[
    {
        image: psychologist1,
        name: 'Dr. Emily Carter',
        speciality: 'Anxiety & Stress'
    },
     {
        image: psychologist2,
        name: 'Michael Chen',
        speciality: 'Relationship Issues'
    },
    {
        image: psychologist3,
        name: 'Sarah Rodriguez',
        speciality: 'Depression &amp; Trauma'
    },
    {
        image: psychologist4,
        name: 'David Lee',
        speciality: 'Personal Growth'
    }
]

function Psychologists() {
    return( 
        <section>
            <Container>
                <div className="header">
                    <p className="first">Peşəkar</p>
                    <p>Psixoloqlar</p>
                </div>
                <SectionHeader title='Psixoloqlar' subtitle='Peşəkar'/>
                <div className='psychologists'>
                   {psychologistList.map((item)=> {
                     return <PsychologistsCard {...item}/>
                   })}
                </div>
            </Container>
        </section>
    )
}

export default Psychologists;