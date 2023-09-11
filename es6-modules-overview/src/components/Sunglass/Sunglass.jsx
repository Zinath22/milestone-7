

import Watch from '../Watch/Watch';
import './Sunglass.css';
// import add from '../../Utils/calculate'; 
import { add, multipy, divideNumber } from '../../Utils/calculate';



const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first + second);
    const mult = multipy(first, second);
    const  devide = divideNumber(first, second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;