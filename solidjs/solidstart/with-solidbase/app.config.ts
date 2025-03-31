import { defineConfig } from "@solidjs/start/config";
import { withSolidBase } from "@kobalte/solidbase/config";

export default defineConfig(
	withSolidBase(
		{
			server: {
				prerender: {
					crawlLinks: true,
				},
				esbuild: { options: { target: "es2022" } },
			},
			vite: {
				plugins: [
				],
			},
		},
		{
			title: "With SolidBase",
			description: "Testing",
			lang: "en",
		}
	)
);
