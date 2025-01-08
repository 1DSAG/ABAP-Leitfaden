---
layout: page
title: Integration
permalink: /integration/
next_page_title: Integration
nav_order: 9
---

{: .no_toc}

# Integration

1. TOC
   {:toc}

## Einführung

Die Integration von SAP Systemen würde an sich den Rahmen dieses Leitfadens sprengen, daher finden Sie hier vor allem aktuell genutzte Technologien und eine ungefähre Richtung, welche Technologien die nächsten Jahre bestehen werden. Dabei sollten Sie immer im Hinterkopf behalten, dass auch das Thema Middleware eine wichtige Rolle beim Verteilen von Daten und dem Monitoring sind.

### Business Accelerator Hub

Der [Business Accelerator Hub](https://api.sap.com/) von SAP stellt standardisierte Dokumentationen zu allen Arten von Schnittstellen zur Verfügung. Möchten Sie mehr über die verfügbaren Standard Schnittstellen zu Ihrem SAP Produkt erfahren, sollten Sie zuerst einmal hier die Möglichkeiten prüfen. Die Suche nach Produkt, Technologie und Modul vereinfacht das Finden der richtigen Schnittstellen.

## Technologie

In diesem Abschnitt geht es um verschiedene Schnittstellentechnologien und Sie erhalten hier einen groben Überblick über die gängigen Technologien.

### IDoc

Intermediate Document, kurz IDoc, ist ein Datenaustauschformat von SAP, um verschiedene Systeme miteinander zu integrieren. Die Daten können dabei ins System geladen oder daraus exportiert werden. Die meisten IDocs werden auf Positionsbasis erstellt, das heißt der gesamte Datensatz steht auf einer Zeile und es wird per Identifikation (meist der erste Teil der Zeile) das Format für die Daten abgeleitet. In aktuelleren Systemen gibt es auch IDocs im XML Format.

### RFC

Remote Function Call, kurz RFC, ist die Verwendung von klassischen Funktionsbausteinen zur Kommunikation über Systemgrenzen hinweg. Dabei können sogenannte Destionations verwendet werden, um einen Funktionsbaustein in einem anderen System aufzurufen.

Der Aufruf von Funktionsbausteinen von Non-SAP-Systemen ist ebenfalls möglich, dafür gibt es für die verschiedenen Programmiersprachen Adapter, die meist durch SAP zur Verfügung gestellt werden. Dazu finden Sie hier einige Beispiele:

- [JCo](https://support.sap.com/en/product/connectors/jco.html) (Java)
- [SAP Connector for Microsoft .NET](https://support.sap.com/en/product/connectors/msnet.html)
- [SAP Cloud SDK](https://sap.github.io/cloud-sdk/docs/java/features/bapi-and-rfc/overview) (Java)
- [@sap/cds-rfc](https://www.npmjs.com/package/@sap/cds-rfc) (Node.js für CAP)

### SOAP

Simple Object Access Protocol, kurz SOAP, ist ein standardisiertes Schnittstellenformat zum Austausch von XML Nachrichten zwischen verschiedenen Systemen. Die Technologie wird auch außerhalb der SAP Welt für Schnittstellen genutzt. Das Format der Payload beschränkt sich nicht auf XML, sondern es können auch CSV oder BASE64 Daten verwendet werden.

### OData

Das Open Data Protocol, kurz OData, ist ein standardisiertes Protokoll für HTTP Kommunikation. Darin werden Standards beschrieben, wie Anfragen und Antworten von Schnittstellen zur Verfügung gestellt wird und wie in Integration in das HTTP Protokoll aussieht. Die Kommunikation kann im Format XML, aber auch JSON, erfolgen. OData ist mittlerweile der Standard zum Aufbau von UI und API Schnittstellen im SAP System. Die aktuell verfügbare Version ist "OData v4" und ermöglicht gegenüber "OData v2" weitere Möglichkeiten zur Integration von Anwendungen.

### HTTP

Grundsätzlich können alle Schnittstellen die über Hypertext Transfer Protocol, kurz HTTP, verfügen, auch über SAP und per HTTP Client konsumiert werden. Meist beschränkt sich die Implementierung allerdings auf eine Individualentwicklung und Sie sollten vorher prüfen, ob es nicht Standardaustauschformate wie OData oder SOAP gibt.

### Event

Die aktuelle Integration können Sie mit Events schaffen. Dabei wird zu definierten Zeitpunkten im Standard- oder Kundenprozess ein Event erzeugt, welches in einer Queue (Event Mesh) zur Verfügung gestellt wird. Auf die Queue können sich interessierte Anwendungen und Prozesse registrieren, die dann über neue Events benachrichtigt werden. Ein Event ist meist eine einfache Nachricht mit dem auslösenden Event, dem Schlüssel des Objekts und einer Payload.

## Clean Core

Welche Technologien sind bei der Umstellung auf Clean Core eigentlich noch relevant und welche sollten Sie am besten schon heute vermeiden? In diesem Abschnitt erfahren Sie mehr über die empfohlenen Technologien beim Aufbau oder der Migration zu Clean Core. Im SAP Leitfaden "[Supporting Business Transformation with a Cloud ERP Clean Core Strategy](https://www.sap.com/germany/index.html)" finden Sie Hinweise dazu.

![Clean Integration](./img/image-01.png)

Empfehlung zu Clean Core Integration
{: .img-caption}

Dazu erhalten Sie hier die Übersicht der oben genannten Technologien unterteilt in die Bereiche zum Weiterführen und zum Vermeiden. Die Verteilung ergibt sich aus den Empfehlungen des Leitfadens.

| Verwenden   | Vermeiden |
| ----------- | --------- |
| OData       | RFC       |
| SOAP        | IDoc      |
| Events      |           |
| HTTP (REST) |           |
