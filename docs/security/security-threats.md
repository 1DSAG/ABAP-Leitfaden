---
layout: page
title: Bedrohungen
permalink: /security/threats/
parent: Sicherheit
nav_order: 3
---

{: .no_toc}

# Bedrohungen

1. TOC
{:toc}  

## SQL-Injection in ABAP: Angriffsvektoren und Abwehrmaßnahmen

SQL-Injection gehört zu den gefährlichsten und zugleich am häufigsten übersehenen Schwachstellen in ABAP-Systemen. Während viele Entwickler glauben, dass OpenSQL automatisch vor Injection-Angriffen schützt, zeigt die Praxis ein anderes Bild.

### Angriffsvektoren in ABAP

**Native SQL – Der offensichtliche Risikofaktor:**
```abap
" GEFÄHRLICH: Direkte Einbindung von Benutzereingaben
DATA: lv_where TYPE string.
lv_where = |MANDT = '{ sy-mandt }' AND KUNNR = '{ p_kunnr }'|.
EXEC SQL.
  SELECT * FROM KNA1 WHERE :lv_where
ENDEXEC.
```

Ein Angreifer könnte `p_kunnr` mit `' OR '1'='1` befüllen und erhält Zugriff auf alle Kundendaten. Noch kritischer wird es bei UPDATE- oder DELETE-Statements.

**OpenSQL – Vermeintlich sicher, aber tückisch:**
Auch OpenSQL ist nicht automatisch immun gegen Injection-Angriffe, besonders bei dynamischen WHERE-Klauseln:
```abap
" GEFÄHRLICH: Dynamische WHERE-Klausel ohne Validierung
DATA: lv_where TYPE string.
lv_where = |KUNNR = '{ p_kunnr }'|.
SELECT * FROM kna1 WHERE (lv_where) INTO TABLE lt_customers.
```

**RFC-Funktionsbausteine als Einfallstor:**
Besonders kritisch werden SQL-Injections, wenn sie über RFC-Schnittstellen ausgenutzt werden können. Ein unsicherer Funktionsbaustein kann zum Sprungbrett für Angriffe aus dem gesamten Netzwerk werden. Der Funktionsbaustein RFC_READ_TABLE implementiert eine solche, dynamische Programmierung.

### Effektive Abwehrmaßnahmen

**1. Parametrisierte Queries verwenden:**
```abap
" SICHER: Verwendung von Platzhaltern
SELECT * FROM kna1 
  WHERE kunnr = @p_kunnr 
  INTO TABLE @lt_customers.
```

**2. Input-Validierung implementieren:**
```abap
" Validierung von Eingaben vor Datenbankzugriff
IF p_kunnr CA ';''"`*%_'.
  MESSAGE 'Ungültige Zeichen in Eingabe' TYPE 'E'.
ENDIF.
```

**3. Escaping-Funktionen nutzen:**
Für unvermeidbare dynamische Konstrukte sollten SAP-eigene Escaping-Funktionen verwendet werden, um gefährliche Zeichen zu neutralisieren.

## Cross-Site Scripting (XSS) in SAP-Webanwendungen

Mit der zunehmenden Webbasierung von SAP-Anwendungen durch Fiori, UI5 und Web Dynpro werden XSS-Angriffe zu einem kritischen Risikofaktor. ABAP-Entwickler müssen verstehen, wie ihre Backend-Logik zur Frontend-Sicherheit beiträgt.

### XSS-Angriffsvektoren in SAP

**Stored XSS in Stammdaten:**
```abap
" GEFÄHRLICH: Ungefilterter HTML-Code in Ausgabe
DATA: lv_name TYPE kna1-name1.
lv_name = '<script>alert("XSS")</script>Kunde GmbH'.
" Direkte Ausgabe ohne Encoding führt zu XSS
```

Wenn dieser Kundenname später in einer Webanwendung angezeigt wird, wird der JavaScript-Code ausgeführt. Besonders tückisch: Der Schadcode wird persistent in der Datenbank gespeichert und betrifft alle Benutzer, die diese Daten anzeigen.

**Reflected XSS in URL-Parametern:**
Web Dynpro- und BSP-Anwendungen, die URL-Parameter direkt in die HTML-Ausgabe einbinden, sind anfällig für Reflected XSS. Ein präparierter Link kann ausreichen, um Schadcode zu injizieren.

**DOM-basiertes XSS in modernen UI5-Anwendungen:**
Bei der Integration von ABAP-Backend-Daten in moderne Frontend-Frameworks entstehen neue Angriffsvektoren, wenn JSON-Responses ungefilterte Benutzerdaten enthalten.

### Schutzmaßnahmen gegen XSS

**1. Output-Encoding implementieren:**
```abap
" HTML-Encoding für Web-Ausgabe
DATA: lv_encoded TYPE string.
lv_encoded = cl_http_utility=>escape_html( lv_user_input ).
```

**2. Content Security Policy (CSP) nutzen:**
Konfigurieren Sie CSP-Header in Ihren Webanwendungen, um die Ausführung von Inline-JavaScript zu verhindern.

**3. Eingabevalidierung am Backend:**
Implementieren Sie strenge Validierungsregeln für alle Eingaben, die später in Webanwendungen dargestellt werden.

## Unsichere Direktzugriffe auf Objekte und Autorisierungsumgehung

Diese Schwachstellenklasse entsteht, wenn ABAP-Programme Objektreferenzen direkt aus Benutzereingaben übernehmen, ohne zu prüfen, ob der Benutzer berechtigt ist, auf diese Objekte zuzugreifen.

### Typische Angriffsmuster

**Horizontale Rechteausweitung:**
Ein Sachbearbeiter ändert eine Kundennummer in einem URL-Parameter und erhält plötzlich Zugriff auf Daten anderer Kunden, für die er keine Berechtigung hat.

**Vertikale Rechteausweitung:**
Durch Manipulation von Organisationseinheiten oder Buchungskreisen in Parametern kann ein Benutzer auf Daten zugreifen, die seiner Hierarchieebene nicht entsprechen.

**Session-Hijacking durch vorhersagbare IDs:**
Wenn interne Objekt-IDs oder Session-Kennungen vorhersagbar sind, können Angreifer systematisch verschiedene Werte ausprobieren.

### Effektive Autorisierungsprüfungen

**1. Explizite Berechtigungsprüfung:**
```abap
" Immer explizite Berechtigung prüfen
AUTHORITY-CHECK OBJECT 'F_KNA1_BEK'
  ID 'KUNNR' FIELD p_kunnr
  ID 'ACTVT' FIELD '03'.
