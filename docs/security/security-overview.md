---
layout: page
title: Überblick
permalink: /security/overview/
parent: Sicherheit
nav_order: 1
---

{: .no_toc}

# Überblick

1. TOC
{:toc}

## ABAP Security: Warum sichere Programmierung in SAP entscheidend ist

Ein SAP-System oder eine ABAP-Laufzeit enthält verschiedene Funktionen für das Identitäts- und Zugriffsmanagement von Benutzern, die ABAP-Programme ausführen. Die Funktionen umfassen:

- Werkzeuge zur Benutzerverwaltung, wie z.B. das Anlegen, Sperren und Löschen von Benutzern gemäß den gängigen Compliance-Standards.
- Verschiedene Authentifizierungsprotokolle, einschließlich Single-Sign-On-Optionen
- Durchsetzung von Passwortrichtlinien und Credential Management für Benutzer
- Ein erweiterbares Rollen- und Berechtigungsmanagement mit der Möglichkeit, individuelle Rollen für Benutzer zu entwerfen und zuzuweisen.
- Implizite Zugriffskontrolle auf Programmebene beim Start eines ABAP-Programms durch Überprüfung der Startberechtigungen der Benutzer
- APIs zur Zugriffskontrolle innerhalb eines Programms und implizite Zugriffskontrolle auf Anweisungsebene für bestimmte APIs (z.B. Zugriff auf das Dateisystem).

SAP hat im Laufe der Zeit verschiedene Sicherheits-APIs und Sicherheitsfunktionen in den funktionalen Kern der Sprache und in die propagierten Frameworks implementiert, um es Programmierern zu ermöglichen, Sicherheitsanforderungen in ABAP-Programmen umzusetzen. Ein ABAP-Entwickler kann oft aus mehreren Anweisungen oder APIs auswählen, um bestimmte Funktionen zu implementieren. Implizite Sicherheitsfunktionen wie Eingabevalidierung und Verschlüsselung variieren ebenfalls je nach dem gewählten Framework. Die folgenden APIs und Sicherheitsframeworks stehen zur Wiederverwendung zur Verfügung:

- OS-Befehlsbeschränkung
- RFC-Callback-Whitelisting
- Unified Connectivity Protocol (UCON)
- HTTP-Pfad-Whitelist
- Ausgabekodierung und
- Dienstprogramme für die Eingabevalidierung
- Virus Scan Interface (VSI)
- Zugangskontroll-API
- Protokollierungs-APIs (eine Menge) und implizite Protokollierung

### Vom funktionierenden Code zur sicheren Anwendung

Als ABAP-Entwickler kennen Sie das: Ein neues Projekt steht an, die Anforderungen sind klar definiert, und der Zeitdruck ist hoch. Die Prioritäten sind schnell gesetzt -- die Funktion muss implementiert werden, der Code soll wartbar und performant sein. Doch wo bleibt dabei die Sicherheit?

In der Realität vieler SAP-Projekte spielt Code Security eine untergeordnete Rolle. Während wir uns intensiv Gedanken über Datenstrukturen, Algorithmen und Performance-Optimierung machen, wird die Sicherheit oft als "nice-to-have" betrachtet oder ganz übersehen. Dabei sind gerade SAP-Systeme besonders schützenswert -- sie beherbergen die wertvollsten Daten eines Unternehmens.

### ABAP-Code: Der Schlüssel zu den Kronjuwelen

Ihr ABAP-Code ist mehr als nur Programmlogik. Er ist der Schlüssel zu den digitalen Kronjuwelen Ihres Unternehmens:

- **Vollzugriff auf Unternehmensdaten**: Stammdaten, Finanzdaten, Personalinformationen -- alles ist über ABAP erreichbar
- **Systemübergreifende Verbindungen**: RFC-Calls, Webservices und Schnittstellen verbinden Ihr SAP-System mit der gesamten IT-Landschaft
- **Privilegierte Systemzugriffe**: ABAP-Programme laufen oft mit erweiterten Berechtigungen und können Sicherheitsbarrieren umgehen

Unsicherer ABAP-Code kann nahezu alle etablierten Sicherheitsmaßnahmen aushebeln:

- Rollen- und Profilberechtigungen werden umgangen
- Mandantentrennungen verlieren ihre Wirkung
- Betriebssystem-Berechtigungen werden übersprungen
- Firewall-Regeln und Netzwerksperren werden unterlaufen

### Der Teufelskreis der nachgelagerten Sicherheit

Viele Entwicklungsprojekte folgen einem bekannten Muster:

1. **Funktion implementieren** -- Das Programm muss erstmal laufen
2. **Wartbarkeit sicherstellen** -- Code-Qualität und Dokumentation
3. **Performance optimieren** -- Wenn es zu langsam wird, wird nachgebessert
4. **Sicherheit nachrüsten?** -- Oft bleibt dafür keine Zeit oder kein Budget

Dieses Vorgehen ist problematisch, denn Sicherheit nachträglich zu implementieren ist nicht nur aufwendig, sondern oft unmöglich ohne grundlegende Neuimplementierung. Was als kleiner "Security-Fix" geplant war, wird schnell zur kompletten Architektur-Überarbeitung.

## Warum Security von Anfang an mitgedacht werden muss

### Wirtschaftliche Gründe sprechen klar für "Security by Design":

- **Kostenfaktor**: Sicherheitslücken nachträglich zu schließen ist 10-100x teurer als sichere Programmierung von Beginn an
- **Risikominimierung**: Ein einziger Sicherheitsvorfall kann Millionenschäden verursachen
- **Compliance**: Regulatorische Anforderungen (DSGVO, SOX, etc.) erfordern nachweisbar sichere Entwicklungsprozesse
- **Reputation**: Datenschutzverletzungen beschädigen das Vertrauen von Kunden und Geschäftspartnern nachhaltig

### Technische Vorteile sicherer Programmierung:

- **Datensparsamkeit**: Sicherer Code verarbeitet nur notwendige Daten und schont Serverressourcen
- **Stabilität**: Security-bewusste Programmierung führt zu robusterem Code
- **Wartbarkeit**: Explizite Sicherheitsprüfungen machen Code verständlicher und nachvollziehbarer

## Ihr Beitrag zur Unternehmenssicherheit

Als ABAP-Entwickler tragen Sie eine besondere Verantwortung. Ihr Code läuft im Herzen der Unternehmens-IT und hat Zugriff auf die wertvollsten Daten. Mit dem Wissen aus diesem Kapitel können Sie:

- Sicherheitslücken bereits in der Entwicklungsphase vermeiden
- Bestehenden Code auf potenzielle Schwachstellen analysieren
- Ein Bewusstsein für Security-Aspekte in Ihrem Entwicklungsteam schaffen
- Zur Gesamtsicherheit der SAP-Landschaft beitragen

Sicherer ABAP-Code ist kein Luxus -- er ist eine Notwendigkeit in der heutigen vernetzten Geschäftswelt. Lassen Sie uns gemeinsam dafür sorgen, dass Ihre Entwicklungen nicht nur funktional und performant, sondern auch sicher sind.

---

*Die folgenden Abschnitte führen Sie durch konkrete Sicherheitsaspekte mit praxisnahen Beispielen und Lösungsansätzen. Jeder Code-Schnipsel wurde so gewählt, dass er reale Herausforderungen aus dem Entwicklungsalltag widerspiegelt.*