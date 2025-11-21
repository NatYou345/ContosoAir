// Mock for uuid module to avoid ES module issues in Jest
module.exports = {
  v4: jest.fn(() => '00000000-0000-0000-0000-000000000000'),
  v1: jest.fn(() => '00000000-0000-1000-8000-000000000000'),
  v3: jest.fn(() => '00000000-0000-3000-8000-000000000000'),
  v5: jest.fn(() => '00000000-0000-5000-8000-000000000000'),
  validate: jest.fn(() => true),
  parse: jest.fn((uuid) => Buffer.from(uuid.replace(/-/g, ''), 'hex')),
  stringify: jest.fn((buf) => {
    const hex = buf.toString('hex');
    return `${hex.substr(0, 8)}-${hex.substr(8, 4)}-${hex.substr(12, 4)}-${hex.substr(16, 4)}-${hex.substr(20)}`;
  })
};
