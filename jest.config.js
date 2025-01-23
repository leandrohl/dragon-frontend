
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { "tsconfig": "tsconfig.app.json" }]
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
        '^@redux/(.*)$': '<rootDir>/src/redux/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ["/node_modules/", "/__tests__/__mocks__/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.d.ts"
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
}