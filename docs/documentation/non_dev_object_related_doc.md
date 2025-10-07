---
layout: page
title: Entwicklungsobjektübergreifende Dokumentation
permalink: /documentation/non_dev_object_related_doc/
parent: Dokumentation
nav_order: 3
---

{: .no_toc}
# Entwicklungsobjektübergreifende Dokumentation

1. TOC
{:toc}

# Überblick

Neben der Beschreibung der vielen Entwicklungsobjekte, die einzelne, sehr spezielle Funktionen im ABAP-System übernehmen, gibt es auch den Bedarf, die größeren Zusammenhänge innerhalb eines Moduls und modulübergreifend darzustellen. Dazu gehören z.B. Antworten auf Fragen wie:

* Welche Abhängigkeiten gibt es zwischen den Modulen?
* Welche Anwendungen werden bei welchen Geschäftsprozessen verwendet?
* Welche Hintergrundjobs laufen wann am Tag / im Monat / im Jahr und welche Entwicklungsobjekte sind davon betroffen?

Für die Beantwortung dieser Fragen findet sich unserer Meinung nach kein geeignetes Ablagemedium innerhalb der SAP-Entwicklungsumgebung, das insbesondere Grafiken gut integriert. Wir empfehlen daher, für die Dokumentation dieser übergreifenden Zusammenhänge auf andere Medien zurückzugreifen. Beispiele dafür sind:

* SAP Solution Manager / SAP Cloud ALM
* SAP LeanIX für Enterprise Architecture Management
* SAP Signavio für Business Prozess Management
* Interne (Produkt-)Wikis
* Dokumente in gepflegten öffentlichen Verzeichnissen (Portalablage, SharePoint, Fileshare …)

Die Erfahrung zeigt, dass die Herausforderung in diesem Bereich primär in der Frage der Disziplin liegt. Diese Herausforderung kann kein Tool lösen, sondern nur das Entwicklungsteam und die zugehörige Entwicklungsleitung.

Zur Dokumentation der System- und Softwarearchitektur inklusive Entwurfsentscheidungen bietet sich die Verwendung einer Vorlage an, wie z.B. das arc42-Template. Dies kann verhindern, dass wesentliche Aspekte in der Dokumentation vergessen werden und beschleunigt - bei Verwendung einer Vorlage über mehrere Projekte hinweg - die Suche nach spezifischen Informationen. Zudem erleichtert die Festlegung von Vorlagen das Erstellen der Dokumentation parallel zur Entwicklung und die Einhaltung eines angemessenen Abstraktionsniveaus.

Dokumentenvorlagen wie das arc42-Template müssen nicht immer vollständig “ausgefüllt” werden, sondern relevante Teile sollen je nach Art und Umfang des Entwicklungsprojekts identifiziert und der Rest gelöscht werden.

Darüber hinaus kann eine veraltete Dokumentation irreführend sein. Deshalb sollte in allen Dokumenten der Stand und eine Versionierung enthalten sein, um die Aktualität bewerten zu können.

{: .recommendation }
Es sollte im Unternehmen geklärt werden, wie Dokumentation von Software erfolgen soll.
Es sollte eine einheitliche Plattform genutzt werden, entweder eine strukturierte Ablage, Ticketsystem oder auch ein Prozessdokument mit fortgeführter Dokumentation (versioniert)
Der Aufbau der Dokumente sollte immer gleichartig sein, auch von extern zugekaufter Software, das ermöglicht der Supportorganisation auch dort helfen zu können

Innerhalb einer SAP-Systemlandschaft bietet zum Beispiel der SAP Solution Manager Möglichkeiten zur Projektdokumentation.

Die nachfolgenden Links bieten weitere Informationen dazu.

WEITERE QUELLEN  

1. Das arc42-Template zur Architekturdokumentation, [Arc42-Template](https://arc42.org/download)  (aufgerufen am: 19.09.2024)
2. Stefan Zörner: Softwarearchitekturen dokumentieren und kommunizieren. Carl Hanser Verlag GmbH Co KG, 2021. ISBN: 978-3446469280
3. [Master Guide SAP Solution Manager - Solution Documentation](https://help.sap.com/docs/SAP_Solution_Manager/c3c5ec585ee248228ddb6c3f08073ea9/2cb3e75e134249a2bd091a40fe2f6d61.html?locale=en-US) (aufgerufen am: 26.01.2025)
4. [ABAP Development Tools: User Guide - Documentation of Development Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/52546a60ba3f436d8f5b54b83044d0b7.html?locale=en-US&q=documentation) (aufgerufen am: 26.01.2025)

# Dokumentation zur Versionsverwaltung

# Transportauftrag

Oftmals hilft es zum Transportauftrag zu dokumentieren

* Ticketnummer und Titel des Tickets
* Wichtigste Entwicklungsobjekte im Transport
* Abhängigkeiten zu anderen Transporten (sofern vorhanden)
* Kurzbeschreibung zu Änderungen im Transport
Die Dokumentation zu jeder Aufgabe und zu jedem Auftrag lässt sich während der Auftragsbearbeitung innerhalb des Transport Request Editors im Reiter "Dokumentation" erfassen. Die Dokumentation kann bis zur Freigabe laufend erweitert werden. Beachten sie, dass nach der Freigabe des Auftrags die Bearbeitung nicht mehr möglich ist.

Diese Dokumentation auf dem Reiter "Dokumentation" kann man für jeden Transportauftrag erstellen, der in das Produktivsysteme geht. Vermeiden sie redundante Dokumentation und dokumentieren sie keine Transporte von Kopien. Letztlich interessieren nur die Transporte, die ins Produktiv System gehen sollen, bzw. bereits gegangen sind.

WEITERE QUELLEN

* [SAP Help: Change and Transport System - Request Editor - Writing Documentation](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/d636153aab4a0c0ee10000000a114084.html?locale=en-US) (aufgerufen am: 26.01.2025)

# Git-Client

Die Verwendung eines Git-Clients wie abapGit oder gCTS protokolliert Code-Änderungen automatisch bei jedem Commit. Zusätzlich werden bei dem Commit Metadaten gespeichert, die eine kurze Beschreibung, sogenannte Commit-Nachricht, den Autor und das Datum enthalten. Die so entstehende Commit-Historie ermöglicht, vergangene Commits zu sehen und die Code-Änderungen nachzuvollziehen. Wird ein Ticket-System, wie zum Beispiel Jira oder Azure DevOps, für die Erfassung der Anforderungen benutzt, hat jede Anforderung an die Entwicklung eine eindeutige ID. Viele Teams haben die Vorgabe oder die interne Vereinbarung, diese ID in den Commit-Nachrichten einzutragen, damit sich die Commits den Aufgaben zuordnen lassen. Wird das konsistent gemacht, lassen sich mittels Freitextsuche in den Commit-Nachrichten alle Commits identifizieren, die zu einer bestimmten Aufgabe gehören. Das erleichtert wesentlich das Wiederfinden und die Überprüfung der Umsetzung im Fall von Bugs. Gleichzeitig lassen sich dadurch ähnliche Aufgaben sehr schnell umsetzen, weil die Entwickler das bereits funktionierende Beispiel finden und verfolgen können.

{: .important }
Steigern sie die Nachverfolgbarkeit und Transparenz von Änderungen an Entwicklungsobjekten, indem sie  im Transportauftrag oder Git-Client die Änderungen dokumentieren - idealerweise mit Bezug zu dem auslösenden Vorgang im Ticketsystem.