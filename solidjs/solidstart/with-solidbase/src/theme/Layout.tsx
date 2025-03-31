import { RouteSectionProps } from "@solidjs/router";
import { ErrorBoundary } from "solid-js";

import { Title } from "@solidjs/meta";
import { useThemeListener } from "@kobalte/solidbase/client";
import { usePace } from "@kobalte/solidbase/default-theme/pace.js";
import { DefaultThemeComponentsProvider } from "@kobalte/solidbase/default-theme/context.js";

export default function (props: RouteSectionProps) {
	useThemeListener();
	usePace();

	return (
		<DefaultThemeComponentsProvider>
			<Title>Test</Title>
			<ErrorBoundary fallback={() => <div>Nothing found</div>}>
				<>{props.children}</>
			</ErrorBoundary>
		</DefaultThemeComponentsProvider>
	);
}
