const LocalStorageManager = {
  set(key, value) {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  },
  get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default LocalStorageManager;
