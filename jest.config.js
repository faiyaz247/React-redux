export const collectCoverageFrom = [
  // "src/**",
  'src/**/*.{js,jsx}',
];
export const verbose = true;
export const snapshotSerializers = [
  'enzyme-to-json/serializer',
];
export const moduleDirectories = [
  'node_modules',
  'src',
];
export const coveragePathIgnorePatterns = [
  // "/node_modules/",
  // "src/Apollo-Client",
  // "src/config",
  '.*\\.d\\.{js|jsx}',
];
export const testResultsProcessor = 'jest-sonar-reporter';
export const resolver = 'jest-pnp-resolver';
export const setupFiles = [
  'react-app-polyfill/jsdom',
];
export const setupFilesAfterEnv = ['<rootDir>/setupTests.js'];
export const testMatch = [
  '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
  '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}',
];
export const testEnvironment = 'jsdom';
export const testURL = 'http://localhost';
export const transform = {
  // [`<rootDir>/(${dentsuModules}).+\\.(js|jsx)$`]: 'babel-jest',
  '^.+\\.(js|jsx)$': 'babel-jest',
};
export const transformIgnorePatterns = [
  '[/\\\\]node_modules[/\\\\](?!(@dentsu-ui)\\/).+\\.(js|jsx|ts|tsx)$',
];
export const moduleNameMapper = {
  '^react-native$': 'react-native-web',
  '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  '\\.(css|less|scss)$': '<rootDir>/src/cssStub.js',
};
export const moduleFileExtensions = [
  'web.js',
  'js',
  'json',
  'web.jsx',
  'jsx',
  'node',
];
export const modulePathIgnorePatterns = [];
