import * as env from 'env-var';
import { config } from 'dotenv';
config();

export const getPort = () => env.get('PORT').required().asPortNumber();

export const getAuthSecret = () => ({
	atSecret: env.get('AT_SECRET').required().asString(),
	atSecretExpires: env.get('AT_SECRET_EXPIRES').required().asString(),
	rtSecret: env.get('RT_SECRET').required().asString(),
	rtSecretExpires: env.get('RT_SECRET_EXPIRES').required().asString(),
});

export const getGoogleAuthSecret = () => ({
	googleClientId: env.get('GOOGLE_CLIENT_ID').required().asString(),
	googleSecret: env.get('GOOGLE_SECRET').required().asString(),
});
