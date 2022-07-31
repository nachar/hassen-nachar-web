export default {
  name: 'MixinProjects',
  data() {
    return {
      projects: [
        {
          name: 'Superdigital',
          type: 'web',
          key: 'superdigital',
          url: 'https://www.superdigital.cl/',
          company: 'Modyo',
          img: 'superdigital.svg',
          size: 'small',
        },
        {
          name: 'Consorcio',
          type: 'web',
          key: 'consorcio',
          url: 'https://web.consorcio.cl/home',
          company: 'Modyo',
          img: 'consorcio.svg',
          size: 'medium',
        },
        {
          name: 'Copec',
          type: 'web',
          key: 'copec',
          url: 'https://ww2.copec.cl/',
          company: 'Modyo',
          img: 'copec.svg',
          size: 'medium',
        },
        {
          name: 'Santander',
          type: 'web',
          key: 'santander',
          url: 'https://banco.santander.cl/personas',
          company: 'Modyo',
          img: 'santander.png',
          size: 'medium',
        },
        {
          name: 'Vías Chile',
          type: 'web',
          key: 'vias-chile-web',
          url: 'https://obras.viaschile.cl/inicio',
          company: 'DevLab',
          img: 'vias-chile.png',
          size: 'small',
        },
        {
          name: 'Vías Chile',
          type: 'api',
          key: 'vias-chile-api',
          url: 'https://obras.viaschile.cl/inicio',
          company: 'DevLab',
          img: 'vias-chile.png',
          size: 'small',
        },
        {
          name: 'Pago Click',
          type: 'app',
          key: 'pago-click',
          url: null,
          company: 'Modyo',
          img: 'pago-click.png',
          size: 'small',
        },
        {
          name: 'Cinemark Chile',
          type: 'app',
          key: 'app-cinemark-chile',
          url: 'https://apps.apple.com/cl/app/cinemark-chile/id1401507945',
          company: 'Modyo',
          img: 'cinemark-app.png',
          size: 'small',
        },
        {
          name: 'Cinemark Chile',
          type: 'web',
          key: 'cinemark-chile',
          url: 'https://www.cinemark.cl/',
          company: 'Modyo',
          img: 'cinemark.png',
          size: 'large',
        },
        {
          name: 'Cinemark Paraguay',
          type: 'web',
          key: 'cinemark-paraguay',
          url: 'https://www.cinemark.com.py/',
          company: 'Modyo',
          img: 'cinemark.png',
          size: 'large',
        },
        {
          name: 'Cinemark Bolivia',
          type: 'web',
          key: 'cinemark-bolivia',
          url: 'https://www.cinemark.com.bo/',
          company: 'Modyo',
          img: 'cinemark.png',
          size: 'large',
        },
        {
          name: 'Cinemark Perú',
          type: 'web',
          key: 'cinemark-peru',
          url: 'https://www.cinemark-peru.com/',
          company: 'Modyo',
          img: 'cinemark.png',
          size: 'large',
        },
        {
          name: 'Cinemark Colombia',
          type: 'web',
          key: 'cinemark-colombia',
          url: 'https://www.cinemark.com.co/',
          company: 'Modyo',
          img: 'cinemark.png',
          size: 'large',
        },
        {
          name: 'BCI Personas',
          type: 'web',
          key: 'bci-personas',
          url: 'https://www.bci.cl/personas',
          company: 'Modyo',
          img: 'bci.png',
          size: 'small',
        },
        {
          name: 'Sencillito',
          type: 'web',
          key: 'sencillito',
          url: 'https://www.sencillito.com/',
          company: 'Modyo',
          img: 'sencillito.png',
          size: 'medium',
        },
        {
          name: 'Cocha',
          type: 'web',
          key: 'cocha',
          url: 'https://www.cocha.com/',
          company: 'Modyo',
          img: 'cocha.png',
          size: 'medium',
        },
        {
          name: 'Mundo Copec',
          type: 'app',
          key: 'app-mundo-copec',
          url: 'https://ww2.copec.cl/informate/posts/descargue-la-app-mundo-copec',
          company: 'Techmobile',
          img: 'mundo-copec.png',
          size: 'small',
        },
        {
          name: 'Tribuna Centenario',
          type: 'app',
          key: 'app-tribuna-centenario',
          url: 'https://edgares.com/tribuna-centenario',
          company: 'Techmobile',
          img: 'tribuna-centenario.png',
          size: 'small',
        },
        {
          name: 'Bioscell',
          type: 'web',
          key: 'bioscell',
          url: 'https://bioscell.cl/',
          company: 'Techmobile',
          img: 'bioscell.png',
          size: 'medium',
        },
        {
          name: 'Marina Golf Rapel',
          type: 'web',
          key: 'marina-golf-rapel',
          url: 'https://marinagolfrapel.cl/',
          company: 'Techmobile',
          img: 'marina-golf.png',
          size: 'medium',
        },
        {
          name: 'IMS',
          type: 'app',
          key: 'app-ims-app',
          url: 'http://app.industrialms.cl/',
          company: 'DevLab',
          img: 'ims.png',
          size: 'small',
        },
        {
          name: 'IMS',
          type: 'web',
          key: 'app-ims-web',
          url: 'https://www.industrialms.cl/',
          company: 'DevLab',
          img: 'ims.png',
          size: 'small',
        },
        {
          name: 'IMS',
          type: 'api',
          key: 'app-ims-api',
          url: 'https://www.industrialms.cl/',
          company: 'DevLab',
          img: 'ims.png',
          size: 'small',
        },
        {
          name: 'Aygcamp',
          type: 'api',
          key: 'app-aygcamp-api',
          url: null,
          company: 'DevLab',
          img: 'ayg.png',
          size: 'small',
        },
        {
          name: 'Aygcamp',
          type: 'app',
          key: 'app-aygcamp-app',
          url: null,
          company: 'DevLab',
          img: 'ayg.png',
          size: 'small',
        },
      ],
    };
  },
};
