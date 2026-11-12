# Sprite Mixer

> Genera personajes retro expresivos directamente en el navegador.

[![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Español

**Sprite Mixer** es un pequeño laboratorio creativo para prototipar avatares pixel-art. Combina clase, paleta y emoción para dibujar un sprite de 16×16 en `canvas`, listo para exportar como PNG. No usa librerías ni requiere conexión.

### Idea

Durante una game jam o la fase de prototipo, diseñar una familia de personajes coherente suele ser más lento de lo necesario. Sprite Mixer ofrece una base reproducible: cada combinación produce una silueta y colores consistentes que se pueden usar como placeholder, referencia visual o punto de partida artístico.

### Funcionalidades

- Selección de **guerrero**, **mago** o **explorador**.
- Emociones visuales: sereno, alerta o enfadado.
- Tres paletas originales: bosque, neón y fuego.
- Generación aleatoria para explorar variaciones.
- Exportación PNG de la composición.
- Renderizado nítido, sin dependencias y compatible con móviles.

### Ejecutar

```bash
git clone https://github.com/alvaroalcalaa/sprite-mixer.git
cd sprite-mixer
python -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000) y pulsa **Mezclar sprite**. También puedes abrir `index.html` directamente.

### Demo

1. Escoge **Mago + Neón + Alerta**.
2. Pulsa **Mezclar sprite**.
3. Descarga el resultado con **Exportar PNG**.

### Stack y estructura

```text
sprite-mixer/
├── index.html   # interfaz y controles
├── style.css    # diseño responsivo
├── app.js       # generador Canvas
├── README.md
└── LICENSE
```

## English

**Sprite Mixer** is a small creative lab for prototyping pixel-art avatars. It combines class, palette, and mood to draw a 16×16 sprite on a `canvas`, ready to export as PNG. No libraries or network connection required.

### Features

- Choose **warrior**, **mage**, or **scout**.
- Visual moods: calm, alert, or angry.
- Three original palettes: forest, neon, and fire.
- Random mode for fast ideation.
- PNG export and crisp pixel rendering.
- Vanilla HTML, CSS, and JavaScript.

### Run

```bash
python -m http.server 8000
# Open http://localhost:8000
```

## License

MIT — see [LICENSE](LICENSE).
