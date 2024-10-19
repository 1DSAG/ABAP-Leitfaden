---
layout: page
title: Dokumentation
permalink: /documentation/
next_page_title: Dokumentation
nav_order: 1
---

{: .no_toc}
# Dokumentation

1. TOC
{:toc}

Die Dokumentation von Software ist in vielen Fällen genauso wichtig wie die Entwicklung selbst. Fehlt die Dokumentation oder ist sie nicht in ausreichendem Maß vorhanden, führt dies spätestens bei der Weiterentwicklung oder dem Wechsel von Entwicklern zu erhöhten Aufwänden. In diesem Kapitel werden unterschiedliche Möglichkeiten zur Dokumentation von Entwicklungen in einem SAP-System dargestellt.

Allgemein ist es bei jeder Dokumentation wichtig, das richtige Maß zu finden und umzusetzen. In der Praxis findet man leider immer wieder die beiden Extreme: entweder eine sehr umfangreiche oder gar keine Dokumentation. Die umfangreiche Dokumentation ist allerdings inhaltlich oft mangelhaft, weil sie viele redundante/kopierte Informationen enthält und nicht aktuell gehalten wird. Sind die offiziellen Anforderungen an die Dokumentation zu hoch oder zu abstrakt, führt dies manchmal dazu, dass sie gar nicht erst erstellt wird.

Die Dokumentation sollte während der Entwicklung, unbedingt aber vor der Produktivsetzung bzw. Bereitstellung erstellt werden und es sollte keine Produktivsetzung ohne fertige Dokumentation geben. Ansonsten ergibt sich in der Regel ein Mehraufwand oder letztlich eine fehlende Dokumentation.

## Dokumentation unabhängig von Entwicklungsobjekten

Neben der Beschreibung der vielen Entwicklungsobjekte, die einzelne, sehr spezielle Funktionen im ABAP-System übernehmen, gibt es auch den Bedarf, die größeren Zusammenhänge innerhalb eines Moduls und modulübergreifend darzustellen. Dazu gehören z.B. Antworten auf Fragen wie:

* Welche Abhängigkeiten gibt es zwischen den Modulen?
* Welche Anwendungen werden bei welchen Geschäftsprozessen verwendet?
* Welche Hintergrundjobs laufen wann am Tag / im Monat / im Jahr und welche Entwicklungsobjekte sind davon betroffen?

Für die Beantwortung dieser Fragen findet sich unserer Meinung nach kein geeignetes Ablagemedium innerhalb der SAP-Entwicklungsumgebung, das insbesondere Grafiken gut integriert. Wir empfehlen daher, für die Dokumentation dieser übergreifenden Zusammenhänge auf andere Medien zurückzugreifen. Beispiele dafür sind:

* SAP Solution Manager
* Interne (Produkt-)Wikis
* Dokumente in gepflegten öffentlichen Verzeichnissen (Portalablage, SharePoint, Fileshare …)

Die Erfahrung zeigt, dass die Herausforderung in diesem Bereich primär in der Frage der Disziplin liegt. Diese Herausforderung kann kein Tool lösen, sondern nur das Entwicklungsteam und die zugehörige Entwicklungsleitung.

Zur Dokumentation der Systemarchitektur inklusive Entwurfsentscheidungen bietet sich die Verwendung einer Vorlage an, wie z.B. das arc42-Template. Dies kann verhindern, dass wesentliche Aspekte in der Dokumentation vergessen werden und beschleunigt - bei Verwendung einer Vorlage über mehrere Projekte hinweg - die Suche nach spezifischen Informationen. Zudem erleichtert die Festlegung von Vorlagen das Erstellen der Dokumentation parallel zur Entwicklung und die Einhaltung eines angemessenen Abstraktionsniveaus.

Dokumentenvorlagen wie das arc42-Template müssen nicht immer vollständig “ausgefüllt” werden, sondern relevante Teile sollen je nach Art und Umfang des Entwicklungsprojekts identifiziert und der Rest gelöscht werden.
 
Darüber hinaus kann eine veraltete Dokumentation irreführend sein. Deshalb sollte in allen Dokumenten der Stand und eine Versionierung enthalten sein, um die Aktualität bewerten zu können.

Innerhalb einer SAP-Systemlandschaft bietet der SAP Solution Manager Möglichkeiten zur Projektdokumentation. Die nachfolgenden Links bieten weitere Informationen dazu.

