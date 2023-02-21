import styles from './app.module.scss'
import {useStore} from "../store/store";

export const App = () => {
    const cardNumber = useStore(state => state.cardNumber)
    const handlerCardNumber = useStore(state => state.handlerCardNumber)
    return <main className={styles.main}>
        <section className={styles.main_card}>
            <section className={styles.main_card_images}>
                <img
                    src="https://o.remove.bg/downloads/b70fcd74-3d73-42e0-a3f4-dff92b7523b3/png-transparent-computer-icons-lonely-planet-discover-california-sim-cards-miscellaneous-electronics-text-thumbnail-removebg-preview.png"
                    alt="card"/>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Emblem.jpg" alt="type"/>
            </section>
            <section className={styles.main_card_numbers}>
                <div>
                    {cardNumber[0] ? <p className={styles.main_card_numbers_anim}>{cardNumber[0]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[1] ? <p className={styles.main_card_numbers_anim}>{cardNumber[1]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[2] ? <p className={styles.main_card_numbers_anim}>{cardNumber[2]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[3] ? <p className={styles.main_card_numbers_anim}>{cardNumber[3]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                </div>
                <div>
                    {cardNumber[4] ? <p className={styles.main_card_numbers_anim}>{cardNumber[4]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[5] ? <p className={styles.main_card_numbers_anim}>{cardNumber[5]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[6] ? <p className={styles.main_card_numbers_anim}>{cardNumber[6]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[7] ? <p className={styles.main_card_numbers_anim}>{cardNumber[7]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                </div>
                <div>
                    {cardNumber[8] ? <p className={styles.main_card_numbers_anim}>{cardNumber[8]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[9] ? <p className={styles.main_card_numbers_anim}>{cardNumber[9]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[10] ? <p className={styles.main_card_numbers_anim}>{cardNumber[10]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[11] ? <p className={styles.main_card_numbers_anim}>{cardNumber[11]}</p> :
                        <p className={styles.main_card_numbers_animReverse}>#</p>}
                </div>
                <div>
                    {cardNumber[12] ? <p className={styles.main_card_numbers_anim}>{cardNumber[12]}</p> : <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[13] ? <p className={styles.main_card_numbers_anim}>{cardNumber[13]}</p> : <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[14] ? <p className={styles.main_card_numbers_anim}>{cardNumber[14]}</p> : <p className={styles.main_card_numbers_animReverse}>#</p>}
                    {cardNumber[15] ? <p className={styles.main_card_numbers_anim}>{cardNumber[15]}</p> : <p className={styles.main_card_numbers_animReverse}>#</p>}
                </div>

            </section>
            <section className={styles.main_card_content}>
                <section>
                    <p>FullName</p>
                    <cite>Maskalenchik V.O</cite>
                </section>
                <section>
                    <p>Expre</p>
                    <b>12/23</b>
                </section>
            </section>
        </section>
        <section className={styles.main_fields}>
            <section className={styles.main_fields_content}>
                <span>Card Number</span>
                <input maxLength={16} type="text" value={cardNumber} onChange={handlerCardNumber}/>
                <span>Card Holder</span>
                <input type="text"/>
                <section>

                </section>
            </section>
        </section>
    </main>
}
