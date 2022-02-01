function mira_datos(){
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let email = document.getElementById('mail').value
    let fecha = document.getElementById('Dnasci').value
    let direc = document.getElementById('direccion').value
    let city = document.getElementById('ciudad').value

    let ver = window.open("", "visualizar", "width=320, height=600")
        ver.document.write("<html>")
        ver.document.write("<head><link rel='stylesheet' href='../projetos/src/css/est_cuestio.css'></head>")
        ver.document.write("<body><h2>Sus Datos</h2>")
        ver.document.write("<div class='datos_part1'><p>" + nombre + " " + apellido + "</p>")
        ver.document.write("<p>" + fecha + '</p><br>')
        ver.document.write("<p>" + direc + "</p>")
        ver.document.write("<p>" + city + "</p>")
        ver.document.write('<p>' + email + '</p></div>')

        ver.document.write("</body></html>")
        ver.document.close()
}


