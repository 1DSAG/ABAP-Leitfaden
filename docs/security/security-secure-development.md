---
layout: page
title: Sichere Entwicklung
permalink: /security/secure-development/
parent: Sicherheit
nav_order: 4
---

{: .no_toc}

# Sichere Entwicklung

1. TOC
{:toc}  

In einer zunehmend digitalisierten Geschäftswelt ist die Absicherung von ABAP-Anwendungen unerlässlich. Sicherheit beginnt bereits bei der Entwicklung – durch konsequent angewendete sichere Programmierungspraktiken.

## Input-Validierung: Der erste Schutzwall

Die Validierung von Benutzereingaben ist eine der effektivsten Verteidigungslinien gegen Angriffe. Ohne Validierung können manipulierte Eingaben zu Code-Injektionen oder unautorisierten Zugriffen führen. In ABAP sollten daher nur bekannte und erwartete Werte akzeptiert werden. Hier bieten sich Whitelists, Eingabemasken und Typprüfungen an. Besonders bei dynamischen SQL-Statements oder Dateioperationen ist eine vorherige Prüfung auf Plausibilität unabdingbar.

**Whitelist-Ansatz bevorzugen:**
```abap
" SICHER: Nur erlaubte Zeichen zulassen
IF p_kunnr CO '1234567890'.
  " Verarbeitung nur für numerische Kundennummern
ELSE.
  MESSAGE 'Kundennummer darf nur Ziffern enthalten' TYPE 'E'.
ENDIF.
```

**Datentyp- und Längenprüfung:**
```abap
" Explizite Längen- und Formatprüfung (Gerne mit REGEX arbeiten)
IF strlen( p_email ) > 50 OR p_email CN '@.'.
  MESSAGE 'Ungültige E-Mail-Adresse' TYPE 'E'.
ENDIF.
```
**Webservice-Eingaben härten:**
Bei SOAP- und REST-Services müssen neben den obigen Input-Validierungen evtl. als String übergebene XML/JSON-Inhalte zusätzlich auf strukturelle Integrität geprüft werden, bevor sie in ABAP-Strukturen deserialisiert werden.

## Output-Encoding: Daten sicher ausgeben

Bei Webtechnologien wie BSP, Web Dynpro oder UI5 kann unsicherer Output zu Cross Site Scripting (XSS) führen. Um dies zu verhindern, ist ein konsequentes Output-Encoding notwendig. Die SAP-eigene Methode `cl_http_utility=>escape_html` bietet hier eine einfache Möglichkeit, HTML-Ausgaben abzusichern. Alle potenziell gefährlichen Zeichen sollten bei der Ausgabe entschärft werden, insbesondere wenn User-Eingaben in HTML, JavaScript oder XML-Kontexten erscheinen.

### HTML-Encoding für Webanwendungen

```abap
" HTML-Encoding für Web-Ausgabe
DATA: lv_encoded TYPE string.
lv_encoded = cl_http_utility=>escape_html( lv_user_input ).
```

## Sichere Datenbankzugriffe: OpenSQL Best Practices

OpenSQL bietet eine abstrahierte und sichere Möglichkeit, auf Daten zuzugreifen. Dennoch entstehen Sicherheitsrisiken durch dynamische Statements, insbesondere wenn Tabellen- oder WHERE-Bedingungen aus Benutzereingaben generiert werden. Die Verwendung von `CLIENT SPECIFIED` oder direkter SQL-Manipulation (z. B. `EXEC SQL`) kann zu Mandantenüberschreitungen und Audit-Bypass führen. Best Practices umfassen hier:

* Verwendung fester Tabellen- und Feldnamen
* Keine dynamischen WHERE-Klauseln aus User-Input
* Kein direkter Zugriff mit nativem SQL
* Verzicht auf `MODIFY` ohne Prüfung von Berechtigungen
* Keine Mandantenüberschreitungen benutzen

### Dynamische WHERE-Klauseln absichern

