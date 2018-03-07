/**
 * src/index.js
 */
import styles from './styles.scss';
import { add, subtract } from './module';

const resultA = add(2, 3);
const resultB = subtract(5, 1);

console.log(resultA, resultB);
console.log(styles);
console.log(styles.globalClass);
