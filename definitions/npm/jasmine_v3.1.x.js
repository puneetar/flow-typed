// flow-typed signature: b4b7989c8225e4e9ca68d749ce3c34db
// flow-typed version: 13612502aa/jasmine_v2.4.x/flow_>=v0.25.x

/* eslint-disable flowtype/no-weak-types */

type JasmineExpectType = {
  nothing(): void,
  not: JasmineExpectType,
  toBe(value: mixed): void,
  toBeCloseTo(num: number, delta: mixed): void,
  toBeDefined(): void,
  toBeFalsy(): void,
  toBeGreaterThan(expected: number): void,
  toBeGreaterThanOrEqual(expected: number): void,
  toBeLessThan(expected: number): void,
  toBeLessThanOrEqual(expected: number): void,
  toBeNaN(): void,
  toBeNegativeInfinity(): void,
  toBeNull(): void,
  toBePositiveInfinity(): void,
  toBeTruthy(): void,
  toBeUndefined(): void,
  toContain(expected: mixed): void,
  toEqual(expected: mixed): void,
  toHaveBeenCalled(): void,
  toHaveBeenCalledBefore(expected: JasmineSpyType): void,
  toHaveBeenCalledTimes(expected: number): void,
  toHaveBeenCalledWith(...args: Array<any>): void,
  toHaveClass(expected: string): void,
  toMatch(expected: RegExp | string): void,
  toThrow(message?: Error | string): void,
  toThrowError(expected: Error, message: RegExp | string): void,
  toThrowMatching(predicate: Error | string => true): void
};

type JasmineAsyncExpectType = {
  toBeRejected(): void,
  toBeResolved(): void,
  toBeResolvedTo(expected: mixed): void
};

type VoidOrPromise = void | Promise<mixed>

declare type JasmineImplementationCallbackType = (done: Function) => VoidOrPromise

declare function describe(description: string, specDefinitions: Function): void;
declare function fdescribe(description: string, specDefinitions: Function): void;
declare function xdescribe(description: string, specDefinitions: Function): void;

declare function beforeEach(fn: JasmineImplementationCallbackType, timeout?: number): void;
declare function afterEach(fn: JasmineImplementationCallbackType, timeout?: number): void;
declare function beforeAll(fn: JasmineImplementationCallbackType, timeout?: number): void;
declare function afterAll(fn: JasmineImplementationCallbackType, timeout?: number): void;

declare function it(description: string, testFunction: JasmineImplementationCallbackType, timeout?: number): void;
declare function fit(description: string, testFunction: JasmineImplementationCallbackType, timeout?: number): void;
declare function xit(description: string, testFunction: JasmineImplementationCallbackType, timeout?: number): void;

declare function expect(actual: mixed): JasmineExpectType;
declare function expectAsync(actual: mixed): JasmineAsyncExpectType;
declare function pending(message?: string): void;
declare function fail(err?: Error | string): void;

declare function spyOn(obj: mixed, methodName: string): JasmineSpyType;
declare function spyOnProperty(obj: mixed, propertyName: string, accessType?: string): JasmineSpyType;

type JasmineCallsType = {
  allArgs(): mixed[],
  all(): JasmineCallDataType[],
  any(): boolean,
  argsFor(index: number): Object[],
  mostRecent(): JasmineCallDataType,
  first(): JasmineCallDataType,
  count(): number,
  reset(): void,
  saveArgumentsByValue(): void
};

type JasmineSpyStrategyType = {
  callFake((...args: Array<any>) => any): JasmineSpyType,
  callThrough(): JasmineSpyType,
  identity: string,
  returnValue(value: any): JasmineSpyType,
  returnValues(...values: any): JasmineSpyType,
  stub(): JasmineSpyType,
  throwError(errorMessage: Error | string): JasmineSpyType
};

type JasmineCallDataType = {
  object: Object,
  invocation: number,
  args: Object[]
}
type JasmineSpyTypeProto = {
  callData: JasmineCallDataType,
  and: JasmineSpyStrategyType,
  withArgs(...args: any): JasmineSpyStrategyType,
  calls: JasmineCallsType
};

