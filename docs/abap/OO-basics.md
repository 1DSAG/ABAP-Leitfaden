---
layout: page
title: Ergänzungen zu Objektorientierung
permalink: /abap/oo-basics/
parent: Entwurf und Gestaltung moderner SAP-Anwendungen
grand_parent: Moderne ABAP Entwicklung
nav_order: 1
---

1. TOC
{:toc}

{: .no_toc}
# Ergänzungen und Details zu Themen der Objektorientierung

Hier finden Sie ergänzende Informationen zu den Themen der Objektorientierung:

## Grundprinzipien der Objektorientierung (SOLID) - Ergänzung

<dl>
  <dt>Single Responsibility Principle</dt>
  <dd>
    Eine Codeeinheit (Klasse, Methode, ...) sollte immer einen Zweck und damit einen Grund für Anpassungen haben. Eine Methode, die etwa
    Customizing-Einträge liest, anhand derer Daten aufbereitet, und anschließend ein Formular ausgibt, hat drei Zwecke und auch mögliche Gründe für
    Anpassungen (nämlich immer, wenn sich etwas an Customizing/Daten/Formular) ändern soll. Diese Methode sollte also aufgeteilt werden.
  </dd>

  <dt>Open/Closed Principle</dt>
  <dd>
    Ein Modul sollte offen für Erweiterungen und geschlossen für Veränderungen sein. Das heißt, das Anpassungen vorgenommen werden können, ohne
    dazu z.B. die ursprünglich genutzte Klasse zu bearbeiten. Eine Klasse `Drucker`, die etwa im Konstruktor die zu druckenden Daten beschafft, kann
    ohne Anpassung des ursprünglichen Codes nichts anderes drucken. Bekommt diese Klasse hingegen eine Instanz des Interfaces `Datenbeschaffung` im
    Konstruktor übergeben und ruft passende Methoden dieser auf, kann zur Anpassung einfach eine zweite Datenbeschaffungsklasse entwickelt werden.
  </dd>

  <dt>Liskov Substitution Principle</dt>
  <dd>
    Code, der mit einer Klasse oder einem Interface arbeitet, sollte immer mit implementierenden oder erbenden Klassen funktionieren. Eine erbende Klasse
    sollte also beispielsweise nicht in einer der implementierten Methoden eine unerwartete Exception werfen und somit einen Dump auslösen.
  </dd>

  <dt>Interface Segregation Principle</dt>
  <dd>
    Interfaces sollten so aufgeteilt sein, dass Nutzer nur notwendige Abhängigkeiten erhalten. Eine Datenbankzugriffsklasse, die in einer Anwendung
    verwendete Daten lesen und schreiben kann, könnte etwa ein Interface `Datenleser` und ein Interface `Datenschreiber` implementieren, so dass
    nur lesende Nutzer keine Abhängigkeit zu schreibenden Methoden haben.
  </dd>

  <dt>Dependency Inversion Principle</dt>
  <dd>
    Abhängigkeiten wie z.B. die Instanz einer Klasse, die das Interface `Datenbeschaffung` implementiert, sollten nicht durch eine verwendende Klasse `Anzeiger`
    erzeugt werden, sondern dieser stattdessen im Konstruktor oder einer Methode übergeben werden. So kann für den Test von `Anzeiger` einfach eine andere
    Implementierung für die Datenbeschaffung übergeben werden.
  </dd>
</dl>

## Entwurfsmuster

Hier finden Sie ergänzende Erläuterungen zu den wichtigsten Entwurfsmustern:

### Singleton-Pattern

Das Singleton-Pattern zielt darauf ab, dass zu einer Klasse nur eine einzige Objektinstanz zur Laufzeit existiert bzw. existieren kann. Dazu wird die erste durch den Konstruktor erzeugte Instanz in eine Klassenvariable (CLASS-DATA) geschrieben und bei den folgenden Aufrufen des Klassenkonstruktors zur Erzeugung eines neuen Objektes wird ebendiese gespeicherte Instanz aus der Klassenvariable gelesen und zurückgegeben. So kann man kontrollieren, dass zu jeder Zeit nur eine Instanz einer Klasse existiert.
Hier ein Beispiel, wie dies umgesetzt werden könnte:

