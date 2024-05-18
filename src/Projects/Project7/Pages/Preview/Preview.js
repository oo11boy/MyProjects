import React, { useEffect } from "react";
import UnderPreview from "../Create/Components/UnderPreview/UnderPreview";
import Tshirt from "../Create/Components/Tshirt/Tshirt";

export default function Preview(props) {
  const {
    itemselected,
    highlightedText,
    setCreateStep,
    setpreviewisdone,
    Tcolor,
    setTcolor,
  } = props;
  const gotoorderhandler = () => {
    setpreviewisdone(true);
    setCreateStep("order");
  };
  return (
    <div className="previewtshirt">
      <p className="tshirtdone">تیشرت اختصاصی شما آماده شد!</p>

      <UnderPreview itemselected={itemselected} />
      <Tshirt
        Tcolor={Tcolor}
        setTcolor={setTcolor}
        highlightedText={highlightedText}
        itemselected={itemselected}
      />
      <p onClick={gotoorderhandler} className="orderdone">
        سفارش
      </p>
    </div>
  );
}
