---
layout: page
title: ALM Hintergrundwissen und Werkzeugunterstützung
permalink: /application-lifecycle-management/alm-general_information/
parent: ALM
nav_order: 2
---

{: .no_toc}
# ALM-Hintergrundwissen und Werkzeugunterstützung

1. TOC
{:toc}

## ALM-Unterstützung durch die SAP

Die SAP unterstützt den Themenbereich ALM durch die umfangreiche Bereitstellung verschiedener Werkzeuge, Best Practices und Services (siehe dazu [SAP Support - ALM](https://support.sap.com/en/alm.html)). Besonders deutlich wurde dies mit der Einführung des SAP Solution Managers 7.0 im Jahr 2008 und der im Release 7.1 (2011) enthaltenen Funktionserweiterungen. Seitdem ist der Solution Manager bei vielen SAP Kunden als zentraler Bestandteil der SAP-ALM-Strategie für On-Premise Systeme der SAP Business Suite 7 Komponenten im Einsatz. Der SAP Solution Manager folgt der Wartungsstrategie der SAP Business Suite 7 und wird (Stand: Mai 2025) noch bis Ende 2027 (mit Extended Maintenance Support bis 2030) von der SAP gewartet.

Das Nachfolgeprodukt des SAP Solution Managers nennt sich SAP Cloud ALM und ist - wie der Name schon sagt - eine reine Cloud-Lösung, die auf der SAP Business Technology Platform (BTP) läuft. SAP Cloud ALM befindet sich seit einigen Jahren im Aufbau und wird kontinuierlich, in enger Abstimmung mit der DSAG und Anwenderundernehmen, weiterentwickel. Der Funktionsumfang ist im Vergleich zum SAP Solution Manager derzeit noch eingeschränkt und aktuell (Stand: Mai 2025) eher für kleinere Unternehmen ohne über Jahre gewachsenes ALM sowie für cloud-zentrierte Systemlandschaften geeignet.

Weitere SAP-Produkte aus der ALM-Familie sind SAP Focused Run als eigenständiges On-Premise-System für den Monitoring-Bereich, sowie die SAP Solution Manager-Addons Focused Build für z.B. agile Projekte und Focused Insights für Dashboards jeglicher Art.

Zusammengefasst decken die oben genannten Produkte folgenden Funktionsumfang ab:

**Anforderungsmanagement**

- Erfassung, Dokumentation und Nachverfolgung von Geschäftsanforderungen
- Unterstützung bei der Abstimmung von IT- und Business-Zielen

**Change- und Request-Management**

- Steuerung von Änderungen an SAP-Systemen
- Planung und Durchführung von Releases und Transporten
- Minimierung von Ausfallzeiten und Risiken durch strukturierte Prozesse

**Testmanagement**

- Planung, Durchführung und Dokumentation von Tests
- Integration manueller und automatisierter Tests
- Qualitätssicherung vor Produktivsetzungen

|**Weiterführende Informationen**|
|[Testmanagement](/ABAP-Leitfaden/testing/index)|


**IT-Service-Management (ITSM)**

- Unterstützung bei Störungsmanagement, Incident- und Problem-Handling
- Integration mit ITIL-konformen Prozessen

**Projekt- und Portfolio-Management (PPM)**

- Planung, Steuerung und Kontrolle von IT-Projekten
- Ressourcenmanagement und Budgetverfolgung

**Custom Code Management**

- Analyse und Optimierung von kundenspezifischem ABAP-Code
- Bewertung der Systembelastung und Wartbarkeit

**Application Operations / System Monitoring**

- Überwachung von SAP-Systemen in Echtzeit
- Proaktive Fehlererkennung und Performance-Optimierung

**Business Process Monitoring und Optimierung**

- Überwachung und Analyse von Geschäftsprozessen
- Identifikation von Optimierungspotenzialen

**Dokumentation und Wissensmanagement**

- Zentrale Ablage von technischen und funktionalen Dokumentationen
- Wiederverwendbarkeit von Informationen und Know-how-Sicherung

|**Webseiten & Ressourcen**|
|- [SAP Support - Application Lifecycle Management (ALM)](https://support.sap.com/en/alm.html)|
|- [E3-Special SAP Solution Manager](https://e3mag.com/wp-content/uploads/2018/03/1205-E-3_Extra.pdf)|

## Nutzen von ALM

Der Mehrwert eines durchgängigen ALM-Ansatzes besteht in der strukturierten Erfassung, Dokumentation und Nachvollziehbarkeit aller Aktivitäten über den gesamten Lebenszyklus einer Anwendung hinweg. Hiervon profitieren unternehmensinterne und externe Akteure gleichermaßen.

So können durch das ALM - korrekt implementiert und stringent angewendet - die Anforderungen von Wirtschaftsprüfern zu rechtlichen Regularien wie z.B. die lückenlose Dokumentation aller Änderungen an Systemen, die finanzrelevante Prozesse betreffen erfüllt werden (§ 239 Abs. 2 HGB, § 257 HGB). Dies betrifft das Anforderungsmanagement über ein nachvollziehbares Test- und Transportmanagement bis zur vollständigen Dokumentation einschließlich aller Änderungen, um nur die wichtigsten Aspekte hervorzuheben.

Aus Sicht der SAP-Entwicklung ist in erster Linie das Change Request Management (ChaRM) hervorzuheben, das die Prozesse und Anwendungen des Anforderungs- und Transportmanagements perfekt verbindet und um verschiedene Konsistenz- und Qualitätsprüfungen erweitert werden kann.

Hinsichtlich der Dokumentation besteht unter anderem die Möglichkeit, Entwicklungsobjekte automatisch aus den angebundenen SAP-Systemen auszulesen und anschließend (manuell) den entsprechenden Prozessen zuzuweisen, was etwa die Änderung von Prozessen durch den Entwickler vereinfachen kann.

