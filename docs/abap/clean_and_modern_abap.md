---
layout: page
title: Sauberen und modernen ABAP Code schreiben
permalink: /abap/clean_and_modern_abap/
parent: Moderne ABAP Entwicklung
nav_order: 2
---

{: .no_toc}
# Modernes ABAP schreiben das auch schön aussieht

1. TOC
{:toc}

ABAP gibt es seit 1983, und der Sprachumfang ist seitdem stetig gewachsen. Dadurch bildet die Sprache verschiedene Paradigmen ab, und es gibt häufig verschiedene Alternativen für ähnliche Zwecke. Als Beispiel können Funktionsgruppen und -bausteine etwa als imperativer Vorläufer ähnlich wie Klassen in ABAP OO genutzt werden. Daneben gibt es auch viele als obsolet gekennzeichnete Befehle, die häufig in bereits entwickelten Programmen oder Beispielcode im Internet zu finden sind und damit auch weiterhin für neue Entwicklungen genutzt werden. 

Die SAP hat dieses Problem selbst erkannt und als eine Unterstützung für Entwickler die [Clean ABAP Guidelines](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md) erstellt. Diese basieren auf dem Buch Clean Code von Robert C. Martin und adaptieren verschiedene Best Practices für ABAP. Die Guidelines liefern Vorgaben für viele Bereich, etwa von zur Benamung von Objekten und Variablen, über die Wahl der richtigen Sprachmittel, bis hin zur Formatierung und Kommentierung von Code.

Daneben entwickelt die SAP ABAP auch stetig weiter. Eine Übersicht über neue Entwicklungen liefert etwa die [ABAP Feature Matrix](https://software-heroes.com/en/abap-feature-matrix).

## Modernes ABAP - neue Statements 

- wichtigste neue Statements #
- Stil von modernem ABAP
- SAP SAMPLES als Referenz bibliothek

Todo check SAP Samples (ABap OO Basics)– und clean code bzgl. patterns - 

### Funktionale Aufrufe

### Konstruktoroperatoren








## Clean ABAP
- Prinzipien von Clean Code und Clean ABAP
- Ein paar Clean ABAP Regeln zum Eisntieg
- Nutzung ABAP Cleaner


----
OO vorausgesetzt
Viele alte Anweisungen ersetzt durch Ausdrücke und Funktionen -> lesbarer wenn jemand z.B. keinen ABAP Background hat
Z.B. CONDENSE text. Durch text = condense( text )

Konstruktoroperationen
VALUE – Nutzung für Definition von Strukturen und Tabellen
VALUE mit FOR – Iteration über Tabellen, äqualivalent zu map in anderen Sprachen
Ggf. VALUE mit groups als äquivalent zur LOOP AT-Syntax
Ggf. VALUE mit UNTIL

REDUCE – als äquivalent zu reduce() in vielen Sprachen
FILTER -
CORRESPONDING – als Ersatz zu MOVE-CORRESPONDING

## Namenskonventionen - Empfehlungen NCs vs. Clean Code.
