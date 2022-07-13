function getList() {
  return document.querySelectorAll(".anim");
}
let arr = getList();
window.addEventListener("scroll", () => {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          entry.target.classList.remove("anim");
          entry.target.classList.add("anim-after");
          observer.unobserve(entry.target);
          console.log(entry);
          //console.log(Array.isArray(arr));
        }
      });
    },
    { threshold: [0] }
  );
  arr.forEach((element) => {
    observer.observe(element);
  });
});
