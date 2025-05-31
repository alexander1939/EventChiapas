# Registro de Conflictos

## Conflicto entre pagina-principal y rama-header
**Fecha**: $("31-05-2025  04:11:00")
**Archivo**: `index.html`  
**Ramas involucradas**:
- `pagina-principal` (remotes/origin/pagina-principal)
- `rama-header` (remotes/origin/rama-header)



### Cambios conflictivos:
```diff
<<<<<<< HEAD
<p className="hero-subtitle">
  Texto original del componente...
</p>
=======
<p className="hero-subtitle">
  Eventos Chiapas, disfrutamos de diversos eventos y actividades que nos
  permiten conocer a nuestros amigos y familiares, conocer nuestro país y
  conocer nuestra cultura.
</p>
>>>>>>> rama-b


solution:
<p className="hero-subtitle">
  Eventos Chiapas, disfrutamos de diversos eventos y actividades que nos
  permiten conocer a nuestros amigos y familiares, conocer nuestro país y
  conocer nuestra cultura.
</p>

Justificación:
El nuevo texto es más descriptivo y enfatiza los valores culturales
Se mantuvo la estructura HTML y clases CSS originales
Mejor flujo de lectura para usuarios

Comandos usados:
git add.
git commit -m "Resuelto conflicto entre pagina-principal y rama-header"
git push 