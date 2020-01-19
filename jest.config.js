module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.(js|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  snapshotSerializers: ['jest-snapshot-serializer-ansi']
};
