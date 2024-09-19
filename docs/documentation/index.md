---
layout: page
title: Dokumentation
permalink: /documentation/
next_page_title: Dokumentation
nav_order: 1
---

{: .no_toc}
# Dokumentation

Die Dokumentation von Software ist in vielen Fällen genauso wichtig wie die Entwicklung selbst. Fehlt die Dokumentation oder ist sie nicht in ausreichendem Maß vorhanden, führt dies spätestens bei der Weiterentwicklung oder dem Wechsel von Entwicklern zu erhöhten Aufwänden. In diesem Kapitel werden unterschiedliche Möglichkeiten zur Dokumentation von Entwicklungen in einem SAP-System dargestellt.

Allgemein ist es bei jeder Dokumentation wichtig, das richtige Maß zu finden und umzusetzen. In der Praxis findet man leider immer wieder die beiden Extreme: entweder eine sehr umfangreiche oder gar keine Dokumentation. Die umfangreiche Dokumentation ist allerdings inhaltlich oft mangelhaft, weil sie viele redundante/kopierte Informationen enthält und nicht aktuell gehalten wird. Sind die offiziellen Anforderungen an die Dokumentation zu hoch oder zu abstrakt, führt dies manchmal dazu, dass sie gar nicht erst erstellt wird.

Die Dokumentation sollte während der Entwicklung, unbedingt aber vor der Produktivsetzung bzw. Bereitstellung erstellt werden und es sollte keine Produktivsetzung ohne fertige Dokumentation geben. Ansonsten ergibt sich in der Regel ein Mehraufwand oder letztlich eine fehlende Dokumentation.

1. Dokumentation unabhängig von Entwicklungsobjekten
{:toc}

Neben der Beschreibung der vielen Entwicklungsobjekte, die einzelne, sehr spezielle Funktionen im ABAP-System übernehmen, gibt es auch den Bedarf, die größeren Zusammenhänge innerhalb eines Moduls und modulübergreifend darzustellen. Dazu gehören z.B. Antworten auf Fragen wie:

●	Welche Abhängigkeiten gibt es zwischen den Modulen?
●	Welche Anwendungen werden bei welchen Geschäftsprozessen verwendet?
●	Welche Hintergrundjobs laufen wann am Tag / im Monat / im Jahr und welche Entwicklungsobjekte sind davon betroffen?

Für die Beantwortung dieser Fragen findet sich unserer Meinung nach kein geeignetes Ablagemedium innerhalb der SAP-Entwicklungsumgebung, das insbesondere Grafiken gut integriert. Wir empfehlen daher, für die Dokumentation dieser übergreifenden Zusammenhänge auf andere Medien zurückzugreifen. Beispiele dafür sind:

●	SAP Solution Manager
●	Interne (Produkt-)Wikis
●	Dokumente in gepflegten öffentlichen Verzeichnissen (Portalablage, SharePoint, Fileshare …)

Die Erfahrung zeigt, dass die Herausforderung in diesem Bereich primär in der Frage der Disziplin liegt. Diese Herausforderung kann kein Tool lösen, sondern nur das Entwicklungsteam und die zugehörige Entwicklungsleitung.

Zur Dokumentation der Systemarchitektur inklusive Entwurfsentscheidungen bietet sich die Verwendung einer Vorlage an, wie z.B. das arc42-Template. Dies kann verhindern, dass wesentliche Aspekte in der Dokumentation vergessen werden und beschleunigt - bei Verwendung einer Vorlage über mehrere Projekte hinweg - die Suche nach spezifischen Informationen. Zudem erleichtert die Festlegung von Vorlagen das Erstellen der Dokumentation parallel zur Entwicklung und die Einhaltung eines angemessenen Abstraktionsniveaus.

Dokumentenvorlagen wie das arc42-Template müssen nicht immer vollständig “ausgefüllt” werden, sondern relevante Teile sollen je nach Art und Umfang des Entwicklungsprojekts identifiziert und der Rest gelöscht werden.
 
Darüber hinaus kann eine veraltete Dokumentation irreführend sein. Deshalb sollte in allen Dokumenten der Stand und eine Versionierung enthalten sein, um die Aktualität bewerten zu können.

Innerhalb einer SAP-Systemlandschaft bietet der SAP Solution Manager Möglichkeiten zur Projektdokumentation. Die nachfolgenden Links bieten weitere Informationen dazu.



