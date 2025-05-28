sequenceDiagram
    participant browser
    participant server

    Note over browser: El usuario escribe una nota y hace clic en "Save"

    Note right of browser: JavaScript captura el evento y crea un objeto de nota

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: El cuerpo del POST contiene el contenido y fecha
    server-->>browser: HTTP 201 Created (sin redirección)
    deactivate server

    Note right of browser: JS agrega la nueva nota al estado local y actualiza la vista dinámicamente sin recargar
