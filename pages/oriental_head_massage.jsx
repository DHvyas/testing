import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Product from './components/product';
var prods = {
    name: 'Name',
    image: '/images/hero3@2x.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget metus eget nunc aliquam eleifend et at nulla. Interdum et.',
    duration: ['30 Mins', '60 Mins', '90 Mins', '120 Mins'],
    price: '16 KWD',
};
export default function OFMassage() {
    return (
        <div id='hero'>
            <Head>
                <title>Kingsley</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='description' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Product {...prods} />
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['navbar'])),
    },
});
