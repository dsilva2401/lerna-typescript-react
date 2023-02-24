import * as modA from 'module-a'

export function testFunctionB() {
  return {
    modA: modA.testFunctionA(),
    b: 123123
  }
}