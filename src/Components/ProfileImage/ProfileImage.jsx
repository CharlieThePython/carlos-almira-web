import { Component } from 'react'
import MainPhoto from '../../../public/images/main-photo.jpg'

export class ProfileImage extends Component {
  render() {
    return (
      <>
          <h1 className='header' id='about'>SOBRE EL AUTOR</h1>
      <div className='photo-div justify-between'>
      <img className="rounded-2xl m-2" src={MainPhoto} />
      <p className='p-style'>
    <strong>Carlos Almira Picazo</strong> nació en mayo de 1965 en <i>una ciudad que desconoce y a la que nunca ha vuelto</i>. Dado a la vida itinerante de sus padres, Carlos creció inmerso en viajes y libros de los que germinarían todas sus historias. <br /><br /> Finalmente, Carlos se estableció en <strong>Granada</strong>, donde estudió, aprobó sus oposiciones y ha trabajado durante varios lustros como profesor de <strong>Geografía e Historia</strong>.
    
    En Granada conoció a su amor, <strong>Lola</strong>, con quien formó una familia y tuvo dos hijos. Su padre, además de vender seguros, también fue <strong>escritor</strong> y <strong>poeta</strong>, y Carlos siguió sus pasos.<br /><br />Empezó su carrera literaria como poeta, y con el tiempo conoció a otros escritores, publicando sus obras con editoriales Indies de toda España. Además de <strong>Poesía</strong>, como <em>"El corazón de la tierra"</em>, ha escrito y publicado principalmente <strong>novelas</strong>, sobre todo de carácter <strong>Histórico</strong>, y algunos libros de <strong>relatos</strong>.<br /><br /> Los escritos de Carlos Almira han llegado a incluirse en la <em>"<strong>Antología del microrrelato en España</strong>"</em> publicada por la <strong>Editorial Cátedra</strong>, incluida junto a grandes como <strong>Jorge Luis Borges</strong>. Su última novela, forjada en versos, es un homenaje a las <strong>Sinsombrero</strong>, así como un acto de amor y reconocimiento a su ciudad adoptiva, <strong>Granada</strong>.
</p>

      </div>


      </>
    )
  }
}

export default ProfileImage