```abap
" Sichere Implementierung dynamischer Abfragen
DATA: lt_where TYPE stringtab,
      lv_where TYPE string.

" Whitelist für erlaubte Felder
CASE p_field.
  WHEN 'KUNNR' OR 'NAME1' OR 'ORT01'.
    APPEND |{ p_field } = @p_value| TO lt_where.
  WHEN OTHERS.
    MESSAGE 'Unerlaubtes Feld in Abfrage' TYPE 'E'.
ENDCASE.

SELECT * FROM kna1 WHERE (lt_where) INTO TABLE @lt_result.
```

## Berechtigungsprüfungen richtig implementieren

Ein häufiger Fehler besteht in fehlenden oder unvollständigen Authority-Checks. Jeder sicherheitsrelevante Zugriff muss durch `AUTHORITY-CHECK` abgesichert und der Rückgabewert `sy-subrc` sofort ausgewertet werden. Problematisch sind insbesondere:

* Prüfungen mit DUMMY-Feldern (z. B. `ACTVT = ' '`)
* Prüfungen auf Superuser-Berechtigungen (`*`)
* fehlende Prüfung nach dem `AUTHORITY-CHECK` auf `SY-SUBRC`
* Verwendung von Alias-Usern in `SUBMIT ... USER`-Anweisungen

Zudem ist sicherzustellen, dass kundeneigene Programme mit einer Berechtigungsgruppe versehen werden, um implizite Prüfungen auszulösen. Für eine gute UI und eine sichere Programmierung empfiehlt es sich die wichtigsten Berechtigungsobjekte direkt vor nach dem Start, vor der Usereingabe mit `DUMMY`zu prüfen um sowohl den Anwendungsserver als auch den Datenbankserver nicht mit Anfragen zu belasten, die im Nachinein sowieso nicht berechtigt sind.
Beispielsweise zeigt ein Report Daten zu einem Debitor in einer Verkaufsorganisation an. Der Report ist mit einem Z Berechtigugnsobjekt versehen um zu prüfen ob der User diesen Kunden sehen darf. Hier kann beim ersten Aufruf (INITIALIZATION im Report) direkt das Berechtigungsobjekt gegen Dummyobjekte geprüft werden. Schlägt dies schon fehl braucht der User sich nicht die Mühe machen eine funktionierende Kombination zu finden.

```abap
" Vollständige Berechtigungsprüfung
AUTHORITY-CHECK OBJECT 'Z_KNA1_BEK'
  ID 'KUNNR' FIELD lv_kunnr
  ID 'ACTVT' FIELD '03'
  ID 'VKORG' FIELD lv_vkorg.

CASE sy-subrc.
  WHEN 0.
    " Berechtigung vorhanden
  WHEN 4.
    MESSAGE 'Keine Berechtigung für Kunde' TYPE 'E'.
  WHEN 12.
    MESSAGE 'Berechtigungsobjekt für den User nicht gepflegt' TYPE 'E'.
ENDCASE.
```

### Berechtigungen in CDS Views

CDS Views bringen mit der Data Control Language (DCL) einen paradigmatischen Wandel in der SAP-Berechtigungslogik. Während traditionelle ABAP-Programme Autorisierungsprüfungen explizit im Code implementieren müssen, werden Berechtigungen in CDS Views deklarativ auf Datenebene definiert. DCL ermöglicht es, Berechtigungslogik direkt bei den Datenstrukturen zu definieren, anstatt sie in jeden konsumierenden Report oder jede Anwendung zu implementieren. Dies reduziert Redundanz sowie Arbeitsaufwand und erhöht die Konsistenz der Berechtigungsprüfungen erheblich.

Mit der konsequenten Anwendung von DCL, durchdachten Berechtigungskonzepten und regelmäßigen Sicherheitsüberprüfungen können Sie die Vorteile von CDS nutzen.

Die Investition in sichere CDS-Entwicklung zahlt sich langfristig aus. Sie ermöglicht es, moderne SAP-Anwendungen zu entwickeln, die sowohl performant als auch sicher sind.

### Organisatorische Berechtigungen immer komplett prüfen

