import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import CardBig from './components/cardBig';
var prods = [
    {
        name: 'Gifts',
        desc: 'Packages & More',
        image: '/images/hero3@2x.png',
        options: [
            { name: 'Relax & Detox', link: '/massage' },
            { name: 'Gentleman Essentials', link: '' },
            { name: 'The Kingsley Groom', link: '' },
        ],
    },
];

export default function Gifts() {
    return (
        <div id='hero' className='hero'>
            <Head>
                <title>Kingsley</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='description' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <CardBig key={prods.name} prods={prods} />
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['navbar'])),
    },
});
