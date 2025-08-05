import logoDark from '/images/logo-light.svg';
import logoLight from '/images/logo-light.svg';
import page404 from '/images/404-page.png';
import whatsapp from '/images/whatsapp2.svg';

const configs = {
  name: 'الماهر بالقران',
  jobTitle: 'Job Title4',
  logo_dark: logoDark,
  logo_light: logoLight,
  page_404: page404,
  whatsapp: whatsapp,
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "213672358792",
}

export default configs;
