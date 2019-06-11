Examples on React memo with general how-to's and common pitfalls to watch out for.

## How to Run

1. npm install
2. npm start
3. *goto* `localhost:9090`

## Sections

### `/`
Welcome page.

### `/basic-[problem/soln]`
An example behind how the component tree re-renders and the usage of `React.memo` to prevent unnecessary re-renders.

### `/pitfall-[problem/soln]`
Shows how common inline usages cause re-renders similar to `shouldComponentUpdate`.

### `/hooks`
A demonstration of `React.memo`'s compatibility with React hooks and functional components that have state.

### `/arrays-[problem/soln]`
Demonstrating how improper state updating can lead to missing re-renders using `Array.push`.

### `/tricks-[problem/soln]`
Examples of nitty gritty nuances about `React.memo` like node identity and prop comparators.
