---
layout: page
title: Sauberen und modernen ABAP Code schreiben
permalink: /abap/clean_and_modern_abap/
parent: Moderne ABAP Entwicklung
nav_order: 2
---

{: .no_toc}

# Sauberen und modernen ABAP Code schreiben

1. TOC
{:toc}

ABAP gibt es seit 1983, und der Sprachumfang ist seitdem stetig gewachsen. Dadurch bildet die Sprache verschiedene Paradigmen ab, und es gibt häufig verschiedene Alternativen für ähnliche Zwecke. Als Beispiel können Funktionsgruppen und -bausteine etwa als imperativer Vorläufer ähnlich wie Klassen in ABAP OO genutzt werden. Daneben gibt es auch viele als obsolet gekennzeichnete Befehle, die häufig in bereits entwickelten Programmen oder Beispielcode im Internet zu finden sind und damit auch weiterhin für neue Entwicklungen genutzt werden.

Die SAP hat dieses Problem selbst erkannt und als eine Unterstützung für Entwickler die [Clean ABAP Guidelines](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md) erstellt. Diese basieren auf dem Buch Clean Code von Robert C. Martin und adaptieren verschiedene Best Practices für ABAP. Die Guidelines liefern Vorgaben für viele Bereich, etwa von zur Benennung von Objekten und Variablen, über die Wahl der richtigen Sprachmittel, bis hin zur Formatierung und Kommentierung von Code.

{: .note }
Empfehlungen aus den Clean ABAP Guidelines werden in diesem Abschnitt so hervorgehoben. Dabei wird immer auf den entsprechenden Abschnitt der Guidelines verlinkt.

Daneben entwickelt die SAP ABAP auch stetig weiter. Eine Übersicht über neue Entwicklungen liefert etwa die [ABAP Feature Matrix](https://software-heroes.com/en/abap-feature-matrix).

## Voraussetzungen

Dieser Abschnitt zeigt Beispiele für modernen ABAP Code, erhebt jedoch keinen Anspruch auf Vollständigkeit. Eine grundlegende Kenntnis von ABAP und insbesondere ABAP Objects
wird vorausgesetzt.

## Moderne ABAP-Sprachmittel

Dieser Abschnitt zeigt eine kurze Übersicht moderner Sprachmittel von ABAP.

TODO
{: .label .label-red }

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

{: .note }
[Clean ABAP](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-inline-to-up-front-declarations) empfiehlt, Inline-Deklarationen den klassischen Deklarationen vorzuziehen.

Mithilfe von Inline-Deklarationen können stattdessen überall in der Methode Variablen deklariert und direkt zugewiesen werden:

~~~ abap
DATA(mein_string) = `hello worlddd`.
~~~

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
[Clean ABAP](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-functional-to-procedural-language-constructs) empfiehlt, funktionale Sprachelemente immer vorzuziehen.

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

ABAP Doc ist die moderne Variante, Dokumentation für Entwicklungsobjekte anzulegen.

Die Dokumentation für eine Klasse wird z.B. so angegeben:

~~~ abap
"! Description of what the class does
CLASS demo DEFINITION.
~~~

Weitere Informationen finden sich im [Abschnitt Dokumentation](../../documentation/).

## Konstruktoroperatoren

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

Weiterhin können auch Datenobjekte mit `NEW` erzeugt werden, um Referenzen auf Daten zu befüllen:

~~~ abap
DATA dref TYPE REF TO data.
dref = NEW struct_type( name   = `Test`
                        number = 10 ).
~~~

### Strukturen und Tabellen mit VALUE erzeugen

### CORRESPONDING

### CONV und CAST

### COND

### SWITCH

### REDUCE

### FILTER

## Clean ABAP

- Prinzipien von Clean Code und Clean ABAP
- Ein paar Clean ABAP Regeln zum Eisntieg
- Nutzung ABAP Cleaner

----
OO vorausgesetzt
Viele alte Anweisungen ersetzt durch Ausdrücke und Funktionen -> lesbarer wenn jemand z.B. keinen ABAP Background hat
Z.B. CONDENSE text. Durch text = condense( text )

Konstruktoroperatoren
VALUE – Nutzung für Definition von Strukturen und Tabellen
VALUE mit FOR – Iteration über Tabellen, äqualivalent zu map in anderen Sprachen
Ggf. VALUE mit groups als äquivalent zur LOOP AT-Syntax
Ggf. VALUE mit UNTIL

REDUCE – als äquivalent zu reduce() in vielen Sprachen
FILTER -
CORRESPONDING – als Ersatz zu MOVE-CORRESPONDING

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
