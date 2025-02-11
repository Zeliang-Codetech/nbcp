import Metrics from './metrics';
import COLORS from './colors';
import {scale} from '../utils/responsive';
const FONT_FAMILY = {
  URBANIST_LIGHT: 'Urbanist-Light',
  URBANIST_MEDIUM: 'Urbanist-Medium',
  URBANIST_REGULAR: 'Urbanist-Regular',
  URBANIST_SEMIBOLD: 'Urbanist-SemiBold',
  URBANIST_BOLD: 'Urbanist-Bold',
};
const FONT_WEIGHT = {
  LIGHT: '',
  REGULAR: '',
  MEDIUM: '',
  SEMIBOLD: '',
  BOLD: '',
};
const FONT_SIZE = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 12,
  h6: 8,
  font14: Metrics.screenWidth * (14 / 365),
  font16: Metrics.screenWidth * (16 / 365),
  font20: Metrics.screenWidth * (20 / 365),
};

export default {
  heading: {
    fontFamily: FONT_FAMILY.URBANIST_BOLD,
    lineHeight: 32,
  },
  h1: {
    fontFamily: FONT_FAMILY.URBANIST_BOLD,
    fontSize: scale(8),
    lineHeight: 36,
    color: COLORS.black,
    fontWeight: '600',
  },
  h2: {
    fontFamily: FONT_FAMILY.URBANIST_BOLD,
    fontSize: scale(6),
    lineHeight: 30,
    color: COLORS.black,
    fontWeight: '600',
  },
  h3: {
    fontFamily: FONT_FAMILY.URBANIST_BOLD,
    fontSize: scale(5),
    lineHeight: 24,
    color: COLORS.black,
    fontWeight: '600',
  },
  h4: {
    fontFamily: FONT_FAMILY.URBANIST_BOLD,
    fontSize: scale(4),
    lineHeight: 20,
    color: COLORS.black,
    fontWeight: '600',
  },
  h5: {
    fontFamily: FONT_FAMILY.URBANIST_MEDIUM,
    // fontSize: scale(3.5),
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.black,
  },
  h6: {
    fontFamily: FONT_FAMILY.URBANIST_MEDIUM,
    fontSize: 13.5,
  },
  heading: {
    fontFamily: FONT_FAMILY.URBANIST_MEDIUM,
  },
  subHeading: {
    fontFamily: FONT_FAMILY.URBANIST_REGULAR,
  },
  caption: {
    fontFamily: FONT_FAMILY.URBANIST_LIGHT,
  },
  label: {
    fontFamily: FONT_FAMILY.URBANIST_REGULAR,
    fontSize: 14,
    color: COLORS.gray,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  code: {
    fontSize: 14,
    backgroundColor: '#f7f7f7',
    padding: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
};

export {FONT_SIZE, FONT_WEIGHT, FONT_FAMILY};
