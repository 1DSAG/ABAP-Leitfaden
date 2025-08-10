---
layout: page
title: Weitere Beispiele
permalink: /security/additional-examples/
parent: Sicherheit
nav_order: 6
---

{: .no_toc}

# Beispiele

1. TOC
{:toc}

Hier finden Sie weitere Beispiele und Beschreibungen aus dem Bereich der Schwachstellen

## Directory Traversal (Write Access)

Directory-Traversal-Angriffe (Verzeichniswechselangriffe) funktionieren durch Manipulation des Dateinamens oder der Pfadinformationen durch Eingabe von Sonderzeichen in eine Zeichenkette, die als Datei-Locator dient.

Wird eine derartige Zeichenkette zur Abänderung von Inhalten einer Datei verwendet, lässt sich eine Anwendung austricksen und dazu bringen, Dateien zu ändern, auf die der Benutzer keinen Zugriff besitzen sollte. Dieser Angriff ist möglich, da es der Anwendung nicht gelingt, Befehlszeichen in Eingaben zu ermitteln und zu entfernen, die als Bestandteil des Datei-Locators verwendet werden.

Das wirkt sich auf Dateien in allen Verzeichnissen aus, für die die anfällige Anwendung Schreibzugriff besitzt. Darunter können auch Dateien im Unternehmens-LAN fallen. Risiko Durch Kontrolle, welche Dateien eine Anwendung ändern werden, sind mindestens folgende Angriffe möglich:

- Schreibzugriff auf entscheidende Konfigurationsdateien. Dies kann Angreifern zuspielen, noch weiter in ein bereits angegriffenes System einzudringen.
- Schreibzugriff auf Protokolldateien.
- Schreibzugriff auf die Datenpersistenz einer produktiven Datenbank.

Alle diese Risiken gefährden die Integrität des produktiven SAP-Servers. Details Viele Anwendungen greifen auf Dateien auf dem SAP-Server zum Schreiben von Daten zu. Typische Anwendungsfälle umfassen die temporäre Persistenz von Datei-Uploads und den Export von Geschäftsdaten zur Übernahme von einem Altsystem. Auf Betriebssystemebene werden Dateien durch Datei-Locators identifiziert. Diese Datei Locators enthaltenen Angaben über die Laufwerk- oder Dateifreigabe, das Verzeichnis, den Namen und die Endung einer bestimmten Datei. Es gibt Fälle, bei denen ein Teil solcher Datei-Locator-Angaben auf externem Input basiert. Beispielsweise kann der Name einer auf den Server hochgeladenen Datei auch verwendet werden, um diese in einen temporären Ordner zu speichern. Eine externe Eingabe kann jedoch Sonderzeichen enthalten, die sich zur Manipulation des übergreifenden File Locators nutzen lassen. Als Folge hiervon werden Dateien von anderen Laufwerken, Dateifreigaben oder sonstige Verzeichnisse unter Umständen verändert. Auch auf Dateien anderer Dateitypen bzw. Erweiterungen lässt sich ggf. zugreifen. Ein solcher Angriff wird als Directory-Traversal-Angriff bezeichnet. Durch unzulässige Verzeichniswechsel kann ein unbefugter Benutzer beliebige Dateien auf dem SAP-Server ändern, auf dem die anfällige Anwendung ausgeführt wird. Je nach dem Dateizugriffsmodus kann ein Angreifer Daten entweder ändern oder löschen. Diese Schwachstelle führt zu einer unsachgemäßen Verwendung der ABAP-Befehle OPEN DATASET FOR OUTPUT, OPEN DATASET FOR APPENDING, DELETE DATASET, TRUNCATE DATASET und TRANSFER. Über solche Sicherheitslücken lässt sich die Integrität eines produktiven SAP-Servers beeinträchtigen. Ein Angreifer kann Dateien löschen oder ändern, die für den ordnungsgemäßen Systembetrieb von Entscheidung sind. Zusätzlich kann ein Angreifer Dateien ändern und löschen, die Geschäftsdaten enthalten. Auf jeden Fall stellt der unberechtigte Schreibzugriff für beliebige Dateien auf einem Server ein kritisches Sicherheitsrisiko dar. Die Wahrscheinlichkeit einer bestimmten Problematik ändert sich, sofern der Eingabe ein Postfix hinzugefügt wird.

## Generic ABAP Module Calls

Durch die Kontrolle, welche ABAP-Module auf einem SAP-System ausgeführt werden, sind mindestens folgende Angriffe möglich: Absturz des SAP-Anwendungsservers Störung der Geschäftslogik, was zu einem inkonsistentem Datenstand führt Manipulation der Geschäftslogik, was einen unprivilegierten Zugriff auf geschützte Funktionen zur Folge hat Einige dieser Risiken können gegen gesetzliche Vorgaben verstoßen, da solche Schwachstellen den unprivilegierten Zugriff auf kritische Geschäftslogik ermöglichen. Details In ABAP gibt es Befehle, die Transaktionen, Funktionsbausteine, Methoden, Formulare und Berichte dynamisch aufrufen. Dynamisch bedeutet, dass der Name des auszuführenden Bausteins basierend auf den Eingaben zur Laufzeit bestimmt wird. Dynamische Baustein-Aufrufe sind eine wichtige Funktion, um flexiblen und wiederverwendbaren Code zu schreiben. Dies kann jedoch sehr gefährlich sein, wenn ein solcher Baustein durch einen böswilligen Benutzer kontrolliert wird. Findings berücksichtigen das Vorhandenseins eines AUTHORITY-CHECK. Zudem werden indirekte (in Untermodulen aufgerufene) AUTHORITY-CHECKs berücksichtigt. Die Wahrscheinlichkeit einer bestimmten Problematik ändert sich, wenn der Eingabe ein Präfix oder Postfix hinzugefügt wird.

