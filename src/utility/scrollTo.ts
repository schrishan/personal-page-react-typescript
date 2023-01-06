export const scrollTo = (id: any) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth"});
  };