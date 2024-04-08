import React from 'react'






const HtmlCurso = () => {
  return (
    <div>
      <h1 className='title-tema'>Uso de HTML en React</h1>
      <p className='description'>En React, puedes usar HTML directamente dentro de los componentes. A continuación, se explican algunas etiquetas HTML comunes:</p>

      <h3>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, ..., &lt;h6&gt;</h3>
      <p>Estas etiquetas se utilizan para los títulos y tienen diferentes niveles de importancia. Por ejemplo:</p>
      <h1>Título de nivel 1</h1>
      <h2>Título de nivel 2</h2>
      <h3>Título de nivel 3</h3>

      <h3>&lt;p&gt;</h3>
      <p>
        La etiqueta <code>&lt;p&gt;</code> se utiliza para los párrafos de texto.
      </p>

      <h3>&lt;img&gt;</h3>
      <p>
        La etiqueta <code>&lt;img&gt;</code> se utiliza para mostrar imágenes. A continuación, se muestra un ejemplo:
      </p>
      <img src='ruta_de_la_imagen.jpg' alt='Descripción de la imagen' />

      <h3>&lt;a&gt;</h3>
      <p>
        La etiqueta <code>&lt;a&gt;</code> se utiliza para crear enlaces. Por ejemplo:
      </p>
      <a href='https://www.ejemplo.com'>Enlace de ejemplo</a>

      <h3>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</h3>
      <p>
        Estas etiquetas se utilizan para crear listas no ordenadas (<code>&lt;ul&gt;</code>) y listas ordenadas (<code>&lt;ol&gt;</code>). Cada elemento de la lista se crea con la
        etiqueta <code>&lt;li&gt;</code>. Por ejemplo:
      </p>
      <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
        <li>Elemento de lista 3</li>
      </ul>

      <h3>&lt;div&gt;</h3>
      <p>
        La etiqueta <code>&lt;div&gt;</code> se utiliza para agrupar elementos y aplicar estilos. No tiene un significado semántico específico.
      </p>

      <p>
        Estos son solo algunos ejemplos de etiquetas HTML que puedes utilizar en React junto con JSX. Recuerda que puedes combinar estas etiquetas con otras características de
        React, como el estado y las propiedades, para crear componentes dinámicos y reutilizables.
      </p>
    </div>
  )
}

export default HtmlCurso
