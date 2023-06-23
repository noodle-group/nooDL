# nooDL: US Driver License Number Validator

`nooDL` is a TypeScript-based Node.js package providing efficient validation of United States driver license numbers. It covers all 50 states and the District of Columbia.

Based on and updated in accordance with the formats provided by the [NTSI](https://ntsi.com/drivers-license-format/).

## Features

- **Comprehensive Coverage**: nooDL supports validation for driver license numbers from all 50 states and the District of Columbia.
- **Efficiency**: The package uses Regular Expressions (RegEx) for quick and accurate validation.
- **Flexibility**: Matches a variety of license formats as per each state's specifications.
- **Ease of Use**: A simple API that requires just the state and the license number to validate.
- **TypeScript Support**: Ensures type safety and provides autocompletion features in IDEs. Also compatible with CommonJS.
- **Thoroughly Tested**: 100% coverage.

## Installation

To install `nooDL`, run the following command in your terminal:

```bash
npm i @noodle-group/noodl
```

## Usage

Here are some basic usage examples:

```typescript
import { validateLicense } from '@noodle-group/noodl';

const result0 = validateLicense('NY', '12345678'); // Valid
console.log(result0); // Output: 'numeric-8-to-9'

const result1 = validateLicense('NY', '1234567890'); // Invalid
console.log(result1); // Output: null

```

```typescript
import { matchLicense } from 'license-number-validator';

const result = matchLicense('12345678');
console.log(result);
// Output:
// {
//   "AL": [
//       "numeric-1-to-8",
//   ],
//   "AR": [
//       "numeric-4-to-9",
//   ],
//   "GA": [
//       "numeric-7-to-9",
//   ],
//   "LA": [
//       "numeric-1-to-9",
//   ],
//   "ME": [
//       "numeric-8",
//   ],
//   "NC": [
//       "numeric-1-to-12",
//   ],
//   "NM": [
//       "numeric-8-to-9",
//   ],
//   "NY": [
//       "numeric-8-to-9",
//   ],
//   "OH": [
//       "numeric-8",
//   ],
//   "OR": [
//       "numeric-1-to-9",
//   ],
//   "PA": [
//       "numeric-8",
//   ],
//   "SC": [
//       "numeric-5-to-11",
//   ],
//   "SD": [
//       "numeric-6-to-10",
//   ],
//   "TN": [
//       "numeric-7-to-9",
//   ],
//   "TX": [
//       "numeric-7-to-8",
//   ],
//   "UT": [
//       "numeric-4-to-10",
//   ],
//   "VT": [
//       "numeric-8",
//   ],
// }
```

## API

### `validateLicense(state: State, license: string): string | null`

This function validates a license number for a specific state and returns the matched pattern name if the license number is valid. If the license number is invalid or the state is not supported, it returns `null`.

**Parameters:**

- `state: State` - The state for which the license number should be validated.
- `license: string` - The license number to be validated.

**Returns:**

- `string | null` - The matched pattern name if the license number is valid for the given state, or `null` if the license number is invalid or the state is not supported.

### `matchLicense(license: string): MatchedStates`

This function matches a license number against all supported states and returns an object containing the matched patterns for each state.

**Parameters:**

- `license: string` - The license number to be matched.

**Returns:**

- `MatchedStates` - An object containing the matched patterns for each state. The keys of the object represent the matched states, and the values are arrays of matched pattern names.

## License

`nooDL` is licensed under the MIT license. See [LICENSE.md](https://github.com/noodle-group/nooDL/blob/master/LICENSE) for more details.
