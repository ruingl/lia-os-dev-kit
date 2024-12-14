document.addEventListener("DOMContentLoaded", async () => {
  const iframe = document.createElement("iframe");

  const res = await fetch("/app.html");
  const re2 = await fetch("/app.js");

  const data = await res.text();
  const data2 = await re2.text();

  iframe.src = `http://127.0.0.1:3000/?customapp=${encodeURIComponent(
    data
  )}&customscript=${encodeURIComponent(data2)}`;

  console.log(iframe.src);

  document.body.appendChild(iframe);
});
