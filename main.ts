import * as obsidian from "obsidian";
import { Extension } from "@codemirror/state";
import { editorPlugin } from "src/EditorPlugin";
import { graphlessLinksPostProcessor } from "src/PostProcessor";

// The main plugin class
export default class GraphlessLinksPlugin extends obsidian.Plugin {
	editorPlugin: Extension;

	async onload() {
		this.editorPlugin = editorPlugin(this.app);
		this.registerEditorExtension(this.editorPlugin);
		this.registerMarkdownPostProcessor(graphlessLinksPostProcessor(this.app));
	}

	onunload() { }
}
