export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let current = reportWithIterator.next();
  
  while (!current.done) {
    result += current.value + ' | ';
    current = reportWithIterator.next();
  }
  
  return result.slice(0, -3); // Remove the trailing ' | '
}
