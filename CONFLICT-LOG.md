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

!![Conflicto gráfico](assets/images/conflicto.jpeg)
![solución](assets/images/solucion.jpeg)
```

### Solución:
Es aceptar loc cambios entranstes o ignorar y dejar el cambio de la rama mas reciente 
que se hizo del merge
<p className="hero-subtitle">
  Eventos Chiapas, disfrutamos de diversos eventos y actividades que nos
  permiten conocer a nuestros amigos y familiares, conocer nuestro país y
  conocer nuestra cultura..:D
</p>

Comandos usados:
git add.
git commit -m "Resuelto conflicto entre pagina-principal y rama-header"
git push 