## OS Command Injection (CALL 'SYSTEM')

Dieser Testfall prüft, ob eine (externe) Eingabe als ein Betriebssystembefehl mittels Kernel Funktion 'SYSTEM' ausgeführt wird. In solch einem Fall könnte ein Angreifer beliebige Befehle auf dem SAP-Anwendungsserver ausführen. Risiko Das Ausführen von beliebigen Betriebssystembefehlen kann zu folgenden Risiken führen: Absturz des SAP-Anwendungsserver Installation von Malware Erstellung von privilegierten Benutzerkonten Lese- / Schreibzugriff auf alle Dateien des SAP-Anwendungsservers Details Die Kernel-Funktion 'SYSTEM' ermöglicht die Ausführung von beliebigen Betriebssystembefehlen. Werden hierdurch (externe) Eingaben verarbeitet, wird der standardmäßige SAP-Sicherheitsmechanismus für die Ausführung von Betriebssystembefehlen umgangen. Über die Transaktionen SM49 oder SM69 können Administratoren eine Liste der zulässigen Betriebssystembefehle pflegen und für deren Ausführung entsprechende Berechtigungen zuordnen. Auf diese Weise kann ein Administrator den Zugriff auf gefährliche Befehle einschränken. Die Kernel-Funktion 'SYSTEM' umgeht jedoch die Befehlsliste aus SM49 / SM69. Aus diesem Grund lässt sich mittels der Kernel-Funktion 'SYSTEM' jeder Betriebssystembefehl ausführen. Dies stellt ein kritisches Sicherheitsrisiko dar.

## ABAP Command Injection (Report)

Die ABAP-Befehle INSERT REPORT und SUBMIT können zusammen dynamischen ABAP Code während der Laufzeit erzeugen und ausführen, was zu einem sehr hohen Sicherheitsrisiko werden kann, sofern Benutzereingaben Teil eines solchen dynamischen Berichts sind. Risiko Kann ein Benutzer beliebige ABAP-Befehle auf einem SAP-System ausführen, muss das System als vollständig kompromittiert betrachtet werden: Lese- und Schreibzugriff auf alle (geschäftlichen) Daten in der Datenbank Ausführung einer beliebigen Geschäftslogik Solche Sicherheitslücken stellen Compliance-Verstöße dar. Details Der ABAP-Befehl INSERT REPORT wird zur dynamischen Erzeugung eines ABAP-Reports verwendet. Dies erfolgt durch Verkettung von Zeichenketten, die üblicherweise aus einer Datenquelle gelesen werden. Sobald der ABAP-Report zusammengestellt wurde, kann er mit dem Befehl GENERATE REPORT ausgeführt werden. Eine solche Verfahrensweise der Programmierung ist sehr gefährlich, da hierdurch spontan bösartiger Code erstellt werden kann und keine Spuren dieses Codes im System hinterlassen werden.

## Dangerous ABAP Commands

Bei diesem Testfall wird die Verwendung der ABAP-Befehle EDITOR-CALL FOR REPORT und COMMUNICATION geprüft. Beachten Sie, dass dieser Testfall Ausgangspunkte für die weitere Prüfung ermittelt und eine manuelle Nachbearbeitung erfordert. Risiko Das Geschäftsrisiko hängt von der erkannten Funktionalität ab und muss durch manuelle Analysen bestimmt werden. Details Dieser Testfall betrifft die folgenden ABAP-Befehle: EDITOR-CALL FOR REPORT COMMUNICATION Diese Befehle sind entweder kritisch oder obsolet. Sie sollten auf jeden Fall nicht im eigenentwickelten Code enthalten sein. EDITOR-CALL FOR REPORT ermöglicht den Aufruf eines ABAP-Editors für Quellcode. Besondere Entwicklungsberechtigungen sind dennoch erforderlich. Eigenentwickelter Code sollte keinen ABAP-Code-Editor zur Verfügung stellen. Dies sollte ausschließlich über SAP Standardfunktionen möglich sein, die ordnungsgemäß eingeschränkt und geprüft werden können. COMMUNICATION diente zum Austausch von Systemdaten und wurde verwendet, bevor RFC verfügbar war. Diese Art von Datenaustausch ist obsolet. Unter dem Aspekt der Sicherheit ergibt sich ein Risiko, da Sicherheitsfunktionen wie z. B. SNC nicht für den COMMUNICATION-basierten Datenaustausch verwendet werden können.
