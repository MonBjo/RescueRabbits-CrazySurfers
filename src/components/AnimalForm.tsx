import './animalform.scss'
import  { useState } from 'react';
import { useNavigate } from 'react-router'
import Modal from './Modal';



const AnimalForm = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [openModal, setOpenModal] = useState(false)
    let infoArray: any[] = [];
    
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        infoArray.push(fullName);
        console.log(infoArray);
        {setOpenModal(true)}
    }
    return(

        <section className="form-container">
            <form className='animal-form' onSubmit={submitForm}>
                <h2>Intresseanmälan</h2>
                <label className='frm-label' htmlFor="fullName">För och efternamn *</label>
                <input className='frm-input' type="text" id='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder='Adam Svensson' />

                <label  className='frm-label' htmlFor="phone">Telefonnummer *</label>
                <input className='frm-input' type="text" id='phone' name='phone' required maxLength={10} minLength={10} placeholder='0788228822'/>

                <label className='frm-label' htmlFor="email">E-post *</label>
                <input className='frm-input' type="email" id='email' name='email' required  placeholder='exempel@hotmail.com'/>

                <label className='frm-label' htmlFor="currentAnimalInfo">Nuvarande djur i hemmet</label>
                <textarea className='frm-textarea' name="" id="currentAnimalInfo" cols={30} rows={5} ></textarea>

                <label className='frm-label' htmlFor="currentHomeInfo">Hem och familjesituation</label>
                <textarea className='frm-textarea' name="" id="currentHomeInfo" cols={30} rows={10} placeholder='Hur stor är eran familj, småbarn? Bor ni i hus eller lägenhet, har ni uteplats eller balkong? osv'></textarea>

                <button className='submit-btn'>Skicka in</button>
            </form>
            {openModal && <Modal username={fullName} closeModal={setOpenModal}/>}
        </section>
    )
}

export default AnimalForm;