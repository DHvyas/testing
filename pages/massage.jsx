import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import CardBig from './components/cardBig';
var prods = [
    {
        name: 'Massage',
        desc: 'Some info here',
        image: '/images/hero3@2x.png',
        options: [
            { name: 'Oriental Head Massage', link: '/oriental_head_massage' },
            { name: 'Swedish Massage', link: '' },
            { name: 'Deep Tissue Massage', link: '' },
            { name: 'Back Neck & Shoulder', link: '' },
            { name: 'Foot', link: '' },
            { name: 'Hot Stone', link: '' },
            { name: 'Cupping Massage', link: '' },
            { name: 'Slimming Massage', link: '' },
            { name: 'Sports Massage', link: '' },
        ],
    },
];

export default function Massage() {
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
