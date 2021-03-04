// Data.js is where we can put our data and pass it to the appropriate component. Super helpful and a great practice for maintainence reason 
// incase you want to redesign the website; saves the trouble of hardcoding the content

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'e-Commerce',
    headline: 'Commerce made Easy',
    description: 'Get access to our exclusive service that allows you to manage your online business presence.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/svg-1.svg').default, //< -Had issues passing in the svg the way the tutorial showed for some reason or other
    alt: 'Money',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'PayPal, square, or Crypto',
    description: 'Use any credit processing of your choice with no fees from us.',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: require('../../images/svg-2.svg').default,
    alt: 'phone',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Us!',
    headline: 'Sign up!',
    description: 'See for yourself why thousands of business use e-Commerce.',
    buttonLabel: 'Sign Up',
    imgStart: false,
    img: require('../../images/svg-3.svg').default,
    alt: 'person and bank',
    dark: false,
    primary: true,
    darkText: true,
};