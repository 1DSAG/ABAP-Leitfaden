---
layout: page
title: Rahmenbedingungen
permalink: /open-source/difficult-conditions/
parent: Open Source
nav_order: 1
---

# Rahmenbedingungen
{: .no_toc}

1. TOC
{:toc}

## Erschwerte Rahmenbedingungen in der ABAP-Entwicklung

ABAP hat es durch einige Rahmenbedingungen besonders schwer im Open-Source-Umfeld Fuß zu fassen.

### Quellcode in der Datenbank

Der Quellcode von quelltextbasierten Entwicklungsobjekten ist in der Tabelle `REPOSRC` der Primärdatenbank des SAP-Systems abgelegt. Metadaten und nicht-quelltextbasierte Entwicklungsobjekte finden sich in einem relationalen Modell in der Datenbank wieder. Dies ist aus Sicht anderer Programmiersprachen unüblich. Standard-Tooling, welches in der Open-Source-Entwicklung eingesetzt wird, erwartet die Verwaltung der Quelltexte in einem Dateisystem mit Hilfe von Dateien und Ordnern und ist somit zunächst inkompatibel mit der ABAP-Entwicklung.

{: .solution }
Mit [abapGit](https://abapgit.org/) lassen sich die Datenbanktabelleninhalte und das relationale Modell in Dateien und Ordner serialisieren. Zusätzlich ist der Weg zurück von Dateien und Ordnern in das Modell des SAP-Systems über die Deserialisierung möglich. Somit bietet abapGit eine Schnittstelle zwischen den Formaten und enabled die Nutzung von Dateisystem-basierten Tools. Alternativ oder ergänzend steht mit dem [Git-Enabled Change and Transport System (gCTS)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/f319b168e87e42149e25e13c08d002b9.html?locale=en-US) ein weiterer Ansatz zur Verfügung.

### Ungeeignete eingebaute Versionsverwaltung

Zentraler Dreh- und Angelpunkt in der Open-Source-Entwicklung ist das Versionsverwaltungssystem. Es ermöglicht die Beschaffung und den Austausch von Quellcode und somit das gemeinsame Arbeiten am Projekt ohne ein zentrales Entwicklungssystem. Die in der ABAP-Plattform eingebaute Versionsverwaltung ist in dem Kontext ungeeignet. Ihr Schwerpunkt ist die revisionssichere Nachverfolgung von Änderungen, nicht der Austausch über das System hinaus. Das Transportwesen mit seinem proprietären binären Austauschformat ist ebenfalls ungeeignet.

{: .solution }
Mit [abapGit](https://abapgit.org/) lassen sich in allen ABAP-Laufzeitumgebungen die Entwicklungsobjekte mit der defacto-Standard-Versionsverwaltung [git](https://git-scm.com/) versionieren und austauschen. Dabei wird eine breite Massen an Objekttypen [unterstützt](https://docs.abapgit.org/user-guide/reference/supported.html). Im Unternehmenskontext kann abapGit ergänzend zur eingebauten Versionsverwaltung und zum klassischen Transportwesen eingesetzt und Stück für Stück oder pro Team / Projekt ausgerollt werden.

### Proprietäre Programmiersprache

ABAP ist proprietär. Es gibt keine frei verfügbare Spezifikation der Programmiersprache. Dies schränkt die Entwicklung von Tooling ein, welches im Open-Source-Umfeld benötigt wird. Denn ohne Spezifikation und ohne Compiler außerhalb eines SAP-Systems lassen sich schwierig Continuous-Integration-Maßnahmen in die Entwicklung integrieren. SAP-Systeme lassen sich schwer in den Prozess einbauen, da lizenztechnisch eine Nutzung eines Systems von unbekannten Usern nicht erlaubt ist (TODO Quelle?). In der Open-Source-Entwicklung ist aber ja genau das das Ziel, jedem die Beteiligung an der Entwicklung der  Software zu ermöglichen.

{: .solution }
Trotz mangelnden Informationen seitens der SAP haben sich Entwickler in der Open-Source-Community die Mühe gemacht Tooling zu entwickeln. An dieser Stelle ist insbesondere [abaplint](https://abaplint.org/) hervorzuheben. Das Tool ist in der Lage die syntaktische Korrektheit und diverse Code-Style und CI-Prüfungen durchzuführen - ganz ohne SAP-System! Darüber hinaus kann es sogar ABAP-Coding ausführen, indem es dieses nach Javascript transpiliert. Somit lassen sich Unit-Tests in einer CI-Umgebung auf Basis von Pull Requests ausführen ohne ein SAP-System im Zugriff zu haben.  
Über die [ABAP Feature Matrix](https://software-heroes.com/en/abap-feature-matrix) lässt sich herausfinden, welche Features in welchem Release verfügbar sind. Dies ist im Open-Source-Kontext wichtig, weil man oft Releases unterstützen möchte, welche niedriger sind als das Release des Systems auf dem man entwickelt. abaplint bietet außerdem die Möglichkeit automatisiert auf Kompatibilität mit niedrigeren Releases zu prüfen oder sogar automatische Downports durchzuführen. Somit müssen nicht verschiedene Systeme vorgehalten werden.

### Monolithisches System

TODO

### Geschäftskritische Anwendungen und Prozesse

TODO

### Unternehmenskritische Daten im System

TODO

### Kommunikation und Verhalten der SAP

- TODO
- SAP behindert durch Historie mit Code Exchange, gCTS, inkompatible Formate, uneinheitliche Kommunikation, abapGit Fork, abapGit ADT Frontend

### Namensräume

TODO
