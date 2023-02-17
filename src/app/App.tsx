import styles from './app.module.scss'
import {useStore} from "../store/store";
import {testStore} from "../store/testStore";

const ComponentOne = () => {
    const {count, increaseCount,object,increaseObj} = useStore((state) => state)
    return <div>
        <h1>{count} + {object.obj1.count}</h1>
        <button onClick={increaseCount}>{count}</button>
        <button onClick={increaseObj}>{count}</button>
    </div>
}
const ComponentTwo = () => {
    const {number,increaseNumber} = testStore((state) => state)
    return <div>
        <h1>{number}</h1>
        <button onClick={increaseNumber}>{number}</button>
    </div>
}
export const App = () => {

    return <main className={styles.main}>
        <h1>Card</h1>
        <ComponentOne/>
        <ComponentTwo/>
    </main>
}
