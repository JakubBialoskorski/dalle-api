# DALL-E 2 API

Used to generate images with [OpenAI DALL-E 2 system](https://openai.com/dall-e-2/) .

For example: 

| "Family walking through the Dolomites"        | "Volvo V50 driving fast in heavy snowstorm"   | "Freedom must be gained"                      |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| ![Example 1](/examples/example1.png?raw=true) | ![Example 2](/examples/example2.png?raw=true) | ![Example 3](/examples/example3.png?raw=true) |

Graphical previews / UI can be accessed on [OpenAI Labs page](https://labs.openai.com/) .

Kudos to [Fireship](https://fireship.io) for providing a supply of excellent ideas. I highly recommend visiting his [GitHub profile](https://github.com/fireship-io) .

## How to start

* Run `npm i` inside the repository to install required packages
* Register (for free) and get your API key from [OpenAI page](https://beta.openai.com/account/api-keys)
* Put your API key as `apiKey` in the `generate.js` file
* Put your desired paint phrase as `prompt` in the `generate.js` file
* Run with `node generate.js` - your image will be saved to the `/output` directory