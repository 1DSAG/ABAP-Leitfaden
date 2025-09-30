---
layout: page
title: Grundlagen
permalink: /security/basics/
parent: Sicherheit
nav_order: 2
---

{: .no_toc}

# Grundlagen

1. TOC
{:toc}  

## Die häufigsten ABAP-Sicherheitslücken im Überblick

Nach der Einführung in die Bedeutung sicherer ABAP-Programmierung ist es wichtig, die konkreten Bedrohungen zu verstehen, denen SAP-Systeme täglich ausgesetzt sind. Die Erfahrung aus Hunderten von SAP-Sicherheitsaudits zeigt ein klares Bild: Bestimmte Schwachstellen-Muster wiederholen sich immer wieder in ABAP-Code.

### Die Top ABAP-Sicherheitslücken

**1. SQL-Injection durch dynamische Datenbankabfragen**
Der Klassiker unter den Sicherheitslücken: Benutzereingaben werden ungefiltert in SQL-Statements eingebaut. Ein harmlos aussehender Report kann so zum Einfallstor für Datendiebstahl werden. Besonders tückisch: Die meisten Entwickler kennen SQL-Injection aus der Web-Entwicklung, übersehen aber die ABAP-spezifischen Varianten in Open SQL und Native SQL. ABAP Schützt hier vor dem den ganz großen Problemen, bspw. der Webentwicklung mit "DROP DATABASE;". Allerdings enthält das SAP System immer die Kronjuwelen der Daten, so dass unberechtigte Zugriffe schwerere Auswirkungen im BusinessKontext haben.

**2. Fehlende oder unvollständige Berechtigungsprüfungen**
ABAP-Programme laufen oft mit erweiterten Systemrechten (unter anderem im Batch oder gegenüber dem Betriebssystem). Wenn die explizite Prüfung von Benutzerberechtigungen fehlt oder unvollständig implementiert ist, können Anwender auf Daten und Funktionen zugreifen, die ihnen eigentlich verwehrt sein sollten. Besonders kritisch wird es bei RFC-fähigen Funktionsbausteinen, die über das Netzwerk aufgerufen werden können.

**3. Cross-Site Scripting (XSS) in Web-Dynpro und BSP-Anwendungen**
Sobald ABAP-Code Daten für Webanwendungen ausgibt, droht XSS. Ungefilterter HTML-Code in Benutzereingaben kann zu verschiedenen Problemen im Backend führen. Viele SAP Systeme "bereinigen" Benutzereingaben nicht und das Problem verstärkt sich durch die sich immer Verbreitende Nutzung moderner Frontend-Technologien wie Fiori und UI5. 

**4. Code-Injection in dynamischen ABAP-Konstrukten**
ABAP bietet mächtige Funktionen für dynamische Programmierung: GENERATE SUBROUTINE POOL, dynamische Methodenaufrufe, RTTI (Run Time Type Information) oder XCO. Diese Flexibilität kann zum Sicherheitsrisiko werden, wenn Benutzereingaben ungefiltert in dynamischen Code-Konstrukten verwendet werden.

**5. Directory Traversal (Write Access)**
Directory-Traversal-Angriffe (Verzeichniswechselangriffe) funktionieren durch Manipulation des Dateinamens oder der Pfadinformationen durch Eingabe von Sonderzeichen in eine Zeichenkette, die als Datei-Locator dient. Wird eine derartige Zeichenkette zur Abänderung von Inhalten einer Datei verwendet, lässt sich eine Anwendung austricksen und dazu bringen, Dateien zu ändern, auf die der Benutzer keinen Zugriff besitzen sollte. Dieser Angriff ist möglich, da es der Anwendung nicht gelingt, Befehlszeichen in Eingaben zu ermitteln und zu entfernen, die als Bestandteil des Datei-Locators verwendet werden.

### Warum entstehen diese Schwachstellen immer wieder?

Die Ursachen sind vielfältig, aber vorhersagbar:

**Zeitmangel und Projektdruck**: Sicherheitsprüfungen werden als "zusätzlicher Aufwand" gesehen und bei knappen Deadlines gestrichen. Dabei ist sicherer Code oft nicht komplexer als unsicherer – er erfordert nur das richtige Bewusstsein.

**Fehlende Security-Awareness**: Viele ABAP-Entwickler kommen aus der klassischen betriebswirtschaftlichen Anwendungsentwicklung oder sind technisch interessiert Keyuser gewesen und haben Security-Aspekte nie systematisch gelernt. Was in der Java- oder .NET-Welt Standard ist, ist in der ABAP-Welt oft unbekannt.

**Komplexität der SAP-Berechtigungskonzepte**: SAP-Autorisierungen sind komplex und vielschichtig. Entwickler verlassen sich darauf, dass "das System schon richtig konfiguriert ist", ohne zu verstehen, wo ihre Verantwortung beginnt.

**Legacy-Code ohne Security-Fokus**: Viele SAP-Systeme enthalten Code aus den 1990er Jahren, als Sicherheit noch keine Priorität hatte. Dieser Code wird oft kopiert und als Vorlage für neue Entwicklungen verwendet – samt seiner Schwachstellen.

## Security-Mindset: Vom reaktiven zum proaktiven Denken

