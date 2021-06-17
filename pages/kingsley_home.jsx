import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import CardBig from './components/cardBig';
var prods = [
    {
        name: 'Kingley Home',
        desc: 'Massage & Mani-Pedi',
        image: '/images/hero2@2x.png',
        services: [
            { image: '/images/services/Nails.png', name: 'Massage' },
            { image: '/images/services/BodyScrub.png', name: 'Mani Pad' },
        ],
    },
];

export default function Kingsley_home() {
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
