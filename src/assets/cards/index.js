/* refs https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs */
function importAll(r) {
  const keys = r.keys();
  const imgs = keys.map(r);
  const names = keys.map(e => e.match(/[A-Z]+\d+/)[0]);
  const result = {};
  for(let i in keys) {
    result[names[i]] = imgs[i];
  }
  return result;
}
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
export default images;