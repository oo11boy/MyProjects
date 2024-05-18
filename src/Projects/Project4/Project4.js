
import { useEffect, useMemo, useRef, useState } from "react";
import "./Project4.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, CircularProgress } from "@mui/material";
import AlertSuccess from "../../Componets/AlertSuccess";
import PInfo from "../../Componets/PInfo";
import { Link } from "react-router-dom";
import { TourP4step } from "./TourP4step";
export default function Project4() {

  const [notetext, setNotetext] = useState("");
  const [noteId, setNoteId] = useState(1); 
  const [listnote, setListnote] = useState([]);
  const [typenote,settypenote]=useState('all')
const [filternotes,setfilternotes]=useState([])

  const submithandler = (e) => {
    e.preventDefault();
    if (!notetext) {
      return;
    }
    const newNote = {
      id: noteId,
      text: notetext,
      checked:false
    };
    setListnote([...listnote, newNote]);
    setNotetext("");
    setNoteId(noteId + 1);

    setaddalert(true)
    settextalert('با موفقیت اضافه شد.')
  };

  const [ addalert, setaddalert]=useState(false)
  const [textalert,settextalert]=useState('')

  const checkedhandler=(event,id)=>{
  
  
    const isChecked = event.currentTarget.checked;
    const updatedListNote =   listnote.map((item) => {
    
      if (item.id === id) {
        item.checked = isChecked
      }
      if(item.checked){
        setaddalert(true)
        settextalert('وضعیت به کامل شده تغییر یافت')
      }else{
        setaddalert(true)
        settextalert('وضعیت به کامل نشده تغییر یافت')
      }
      return item;

    });
 setListnote(updatedListNote);

  }
  const itemtodoref = useRef(null); // Ensure proper initialization with null



useEffect(()=>{
  if(typenote=="completed"){
    const findcompletes=listnote.filter((item)=>item.checked==true)
    setfilternotes(findcompletes)
  }else if(typenote=="uncompleted"){
    const finduncompletes=listnote.filter((item)=>item.checked==false)
    setfilternotes(finduncompletes)
  }else{
    setfilternotes(listnote)
  }

},[typenote,listnote])


  const memolistnotes = useMemo(
    () =>
    filternotes.map((note) => {
        return (
          <li
            className="animationtodo"
            key={note.id}
            ref={itemtodoref}
          >
            <p> {note.text}</p>
            <div style={{display:"flex",alignItems:"center"}}>

              
           <Checkbox checked={note.checked} onChange={(event)=>checkedhandler(event,note.id)}  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 ,color:"white"} }} />
              <DeleteIcon style={{cursor:"pointer"}}  onClick={() => deleteitem(note.id)} />
          
            </div>
          </li>
        );
      }),
    [filternotes]
  );

  const deleteitem = (id) => {
  

    setTimeout(() => {
      const deleteit = listnote.filter((item) => item.id !== id);
      setListnote(deleteit);
    }, 1000);
    }



  return (
    <div style={{ direction: "rtl" }} className={listnote.length >0 ?"todolist":"todolist justify-center"}>
        <div className="bginsert">
      <AlertSuccess text={textalert} setaddalert={setaddalert} addalert={addalert} />
    
      <div className="texttopp4" style={{fontFamily:"vazir",margin:"10px",fontSize:"50px"}}>نوت برداری آنلاین</div>
      <div className={listnote.length > 0 ? "todoinsertanim todoinsert":"todoinsert"}>
     
        <div style={{width:"20%",position:"relative",height:"100%"}}>
    {useMemo(()=>{
return  <select onChange={(e)=>settypenote(e.target.value)} name="todos" class='filter-todos'>
        <option value="all">همه</option>
        <option value="completed">کامل شده</option>
        <option value="uncompleted">کامل نشده</option>
      </select>
},[typenote])}
      </div>
        <form onSubmit={submithandler} style={{width:"80%",position:"relative",height:"100%"}}>
          
        <input
          value={notetext}
          onChange={(e) => setNotetext(e.target.value)}
          type="text"
          style={{fontFamily:"vazir"}}
          placeholder="متن مورد نظر را وارد کنید"
        />
        <p onClick={submithandler} className="addtodo">+</p>
        </form>
      
      </div>
     
      {listnote.length > 0 && (
      
       
          <ul  className="notelist">{memolistnotes}</ul>
       
        
      )}
    </div>
    <PInfo steps={TourP4step}/>
    <Link style={{backgroundColor:"white",padding:"10px",borderRadius:"15px",color:"black"}} className="linkback" to={'../'}>رفتن به صفحه اصلی</Link>
    </div>
  );
}
