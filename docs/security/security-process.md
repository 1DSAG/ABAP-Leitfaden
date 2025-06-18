---
layout: page
title: Entwicklungsprozess
permalink: /security/process/
parent: Sicherheit
nav_order: 5
---

{: .no_toc}

# Entwicklungsprozess

1. TOC
{:toc} 

## Secure Code Reviews: Systematische Sicherheitsprüfungen

Code Reviews sind in der ABAP-Entwicklung bereits etabliert – aber werden sie auch systematisch für Sicherheitsaspekte genutzt? Ein effektiver Secure Code Review geht über die reine Funktionalitätsprüfung hinaus und integriert Sicherheitsaspekte als festen Bestandteil des Qualitätssicherungsprozesses.

### Struktur eines Security-fokussierten Code Reviews

**Vor dem Review: Vorbereitung ist alles**
Der Reviewer sollte sich zunächst über den Kontext der Anwendung informieren: Welche sensiblen Daten werden verarbeitet? Über welche Schnittstellen ist das Programm erreichbar? Welche Berechtigungen sind erforderlich? Diese Informationen bestimmen das Risikoprofil und damit die Intensität der Sicherheitsprüfung.

**Während des Reviews: Systematisches Vorgehen**
Ein strukturierter Ablauf verhindert, dass wichtige Sicherheitsaspekte übersehen werden. Beginnen Sie mit den kritischen Bereichen: Eingabeverarbeitung, Datenbankzugriffe, Ausgabegenerierung und Berechtigungsprüfungen. Arbeiten Sie sich systematisch durch den Code und dokumentieren Sie dabei nicht nur gefundene Probleme, sondern auch positive Sicherheitsmaßnahmen.

**Nach dem Review: Nachverfolgung und Lernen**
Jeder Secure Code Review sollte dokumentiert werden. Welche Schwachstellen wurden gefunden? Welche Sicherheitsmaßnahmen wurden positiv bewertet? Diese Informationen helfen dabei, wiederkehrende Problemmuster zu identifizieren und das Team kontinuierlich zu verbessern.

### Best Practices für ABAP Secure Code Reviews

**Fokus auf kritische Code-Pfade**: Nicht jede Zeile Code hat das gleiche Sicherheitsrisiko. Konzentrieren Sie sich auf Bereiche mit Benutzereingaben, Datenbankzugriffe, RFC-Schnittstellen und privilegierte Operationen.

**Vier-Augen-Prinzip mit Security-Expertise**: Idealerweise sollte mindestens ein Reviewer über fundierte Security-Kenntnisse verfügen. Wenn das nicht möglich ist, nutzen Sie Checklisten und Tools, um das fehlende Fachwissen zu kompensieren.

**Dokumentation der Sicherheitslogik**: Prüfen Sie, ob sicherheitskritische Entscheidungen im Code dokumentiert sind. Warum wurde eine bestimmte Validierung implementiert? Welche Angriffsvektoren soll sie abwehren?

## Automatisierte Sicherheitstests in der ABAP-Entwicklung

Manuelle Code Reviews sind unverzichtbar, aber sie skalieren schlecht und sind fehleranfällig. Automatisierte Sicherheitstests können wiederkehrende Prüfungen übernehmen und das Entwicklungsteam bei der kontinuierlichen Qualitätssicherung unterstützen.

### Static Application Security Testing für ABAP

**Integration in die Entwicklungsumgebung**: Moderne Static Application Security Testing-Tools können direkt in die SAP-Entwicklungsumgebung integriert werden. Sie analysieren den ABAP-Code bereits während der Entwicklung und weisen auf potenzielle Sicherheitslücken hin, bevor der Code ins Produktivsystem gelangt.

**Automatisierte Pattern-Erkennung**: Diese Tools erkennen bekannte Schwachstellen-Muster wie SQL-Injection-Potenziale, fehlende Input-Validierung oder unsichere Kryptografie-Verwendung. Sie können auch compliance-relevante Coding-Standards durchsetzen.

**Kontinuierliche Überwachung**: In der Entwicklungsumgebung können Static Application Security Testing-Tools bei jedem Transport automatisch ausgeführt werden. Kritische Sicherheitslücken können so den Transport blockieren und erzwingen eine Nachbesserung vor der Produktivsetzung.

### Integration in den Entwicklungsprozess

**Regelmäßige Scans**: Führen Sie Scans in regelmäßigen Abständen durch – idealerweise automatisiert nach größeren Code-Änderungen oder vor wichtigen Releases.

**Developer-Feedback**: Stellen Sie sicher, dass Ergebnisse zeitnah an die verantwortlichen Entwickler kommuniziert werden. Je schneller Feedback erfolgt, desto effektiver ist das Lernen.

## Security-Checklisten für ABAP-Entwickler

Checklisten sind ein bewährtes Mittel, um komplexe Prozesse systematisch und vollständig abzuarbeiten. Für die ABAP-Sicherheit sind sie besonders wertvoll, da sie auch weniger erfahrenen Entwicklern helfen, wichtige Sicherheitsaspekte nicht zu übersehen.


### Entwicklungs-Checkliste: Vor der Implementierung

**Sicherheitsanforderungen definieren**: Welche sensiblen Daten werden verarbeitet? Welche Benutzergruppen sollen Zugriff haben? Welche regulatorischen Anforderungen sind zu beachten? Wurden relevante Berechtigungsobjekte genannt? Müssen eigene Berechtigungsobjekte erstellt werden?

**Bedrohungsmodellierung**: Welche Angriffsvektoren sind für diese spezifische Anwendung relevant? Wo sind die kritischen Sicherheitsgrenzen?

### Implementierungs-Checkliste: Während der Entwicklung

**Input-Validierung**: Werden alle Benutzereingaben validiert und sanitized? Sind die Validierungsregeln angemessen strikt?

**Berechtigungsprüfungen**: Sind alle sicherheitskritischen Operationen durch explizite Berechtigungsprüfungen geschützt?

**Sichere Datenbankzugriffe**: Werden parametrisierte Queries verwendet? Ist Dynamic SQL vermieden oder sicher implementiert?

**Output-Encoding**: Werden alle Ausgaben kontextspezifisch encodiert?

### Test-Checkliste: Vor der Produktivsetzung

**Sicherheitstests durchgeführt**: Wurden alle relevanten automatisierten Sicherheitstests ausgeführt?

**Code Review abgeschlossen**: Hat ein qualifizierter Reviewer den Code unter Sicherheitsaspekten geprüft?

**Penetration Testing**: Wurden kritische Anwendungen durch Penetration Tests validiert?

**Dokumentation vollständig**: Sind alle Sicherheitsmaßnahmen und -entscheidungen dokumentiert?

### Wartungs-Checkliste: Nach der Produktivsetzung

**Monitoring aktiv**: Sind alle sicherheitsrelevanten Ereignisse in das Monitoring eingebunden?

**Update-Prozesse**: Sind Prozesse für Security-Updates und Patch-Management etabliert?

**Regelmäßige Re-Assessments**: Sind regelmäßige Sicherheitsüberprüfungen geplant?

Die Kombination aus systematischen Code Reviews, automatisierten Tools und strukturierten Checklisten schafft ein robustes Sicherheitsnetz für Ihre ABAP-Entwicklung. Kein einzelnes Tool oder Verfahren kann alle Sicherheitslücken verhindern – aber die intelligente Kombination verschiedener Ansätze minimiert das Risiko erheblich und schafft eine Kultur der kontinuierlichen Sicherheitsverbesserung.