Der entscheidende Unterschied zwischen sicherer und unsicherer Software liegt nicht in der Technologie – er liegt in der Denkweise der Entwickler. Ein "Security-Mindset" bedeutet, Sicherheit nicht als nachträgliche Prüfung zu betrachten, sondern als integralen Bestandteil des Entwicklungsprozesses.

### Reaktives vs. proaktives Security-Denken

**Reaktiver Ansatz – "Security als Feuerwehr":**
- Sicherheitslücken werden erst behoben, wenn sie entdeckt werden
- Security-Tests finden erst am Ende der Entwicklung (oder gar nicht) statt
- Schwachstellen erfordern oft grundlegende Code-Änderungen
- Hohe Kosten durch Nachbesserungen und mögliche Sicherheitsvorfälle

**Proaktiver Ansatz – "Security by Design":**
- Sicherheitsanforderungen werden von Anfang an mitgedacht
- Jede Funktion wird unter Sicherheitsaspekten entworfen
- Kontinuierliche Sicherheitsprüfungen während der Entwicklung
- Geringere Gesamtkosten durch Vermeidung von Nachbesserungen

### Die Prinzipien des Security-Mindsets

**1. Vertraue niemals, prüfe immer**
Jede Eingabe ist potenziell gefährlich – egal ob sie von einem vertrauenswürdigen System oder einem internen Benutzer kommt. Implementieren Sie Validierung und Sanitizing für alle Eingaben, auch für interne Schnittstellen. Der schlimmste Satz für einen Entwickler sollte der "Ich brauche das nicht Testen, ich vertraue dir!" sein. Dies wälzt die Verantwortung alleine auf den Entwickler.

**2. Minimiere die Angriffsfläche**
Exponieren Sie nur die Funktionen, die wirklich benötigt werden, Löschen Sie was überflüssig geworden ist. Ein RFC-fähiger Funktionsbaustein, der nur intern verwendet wird, ist eine unnötige Schwachstelle. Der alte, obsolete Report, den man aus "Dokumentationsgründen" noch im System lässt wird zur Falle. Implementieren Sie das Prinzip der minimalen Berechtigung – sowohl für Code als auch für Benutzer. Weiterhin kann Sie UCON auch dabei unterstützen, Zugriffe auf Standard-Funktionsbausteine zu steuern, die in ihren Prozessen vielleicht gar nicht verwendet werden.

**3. Denken Sie wie ein Angreifer**
Fragen Sie sich bei jeder Funktion: "Wie könnte jemand diese missbrauchen?" Betrachten Sie nicht nur den vorgesehenen Anwendungsfall, sondern auch mögliche Missbrauchsszenarien. Was passiert, wenn jemand unerwartete Eingaben macht oder mehrere Funktionen in unvorhergesehener Reihenfolge aufruft? Sind alle Fehler abgefangen?

**4. Implementieren Sie Defense in Depth**
Verlassen Sie sich nie auf eine einzige Sicherheitsmaßnahme. Kombinieren Sie Input-Validierung, Berechtigungsprüfungen, Output-Encoding und Logging. Wenn eine Schutzmaßnahme versagt, sollten andere greifen. Sorgen Sie in ihrer Abteilung für eine einheitliche Art des Loggings, so dass Probleme schnell sichtbar werden.

**5. Machen Sie Sicherheit transparent**
Dokumentieren Sie Ihre Sicherheitsmaßnahmen im Code. Verwenden Sie aussagekräftige Variablennamen und Kommentare, die auch späteren Entwicklern zeigen, warum bestimmte Prüfungen implementiert wurden.

### Der Weg zur Security-Kultur im Team

Die Entwicklung eines Security-Mindsets ist nicht nur eine individuelle Aufgabe – sie erfordert eine Kulturveränderung im gesamten Entwicklungsteam. Daher macht es Sinn, dass Sie sich im vorhinein Gedanken zu den folgenden Themen machen:

**Wissensaufbau**: Regelmäßige Security-Schulungen und der Austausch über aktuelle Bedrohungen schaffen Bewusstsein. Nutzen Sie interne Präsentationen, um konkrete Beispiele aus Ihren eigenen Systemen zu diskutieren.

**Integration in den Entwicklungsprozess**: Machen Sie Sicherheitsprüfungen zu einem festen Bestandteil Ihrer Code-Reviews. Entwickeln Sie Checklisten und Guidelines, die jedem Entwickler helfen, sicherheitsrelevante Aspekte zu berücksichtigen.

**Positive Fehlerkultur**: Behandeln Sie entdeckte Sicherheitslücken als Lernmöglichkeiten, nicht als Versagen. Teams, die offen über Schwachstellen sprechen können, entwickeln ein stärkeres Sicherheitsbewusstsein.

**Kontinuierliche Verbesserung**: Analysieren Sie regelmäßig aufgetretene Sicherheitsprobleme und leiten Sie systematische Verbesserungen ab. Welche Schwachstellen-Muster treten wiederholt auf? Wie können Sie diese in Zukunft vermeiden?

Das Security-Mindset ist kein Ziel, das man einmal erreicht – es ist eine kontinuierliche Haltung, die jeden Tag gelebt werden muss. Mit dem Wissen um die häufigsten Schwachstellen und der richtigen Einstellung können Sie dazu beitragen, dass Ihre ABAP-Entwicklungen nicht nur funktional und performant, sondern auch sicher sind.