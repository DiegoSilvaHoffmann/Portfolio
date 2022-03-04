  //----- ScrollReveal --------
  
function aparecer(){
  const desliza = ScrollReveal({
    origin: 'center',
    duration: 2600,
    delay: 130,
  })
  desliza.reveal(".meu_nome", {origin: "center"})
  desliza.reveal(".menu", {origin: "left", distance: "160px"})
  desliza.reveal(".tecnologias", {origin: "center"})
  desliza.reveal("#ex_1", {origin: "left", distance: "160px"})
  desliza.reveal("#ex_2", {origin: "bottom", distance: "160px"})
  desliza.reveal("#ex_3", {origin: "right", distance: "160px"})

}