import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import CardBig from './components/cardBig';
var prods = [
    {
        name: 'Kingley',
        desc: 'Facial, Nails & More..',
        image: '/images/hero1.png',
        services: [
            { image: '/images/services/Nails.png', name: 'Nails' },
            { image: '/images/services/BodyScrub.png', name: 'Body Scrub' },
            { image: '/images/services/Facial.png', name: 'Facial' },
            { image: '/images/services/Club.png', name: 'Club' },
            { image: '/images/services/Specials.png', name: 'Specials' },
            { image: '/images/services/Packages.png', name: 'Packages' },
        ],
        promotion: [
            {
                name: 'Special Package',
                desc: 'Holiday Special Facial, Nails & Body Scrub',
                image: '/images/hero1.png',
                link: '',
            },
        ],
    },
];

export default function Kingsley() {
    return (
        <div id='hero'>
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