IF sy-subrc <> 0.
  MESSAGE 'Keine Berechtigung' TYPE 'E'.
ENDIF.
```
Für alle Objekte mit ABAP Code gilt hier: 
1) die Berechtigungsprüfung machen
2) SY-SUBRC auswertung nicht vergessen
3) Ranges entsprechend erweitern mit SIGN = 'E' und 'EQ'
4) SELECT auf die Haupttabelle machen

In vielen Fällen haben Fachbereiche eine Debugberechtigung, damit im Supportfall schnell von der Entwicklung geholfen werden kann. In solchen Fällen könnte sich ein Sachbearbeiter einen Break-point setzen und die gesamte Tabelle vor der Berechtigungsprüfung über den Debugger herunterladen.

**2. Kontextuelle Autorisierung:**
Prüfen Sie nicht nur die Berechtigung für ein Objekt, sondern auch den Kontext der Anfrage (Organisationseinheit, Zeitraum, etc.). Scheuen Sie sich nicht eine Abfrage mehrfach ausführen zu lassen.

## Code-Injection und Dynamic Programming Risiken

ABAP bietet mächtige Funktionen für dynamische Programmierung, die bei unsachgemäßer Verwendung zu schwerwiegenden Sicherheitslücken führen können.

### Gefährliche dynamische Konstrukte

**GENERATE SUBROUTINE POOL:**
```abap
" EXTREM GEFÄHRLICH: Direkte Code-Generierung
DATA: lv_code TYPE string.
lv_code = |FORM test. WRITE '{ p_input }'. ENDFORM.|.
GENERATE SUBROUTINE POOL lv_code NAME lv_prog.
```

Wenn `p_input` Schadcode enthält, wird dieser zur Laufzeit ausgeführt.

**Dynamische Methodenaufrufe:**
```abap
" GEFÄHRLICH: Unkontrollierte Methodenaufrufe
CALL METHOD (p_class)=>(p_method).
```

Ein Angreifer könnte kritische Systemmethoden aufrufen oder Daten manipulieren.

### Sichere Alternativen

**1. Whitelist-Ansatz:**
```abap
" Nur erlaubte Werte zulassen
CASE p_method.
  WHEN 'GET_DATA' OR 'SAVE_DATA'.
    CALL METHOD (lv_class)=>(p_method).
  WHEN OTHERS.
    MESSAGE 'Unerlaubter Methodenaufruf' TYPE 'E'.
ENDCASE.
```

**2. Factory-Pattern verwenden:**
Implementieren Sie Factory-Klassen, die nur sichere, vordefinierte Objekte zurückgeben.

**3. Reflection-APIs sicher nutzen:**
Wenn RTTI (Run Time Type Information) verwendet wird, implementieren Sie strenge Validierung und Berechtigungsprüfungen.

### Präventive Maßnahmen

Die effektivste Abwehr gegen diese Bedrohungen ist eine Kombination aus technischen Maßnahmen und organisatorischen Prozessen:

- **Code-Reviews mit Security-Fokus:** Schulen Sie Ihr Team, diese Schwachstellen-Muster zu erkennen
- **Automatisierte Sicherheitstests:** Nutzen Sie Tools wie den SAP Code Vulnerability Analyzer
- **Penetrationstests:** Lassen Sie Ihre Systeme und Anwendungen regelmäßig von SAP spezialisierten Sicherheitsexperten testen
- **Incident Response Plan:** Definieren Sie Prozesse für den Umgang mit entdeckten Schwachstellen