# Google Apps Script with Typescript

Google Apps Script does **not** support ES modules or Typescript. 

Well, this template does! Check out these sick features, yo:

* Typescript support!
* `import` / `export` support
* `npm` package support

## Usage

* Add your script id to [.clasp.json](./.clasp.json)
* Put your code into [index.ts](./src/index.ts)

> **Warning**: Make sure **not** to `export` any functions in your entry point code (`index.ts`)

## Testing

Run your build locally using:

`npm run build`

Deploy to your sheet using: 

`npm run deploy`