const sync = browser.storage.sync,
  local = browser.storage.local;

export function read(object, sync = false) {
  if (sync) return sync.get(object);
  return local.get(object);
}

export function write(object, sync = false) {
  if (sync) return sync.set(object);
  return local.set(object);
}

export function remove(object, sync = false) {
  if (sync) return sync.remove(object);
  return local.remove(object);
}
