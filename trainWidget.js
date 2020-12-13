// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: user-md;
// 
const stazioneOrigine = "S01700"
const treno = "2055"
const url = `http://www.viaggiatreno.it/viaggiatrenonew/resteasy/viaggiatreno/andamentoTreno/${stazioneOrigine}/${treno}`
const req = new Request(url, {method:"GET","headers": {
    "Content-Type": "application/json"
  }})
const res = await req.loadJSON()

if (config.runsInWidget) {
  // create and show widget
  let widget = createWidget(`${res.compTipologiaTreno} ${treno} con partenza da ${res.origine} alle ${res.compOrarioPartenza} binario ${res.fermate[0].binarioEffettivoPartenzaDescrizione}`, `attualmente a ${res.stazioneUltimoRilevamento}`, `arrivo a ${res.destinazione} alle ${res.compOrarioArrivo} ${res.compRitardoAndamento[0]}` , "#151915")
  Script.setWidget(widget)
  Script.complete()
} else {
  // make table
  let table = new UITable()
  
  // add header
  let row = new UITableRow()
  row.isHeader = true
  row.addText(`Informazioni per il treno ${treno}`)
  table.addRow(row)
  
  // fill data
  table.addRow(createRow("Origine", res.origine))
  table.addRow(createRow("Destinazione", res.destinazione))
  table.addRow(createRow("Ultimo rilevamento", res.stazioneUltimoRilevamento))
  //table.addRow(createRow("Binario partenza", res.binarioEffettivoPartenzaDescrizione))
  //table.addRow(createRow("Ritardo arrivo", res.ritardoArrivo))
  
  if (config.runsWithSiri)
    Speech.speak(`Il treno ${res.compTipologiaTreno} numero ${treno}, con partenza da ${res.origine} alle ${res.compOrarioPartenza} e destinazione ${res.destinazione}, si trova ${res.stazioneUltimoRilevamento} ${res.compRitardoAndamento[0]}.`)
  
  // present table
  table.present()
}

function createRow(title, number) {
  let row = new UITableRow()
  row.addText(title)
  row.addText(number.toString()).rightAligned()
  return row
}


function createWidget(pretitle, origin, destination, color) {
    let w = new ListWidget()
    w.backgroundColor = new Color(color)
    let preTxt = w.addText(pretitle)
    preTxt.textColor = Color.white()
    preTxt.textOpacity = 0.8
    preTxt.font = Font.systemFont(14)
    w.addSpacer(5)
    let originTxt = w.addText(origin)
    originTxt.textColor = Color.white()
    originTxt.textOpacity = 0.8
    originTxt.font = Font.systemFont(14)
    w.addSpacer(5)
    let destTxt = w.addText(destination)
    destTxt.textColor = Color.white()
    destTxt.textOpacity = 0.8
    destTxt.font = Font.systemFont(14)
    return w
  }
