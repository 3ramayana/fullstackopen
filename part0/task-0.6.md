```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: {content: "AMBOI", date: "2023-03-10T21:03:23.657Z"}

    activate server
    server-->>browser: message: note created  (201)
    deactivate server

   Note right of browser: The browser executes the event handler that renders the notes

```
