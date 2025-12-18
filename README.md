# Trabajo Práctico Integrador

## 🦸 Buscador de Superhéroes

### ⚙️ Consigna
En este proyecto vas a crear una aplicación que permita **listar superhéroes y obtener información sobre los mismos**. Para eso utilizarás una **API REST gratuita** con datos reales, realizarás consultas a la misma pasándole distintos parámetros que permitan personalizar la búsqueda, y mostrarás los datos obtenidos como respuesta.

---

### 👀 Ejemplo
Puedes ver un ejemplo funcional del proyecto siguiendo este link (acá puedes poner el link al deploy cuando lo tengas listo, ten en cuenta que este ejemplo está realizado con otra api):
[https://frontend-proyecto-comics.adaitw.org](https://frontend-proyecto-comics.adaitw.org)

---

### 👍 Criterios de aceptación
Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

✅ Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes e íconos.
✅ Debe ser responsive.
✅ Debe cumplir con las funcionalidades principales listadas en la sección siguiente.
✅ Debe hacer uso de un preprocesador CSS (como SASS o SCSS).
✅ Debe estar deployado y ser accesible desde una dirección web.
✅ No se debe trabajar en la rama `main`. En `main` sólo van a mergearse las demás ramas, por lo que cada commit de `main` debería ser el merge de una branch de una funcionalidad terminada.
✅ Cada funcionalidad que se agregue debe hacerse mediante un PR (Pull Request).

---

### 🗂️ Funcionalidades principales

-   **🔎 Se debe poder realizar una búsqueda de superhéroes por nombre.**
-   **🔡 Se debe poder ordenar los resultados alfabéticamente**, en orden ascendente y descendente (se realiza desde el frontend).
-   **ℹ️ Al clickear en un personaje, se debe mostrar su información completa**, incluyendo:
    *   Imagen
    *   Nombre
    *   Nombre real
    *   Editorial (Marvel / DC / etc.)
    *   Descripción / Biografía (alias, lugar de nacimiento, ocupación)
    *   Estadísticas de poder (fuerza, velocidad, inteligencia, combate, etc.)
    *   Altura y peso
    *   Conexiones o afiliaciones
-   **📊 Se debe mostrar el total de resultados en las búsquedas.**
-   **📖 Debe contar con un paginado:**
    *   Se debe mostrar 20 resultados por página.
    *   Se debe poder ir a la primera página.
    *   Se debe poder ir a la última página.
    *   Se debe poder ir a la página siguiente.
    *   Se debe poder ir a la página anterior.
    *   Se deben **deshabilitar los botones** correspondientes cuando no puedan ser utilizados (por ejemplo, si se está en la última página, no se debe poder avanzar más).

---

### 💪 Desafíos extra (opcionales)
*   Agregar la cantidad de páginas y la página actual en el paginado.
*   Agregar la posibilidad de ir a una página específica (mediante un `select` o `input`).
*   Cuando se realiza una búsqueda y luego se clickea en un personaje para ver los detalles, perdemos la búsqueda realizada y la página en la que estábamos. Agregar un botón que permita **volver a la página exacta de la última búsqueda**.
*   Agregar **modo oscuro**.

---

### 📝 Criterios de evaluación

| Nota | Requisitos                                                              |
| :--- | :---------------------------------------------------------------------- |
| < 6  | No aprobado                                                             |
| 6    | Respeta la consigna, el diseño, el funcionamiento, y es responsive      |
| 7    | HTML semántico, buen código, nombres adecuados, uso de variables en SASS |
| 8    | Buena estructura, estilos anidados en SASS, ramas con nombres adecuados |
| 9    | Componentización de estilos, funciones pequeñas, lógica clara, datos separados |
| 10   | Reutilización de funciones, buenos commits, un PR por funcionalidad con títulos |

---

### 🦸 SuperHero API

La API que vamos a utilizar para este proyecto es la **SuperHero API**.

####  रजिस्ट्रेशन Registro
Debes ingresar a [https://superheroapi.com](https://superheroapi.com), dejar tu email, y copiar tu `access-token` que te otorgan al instante.

#### ❓ Cómo usarla
Para buscar personajes:
`https://superheroapi.com/api/ACCESS_TOKEN/search/BUSQUEDA`

**Ejemplo:**
`https://superheroapi.com/api/1234567890123456/search/batman`

#### 📊 Qué datos devuelve
*   Nombre y nombre real
*   Imagen
*   Editorial (DC, Marvel, etc.)
*   Biografía (ocupación, lugar de nacimiento, alias)
*   Estadísticas (fuerza, velocidad, inteligencia, combate, etc.)
*   Altura y peso
*   Conexiones (afiliaciones)

---

### 🌐 CORS
No requiere configuración extra para evitar problemas de CORS. Funciona perfecto con **Live Server de VSCode**.