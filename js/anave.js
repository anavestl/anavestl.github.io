function contact(text){
    let textEncoded = encodeURI(text)
    let href="https://wa.me/553598559951?text=" + textEncoded
    window.location.href = href
}