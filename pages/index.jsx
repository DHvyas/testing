import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

var prods = [
    {
        name: 'Kingsley',
        desc: 'Facial, Nails & More..',
        image: '/images/hero1@2x.png',
        link: '/kingsley',
    },
    {
        name: 'Kingsley Home',
        desc: 'Massage & Mani-Pedi',
        image: '/images/hero2@2x.png',
        link: '/kingsley_home',
    },
    {
        name: 'Gifts',
        desc: 'Packages & More',
        image: '/images/hero3@2x.png',
        link: '/gifts',
    },
];
export default function Home() {
    return (
        <div id='hero' className='hero'>
            <Head>
                <title>Kingsley</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='description' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div id='herorow' className='herorow'>
                {prods.map((prods, id) => (
                    <Link key={id} href={prods.link} passHref>
                        <div key={prods.name} className='herodiv'>
                            <div className='herodiv_img'>
                                <Image
                                    src={prods.image}
                                    alt='Home'
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className='herodiv_col'>
                                <div className='hero_name'>{prods.name}</div>
                                <div className='hero_desc'>{prods.desc}</div>
                                <Image
                                    src='/images/arrow.png'
                                    alt='arrow'
                                    width={30}
                                    height={15}
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['navbar'])),
    },
});
