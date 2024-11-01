```mermaid
sequenceDiagram
	participant browser
	participant server

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	Note to the right of browser: rerenders the note list on the page and sends the new note to the server

```
