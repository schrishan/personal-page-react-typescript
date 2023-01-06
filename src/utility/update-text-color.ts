export const handleMouseMove = (event:any) => {
    let t = document.body.getBoundingClientRect();
    let n = Math.min((event.pageX - t.left) / t.width * 100, 85);
    let i = (event.pageY - t.top) / t.height * 100;
    event.target.setAttribute("style", `background:radial-gradient(${t.width/100*75}px at ${n}% ${i}%, rgba(0, 255, 255, 0.7), #0072CE, #1f1f1f);`);
  };
