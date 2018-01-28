import { injectGlobal } from 'styled-components';


import ralewayRegular from './../fonts/Raleway/Raleway-Regular.ttf';
import ralewayMedium from './../fonts/Raleway/Raleway-Medium.ttf';
import ralewayBold from './../fonts/Raleway/Raleway-Bold.ttf';
import ralewayBlack from './../fonts/Raleway/Raleway-Black.ttf';


const Styles = {

    // BRAND
    brandPrimary: '#3097D1',
    brandInfo: '#8eb4cb',
    brandSuccess: '#2ab27b',
    brandWarning: '#cbb956',
    brandDanger: '#bf5329',
  
  
    // MENU
    menuPrimary: '#424a55',
    menuExpanded: '#636D79',
  
    // ICONS
    iconPrimary: '#3988e3',
    iconHighlighted: '#FFBA0B',
  
    // BODY
    bodyBg: '#f5f8fa',
    textColor: '#636b6f',
};

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${ralewayBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  * {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: ;
    color: ${Styles.textColor};
    box-sizing: border-box;
  }

  body {
    border: 1px solid red;
    box-sizing: content-box;
    background-color: ${Styles.bodyBg};
    width: 400px;
    height: 500px;
  }
`;






export default Styles;