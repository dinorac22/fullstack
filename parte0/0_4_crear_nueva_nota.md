sequenceDiagram
    participant browser
    participant server

    Note over browser: El usuario escribe una nota y hace clic en "Save"
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: El cuerpo del POST contiene el texto de la nota y la fecha
    server-->>browser: HTTP 302 Redirect a /exampleapp/notes
    deactivate server

    Note over browser: El navegador sigue la redirección

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: El navegador ejecuta el JS nuevamente

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON con todas las notas (incluyendo la nueva)
    deactivate server

    Note right of browser: El JS renderiza las notas incluyendo la nueva
