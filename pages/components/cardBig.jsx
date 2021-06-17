import Image from 'next/image';
import Card from './card';
import Link from 'next/link';
export default function CardBig(props) {
    return (
        <>
            <div>
                {props.prods.map((prods, id) => (
                    <div key={id} className='cardBig'>
                        <div className='cardBig_hero'>
                            <div className='herodiv_img'>
                                <Image
                                    src={prods.image}
                                    alt='image'
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className='herodiv_col'>
                                <div className='cardBig_name'>{prods.name}</div>
                                <div className='hero_desc'>{prods.desc}</div>
                            </div>
                        </div>
                        {prods.promotion && (
                            <div>
                                <h1 id='promotion' className='cardBig_h1'>
                                    Promotion
                                </h1>
                                <Card prods={prods.promotion} />
                            </div>
                        )}
                        <h1 className='cardBig_h1'>Services</h1>
                        {prods.services && (
                            <div className='cardBig_services'>
                                {prods.services.map((services, id) => (
                                    <div key={id} className='cardBig_service'>
                                        <div className='cardBig_img'>
                                            <Image
                                                src={services.image}
                                                alt='image'
                                                width={150}
                                                height={130}
                                            />
                                        </div>
                                        <div className='cardBig_desc'>
                                            {services.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {prods.options && (
                            <div className='cardBig_options'>
                                {prods.options.map((options, id) => (
                                    <div key={id}>
                                        <Link href={options.link}>{options.name}</Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