```ABAP
CLASS zcl_singleton DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      get_instance RETURNING VALUE(instance) TYPE REF TO zcl_singleton.
    METHODS:
      do_something.
  PRIVATE SECTION.
    CLASS-DATA:
      instance_ref TYPE REF TO zcl_singleton.
    METHODS:
      constructor.
ENDCLASS.

CLASS zcl_singleton IMPLEMENTATION.
  METHOD constructor.
    " Konstruktor ist privat, um direkte Instanziierung zu verhindern
  ENDMETHOD.
  METHOD get_instance.
    IF instance_ref IS INITIAL.
      CREATE OBJECT instance_ref.
    ENDIF.
    instance = instance_ref.
  ENDMETHOD.
  METHOD do_something.
    WRITE: / 'Singleton-Methode wurde aufgerufen'.
  ENDMETHOD.
ENDCLASS.

* Verwendung
DATA(singleton) = zcl_singleton=>get_instance( ).
singleton->do_something( ).
```

### Factory-Pattern

Das Factory-Pattern ist ein Entwurfsmuster, das die Erstellung von Objekten kapselt. In ABAP wird es häufig verwendet, um die Instanziierung von Objekten zu zentralisieren und zu vereinfachen – besonders bei polymorphen Objekten oder wenn die Erzeugung komplex ist. Das Pattern bietet mehrere Vorteile: Änderungen an der Erzeugungslogik müssen nur an einer Stelle erfolgen, die Rückgabe eines Interfaces oder einer abstrakten Klasse (Polymorphismus) ist möglich und neue Typen können leicht ergänzt werden.
Dies könnte beispielhaft folgendermaßen umgesetzt werden:

```ABAP
* Abstrakte Basisklasse oder Interface
INTERFACE if_vehicle.
  METHODS drive.
ENDINTERFACE.

* Konkrete Implementierungen
CLASS zcl_car DEFINITION.
  PUBLIC SECTION.
    INTERFACES if_vehicle.
ENDCLASS.

CLASS zcl_car IMPLEMENTATION.
  METHOD if_vehicle~drive.
    WRITE: / 'Das Auto fährt los!'.
  ENDMETHOD.
ENDCLASS.

CLASS zcl_bike DEFINITION.
  PUBLIC SECTION.
    INTERFACES if_vehicle.
ENDCLASS.

CLASS zcl_bike IMPLEMENTATION.
  METHOD if_vehicle~drive.
    WRITE: / 'Das Fahrrad fährt los!'.
  ENDMETHOD.
ENDCLASS.

* Factory-Klasse
CLASS zcl_vehicle_factory DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      create_vehicle
        IMPORTING type_name TYPE string
        RETURNING VALUE(vehicle) TYPE REF TO if_vehicle.
ENDCLASS.

CLASS zcl_vehicle_factory IMPLEMENTATION.
  METHOD create_vehicle.
    CASE type_name.
      WHEN 'CAR'.
        CREATE OBJECT vehicle TYPE zcl_car.
      WHEN 'BIKE'.
        CREATE OBJECT vehicle TYPE zcl_bike.
      WHEN OTHERS.
        vehicle = NULL.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.

* Verwendung
DATA(vehicle) = zcl_vehicle_factory=>create_vehicle( type_name = 'CAR' ).
IF vehicle IS BOUND.
  vehicle->drive( ).
ENDIF.
```

### Facade-Pattern

Das Facade-Pattern wird in ABAP verwendet, um eine vereinfachte Schnittstelle zu einem komplexen Subsystem bereitzustellen. Es kapselt die Komplexität mehrerer Klassen oder Prozesse hinter einer einzigen, leicht zu verwendenden Klasse – der „Fassade“. Dies bietet folgende Vorteile: Der Aufrufer muss sich nicht mit Details der Subsysteme beschäftigen, Änderungen in den Subsystemen wirken ich nicht direkt auf den Aufrufe aus und die Fassade kann in verschiedenen Kontexten wiederverwendet werden.
Dies könnte beispielhaft folgendermaßen umgesetzt werden:

