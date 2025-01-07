# noahmarlinbendig.github.io
### ToDo
- 2048 nav Leiste styling anpassen
- about-me schreiben
- spiele Media querry für Controller Bild
- 
---

### Copypaste Vorlage

```
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <title></title>
    <link rel="icon" href="nmb.jpg" type="image/jpg" />
    <link rel="stylesheet" href="stylesheet.css" />
    <script src="js/nav.js" defer></script>
  </head>
  <body>
    <header></header>
    <nav id="nav-placeholder"></nav>
    <noscript>
      <div class="noscript-warning">
        <p>
          Diese Website erfordert JavaScript, um vollständig zu funktionieren.
          Bitte aktiviere JavaScript in deinem Browser.
        </p>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/links">Links</a>
      </nav>
    </noscript>

    <main></main>
    <footer>
      <p>
        &copy; 2024 - <span id="year"></span> Noah Marlin Bendig. Alle Rechte
        vorbehalten.
      </p>
    </footer>
    <script>
      document.getElementById("year").innerHTML = new Date().getFullYear();
    </script>
  </body>
</html>

```
