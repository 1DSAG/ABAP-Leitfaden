---
layout: page
title: Dokumentation von Entwicklungsobjekten
permalink: /documentation/dev_object_related_doc/
parent: Dokumentation
nav_order: 2
---

{: .no_toc}
# Dokumentation von Entwicklungsobjekten

1. TOC
{:toc}

Neben Methoden, Funktionsbausteinen und Reports, die Dokumentation im Quellcode enthalten können, existieren weitere Entwicklungsobjekte im ABAP-System, die keinen Quellcode besitzen und daher auf anderem Weg dokumentiert werden müssen. Beispiele dafür sind:

* DDIC-Objekte
* Transaktionen

Da die Workbench-Dokumentation auch an das Transportwesen angeschlossen ist, steht sie in allen Einzelsystemen einer Systemlandschaft zur Verfügung. Weiterhin kann diese Dokumentation von allen Benutzern eingesehen werden und wird für Reports vom ABAP-System automatisch in die Benutzeroberfläche eingebunden. Ein weiterer Vorteil kann darin bestehen, dass die Dokumentation mehrsprachig geführt werden kann. Auf SAP-Systemen mit SAP_BASIS >= 7.40 können im Quellcode ABAP-Doc-Kommentare verwendet werden. Dies kann als Alternative zur Dokumentation in der ABAP-Workbench verwendet werden. Der volle Funktionsumfang von ABAP-Doc-Kommentaren lässt sich derzeit allerdings nur mit den ABAP-Development-Tools für Eclipse ausschöpfen. Bei Verwendung von Core Data Services zur Definition von DDIC-Objekten können wesentlich mehr Entwicklungsobjekte im Quellcode dokumentiert werden und die Notwendigkeit externer Dokumentation entfällt.

Beginnend mit SAP NetWeaver 7.50 lassen sich die ABAP-Doc-Kommentare von Klassen und Schnittstellen als HTML-Dateien exportieren. Die SAP erweitert ihr Repertoire ab ABAP Plattform 7.55 um eine weitere Technologie zur Dokumentation von ABAP-Entwicklungsobjekten. Das Knowledge Transfer Document fokussiert sich auf die neuen Objekttypen, die primär aus dem ABAP RESTful Application Programming Model (RAP) Kontext entstammen. Dieses umfasst unter anderem: CDS Views, Behavior Definitions, Service Definitions, Service Bindings, Annotation Definitions und Paket

## Kurztexte

Zu vielen Objekte können Kurztexte angelegt werden, wie eine Beschreibung zu einem Datenelement oder einer Methode.

## Knowledge Transfer Documents (KTD)

Seit ABAP Plattform 7.55 gibt es das Knowledge Transfer Document. KTD kann für jedes Element eines Objekts die Dokumentation einzeln erstellt werden. Es basiert auf Markdown-Sprache mit einfacher Textformatierungssyntax.

KTD müssen im selben Paket wie das Entwicklungsobjekt sein. Es wird nicht automatisch mit dem Entwicklungsobjekt transportiert, aber wenn das Entwicklungsobjekt gelöscht wird, wird auch das dazugehörige KTD gelöscht.

{: .recommendation } 
> Wir empfehlen, für alle Entwicklungsobjekte und unabhängig vom Quellcode die Dokumentationsfunktion der ABAP-Workbench zu nutzen. Die Dokumentationsfunktion sollte in folgender Reihenfolge angewendet werden, je nachdem für welches Objekt welche Art von Dokumentationsobjekt verfügbar ist: 1. Knowledge Transfer Documents 2. abapDoc 3. Kurztexte Hierbei sollte ausschließlich der Ist-Stand dokumentiert werden, gegebenenfalls angereichert um kurze Verweise auf die Änderungsdokumentation (Transportdokumentation, Defekt-Nummern).

# Dokumentation im Quellcode

## Dokumentationssprache

Entwicklungsteams arbeiten heutzutage überwiegend international zusammen. Auch wenn Sie derzeit rein deutschsprachig entwickeln, kann Ihr Projekt im Laufe der Zeit internationalisiert werden. Der Aufwand, der dann durch Koordinationsprobleme oder sogar nachträgliches Übersetzen entsteht, steht in keinem Verhältnis zu dem vielleicht größeren Aufwand durch englische Dokumentation. Es hat sich außerdem gezeigt, dass die Lesbarkeit von Quellcode und Kommentaren durch englischsprachige Kommentare erhöht wird. Denn die ABAP-Befehle selbst sind englisch und im Stil von Sätzen aufgebaut. Der Leser des Quellcodes muss bei englischer Dokumentation also nicht ständig die Sprache wechseln.

{: .recommendation }
> Es sollte im Unternehmen geklärt, was die Kommentierungssprache ist. Die Empfehlung ist in Englisch zu kommentieren.

## Dokumentation von Änderungen

