---
layout: page
title: Sauberen und modernen ABAP Code schreiben
permalink: /abap/clean_and_modern_abap/
parent: Moderne ABAP Entwicklung
nav_order: 4
---

{: .no_toc}
# Modernes ABAP schreiben das auch schön aussieht

1. TOC
{:toc}

## Modernes ABAP - neue Statements 
- wichtigste neue Statements #
- Stil von modernem ABAP
- SAP SAMPLES als Referenz bibliothek

Todo check SAP Samples (ABap OO Basics)– und clean code bzgl. patterns - 

ABAP gibt es seit 1983, und der Sprachumfang ist seitdem stetig gewachsen.
Verschiedene Paradigmen, obsolete Befehle und neue Alternativen, dadurch viele Möglichkeiten zur Programmierung
SAP hat das selbst erkannt und die Clean ABAP Guidelines erstellt -> Vorgaben für viele Bereich wie Benamung, welche Sprachmittel setze ich ein, ...
Empfehlung: eigene Richtlinien sollten auch immer auf Clean ABAP aufbauen




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