type JasmineSpyType = JasmineSpyTypeProto & Function;

type JasmineClockType = {
  install(): JasmineClockType,
  uninstall(): void,
  tick(milliseconds: number): void,
  mockDate(date?: Date): void,
  withMock(Function): void
};

declare type JasmineMatcherResult = {
  pass: boolean,
  message?: string | (() => string)
};

declare type JasmineMatcherStruct = {
  compare<T: any>(actual: T, expected: T): JasmineMatcherResult
};

declare type JasmineMatcher = (
  utils?: mixed,
  customEqualityTesters?: mixed
) => JasmineMatcherStruct;

declare type JasmineMatchers = {
  [key: string]: JasmineMatcher
};

// TODO Fix me
declare type JasmineIncompleteReasonType = mixed
// TODO Fix me
declare type JasmineOrderType = mixed

declare type JasmineExpectationType = {
  matcherName: string,
  message: string,
  stack: string,
  passed: boolean,
  expected: Object,
  actual: Object
}

declare type JasmineDoneInfoType = {
  overallStatus: "passed" | "failed" | "incomplete",
  incompleteReason: JasmineIncompleteReasonType,
  order: JasmineOrderType,
  failedExpectations: JasmineExpectationType[],
  deprecationWarnings: JasmineExpectationType[]
}

declare type JasmineStartedInfoType = {
  totalSpecsDefined: number,
  order: JasmineOrderType
}

declare type JasmineSpecResultType = {
  id: number,
  description: string,
  fullName: string,
  failedExpectations: JasmineExpectationType[],
  passedExpectations: JasmineExpectationType[],
  deprecationWarnings: JasmineExpectationType[],
  pendingReason: string,
  status: string
}

declare type JasmineSuiteResultType = {
  id: number,
  description: string,
  fullName: string,
  failedExpectations: JasmineExpectationType[],
  deprecationWarnings: JasmineExpectationType[],
  status: string
}

declare type JasmineReporterType = {
  jasmineDone(suiteInfo: JasmineDoneInfoType, done?: Function): VoidOrPromise,
  jasmineStarted(suiteInfo: JasmineStartedInfoType, done?: Function): VoidOrPromise,
  specDone(result: JasmineSpecResultType, done?: Function): VoidOrPromise,
  specStarted(result: JasmineSpecResultType, done?: Function): VoidOrPromise,
  suiteDone(result: JasmineSuiteResultType, done?: Function): VoidOrPromise,
  suiteStarted(result: JasmineSuiteResultType, done?: Function): VoidOrPromise
}

declare type JasmineEnvType = {
  addReporter(reporterToAdd: JasmineReporterType): void,
  clearReporters():void,
  hideDisabled():void,
  provideFallbackReporter(reporterToAdd: JasmineReporterType): void,
  randomizeTests(value: boolean):void,
  seed(value: boolean):void,
  stopOnSpecFailure(value: boolean):void,
  throwOnExpectationFailure(value: boolean):void
}

declare var jasmine: {
  DEFAULT_TIMEOUT_INTERVAL: number,
  MAX_PRETTY_PRINT_ARRAY_LENGTH: number,
  MAX_PRETTY_PRINT_CHARS: number,
  MAX_PRETTY_PRINT_DEPTH: number,
  addCustomEqualityTester(tester: (Object, Object) => ?boolean ): void,
  addMatchers(matchers: Object): void,
  addSpyStrategy(name: string, factory: Function): void,
  any(val: mixed): void,
  anything(): void,
  arrayContaining(val: mixed[]): void,
  arrayWithExactContents(val: mixed[]): void,
  clock(): JasmineClockType,
  createSpy(name?: string, originalFn?: Function): JasmineSpyType,
  createSpyObj(baseName?: string, methodNames: string[] | Object): Object,
  empty(): void,
  falsy(): void,
  getEnv(): JasmineEnvType,
  notEmpty(): void,
  objectContaining(sample: Object): void,
  stringMatching(RegExp | string): void,
  truthy(): void,
  addMatchers(val: JasmineMatchers): void
};
