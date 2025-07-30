---
layout: page
title: Sauberen und modernen ABAP Code schreiben
permalink: /abap/clean_and_modern_abap/
parent: Moderne ABAP Entwicklung
nav_order: 4
---

{: .no_toc}
# Sauberen und modernen ABAP Code schreiben

1. TOC
{:toc}

ABAP gibt es seit 1983, und der Sprachumfang ist seitdem stetig gewachsen. Dadurch bildet die Sprache verschiedene Paradigmen ab, und es gibt häufig verschiedene Alternativen für ähnliche Zwecke. Als Beispiel können Funktionsgruppen und -bausteine etwa als imperativer Vorläufer ähnlich wie Klassen in ABAP OO genutzt werden. Daneben gibt es auch viele als obsolet gekennzeichnete Befehle, die häufig in bereits entwickelten Programmen oder Beispielcode im Internet zu finden sind und damit auch weiterhin für neue Entwicklungen genutzt werden.

Die SAP hat dieses Problem selbst erkannt und als eine Unterstützung für Entwickler die [Clean ABAP Guidelines](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md) erstellt. Diese basieren auf dem Buch Clean Code von Robert C. Martin und adaptieren verschiedene Best Practices für ABAP. Die Guidelines liefern Vorgaben für viele Bereiche, etwa zur Benennung von Objekten und Variablen, über die Wahl der richtigen Sprachmittel, bis hin zur Formatierung und Kommentierung von Code.

{: .note }
Empfehlungen aus den Clean ABAP Guidelines werden in diesem Abschnitt so hervorgehoben. Dabei wird immer auf den entsprechenden Abschnitt der Guidelines verlinkt.