```ABAP
* Subsystem-Klassen
CLASS zcl_order_processor DEFINITION.
  PUBLIC SECTION.
    METHODS process_order.
ENDCLASS.

CLASS zcl_order_processor IMPLEMENTATION.
  METHOD process_order.
    WRITE: / 'Bestellung verarbeitet'.
  ENDMETHOD.
ENDCLASS.

CLASS zcl_invoice_generator DEFINITION.
  PUBLIC SECTION.
    METHODS generate_invoice.
ENDCLASS.

CLASS zcl_invoice_generator IMPLEMENTATION.
  METHOD generate_invoice.
    WRITE: / 'Rechnung erstellt'.
  ENDMETHOD.
ENDCLASS.

CLASS zcl_shipping_service DEFINITION.
  PUBLIC SECTION.
    METHODS ship_order.
ENDCLASS.

CLASS zcl_shipping_service IMPLEMENTATION.
  METHOD ship_order.
    WRITE: / 'Versand durchgeführt'.
  ENDMETHOD.
ENDCLASS.

* Facade-Klasse
CLASS zcl_order_facade DEFINITION.
  PUBLIC SECTION.
    METHODS complete_order_process.
ENDCLASS.

CLASS zcl_order_facade IMPLEMENTATION.
  METHOD complete_order_process.
    DATA(processor) = NEW zcl_order_processor( ).
    DATA(invoice)   = NEW zcl_invoice_generator( ).
    DATA(shipping)  = NEW zcl_shipping_service( ).

    processor->process_order( ).
    invoice->generate_invoice( ).
    shipping->ship_order( ).
  ENDMETHOD.
ENDCLASS.

* Verwendung
DATA(facade) = NEW zcl_order_facade( ).
facade->complete_order_process( ).
```

### MVC-Pattern

Das MVC-Pattern wird verwendet, um die Programmierlogik in die 3 Bereiche Model (Datenmodell), View (Präsentationslogik) und Controller (Businesslogik) zu unterteilen.
Das Model-View-Controller (MVC) Pattern ist ein bewährtes Architekturmodell, das auch in ABAP – insbesondere im Kontext von SAP eingesetzt werden kann. Es trennt die Anwendung in die drei Hauptkomponenten "Model" (Geschäftslogik und Datenzugriff), "View" (Darstellung der Daten / UI) und "Controller" (Vermittlung zwischen Model und View).
Der Einsatz von MVC bietet folgende Vorteile: Bessere Wartbarkeit und Testbarkeit aufgrund der Trennung von Anliegen ("Separation of concerns"), Wiederverwendbarkeit von Views und Models, Skalierbarkeit für komplexe Anwendungen.

Das Restful Application Programming Model bildet das MVC Pattern ab, da hier durch das technische Framework bereits eine strikte Trennung der Belange in Form von Model = CDS, Control = Behavior Definition und View = Fiori vorgegeben ist.

```ABAP
* Model Klasse
CLASS zcl_model DEFINITION.
  PUBLIC SECTION.
    METHODS:
      get_customer_name IMPORTING customer_id TYPE i RETURNING VALUE(customer_name) TYPE string.
ENDCLASS.

CLASS zcl_model IMPLEMENTATION.
  METHOD get_customer_name.
    CASE customer_id.
      WHEN 1. customer_name = 'Max Mustermann'.
      WHEN 2. customer_name = 'Erika Musterfrau'.
      WHEN OTHERS. customer_name = 'Unbekannt'.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.

* View Klasse
CLASS zcl_view DEFINITION.
  PUBLIC SECTION.
    METHODS:
      display_customer_name IMPORTING customer_name TYPE string.
ENDCLASS.

CLASS zcl_view IMPLEMENTATION.
  METHOD display_customer_name.
    WRITE: / 'Kundenname:', customer_name.  "hier könnte auch eine ALV-Ausgabe o.ä. stehen
  ENDMETHOD.
ENDCLASS.

* Controller Klasse
CLASS zcl_controller DEFINITION.
  PUBLIC SECTION.
    METHODS:
      show_customer IMPORTING customer_id TYPE i.
  PRIVATE SECTION.
    DATA:
      model TYPE REF TO zcl_model,
      view  TYPE REF TO zcl_view.
ENDCLASS.

CLASS zcl_controller IMPLEMENTATION.
  METHOD show_customer.
    CREATE OBJECT model.
    CREATE OBJECT view.

    DATA(name) = model->get_customer_name( customer_id ).
    view->display_customer_name( name ).
  ENDMETHOD.
ENDCLASS.
```

Auch hier können wir leider nicht im Detail auf alle Entwurfsmuster eingehen, im Internet und der Fachliteratur finden sie zahlreiche Möglichkeiten, sich dem Thema anzunähern und in die Organisation zu bringen. Ein guter Startpunkt für die eigene Recherche ist z.B. [ABAP-OO Design Patterns m. Beispielen](https://zevolving.com/category/abapobjects/oo-design-patterns/).