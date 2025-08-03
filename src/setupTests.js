
// Add these at the VERY TOP of the file

import { TextEncoder, TextDecoder } from 'text-encoding';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// OR if using Node's util package (alternative approach)
// const { TextEncoder, TextDecoder } = require('util');
// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;

// Additional required globals
if (typeof globalThis.URL === 'undefined') {
  const { URL, URLSearchParams } = require('whatwg-url');
  globalThis.URL = URL;
  globalThis.URLSearchParams = URLSearchParams;
}

// Enzyme configuration
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });