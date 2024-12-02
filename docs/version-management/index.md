---
layout: page
title: Versionsverwaltung
permalink: /version-management/
next_page_title: Versionsverwaltung
nav_order: 6
---

{: .no_toc}
# Versionsverwaltung

1. TOC
{:toc}

## Einleitung/Motivation
Zu den aufbewahrungspflichtigen Dokumenten gem. HGB, AO und GoBS gehören auch die Repositoriy-Objekten in ABAP. Dies wurde lange Zeit durch die integrierte Versionsverwaltung innerhalb der ABAP-Workbench (SE80) erreicht. In den letzten Jahren hat sich aber ABAP weiterentwickelt, sei es der Einsatz einer externen Entwicklungsumgebung (ABAP Development Tools), der Einsatz von Git-Versionsverwaltung oder die Entwicklung weiterer Repository-Objekten, die nicht in der ABAP-Workbench entwickelt werden können. Daher stellt sich für jeden ABAP-Entwickler, die zentrale Frage: 
* Welche Versionsverwaltung soll ich wann nehmen.

Dieses Kapitel soll daher einen Überblick und eine Gegenüberstellung von Versionsverwaltungs-Lösungen innerhalb des SAP-Universums für ABAP-Entwickler geben.

## Git-Grundlagen
## Einsatz von gitbasierten Lösungen in der ABAP-Entwicklung

–	Git ist Standardlösung für Versionsverwaltung für alle Programmiersprache
–	Studenten wollen Git nutzen
–	Standardmäßige Funktionen für die Versionsverwaltung ( Branching, Code Review, Rollback (nicht nur ein Objekt), Dokumentation was geändert wurde, 
–	Zusammenarbeit von mehreren Entwicklern möglich
–	Code ist zentral an einem Ort (Single Source of Truth)
–	Ermöglichen von externen Tools (CI-Pipelines)
–	Programmiersprachenunabhängig und Entwicklungstoolsunabhängig
–	Einheitliches Format für Programmiersprachen
–	Lesbares Format
–	Man kann alles zu einer Anwendung speichern (Dokumentation, Frontendcode, Backendcode)
–	Versionierung (Tags)

## Vergleich der unterschiedlichen Versionskontrollsystemen
## Einsatzszenarien

–	Entwicklung als Partner – Auslieferbare Software 
–	Kundenentwicklung in einer normalen 3-System-Landschaft
–	Entwicklung in verschiedene Systemlandschaften verteilen
–	Recovery in drei Systemlandschaft
–	Paralleles Arbeiten
–	Custom Code Migration (Backup Legacy)


## Entwicklungsprozess mit Versionsverwaltung
–	Standard: Auftrag muss am Anfang angelegt werden
–	GIT: Commit wird nach der Änderung durchgeführt
–	Standard: Verteilen von Code – keine Kontrolle über die Änderungen in anderen Systemen
–	GIT: Zentraler Anlaufpunkt 
–	Standard: Versionierung einer Anwendung nicht möglich
–	GIT:  Versionierung von einer ganzen Anwendung über standardfunktionalitäten möglich
## Annäherung Entwicklungsprozesse ABAP und Non-ABAP über git-basierte Tools
## Security Aspekte 
## Integration an andere Komponenten
## Risiken
## Zusammenfassung
## Empfehlung
## Quellen
https://www.rheinwerk-verlag.de/git-und-sap/?srsltid=AfmBOooMbM45uQOGPLDAiaKz5hHazrf45BIEVjmOIe8mz9HjpdHjgzZq
