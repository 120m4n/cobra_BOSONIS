const options = {
    title: "ol-ext: Delete hole",
    info: `Delete node button. 
    <ul>
      <li>
        click [X] button and select a polygon do remove its holes.
      </li>
      <li>
        or select a Polygon and click [D] button to delete hole in the selection.
      </li>
    </ul>`,
    options: [],
    example: ""
  };
  
//   document.title = options.title;
//   document.querySelectorAll("h1 a")[0].text = options.title;
  const info = document.querySelectorAll(".info")[0];
  info.innerHTML = options.info;
  
  const ul = document.createElement("ul");
  info.appendChild(ul);
  if (options) {
    options.options.forEach(o => {
      const li = document.createElement("li");
      li.innerHTML = o;
      ul.appendChild(li);
    });
  }
  
  if (options.example) {
    const a = document.createElement("a");
    info.appendChild(a);
    a.setAttribute(
      "href",
      "https://viglino.github.io/ol-ext/examples/" + options.example
    );
    a.setAttribute("target", "github");
    a.text = "...more info...";
  }
  
  export default options;
  