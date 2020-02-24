/**
 * Accepts an array and returns a randomly selected item from array of items
 */
function choice(items) {
  let randomIndex = Math.floor((Math.random() * items.length));
  return items[randomIndex];
}

/**
 * Accepts array of items, and item to remove. 
 * removes the first matching item from items, if item exists, and returns it. 
 * Otherwise returns undefined.
 */

function remove(items, item) {
  let idx = items.findIndex(val => {
    return item === val;
  });
  if (idx >= 0) {
    items.splice(idx, 1);
    return item;
  }
  return;
}

export {
  choice,
  remove
}