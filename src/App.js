import './App.css';
import { BulletinBoard } from "./components/BulletinBoard";
import { Header } from './components/BulletinBoard';

function App() {

  let data = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: "React är intuitivt, flexibelt och har en snabb utvecklingsprocess. React JS hjälper till att skapa enkel och intuitiv kod så att du kan undvika oförutsägbara scenarier. Biblioteket erbjuder kraftfull tillstånds-, action- och händelsehantering. Den modulära strukturen hos ReactJS gör det till ett av de bästa flexibla verktygen som finns. Detta gör det lättare att underhålla, vilket sparar mycket utvecklingstid. Utvecklare kan öka sin utvecklingsprocess eftersom de kan använda enskilda delar av applikationen och göra ändringar i den, utan att påverka hela applikationens logik. Detta ökar utvecklingsprocessen flera gånger om." 
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en vanlig webbplats?",
      answer: "Hos en SPA aka Singel Page Application hämtas filen endast en gång. Filen används genom hela besöket. Du kan klicka dig runt på sidan och webbläsaren ändrar endast det som är nödvändigt med filen som hämtades från början. Vilket gör sidan snabbare än klassiska hemsidor. De tre mest populära biblotek för SPA är React, Vue och Angular"
    },    
    {
      question: "Nämn tre skillnader mellan React och Angular",
      answer: "React är ett bibliotek som skapat av Facebook, React använder sig utav andra biblotek/moduler och skapar en virtuell DOM med massa komponenter. på detta vis är react väldigt flexibelt. Angular är skapat av google och är inte riktigt ett biblotek utan ett ramverk, där med inte lika flexibelt som react då react inte behöver förhålla sig till ett ramverk. Angular använder sig inte utav en virtuell DOM utan en Traditionell DOM. Angular kan hantera two-way binding, vilket betyder att appar byggda med angular kan bli riktigt komplexa och tunga. React hanterar bara one-way data binding men det bytder inte att React inte kan vara komplext eller tungt. "
    }
  ];


  return (
    <>
      <div className="App App-header">
        <Header/>
      </div>
      
      <div className="App App-main">
        <BulletinBoard posts={data} />
      
      </div>
    </>
  );
}

export default App;
