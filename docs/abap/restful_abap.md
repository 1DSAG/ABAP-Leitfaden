---
layout: page
title: Das ABAP Restful Application Programming Model (RAP)
permalink: /abap/restful_abap/
parent: /abap/
prev_page_link: /abap/clean_and_modern_abap/
prev_page_title: Sauberer und moderner ABAP Code
next_page_link: /abap/enabling_modern_development/
next_page_title: Rahmenbedingungen und Enabling moderne ABAP Entwicklung im Team
has_children: true
nav_order: 5
---

{: .no_toc}
# ABAP RESTful Application Programming Model (RAP)

1. TOC
{:toc}

## Einleitung
Motivation, wo anfangen?ckEndSpiritueller Nachfolger vom BOPF-basierten Programmiermodell für SAP Fiori.
ABAP RESTful Application Programming Model (RAP)
REST: Erklärung, Nutzung von OData-Service als Schnittstelle zwischen Consumer & ABAP B

Verfügbarkeit der Features
1909
·	Erstes Release von RAP, EML in ABAP Syntax
·	Nur Unterstützung von Queries (read-only) und unmanaged transaktionalen Apps mit Legacy-Coding.
·	Nur OData v2
·	Empfehlung: Nutzbar erst ab 2020 (2019 keine unmanaged Validation, Determination, Draft)
2020
·	Virtuelle Elemente im CDS-View fürs RAP-BO (vgl. Transiente Felder im BOPF)
·	Managed Scenario, Unmanaged/Additional Save (Custom Save Handler), Unmanaged Lock
·	Draft Scenario (total eTag)
·	OData v4
·	Type & Control MappingOData Navigation über mehr als zwei BO-Hierarchie-Ebenen
·	Dokumentation via Knowledge Transfer Document für Behavior Definition, Service Binding
·	Actions/Functions erlauben andere Entitäten / Strukturen als Result-Rückgabeparameter
·	Control-Struktur für Create liefert Information, welche Felder nicht vom Client befüllt wurden
·	Dynamisches Operation/Feature Control
·	Einführung der DVM (Determinations-Validations-Machine) mit Trigger Operationen + Feldern

2021
·	Zusätzliche Implementierung für Draft Actions
·	Simulationsmodus für COMMIT ENTITIES (EML)
·	Singleton-Root-Instanz für Multi-Line Editierung mehrerer Haupt-Entitäten (Customizing-Einträge, etc.)
·	Zusätzliche Actions, Functions in Behavior Projection
·	InA Service für CDS Analytische Queries

2022
·	Erweiterbarkeit von RAP Business Objekten
·	Business Events (Define & Raise)
·	Abstraktions-Ebene via Business Object Interface
·	Large Objects (Binärdateien, Datei-Upload)
·	ADT-Wizard: Generate ABAP Repository Objects (RAP-Generierung auf Basis einer Datenbanktabelle)
·	Instance Factory Actions zur Erzeugung von Entitäten
·	Read Access Logging für RAP BOs

2023
·	Side Effects zum Triggern von Feld-Aktualisierungen
·	Erweiterbarkeit von Service Definitions
·	Initiales Release des Background Processing Framework
·	Migrations-Tool für bestehende BOPF BOs (siehe unten)
·	Consumption von Business Events

Migration von BOPF zu RAP
CDS-basiertem BOPF über Migration Guidehttps://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/0a54d0c8a2be4136a8b5d41a367dd537/2e48e205756c4dafb02ef0e2ff14b1bc.html?locale=en-US
Showcase Demo App
Showcase Demo App hinweisen und erläutern für was gut. – aber auch CDS (annotationen)
und UI5 Control Beispiele

Feature Matrix der Software Heroes
https://software-heroes.com/en/abap-feature-matrix
