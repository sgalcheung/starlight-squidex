import type { z } from "astro:content";

export interface Config<T extends string = string> {
	squidexAppName?: string;
	squidexClientId?: string;
	squidexClientSecret?: string;
	squidexUrl?: string;
	squidexContentSchemaMapping?: Record<T, z.ZodTypeAny>;
}

class ConfigService<T extends string = string> {
	private config: Config<T> = {
		squidexContentSchemaMapping: {} as Record<T, z.ZodTypeAny>,
	};

	setConfig(config: Config<T>) {
		if (!config.squidexUrl) throw new Error("Missing `squidexUrl` in config.");
		if (!config.squidexAppName)
			throw new Error("Missing `squidexAppName` in config.");
		if (!config.squidexClientId)
			throw new Error("Missing `squidexClientId` in config.");
		if (!config.squidexClientSecret)
			throw new Error("Missing `squidexClientSecret` in config.");

		this.config = config;
	}

	getConfig(): Config<T> {
		return this.config;
	}
}

// Export a single instance for application-wide use
export const configService = new ConfigService();
