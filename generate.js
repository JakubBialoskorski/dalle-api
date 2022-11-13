import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from "fs";

const configuration = new Configuration({
    apiKey: 'PUT-YOUR-API-KEY-HERE',
});

const openai = new OpenAIApi(configuration);

const prompt = 'PHRASE-TO-PAINT'

const result = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
});

const url = result.data.data[0].url;
console.log(url);

const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from ( await blob.arrayBuffer() );
writeFileSync(`./output/${Date.now()}.png`, buffer);
