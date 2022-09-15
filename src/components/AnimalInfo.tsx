import './animalinfo.scss'
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import AnimalForm from './AnimalForm';


const AnimalInfo = () =>{
    
    //to give state a proper type so it doesnt show error
    type LocationProps = {
        state: {
            animal: Location;
        };
    };
    const { state } = useLocation() as LocationProps;
    
    const animal = state.animal;
    
    let animalArray: any[] = [];
    
    animalArray.push(animal);
    
    // animalArray.map(animal =>{

    //     if (animal.booked == true) {
    //         animal.booked = 'Ja'
    //     }
        
    //     if (animal.booked == false) {
    //         animal.booked = 'Nej'  
    //     }  
    // })

    function checkIfBooked(){
        if(animalArray[0].booked) {
            return "Ja";
        } else {
            return "Nej";
        }
    }
    function displayForm(){
        if(animalArray[0].booked) {
            return (
                <section className='form-container'>
                    <h2>Intresseanmälan</h2>
                    <p>{animalArray[0].name} är redan bokad men det finns många andra djur att välja på.</p>
                </section>
            );
        } else {
            return <AnimalForm />;
        }
    }
    
    return(
        <>
           <Header />
            <section className="animal-info">
                {animalArray.map(animal => ( 
                    <section className="animal-card" key={animal.animalId}>
                        <div className="animal-img">
                            <h2>{animal.name}</h2>
                            <img src={animal.img} alt="" />
                        </div>
                        <div className="animal-desc">
                            <h3>OM</h3>
                            <p>{animal.description}</p>
                        </div>
                        <table className="animal-stats">
                            <tbody>
                            <tr>
                                <td>Kön:</td>
                                <td className='stats-value'>{animal.gender}</td>
                            </tr>
                            <tr>
                                <td>Ålder:</td>
                                <td className='stats-value'>{animal.born}</td>
                            </tr>
                            <tr>
                                <td>Plats:</td>
                                <td className='stats-value'>{animal.location}</td>
                            </tr>
                            <tr>
                                <td>Typ:</td>
                                <td className='stats-value'>{animal.type}</td>
                            </tr>
                            <tr>
                                <td>Kom till oss:</td>
                                <td className='stats-value'>{animal.arrival}</td>
                            </tr>
                            <tr>
                                <td>Bokad:</td>
                                <td className='stats-value'>{checkIfBooked()}</td>
                            </tr>
                        </tbody>
                        </table>
                        
                    </section>  
                ))}
                    
                <div className='arrow'>
                    <div className='arrow-shape'></div>
                </div>
                {displayForm()}
            </section>
           <Footer />
        </>
    )
}

export default AnimalInfo;