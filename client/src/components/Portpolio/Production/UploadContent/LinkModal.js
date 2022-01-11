import React, {useState, useEffect, useRef} from 'react'

function LinkModal(props) {
    const [Link, setLink] = useState("");

    const ref = useRef();
    useOnClickOutside(ref, () => props.setLinkFlag(false));

    const LinkSubmit = (e) => {
        e.preventDefault();
        var expUrl = /^http[s]?\:\/\//i;
        if(!expUrl.test(Link)){
            return alert("URL 형식을 확인해주세요.")
        }
        let temp = [...props.LinkArr];
        console.log(temp)
        console.log(props.LinkFlag-1)
        temp[props.LinkFlag-1].value = Link;
        console.log(temp)
        props.setLinkArr([...temp]);
        props.setLinkFlag(false)
    }

    return (
        <div style={{position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", zIndex: "30", backgroundColor: "rgba(0, 0, 0, 0.3)",  display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div ref={ref} style={{backgroundColor: "white", padding: "20px", borderRadius: "15px", width: "50%", display: "flex", flexDirection: "column", outline: "none" }}>
                <input style={{ padding: "5px", border: "1px solid #acb0b4", borderRadius: "3px"}}
                type="text" value={Link} onChange={(e) => setLink(e.currentTarget.value)} onKeyDown={(e) => {if(e.keyCode === 13) LinkSubmit(e)}}/>
                <div style={{marginTop: "1rem", display: "flex", justifyContent: "flex-end"}}>
                    <button style={{marginRight: "1rem", borderRadius: "15px", padding: "5px 10px", border: "1px solid #c6c6c6", backgroundColor: "white"}}
                    onClick={(e) => {
                        e.preventDefault();
                        props.setLinkFlag(false);
                    }}>취소</button>
                    <button style={{borderRadius: "15px", padding: "5px 10px", border: "1px solid #c6c6c6", backgroundColor: "white"}}
                    onClick={(e) => LinkSubmit(e)}>등록</button>    
                </div>
            </div>
        </div>
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
  

export default LinkModal
