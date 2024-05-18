import React, { useState } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Spline from "@splinetool/react-spline";
import './HomeSec3.css'
import { MoonLoader } from 'react-spinners';

export default function HomeSec3() {
    const [expanded, setExpanded] = useState("panel1");
   
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : null);
    };
    const [isloaded,setisloaded]=useState('')
  return (
    <div className="homesec3">
    <p className="sec2shoptitle">سوالات متداول</p>
    <div id='ask' className="contenthomesec3">
      <div className='img3d' style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", width: "50%", height: 400 }}>
        <Spline style={{ backgroundColor: "#2e2e35"}} onLoad={()=>setisloaded(true)} scene="https://prod.spline.design/wFcQjArXbQnvmxJo/scene.splinecode" />
      {isloaded==false && <div className='loadingimg3d'>   <MoonLoader color="#ffffff" size={40} /></div>
}</div>
      <div className="asksechome3">
        <Accordion
          style={{ backgroundColor: "#2e2e35" }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          چگونه می‌توانم یک طرح موسیقی دلخواه را بر روی تیشرتم چاپ کنم؟
          </AccordionSummary>
          <AccordionDetails>
          برای چاپ طرح موسیقی دلخواه بر روی تیشرت، ابتدا موزیک و متن دلخواه از موزیک را انتخاب کرده و پس از مشاهده نتیجه میتوانید تیشرت را سفارش دهید.
           </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
        چقدر زمان می‌برد تا تیشرت شخصی‌سازی شده من آماده شود؟
          </AccordionSummary>
          <AccordionDetails>
          زمان لازم برای آماده‌سازی تیشرت شخصی‌سازی شده ممکن است متغیر باشد و بسته به مغازه یا خدمات چاپ تیشرتی که انتخاب می‌کنید، متفاوت باشد. اما بعضی از خدمات چاپ تیشرت آنلاین ممکن است یک یا دو هفته زمان ببرد تا تیشرت شما آماده و ارسال شود.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
         آیا امکان انتخاب اندازه و رنگ تیشرت وجود دارد؟
          </AccordionSummary>
          <AccordionDetails>
          بله، بسته به محل خرید، شما می‌توانید اندازه و رنگ مورد نظر خود را انتخاب کنید. برخی از خدمات چاپ تیشرت آنلاین امکان انتخاب اندازه و رنگ را در فرم سفارش فراهم می‌کنند.
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
         آیا می‌توانید به من بگویید که چه نوع موادی برای چاپ تیشرت استفاده می‌شود؟
          </AccordionSummary>
          <AccordionDetails>
          بله، برای چاپ تیشرت‌ها از انواع مختلفی از مواد استفاده می‌شود، اما معمولاً از موادی مانند پنبه یا پلی‌استر استفاده می‌شود که محصول نهایی آن نرم و راحت باشد و همچنین قابلیت نفوذ هوا را داشته باشد.
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
        آیا می‌توانم طرح خود را برای تیشرتم سفارشی کنم؟
          </AccordionSummary>
          <AccordionDetails>
          بله، شما می‌توانید طرح خود را برای تیشرت خود سفارشی کنید. برای این کار، تصویر یا طرح مورد نظر خود را به فرمت مناسب آماده کرده و سپس از خدمات چاپ تیشرت آنلاین یا مغازه‌های محلی استفاده کنید.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  </div>
  )
}
