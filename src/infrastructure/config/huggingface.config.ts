import { HUGGING_FACE_API_TOKEN } from '@env';

interface HuggingFaceConfig {
    token: string;
}

export const huggingFaceConfig: HuggingFaceConfig = {
    token: HUGGING_FACE_API_TOKEN || '',
};
