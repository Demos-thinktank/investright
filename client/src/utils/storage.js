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

export function setInStorage(key, value) {
  if (!key) {
    // console.error("Error: Key is missing");
    return null;
  }
  // encrypted jwt?
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
}

export function removeFromStorage(key) {
  if (!key) {
    return null;
  }

  try {
    localStorage.removeItem(key);
  } catch (err) {
    return null;
  }
}