```abap
" Mehrstufige Berechtigungsprüfung
" 1. Funktionale Berechtigung
AUTHORITY-CHECK OBJECT 'Z_BKPF_BUK'
  ID 'BUKRS' FIELD lv_bukrs
  ID 'ACTVT' FIELD '02'.
IF sy-subrc <> 0.
    RAISE EXCEPTION TYPE zcx_no_authority.
 ENDIF.

" 2. Organisatorische Berechtigung  
AUTHORITY-CHECK OBJECT 'Z_BKPF_GSB'
  ID 'GSBER' FIELD lv_gsber
  ID 'ACTVT' FIELD '02'.
IF sy-subrc <> 0.
    RAISE EXCEPTION TYPE zcx_no_authority.
 ENDIF.
```

### Sichere RFC- und Webservice-Kommunikation

Remote Function Calls (RFC) stellen ein zentrales Kommunikationselement dar, sind jedoch nur im Zielsystem autorisierungsgeprüft. Die Verwendung von Trusted-RFC-Verbindungen erhöht hier die Gefahr unkontrollierter Funktionsaufrufe. Daher müssen RFCs:

* mit abgesichert werden,
* gezielt per Rollenvergabe autorisiert werden,
* im Fall externer Kommunikation mit Whitelisting abgesichert werden.

Für Webservices ist besonders auf die sichere Übergabe von Parametern und eine saubere Serialisierung/Deserialisierung zu achten.

### RFC-Funktionsbausteine absichern

```abap
FUNCTION z_secure_customer_read.
  " Berechtigungsprüfung am Funktionseinstieg
  AUTHORITY-CHECK OBJECT 'Z_FUNC'
    ID 'ACTVT' FIELD '03'.
  
  IF sy-subrc <> 0.
    RAISE EXCEPTION TYPE zcx_no_authority.
  ENDIF.
```

## Mandantensicherheit: Datentrennungen garantieren

SAP-Systeme basieren auf der strikten Trennung von Mandanten. Diese Trennung wird jedoch bei unsachgemäßer Verwendung von `CLIENT SPECIFIED` aufgehoben. Programme dürfen keine mandantenübergreifenden Zugriffe enthalten, es sei denn, dies ist zwingend erforderlich und autorisiert. Die Datenintegrität und Compliance-Vorgaben erfordern es, dass Mandantengrenzen eingehalten und regelmäßig auditiert werden.

## Sichere Dateizugriffe und Pfadtraversal-Schutz

Dateizugriffe sind besonders kritisch, da sie direkt auf das Dateisystem des Servers zugreifen. ABAP bietet hierzu `OPEN DATASET`, `READ`, `TRANSFER` usw., die alle über das Objekt `S_DATASET` abgesichert sind. Schutzmaßnahmen beinhalten:

* Nutzung von `AUTHORITY_CHECK`
* Verwendung logischer Dateinamen (Transaktion FILE)
* Vermeidung von Directory Traversal durch das Blockieren von „..“ oder `/`
* Pflegen der Tabelle `SPTH`

Zusätzlich sollten Dateiuploads/-downloads nur über Dialogfunktionen der `CL_GUI_FRONTEND_SERVICES` erfolgen, um eine Sicherheitsprüfung auf der Client-Seite zu ermöglichen.

**Pfadvalidierung implementieren**

```abap
" Sichere Pfadvalidierung
DATA: lv_safe_path TYPE string,
      lv_filename TYPE string.

" Nur erlaubte Zeichen in Dateinamen
IF p_filename CA '\/:*?"<>|'.
  MESSAGE 'Ungültige Zeichen im Dateinamen' TYPE 'E'.
ENDIF.

" Pfadtraversal verhindern
IF p_filename CS '..'.
  MESSAGE 'Pfadtraversal-Versuch erkannt' TYPE 'E'.
ENDIF.

" Sicheren Basispfad verwenden
lv_safe_path = |/secure/upload/{ p_filename }|.
```

## Generelles
Generell sollten aktuelle Techniken in anderen Sprachen immer darauf geprüft werden, ob und in welcher Weise sie in ABAP relevant sind. Bei manchen Techniken verlagert sich das Risiko, aber es bleibt gleich hoch.