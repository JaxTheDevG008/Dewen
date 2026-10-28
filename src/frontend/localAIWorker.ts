import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm"

const workerCode = `
  import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";
  const handler = new WebWorkerMLCEngineHandler();
  self.onmessage = (msg) => handler.onmessage(msg);
`;

const workerBlob = new Blob([workerCode], { type: "application/javascript" });
const workerUrl = URL.createObjectURL(workerBlob);

let engineInstance: MLCEngine | null = null;
const modelId