WEITERE QUELLEN  
1.	Das arc42-Template zur Architekturdokumentation, [Arc42-Template](https://arc42.org/download)  (aufgerufen am: 19.09.2024)
2.	Stefan Zörner: Softwarearchitekturen dokumentieren und kommunizieren. Carl Hanser Verlag GmbH Co KG, 2021. ISBN: 978-3446469280


## Dokumentation von Entwicklungsobjekten
Neben Methoden, Funktionsbausteinen und Reports, die Dokumentation im Quellcode enthalten können, existieren weitere Entwicklungsobjekte im ABAP-System, die keinen Quellcode besitzen und daher auf anderem Weg dokumentiert werden müssen. Beispiele dafür sind:

* DDIC-Objekte
* Transaktionen

| BEST PRACTICE |
|---------------|
|Wir empfehlen, für alle Entwicklungsobjekte und unabhängig vom Quellcode die Dokumentationsfunktion der ABAP-Workbench zu nutzen und die Aufgaben und Bedeutungen dieser Objekte im SAP-System zu dokumentieren. Hierbei sollte ausschließlich der Ist-Stand dokumentiert werden, gegebenenfalls angereichert um kurze Verweise auf die Änderungsdokumentation (Transportdokumentation, Defekt-Nummern).|

Da die Workbench-Dokumentation auch an das Transportwesen angeschlossen ist, steht sie in allen Einzelsystemen einer Systemlandschaft zur Verfügung. Weiterhin kann diese Dokumentation von allen Benutzern eingesehen werden und wird für Reports vom ABAP-System automatisch in die Benutzeroberfläche eingebunden. Ein weiterer Vorteil kann darin bestehen, dass die Dokumentation mehrsprachig geführt werden kann. Auf SAP-Systemen mit SAP_BASIS >= 7.40 können im Quellcode ABAP-Doc-Kommentare verwendet werden. Dies kann als Alternative zur Dokumentation in der ABAP-Workbench verwendet werden. Der volle Funktionsumfang von ABAP-Doc-Kommentaren lässt sich derzeit allerdings nur mit den ABAP-Development-Tools für Eclipse ausschöpfen. Bei Verwendung von Core Data Services zur Definition von DDIC-Objekten können wesentlich mehr Entwicklungsobjekte im Quellcode dokumentiert werden und die Notwendigkeit externer Dokumentation entfällt. 
Beginnend mit SAP NetWeaver 7.50 lassen sich die ABAP-Doc-Kommentare von Klassen und Schnittstellen als HTML-Dateien exportieren. 

## Dokumentation im Quellcode

### Dokumentationssprache

| BEST PRACTICE |
|---------------|
|Als Kommentierungssprache sollte Englisch verwendet werden.|

Entwicklungsteams arbeiten heutzutage überwiegend international zusammen. Auch wenn Sie derzeit rein deutschsprachig entwickeln, kann Ihr Projekt im Laufe der Zeit internationalisiert werden. Der Aufwand, der dann durch Koordinationsprobleme oder sogar nachträgliches Übersetzen entsteht, steht in keinem Verhältnis zu dem vielleicht größeren Aufwand durch englische Dokumentation.Es hat sich außerdem gezeigt, dass die Lesbarkeit von Quellcode und Kommentaren durch englischsprachige Kommentare erhöht wird. Denn die ABAP-Befehle selbst sind englisch und im Stil von Sätzen aufgebaut. Der Leser des Quellcodes muss bei englischer Dokumentation also nicht ständig die Sprache wechseln.

### Dokumentation von Änderungen
Ab dem Zeitpunkt der Produktivsetzung eines Programms sollte darauf geachtet werden, dass Änderungen in Programmen angemessen dokumentiert werden. Hier ist das richtige Maß wesentlich: Eine vollständige Versionshistorie aller Änderungen und auskommentierter Quellcode reduzieren die Lesbarkeit des Quellcodes. Trotz dieses Nachteils dokumentieren einige Entwicklungsteams bewusst alle Änderungen im Quellcode, um die Fehlersuche auf Produktiv- oder Testsystemen zu vereinfachen, in denen die Versionshistorie nicht zur Verfügung steht. 

| BEST PRACTICE |
|---------------|
|Nachträgliche Änderungen am Quellcode sollten - von Headerkommentaren abgesehen - nur in Ausnahmefällen direkt im Quellcode dokumentiert werden.|

### Kommentare im Quellcode
Kommentare im Quellcode sollen dazu dienen, Entwicklern das Verstehen des Quellcodes zu erleichtern, sofern dies nicht durch geschickte Gestaltung des Quellcodes allein (Modularisierung, Namenswahl von Methoden und Variablen) erreichbar ist.

Kommentare sind für andere Entwickler und mit zunehmendem zeitlichen Abstand auch für den ursprünglichen Entwickler gedacht. Sie sollten die Frage beantworten, „Warum” etwas programmiert wurde und nicht „Was”. Letzteres ergibt sich aus dem Quellcode ohnehin, während die Beweggründe oft nicht klar erkennbar sind. Gerade sie helfen beim Verständnis aber wesentlich weiter. Dabei gilt der Grundsatz: So wenig Kommentar wie möglich, so viel Kommentar wie nötig.

Stern-Kommentare sollten nur im Programmkopf oder für das temporäre Auskommentieren von altem Quellcode verwendet werden.

Für alle anderen Kommentare empfiehlt SAP, Inline-Kommentare zu verwenden. Diese sollten jeweils vor dem Quellcode stehen, den sie dokumentieren, und genauso eingerückt sein wie dieser Quellcode. Letzteres wird (nur) für Inline-Kommentare auch vom Pretty Printer korrekt durchgeführt. 

WEITERE QUELLEN
1.	Horst Keller, Wolf Hagen Thümmel: ABAP-Programmierrichtlinien. SAP Press, 2009. ISBN: 9783836212861

##Kommentarartefakte

###In the source code editor, they can be placed in an empty line directly in front of a declarative statement. You can document both globally available artifacts (such as classes, interfaces, their methods, attributes, or method parameter) and local artifacts (such as variables and field-symbols)

### abapDoc

abapDoc ermöglicht es Klassen, Interfaces und Functionsbausteine zu dokumentieren. Die Kommentare bestehen aus einer oder mehr kommentierte Zeile. abapDoc beginnt mit dem Präfix "!.

Im Quelltexteditor können abapDoc Kommentare vor deklarativen Statements platziert werden.

abapDoc Kommentare werden angezeigt in
*ABAP Element Info view
*Element Information Popup
*Code Completion Liste.



### Knowledge Transfer Documents (KTD)








  