Ab dem Zeitpunkt der Produktivsetzung eines Programms sollte darauf geachtet werden, dass Änderungen in Programmen angemessen dokumentiert werden. Hier ist das richtige Maß wesentlich: Eine vollständige Versionshistorie aller Änderungen und auskommentierter Quellcode reduzieren die Lesbarkeit des Quellcodes. Trotz dieses Nachteils dokumentieren einige Entwicklungsteams bewusst alle Änderungen im Quellcode, um die Fehlersuche auf Produktiv- oder Testsystemen zu vereinfachen, in denen die Versionshistorie nicht zur Verfügung steht.

{: .important }
> Nachträgliche Änderungen am Quellcode sollten nur in Ausnahmefällen direkt im Quellcode dokumentiert werden.

## Kommentare im Quellcode

Kommentare im Quellcode sollen dazu dienen, Entwicklern das Verstehen des Quellcodes zu erleichtern, sofern dies nicht durch geschickte Gestaltung des Quellcodes allein (Modularisierung, Namenswahl von Methoden und Variablen) erreichbar ist.

Kommentare sind für andere Entwickler und mit zunehmendem zeitlichem Abstand auch für den ursprünglichen Entwickler gedacht.

Stern-Kommentare sollten nur im Programmkopf oder für das temporäre Auskommentieren von altem Quellcode verwendet werden.

Für alle anderen Kommentare empfiehlt SAP, Inline-Kommentare zu verwenden. Diese sollten jeweils vor dem Quellcode stehen, den sie dokumentieren, und genauso eingerückt sein wie dieser Quellcode. Letzteres wird (nur) für Inline-Kommentare auch vom Pretty Printer korrekt durchgeführt.

{: .recommendation }
> Sie sollten die Frage beantworten, „Warum” etwas programmiert wurde und nicht „Was”. Letzteres ergibt sich aus dem Quellcode ohnehin, während die Beweggründe oft nicht klar erkennbar sind. Gerade sie helfen beim Verständnis aber wesentlich weiter. Dabei gilt der Grundsatz: So wenig Kommentar wie möglich, so viel Kommentar wie nötig.

WEITERE QUELLEN

1. Horst Keller, Wolf Hagen Thümmel: ABAP-Programmierrichtlinien. SAP Press, 2009. ISBN: 978-3-8362-1286-1
2. Klaus Haeuptle, Florian Hoffmann, Rodrigo Jordão, Michel Martin, Anagha Ravinarayan, Kai Westerholz: Clean ABAP. SAP PRESS, 2022. ISBN: 978-3-8362-8659-6

## ABAP Doc

ABAP Doc ermöglicht es Klassen, Interfaces und Funktionsbausteine zu dokumentieren. Die Kommentare bestehen aus einer oder mehrerer kommentierte Zeilen.  
- ABAP Doc beginnt mit dem Präfix `"!.`.  
- ABAP Doc kann verwendet werden um grundsätzliche Informationen zur Klasse, Methode oder Interface direkt im Quellcode zu dokumentieren. Des Weiteren können die Parameter einer Methode über ABAP Doc im Einzelnen mit Dokumentation versehen werden. Diese ABAP Doc Kommentare werden direkt vor deklarative Statements platziert.  
- In ABAP Doc können zudem HTML Tags zur Formatierung verwendet werden, was die Lesbarkeit und Struktur der Dokumentation erhöht und verschönert.  
- Bei der empfohlenen Nutzung von ADT ist die Erstellung von ABAP Doc durch Nutzung von Quickfix sehr einfach und effizient durchzuführen [DSAG AG ADT Leitfaden: Was sind ABAP Doc](https://1dsag.github.io/ADT-Leitfaden/working-with-adt/features/abap-doc/#was-sind-abap-doc)

Der Vorteil der Nutzung von ABAP Doc besteht darin, dass diese Kommentare in folgenden Funktionen der ADT angezeigt werden und damit dem Entwickler wertvolle Informationen direkt bei der Code Erstellung zur Verfügung stehen.

* ABAP Element Info view
* Element Information Popup
* Code Completion Liste.

Und diese ABAP Doc Kommentare können aus ADT in eine HTML Datei extrahiert und somit für eine weitere Verwendung außerhalb des Codes z.B. auf internen Seiten, verwendet werden. Wird der Code und die dazu bestehende ABAP Doc Dokumentation gleichzeitig gepflegt und nach jeder Änderung ABAP Doc extrahiert, ist auch die externe Dokumentation ohne Mehraufwand aktuell.
Wird die ABAP Doc Dokumentation strukturiert erstellt, kann diese außerdem für die Verwendung mit unterstützender generativer AI zur Erstellung von weiteren Dokumentationen verwendet werden (siehe [Kapitel Künstliche Intelligenz](/ABAP-Leitfaden/artificial-intelligence/#ai-als-werkzeug-bei-dokumentationserstellung)).
