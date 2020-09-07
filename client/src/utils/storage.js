export function getFromStorage(key) {
  if (!key) {
    return null;
  }

  try {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}

export function setInStorage(key, obj) {
  if (!key) {
    console.error("Error: Key is missing");
  }
  // encrypted jwt?
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (err) {
    console.log(err);
  }
}
