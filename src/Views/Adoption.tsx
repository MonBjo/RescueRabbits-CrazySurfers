import Header from "../components/Header";
import Footer from "../components/Footer";

import './adoption.scss'

const Adoption = () => {
    return(
        <>
        <Header/>
        
        <section className="info-flex-container">
            <article className="info-adopt">
                <h1>Att adoptera</h1>
                <p>Vår adoptions process är unik i sitt slag då vi gör en noga profilering av djuret och dess potentiellt nya familj.</p>
                <br></br>
                <p>Vi arbetar efter att få till den perfekta matchningen. 
                    Att adopterar är något man bör se mer största möjliga ansvar. Djur har känslor precis som oss
                    och skulle inte må bra av att man tar förhastade beslut i att skaffa ett husdjur. Så därför bör ni ha tänkt igenom ert beslut ordentligt innan 
                    ni tar er beslutet att skicka in en intresse anmälan till någon av våra djur. 
                    Se över er levnads situation och om ni har tiden och energin att lägga ner på att skaffa ett djur. Se över om det finns någon risk för allergi som 
                    ni kanske inte känner till. Allt detta är viktigt för att förhindra framtida 
                    omständigheter. Så länge ni tänker på detta så kan adoption vara ett undebart nytt äventyr som kan ta sin start hos oss 
                    här på Rescue Rabbits.Adoptions processen är snabb enkel och smidig. Vi börjar med ett enkelt fråge formulär som består av 20 frågor kring levnandssituation
                    osv. allt för matchningen med ett djur ska vara så exakt som möjligt.
                    Så tveka inte, hör av er till oss nu!  
                </p>
            </article>
            <article>
                <h3 className="title-review">
                Från andra som har adopterat djur
                </h3>
            </article>
            <article>
                <div className="reviews">
                    <p>ANNA</p>
                    <p>2022-08-14</p>
                    <br></br>
                    <p>Det har varit jättesmidigt att adoptera och det har gått sååå bra med allt. Min nya lilla kanin MrBun trivs sååå bra hemma hos mig och jag har fått hjälp med allt som MrBun kan tänkas behöva! TUSEN TACK!         
                    </p>
                </div>
                <div className="reviews">
                    <p>STEFAN</p>
                    <p>2021-01-04</p>
                    <br></br>
                    <p>Vi fann varandra vid första blicken sen dess har jag och min nya bästa kompis hunden "Ludde" haft många mysig och roliga stunder i skog och hemma framför TV´n. Tack Rescue Rabbits för er hjälp att få en ny bästa kompis på ålderns höst.        
                    </p>
                </div>
                <div className="reviews">
                    <p>GUNILLA</p>
                    <p>2019-12-14</p>
                    <br></br>
                    <p>
                     Vilken Julklapp dottern fick när vi fann den perfekta kissen, lyckan var total. Lilla "Temla" är så bra med dottern och sonen och lyfter upp livet med lite bus.        
                    </p>
                </div>
            </article>
        </section>
        <Footer />
        </>
    )
}

export default Adoption;