Daneben entwickelt die SAP ABAP auch stetig weiter. Eine Übersicht über neue Entwicklungen liefert etwa die [ABAP Feature Matrix](https://software-heroes.com/en/abap-feature-matrix).

Die folgenden Abschnitte zeigen Beispiele für modernen ABAP Code, erhebt jedoch keinen Anspruch auf Vollständigkeit. Eine grundlegende Kenntnis von ABAP und insbesondere ABAP Objects
wird vorausgesetzt.

## Clean ABAP als Basis

Clean ABAP stellt die Anpassung der Prinzipien aus dem Buch von Robert C. Martin auf ABAP dar. Das offizielle, im Repository der SAP freigegebene Dokument wurde von Florian Hoffmann und Klaus Häuptle 2019 auf den Weg gebracht und wird seitdem als [open source durch die ABAP Community](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md) erweitert.

Beispielregel mit Erläuterung ([Prefer inline to up-front declarations](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-inline-to-up-front-declarations) im Clean ABAP Guide):
![Clean ABAP Example Rule: Prefer inline to up-front declarations](../img/clean_abap_prefer_inline_rule.png)

Clean ABAP Example Rule Prefer inline to up-front declarations
{: .img-caption}

Der Gedanke von Clean ABAP ist, dass es nicht eine Version von Clean ABAP gibt, mit einem festen unveränderlichen Set an Regeln. 
Teams sind eingeladen, die Regeln anzupassen und zu verändern so wie sie für ihren spezifischen Fall am besten passen. Die öffentliche Version von Clean ABAP stellt eine exzellente Grundlage hierfür dar. 
Wichtig ist hier nur, dass diese Regeln verbindlich und für alle Teams eines Unternehmens hinweg gültig sein sollten. Der Grundgedanken von Clean ABAP - einheitliche Code Reviews - würde gebrochen wenn das Financials Team andere ABAP Regeln hat als das Sales Team.
Alle Regeln von Clean ABAP sind heute und sollten immer begründet und erläutert werden. 

Clean ABAP kann generell auf jede Sprachversion von ABAP angewendet werden von R2 bis hin zu ABAP Cloud. 

### DSAG Empfehlung

Die Regeln im öffentlichen Repository sind anerkannt unter den meisten ABAP-Experten.
Die Autoren des DSAG Leitfaden empfehlen Ihnen den Einsatz der Clean ABAP Regeln für Ihr Coding und als Grundlage für Code Reviews.
Diskussionen über Code unter Entwicklern können nicht selten mit einer Clean ABAP Regel gelöst werden. 

### Clean ABAP & Entwicklungsrichtlinien

Die auf das Unternehmen angepasste Form von Clean ABAP sollte ein ergänzendes Dokument der gültigen Entwicklungsrichtlinien sein, sodass es überall Anwendung findet. 
Prüfen Sie die Anwendung der Regeln mit einem automatischen Tool wie Code Pal for ABAP im ABAP Test Cockpit (https://github.com/SAP/code-pal-for-abap). 

### Clean ABAP Owner

In jedem Entwicklungsteam sollte es - gerne auch rollierend - einen Clean ABAP Owner geben, der Ansprechpatner und Verantwortlicher für Änderungen ist. 
Änderungen und Erweiterungen müssen separat in den Teams kommuniziert und abgestimmt werden. 
Clean ABAP funktioniert am besten, wenn alle Beteiligten hinter den Regeln stehen, hierfür sind immer wieder Kompromisse und Abstimmungen im Team nötig. 

### Clean ABAP ist ein Prozess

Die Anwendung bzw. das Erlernen von Clean ABAP ist kein einmaliger Workshop oder eine Managementdirektive. 
Es braucht Zeit, Übung, Motivation und den konstanten Willen um bessere ABAP Programme zu schreiben. 

Die Tätigkeiten, die das Anwenden von Clean ABAP sicherstellen, heißen Pair-Programming, Code Reviews, Refactoring und Schulung.
Hierfür müssen von der Organisation entsprechende Bedingungen geschaffen werden. 

## Grundlagen sauberer Entwicklung

Dieser Abschnitt gibt eine kurze Auswahl wichtiger Regeln für saubere Entwicklung mit Verweis auf Quellen mit weiteren Informationen wieder.

Ziel von Clean ABAP ist es, sauberen und für Menschen leicht verständlichen Code zu schreiben. Dies zeigt sich etwa in kurzen Methoden und ausdrucksstarken Namen.

### Ausdrucksstarke Namen

Ein wichtiges Element von Clean ABAP ist [die richtige Benennung von Entwicklungsobjekten](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#names). Gute Namen
sind lesbar und verständlich, und machen direkt klar, worum es geht. In der alltäglichen ABAP-Entwicklung ist die Versuchung groß, technische Namen der SAP wiederzuverwenden; dies
kann jedoch die Lesbarkeit erschweren, z.B. ist `tj02_list` schwerer verständlich als `active_status` oder erfordert wenigstens mehr ABAP-Kenntnisse.

### Kommentare

> Drücke dich durch Code aus - nicht durch Kommentare.

Dieses sollte einer der Leitsätze beim Scheiben von ABAP sein. Prüfen Sie jeden Kommentar, ob dieser nicht ein Ersatz für eine zu verbessernde Namensgebung bzw. Modularisierung ist. Eine lange Codestrecke, die mit dem Kommentar "Positionen verarbeiten" beginnt, deutet darauf, dass hier eine Methode über einen entsprechenden Namen genau dies aussagen und erledigen könnte. Ein Kommentar soll vielmehr Hinweise geben, warum etwas wie gemacht wird und ggf. den Kontext knapp erläutern anstatt zu beschreiben was gemacht wird.
Zur Code Dokumentation ist ABAPDoc zu verwenden, somit sind Code Kommentare nur noch für spezifische, zeilenbezogene Erläuterungen zu verwenden. Z.B. wenn Funktionen und Fehlerbehandlungsblöcke nicht ausprogrammiert wurden, noch TODOs oder offene Fragen bestehen, die im Laufe des Lebenszyklus behoben werden müssen. 

Stark veraltete ABAP Richtlinien mit Aussagen wie:

> Logisch zusammenhängende Einheiten sollten kommentiert werden, wobei der Kommentar vor dem jeweiligen Block steht.

oder

> Das Erkennen solcher Blöcke wird bei langen und tief verschachtelten Kontrollstrukturen dadurch erleichtert, dass man am Ende einen auf den Beginn referenzierenden Kommentar einfügt.

Hier nehmen die ABAP-Guidelines bereits an, dass so genanter [Spaghetti Code](https://en.wikipedia.org/wiki/Spaghetti_code) geschrieben wird.
Kommentare können nie die Lösung für fehlende Modularisierung und Aufbrechen von tiefen Schachtelungen sein.
Diese Probleme in der Lesbarkeit sollten durch konsequente Modularisierung und nicht durch Kommentare gelöst werden.

{: .note }
Clean ABAP rät zur [Erklärung und Strukturierung über Code, nicht über Kommentare](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#use-methods-instead-of-comments-to-segment-your-code).

Im Leitfaden von Clean ABAP steht alles was Sie zu Kommentaren beachten sollten, [Siehe](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#express-yourself-in-code-not-in-comments).

## Moderne Sprachmittel

Dieser Abschnitt zeigt eine kurze Übersicht moderner Sprachmittel von ABAP ohne Anspruch auf Vollständigkeit.

TODO bisherige Abschnitte zu Deklarationen etc. hier lassen oder in Anhang verschieben? Checkliste nochmal prüfen
{: .label .label-red }

- [ ] moderne SQL Syntax
- [ ] Stil von modernem ABAP
- [ ] SAP SAMPLES als Referenz bibliothek
- [ ] Todo check SAP Samples (ABap OO Basics)– und clean code bzgl. patterns -

### Deklarationen

In der klassischen Deklaration von Variablen werden alle Deklarationen im Kopf einer Methode vorangestellt, und anschließend arbeitet die Methode mit diesen Variablen:

~~~ abap
DATA mein_string TYPE string.
DATA mein_int    TYPE i.

" hier wird jetzt mit den Variablen gearbeitet
mein_string = `hello world`.
mein_int = strlen( mein_string ).
~~~

Mithilfe von Inline-Deklarationen können stattdessen überall in der Methode Variablen deklariert und direkt zugewiesen werden:

~~~ abap
DATA(mein_string) = `hello worlddd`.
~~~

{: .note }
[Clean ABAP empfiehlt](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-inline-to-up-front-declarations), Inline-Deklarationen den klassischen Deklarationen vorzuziehen.

#### Deklaration mit FINAL

{: .new }
Version 7.57: Inline-Deklaration mit `FINAL(var)` statt `DATA(var)`

Mit `FINAL` können in ABAP unveränderbare Variablen deklariert werden. Diese können einmalig gesetzt, danach jedoch nicht mehr geändert werden:

~~~abap
FINAL(var) = 1.
var = var + 1. " Fehler - Variable darf nicht geändert werden
~~~

Der Vorteil einer `FINAL`-Deklaration ist, dass ein den Code lesender Entwickler nun weiß, dass er nicht weiter darauf achten muss, ob der Wert der Variable möglicherweise
später im Code noch geändert wird.

### Funktionale Aufrufe

Schon seit Version 7.5 werden Methoden in ABAP nicht mehr via `CALL METHOD objekt->methode ...` aufgerufen, sondern via `objekt->methode( ... )`. Das verkürzt ABAP-Code
und erleichtert Entwicklern mit anderen Hintergründen das Codeverständnis.

Im Rahmen dieser Änderung wurden auch weitere Aufruf ähnlich gestaltet wie in anderen Programmiersprachen. So können Prädikatsmethoden, d.h. Methoden die einen der `abap_bool`-Wahrheitswerte `abap_true` oder `abap_false` zurückliefern, verkürzt in einem `IF` aufgerufen werden: Statt `IF is_predicate( ) = abap_true.` kann so einfach `IF is_predicate( ).` geschrieben werden.

Auch wurden für viele imperative ABAP-Anweisungen moderne Alternativen geschaffen.

{: .note }
[Clean ABAP empfiehlt](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-functional-to-procedural-language-constructs), funktionale Sprachelemente immer vorzuziehen.

Ein Beispiel ist die alte und neue Syntax, um einen String in Großbuchstaben umzuwandeln:

~~~ abap
TRANSLATE string1 TO UPPER CASE. " alte, imperative Variante
string2 = to_upper( string2 ).   " neue Variante mit Funktionsaufruf
~~~

Ein anderes Beispiel ist die Bestimmung der Zeilenanzahl in einer internen Tabelle:

~~~ abap
DESCRIBE TABLE itab LINES zeilen. " alte, imperative Variante
zeilen = lines( itab ).           " neue Variante mit Funktionsaufruf
~~~

#### Zuweisungen von logischen Ausdrücken

Ein weiteres Beispiel ist die Funktion `xsdbool`. Ursprünglich für die Verarbeitung mit XML konzipiert, ist sie mittlerweile trotz ihres Namens die bevorzugte
Variante, um das Ergebnis eines logischen Ausdrucks an eine Variable zuzuweisen:

~~~ abap
" Direkte Zuweisung mittels xsdbool
DATA(is_true) = xsdbool( len > 10 ).

" Klassische Auswertung mit IF
IF len > 10.
    is_true = abap_true.
ELSE.
    is_true = abap_false.
ENDIF.
~~~

{: .note }
[Clean ABAP](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-functional-to-procedural-language-constructs) empfiehlt, die obere Variante zu bevorzugen.

#### Funktionen in der ABAP-Hilfe

Die ABAP-Hilfe bietet Listen von Funktionen für

- [mathematische Berechnungen,](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abenmathematical_functions.htm)
- [logische Funktionen,](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abenpredicate_functions.htm)
- [das Arbeiten mit Strings,](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abenstring_functions.htm)
- [das Arbeiten mit Byte-Strings,](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abenbyte_processing_expr_func.htm)
- [und das Arbeiten mit internen Tabellen.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abentable_functions.htm)

### ABAP Doc

ABAP Doc ist die moderne Variante, Dokumentation für Entwicklungsobjekte anzulegen. In den ABAP Development Tools lässt sich diese Dokumentation für ein Element dann schnell mit `F2` anzeigen.

Die Dokumentation für eine Klasse wird z.B. so angegeben:

~~~ abap
"! Description of what the class does
CLASS demo DEFINITION.
~~~

Weitere Informationen finden sich im [Abschnitt Dokumentation](../../documentation/).

### Konstruktoroperatoren

TODO Feedback zu viel Basics, Teile in Anhang schieben
{: .label .label-red }

Konstruktoroperatoren sind ein recht neues ABAP-Sprachmittel und bestehen aus dem Operator selbst, einer Typangabe, und Parameter innerhalb von Klammern. So
ist bei `data(instance) = new class( number = 1 ).` der Operator `NEW`, der Typ `class`, und `number = 1` ist die Parameterangabe. Mit einem Konstruktoroperator
wird grundsätzlich ein neuer Wert erzeugt, im voranstehenden Beispiel wird etwa eine neue Instanz einer Klasse erzeugt.

Mit Konstruktoroperatoren können viele typische Programmieraufgaben kürzer und präziser gelöst werden. Dieser Abschnitt zeigt die Nutzung verschiedener Konstruktoroperatoren.

Eine Besonderheit ist dabei die Typangabe `#`. Damit weist der Entwickler ABAP an, den passenden Typen aus dem Kontext herzuleiten. Wird etwa mittels Konstruktoroperation
eine zuvor deklarierte Variable gesetzt, bedeutet die Typangabe `#`, dass ein Wert vom Typ der Variable erzeugt wird.

~~~ abap
DATA table TYPE table_type.
table = VALUE #( ). " Erzeugen einer leeren Tabelle vom Typ table_type
~~~

### Referenzen mit NEW erzeugen

Wie im vorigen Abschnitt gezeigt, können mit `NEW` neue Instanzen einer Klasse erzeugt werden.

~~~ abap
" Moderne Variante
DATA(object) = NEW lcl_configuration( number = 1 ).

" Alte, obsolete Variante
CREATE OBJECT object TYPE lcl_configuration.
~~~

### Nutzung neuer Befehlsvarianten (CALL TRANSACTION WITH AUTHORITY-CHECK)

TODO Beispiel aufnehmen
{: .label .label-red }

## Beispiele für modernes ABAP

Dieser Abschnitt zeigt einige Beispiele für moderne Alternativen zu alter und veralteter ABAP-Syntax. Die folgenden Beispiele verwenden teilweise die folgende Struktur- und Tabellendefinition:

~~~ abap
TYPES: BEGIN OF person,
            age  TYPE i,
            name TYPE string,
        END OF person.

TYPES persons TYPE STANDARD TABLE OF person WITH EMPTY KEY.
~~~

### Strukturen und Tabellen erzeugen

Mit dem `VALUE`-Operator lassen sich interne Tabellen wesentlich schneller und übersichtlicher erzeugen:

~~~ abap
" Alte Variante
DATA old_person  TYPE person.
DATA old_persons TYPE persons.

old_person-age  = 30.
old_person-name = `Max Mustermann`.

INSERT old_person INTO TABLE old_persons.


" Moderne Syntax
DATA(new_persons) = VALUE persons( ( age = 30 name = `Max Mustermann` ) ).
~~~

### Werte aus Tabellen auslesen

Zum Lesen von Tabellen kann anstelle des alten `READ TABLE`-Befehls auch die neue Syntax von Tabellenausdrücken bzw. Table Expressions verwendet werden:

~~~ abap
" Alte Variante
READ TABLE persons INDEX 1 INTO DATA(first_person_old).

" Moderne Syntax
DATA(first_person_new) = persons[ 1 ].
~~~

Tabellenausdrücke können auch zusammengesetzt sein, mit `nested_tables[1][2]` wird die zweite Zeile der Tabelle gelesen, die wiederum in der ersten Zeile von `nested_tables` liegt.

Der Vorteil der neuen Syntax zeigt sich beispielsweise, wenn direkt auf eine bestimmte Spalte zugegriffen werden soll:

~~~ abap
" Alte Variante
READ TABLE persons WITH KEY name = `Maria Musterfrau` INTO DATA(maria_old).
DATA(age_maria_old) = maria_old-age.

" Moderne Syntax
DATA(age_maria_new) = persons[ name = `Maria Musterfrau` ]-age.
~~~

Wichtig ist die unterschiedliche Fehlerbehandlung: Findet `READ TABLE` eine Zeile nicht, zeigt ein Wert von `sy-subrc` ungleich 0 (oder 2) dies an. Ein Tabellenausdruck
hingegen wirft die Exception `cx_sy_itab_line_not_found`. Statt diese Exception abzufangen, existieren jedoch zwei kurze Varianten für den typischen Umgang mit nicht 
gefunden Werten, nämlich das Zurückgeben eines initialen Werts oder eines vorgegebenen Standardwerts:

~~~ abap
" Alte Variante
READ TABLE persons WITH KEY name = `unbekannt` INTO DATA(unknown_person_old).
IF sy-subrc <> 0.
    " tue etwas anderes
ENDIF.

" Moderne Syntax
" Variante 1: Ergebnis ist initial, wenn Zeile nicht gefunden
DATA(unknown_person_new_optional) = VALUE #( persons[ name = `unbekannt` ] OPTIONAL ).
" Variante 2: Ergebnis entspricht Default-Fall, wenn Zeile nicht gefunden
DATA(unknown_person_new_default) = VALUE #( persons[ name = `unbekannt` ]
                                            DEFAULT VALUE #( name = `Standardergebnis`
                                                                age  = 99 ) ).
~~~

### Tabellen umwandeln

Häufig muss aus einer Tabelle eines Typs eine Tabelle eines anderen Typs bestimmt werden. In anderen Programmiersprachen steht dafür häufig eine `map`-Methode bereit.

In ABAP hingegen kann dies auch mithilfe eines `VALUE`-Statements umgesetzt werden. Wenn z.B. die Methode `read_person` zu der genutzten `person`-Struktur ein Objekt lädt,
sieht das Umwandeln der Tabelle wie folgt aus:

~~~ abap
" Alte Variante
DATA(person_objects_old) = VALUE person_objects( ).

LOOP AT persons INTO DATA(loop_person).
    INSERT read_person_info( loop_person ) INTO TABLE person_objects_old.
ENDLOOP.

" Moderne Syntax
DATA(person_objects_new) = VALUE person_objects( FOR p IN persons
                                                    ( read_person_info( p ) ) ).
~~~

Die folgenden Beispiele zeigen, wie nur bestimmte Zeilen einer Tabelle anhand eines Index übernommen werden können:

~~~ abap
" Alte Syntax
DATA(shorter_table_old) = VALUE persons( ).

LOOP AT persons INTO DATA(loop_person).
    IF sy-tabix >= 2.
    INSERT loop_person INTO TABLE shorter_table_old.
    ENDIF.
ENDLOOP.

" Moderne Syntax                                                         
DATA(shorter_table_new) = VALUE persons( ( LINES OF persons FROM 2 ) ).
~~~

Sollen Zeilen anhand einer Bedingung gefiltert werden, sieht die moderne Syntax so aus:

~~~ abap
DATA(younger_persons) = VALUE persons( FOR p IN persons WHERE ( age < 20 )
                                           ( p ) ).
~~~

Für viele Möglichkeiten, die `LOOP AT` bietet - beispielsweise Gruppierungen - gibt es auch in der `VALUE`-Variante Entsprechungen. Weitere Informationen dazu finden sich [in der SAP-Dokumentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abenvalue_constructor_params_itab.htm).

TODO Beispiele für alles?
{: .label .label-red }

- [ ] Zwischenberechnungen mit `LET`
- [ ] GROUP
- [ ] BASE
- [ ] FOR i = 1 UNTIL i > 3

### String Templates und Konvertierungsexits

In klassischer Syntax mussten Strings

### Bestimmung von Werten aus Tabellen, z.B. Minimum

~~~ abap
" Alte Variante
DATA(youngest_person_old) = VALUE #( persons[ 1 ] OPTIONAL ).

LOOP AT persons INTO DATA(loop_person).
    IF loop_person-age < youngest_person_old-age.
    youngest_person_old = loop_person.
    ENDIF.
ENDLOOP.

" Moderne Syntax
DATA(youngest_person_new) = REDUCE #( INIT youngest = VALUE person( persons[ 1 ] OPTIONAL )
                                        FOR p IN persons
                                        NEXT youngest = COND #( WHEN p-age < youngest-age
                                                                THEN p
                                                                ELSE youngest ) ).
~~~

TODO andere Beispiele
{: .label .label-red }

- [ ] fancy line_exists
- [ ] GROUP
- [ ] BASE
- [ ] FOR i = 1 UNTIL i > 3

## Namenskonventionen - Empfehlungen NCs vs. Clean Code

### Namen für Repository-Objekte

Für Repository-Objekte wie beispielsweise Klassen sollte im Unternehmen immer ein Namensschema vorgegeben werden, da sich alle Objekte eines Typs den selben Namensraum teilen.
Wird etwa für Instandhaltungsaufträge eine Klasse `ZCL_AUFTRAG` angelegt, steht dieser Name nicht mehr für Serviceaufträge zur Verfügung, und ein Entwickler der den Namen der
Klasse liest weiß nicht direkt, um was für einen Auftrag es sich handelt. Nicht ausdrucksstarke Namen wie `ZCL_DATA` oder `ZCL_FORMULAR3` erschweren ebenso das Verständnis
beim Lesen des Quellcodes.

### Ungarische Notation

{: .note }
[Clean ABAP](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#avoid-encodings-esp-hungarian-notation-and-prefixes) empfiehlt, bei Variablenbenennung auf die ungarische Notation oder andere Encodings zu verzichten.

Gemäß den Clean ABAP-Richtlinien entwickelter Code wird aus vielen, kurzen Methoden bestehen. In diesen ist es unnötig, Informationen wie z.B. die Gültigkeit oder den Typ einer Variable
in ihrem Namen anzugeben. Diese Informationen sollten direkt auf einen Blick sichtbar sein, oder stehen in Eclipse z.B. mittels Druck auf `F2` direkt zur Verfügung. Stattdessen sollten
ausdrucksstarke Namen verwendet werden.

In altem Coding, das noch nicht modernisiert wurde, kann die Weiternutzung ungarischer Notation hingegen hilfreich sein. Beide Varianten sollten jedoch nicht gemischt in einem
Entwicklungsobjekt eingesetzt werden.


## ABAP Cleaner
Der 2023 öffentlich erschienene ABAP Cleaner ist eine Erweiterung für ADT, welche die Anwendung von mehr als 90 Regeln zur Formatierung und Gestaltung von ABAP Code ermöglicht. 
[ABAP Cleaner Link](https://github.com/SAP/abap-cleaner)
ABAP Code wird nicht nur wie bei Pretty Printer formatiert, es werden auch, basierend auf den eingestellen Regeln, Optimierungen des ABAP Codes vorgenommen. 
Nicht verwendete Methoden-Parameter werden durch Kommentare kenntlich gemacht und es können - je nach Einstellung - nicht verwendete Variablen automatisch gelöscht werden. 
Das Ergebnis der Anwendung ist einheitlicher, besser lesbarer Code und eine effektive Beschleunigung der Entwicklung, da der Cleaner Aufgaben des Programmierers übernimmt. 

Der Einsatz des ABAP Cleaners bringt eine Vielzahl von Vorteilen für das moderene Entwickeln von ABAP Code. Aus Sicht der Autoren dieses Leitfadens ist der Einsatz vom ABAP Cleaner unbedingt nötig. 
