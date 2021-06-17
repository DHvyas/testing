import Image from 'next/image';
import Link from 'next/link';
import styles from './product.module.css';
export default function Product(props) {
    return (
        <>
            <div className={styles.cardBig}>
                <div className={styles.cardBig_hero}>
                    <div className={styles.herodiv_img}>
                        <Image src={props.image} alt='image' width={150} height={150} />
                    </div>
                    <div className={styles.cardBig_name}>{props.name}</div>
                </div>
                <div className={styles.prod_col}>
                    <div className={styles.prod_desc}>{props.desc}</div>
                    <h1>Duration :</h1>
                    <div className={styles.prod_dur}>
                        {props.duration.map((duration, id) => (
                            <button key={id}>{duration}</button>
                        ))}
                    </div>
                    <div className={styles.prod_price}>
                        <h1>Price : </h1>
                        {props.price}
                    </div>
                    <div className={styles.prod_btn}>
                        <button>Add to Cart</button>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}
