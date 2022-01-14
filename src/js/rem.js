const setRem = () => {
  const scale = document.documentElement.clientWidth / 1920
  document.documentElement.style.zoom = scale;
}
setRem();
window.onresize = () => {
  setRem();
};
