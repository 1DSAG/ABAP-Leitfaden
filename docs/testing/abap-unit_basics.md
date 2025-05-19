---
layout: page
title: ABAP Unit - Testtechniken
permalink: /testing/abap-unit_basics/
parent: Softwaretest mit ABAP Unit 
nav_order: 2
---


{: .no_toc}
# ABAP Unit: Testtechniken

1. TOC
{:toc}

Technische Grundlagen Objektebene

## Grundsätzlich ist fasst alles mit ABAP Unit testbar

> {: .Zitat }
> "Das kann man nicht testen"  

Es gibt Programmbereiche, die nicht mittels ABAP Unit Tests überprüft werden können. Dazu gehören alle Programmteile, die auf einen Dialog angewiesen sind oder Daten darstellen (z.B. ALV-Grid).
Für alles Andere gibt es Möglichkeiten diese Programme mit ABAP Unit Tests abzusichern. Anfänglich wird dies aufwändig und mühsam sein. Die Mühe wird sich aber lohnen und schnell auszahlen. Es is definitiv möglich BAPIs / BAdIs / RFCs / IDOCs / mit Unitests abzusichern.  

## Behandlung von Mandanten in Unit Tests - sollten wir allgemeiner schreiben. ...

Die klassischen Systemkonfiguration im Entwicklungssystem mit einen Entwicklungs- und einem Testmandanten stellen eine Hürde für den reibungslosen Ablauf von Komponenten- oder Integrationstests dar, da diese meist von Daten der Datenbank abhängig sind, wenn gängige Unit Test Methodiken nicht angewendet werden.

>**Empfehlung**  
Erstellen Sie ihre ABAP Unit Tests unabhängig von der Datenbank, so dass sie mit Hilfe von Dependency-Injection und Mocks in jedem Mandanten lauffähig sind das gleiche Ergebnis liefern.  
Wird Vorgehen nicht angewendet, die Tests im Mandant 100 entwickelt in Mandant 110 ausgeführt, würden die Tests keine belastbare Aussage liefern und somit seltener oder gar nicht ausgeführt.
Sie sollten alles dafür Einsetzen das Unit Test in jedem Mandanten immer lauffähig sind.  Diese 

Welche Techniken Sie beim Erreichten dieser Unabhängigkeit unterstützen finden sie hier im Abschnitt [Erweiterte Techniken](#erweiterte-techniken)
{: .highlight}

## Testumgebung

Die ABAP Unit-Tests können aus den ABAP-Development-Tools heraus oder der SAP-GUI Entwicklungsumgebung (SE80, SE24) erstellt und verwendet werden. Die Vorgehensweise unterscheidet sich nur in Kleinigkeiten.
Empfohlen wird hier klar ADT, da hier auch die Verwendung von [Test Relations](https://www.youtube.com/watch?app=desktop&v=yiKhKlQz89Y&t=14s) möglich ist.  
Die Techniken, die zur Erstellung notwendig sind, ähneln sich jedoch stark. Unit Test, die in der SE80 erstellt wurden, können auch in Eclipse gewartet und getestet werden und umgekehrt. Die Tastenkombination zum Ausführen der Unit Test ist in beiden Tools **STRG + SHIFT + F10.** Andere Funktionen sind in der ABAP Workbench teilweise nur durch das Menü erreichbar während es im ADT eine Tastenkombination dafür gibt.

Im folgenden Abschnitt werden diese Themen behandelt:

* Erstellen von Unit Tests
* Ausführen von Unit Tests
* Ergebnisanzeige
* Codeabdeckung (Code Coverage)

Wir gehen davon aus, dass Sie Erfahrung mit dem jeweiligen Tool haben. Aus diesem Grund erfolgt keine Schritt-für-Schritt-Anleitung, sondern lediglich eine kurze Übersicht der wichtigsten Befehle.

### Erstellen einer lokalen Testcalse in ADT

* Öffnen Globale Klasse
* Springen zur View "Test Classes"
* Template "testClass"

### Tastenkombinationen in ADT

* **Ctrl + Shift + F9:** Unit Test Preview anzeigen
* **Ctrl + Shift + F10:** Unit Tests ausführen
* **Ctrl + Shift + F11:** Unit Tests mit Coverage ausführen
* **Ctrl + Shift + F12:** Unit Test Ausführungsdialog aufrufen
* **Ctrl + Shift + F2:** ATC-Prüfung mit Standardvariante ausführen

### Tastenkombinationen in der Workbench

* **Ctrl + Shift + F10:** Unit Tests ausführen
* **Ctrl + Shift + F11:** Lokale Testklassen anzeigen (nur formularbasierter Editor)
* **Ctrl + F11:** Lokale Testklassen anzeigen (nur Quelltext-basierter Editor)

## Testmethodiken und Prinzipien

### GIVEN - WHEN - THEN

GIVEN-WHEN-THEN ist ein Stil, um Unit Test zu formulieren. Mit GIVEN wird eine Bedingung angegeben, unter denen der Test stattfinden soll. WHEN beschreibt die Aktion, die durchgeführt wird und THEN beschreibt das erwartete Ergebnis.

Bezogen auf unser Beispiel mit der Hausnummer könnte die Formulierung heißen:\
GIVEN: ABC-Straße 13\
WHEN: die Hausnummer aus diesem String ermittelt wird\
THEN: Sollte die Hausnummer 13 sein

### Clean Code in Unit Tests

Oft trifft man auf die Einstellung, dass es in Unit Tests nicht nötig ist sich an Regen der Code Qualität zu halten #CleanABAP. Schlechte Wartbarkeit Qualität in Unit Tests wird dazu führen dass die Tests nicht weiterentwickelt werden und nutzlos werden. Doppelter Code, fehlende Modularisierung ist hier ebenso zu vermeiden wie in produktiven code.

### Unit Test sauber halten

Ebenso ist es zwingend nötig alle Unit Test Erfolgreich durch zu führen. Seien sie hier nicht nachlässig und priorisieren sie diese Ausgaben die es bedürfen den Geschäfts-Code oder den Unit Test zu reparieren, bis wieder alle Tests fehlerfrei ausgeführt werden.  

### Behandlung von Ausnahmen

[SAP empfiehlt](https://help.sap.com/doc/saphelp_crm700_ehp03/7.0.3.11/de-DE/dd/587324e2424b14ab5afb3239a77a8d/frameset.htm): Wenn der zu testende Code in der Lage ist, eine Ausnahme auszulösen, sollte die Testmethode selbst diese nicht behandeln, sondern sie in ihrer Signatur deklarieren (abgesehen von provozierten Ausnahmen), so dass der Testfall fehlschlägt, wenn er zur Laufzeit auftritt. 



### Unit Test Klasse  #Review TJOHN macht das wirklich Sinn das zu erklären ?? 
* Beschreibung, wie eine Klasse aufgebaut ist
* Risklevel
* Duration
* erstellen in
  * Eclipse
  * SE80
* SETUP 
* TEARDOWN
* FOR TESTING
* genereller Ablauf


### Risiko Level

* @all:   Gibt es Erfahrungen mit den Einstellungen 

Folgen sie den Vorgaben der SAP zum Risiko Level:
* CRITICAL - a test changes system settings or customizing data (default)
* DANGEROUS - a test changes persistent data
* HARMLESS - a test does not change system settings or persistent data

Grundsätzlich sollten Sie es vermeiden Tests zu schreiben, die wirkliche Änderungen an der Datenbank vornehmen ( müssen ) während ihrer Laufzeit. Dies ist oft ein Indikator für fehlendes Management von Abhängigkeiten bzw. deren Austausch. Ihr Ziel muss sein möglichst alle Tests als Hamrless definieren zu können.

Mit Hilfe der von SAP bereitgestellten Frameworks zum Mocken von Datenbanktabellen und CDS-Views ist dies ermöglicht worden. Siehe Abschnitt [Mocking..](Mocking, faking, spying und stubbing)

### Dauer / Duration

Einstellung der verschiedenen Laufzeiten können sie via Transaktion: SAUNIT_CLIENT_SETUP vornehmen. Auch hier gilt das klare Ziel, dass ihre Tests schnell sein müssen, damit sie immer wieder ausgeführt werden können. 

### ASSERT  #Review TJOHN macht das wirklich Sinn das zu erklären ??  JA

* Vorstellung CL_ABAP_UNIT_ASSERT ?? macht das wirklich Sinn das zu erklären ??   JA aber nur warum und ganz kurz

### Beispiel Testklasse

Das folgende Beispiel zeigt die Testklasse zu der globalen Klasse `ZCL_ADDRESS`, in der die Methode `SPLIT_ADDRESS` dafür zuständig ist, einen String, der Adresse und Hausnummer enthält, in die Bestandteile `Straße` und `Hausnummer` aufzuteilen.

```
CLASS ltcl_verify_addresses DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    DATA cut TYPE REF TO zcl_address.
    METHODS:
      setup,
      strasse_17_juni FOR TESTING,
      abc_strasse FOR TESTING,
      parkallee FOR TESTING.
ENDCLASS.


CLASS ltcl_verify_addresses IMPLEMENTATION.

  METHOD strasse_17_juni.
    DATA(address) = cut->split_address( |Straße des 17. Juni 134| ).
    cl_abap_unit_assert=>assert_equals(
      exp = |Straße des 17. Juni|
      act = address-street ).
    cl_abap_unit_assert=>assert_equals(
      exp = |134|
      act = address-house_no ).
  ENDMETHOD.

  METHOD abc_strasse.
    DATA(address) = cut->split_address( |ABC-Straße 89| ).
    cl_abap_unit_assert=>assert_equals(
      exp = |ABC-Straße|
      act = address-street ).
    cl_abap_unit_assert=>assert_equals(
      exp = |89|
      act = address-house_no ).
  ENDMETHOD.

  METHOD parkallee.
    DATA(address) = cut->split_address( |Parkallee 11 a-f| ).
    cl_abap_unit_assert=>assert_equals(
      exp = |Parkallee|
      act = address-street ).
    cl_abap_unit_assert=>assert_equals(
      exp = |11 a-f|
      act = address-house_no ).
  ENDMETHOD.

  METHOD setup.
    cut = NEW #( ).
  ENDMETHOD.

ENDCLASS.
```


#### Methoden zur Zusammenstellung von abhängigen Klassen

Bei komplizierten Testfällen müssen eventuell umfangreiche Vorarbeiten getan werden, damit die eigentlichen Tests durchgeführt werden können. Es sollten zwar so wenig Abhängigkeiten wie möglich vorhanden sein, aber gänzlich vermeiden lassen sich Abhängigkeiten leider nicht immer. Hilfsmethoden können helfen, das notwendige Setup für einen Test vorzubereiten.

**Beispiel:**

Die Methode `prepare_setup( ).` erstellt zwei Instanzen, die zur Verifizierung der Adresse notwendig sind:
* Strassenverzeichnis
* Postleitzahlenkatalog

#### Hilfsmethoden zum Aufbau von Testdaten

Wenn Testdaten aus vielen Komponenten bestehen (Kopfdaten, Positionsdaten, Partner, Materialien usw.), dann kann das Zusammenstellen dieser Daten umfangreich werden. Entsprechende Hilfsmethoden sind hier unbedingt erforderlich um die Zusammenstellung erleichtern.

**Beispiel:**

Die Methode `get_setup_for_document( doc_id = c_nice_docuemt_id ).` stellt alle notwendigen Daten zur Verfügung, die zu dem geforderten Dokument gehören.
{: .note }
Wenn sie auf Dokumente der Datenban zurückgreifen müssen, pflegen Sie zentral Konstanten mit sprechenden Namen und Erläuterungen.  Sie werden irgendwann nicht mehr wissen welche Eigenarten Beleg 564 hatte.   
```ABAP
CONSTANTS:  "! Sales order that has one item, Material ..., not released ... 
             c_order_one_iten_ok
```


#### Hilfsmethoden zur Modularisierung von Tests

Bei Tests kann es notwendig sein, dass nicht nur ein Aspekt des Ergebnisses getestet wird, sondern viele. Solche Programmierungen können in der Regel gut in Methoden ausgelagert werden.

**Beispiel:**

Die Methode `verify_address_is_valid( address = data )` prüft nicht nur, ob Straßenname und Hausnummer erfolgreich extrahiert werden konnten, sondern auch, ob die Postleitzahl aus fünf Zahlen besteht und mit dem Ortsnamen übereinstimmt.

### Testen von privaten, geschützten und öffentlichen Methoden
Es gibt die Meinung, dass nur öffentliche Methoden getestet werden sollten. Über die Codeabdeckung kann analysiert werden, ob alle Codestrecken durchlaufen wurden.
Allerdings kann das Bereitstellen der notwendigen Daten sehr aufwändig sein, so dass es sinnvoll sein kann, die kleineren Einheiten (private und geschützte Methoden) zu testen. Zudem "verwässern" umfangreiche Datenkonstellationen den Zweck eines Unit Tests. Tests für private Methoden können ebenfall helfen den Ursprung eine Fehlers schneller zu lokalisieren. 

**Beispiel Adressaufbereitung:**\
Nehmen wir an, wir haben eine Klasse, die Adressen entgegen nimmt und analysiert. Die eine Methode ```SEPARATE_HOUSENO_FROM_STREET``` haben wir bereits kennengelernt. Zusätzlich gibt es eine Methode ```CHECK_POST_CODE```, die sicherstellen soll, dass die Postleitzahl 5-stellig ist und nur aus Zahlen besteht. Wenn beide privaten Methoden von der öffentlichen Methode ```CHECK_ADDRESS``` aufgerufen werden, müssen wir zum Testen immer eine komplette Adresse übergeben. Einfacher und auch deutlicher ist es, wenn wir die privaten Methoden separat testen.
Sie können so nur die eigentliche Funktion der Methode ```SEPARATE_HOUSENO_FROM_STREET``` testen, das Aufteilen,  da die Prüfmethoden  `CHECK-` eigene Tests besitzen. 

### Unit Tests erweitern

Wenn wir uns das Beispiel mit dem Ermitteln der Hausnummer ansehen, dann gibt es viele Fallstricke, die ein unerwartetes Ergebnis hervorrufen können. Die Eingaben, die zu einem fehlerhafte Ergebnis führen, kennen wir im Vorfeld jedoch nicht. Wir lernen sie erst kennen, wenn sich Anwender beschweren, die ein falsches Ergebnis erhalten. In diesem Fall können die Eingaben, die zu fehlerhaften Ausgaben geführt haben, in einen Unit Test aufgenommen werden. Nach der Änderung des Codings werden alle bereits definierten Unit Tests durchgeführt und der Entwickelnde kann sicher sein, dass alles wie zuvor funktioniert.

#### Beispiel Testklasse mit Hilfsmethode

In diesem Beispiel wird die Demoklasse aus dem vorherigen Kapitel, die eine Adresse in ihre Bestandteile Straße und Hausnummer aufteilt, aufgegriffen. Diese Klasse hat drei Testmethoden für einzelne Varianten. Da das Schema immer das gleiche ist, wäre es einfacher, wenn die Straßennamen und Hausnummern zusammengesetzt und dann in einer Methode getestet würden. 

Also zum Beispiel:

`verify_address( strasse = 'Beispielstraße'  house_number = '23' )`.

Die Testklasse könnte dann wie folgt aussehen:

```ABAP
CLASS ltcl_verify_addresses_helper DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    DATA cut TYPE REF TO zcl_address.
    METHODS:
      setup,
      verify_address
        IMPORTING
          street   TYPE string
          house_no TYPE string,

      test_german_standards FOR TESTING.
ENDCLASS.


CLASS ltcl_verify_addresses_helper IMPLEMENTATION.

  METHOD test_german_standards.

    verify_address( street = |Straße des 17. Juni| house_no = |134| ).
    verify_address( street = |ABC-Straße| house_no = |89| ).
    verify_address( street = |Parkallee| house_no = |11 a-f| ).
  ENDMETHOD.

  METHOD setup.
    cut = NEW #( ).
  ENDMETHOD.

  METHOD verify_address.

    DATA(address_string) = |{ street } { house_no }|.
    DATA(address_result) = cut->split_address( address_string ).
    cl_abap_unit_assert=>assert_equals(
      exp = street
      act = address_result-street
      msg = |Streetname should be { street }| ).
    cl_abap_unit_assert=>assert_equals(
      exp = house_no
      act = address_result-house_no
      msg = |House number should be { house_no }| ).

  ENDMETHOD.

ENDCLASS.
```

Die Testklasse enthält nun nur noch die eine Testmethode `TEST_GERMAN_STANDARDS`, in der alle Tests durchgeführt werden.

Es gibt eine Hilfsmethode `VERIFY_ADDRESS`, die einen Straßennamen und eine Hausnummer entgegennimmt, diese zusammensetzt und durch die zu testende Methode `SPLIT_ADDRESS` wieder aufteilen lässt. Da ein Testfall nun nicht mehr 1:1 einer Testmethode entspricht, wurde der Parameter `MSG` von `CL_ABAP_UNIT_ASSERT=>ASSERT_EQUALS` verwendet, um direkt auf den Fehlerhaften Testfall hinweist.

Die Testklasse ist nun deutlich übersichtlicher und die Testfälle sind auf einen Blick gut erkennbar.

Diese Variante erlaubt es, auch weiterhin Tests durchzuführen, die nach einem anderen Schema funktionieren. 

Hinweis: Dies ist keine Empfehlung, alle Tests in einer Testmethode unterzubringen. Das Beispiel soll lediglich aufzeigen, dass Hilfsmethoden genutzt werden können, um die Unit Tests kompakter, besser wartbar und lesbarer zu gestalten.

##### Aufteilen von lokalen & globalen Testklassen 

### Testumgebung

ABAP Unit test können in ADT als auch im SAP GUI ausgeführt und ihre Ergebnisse analysiert werden. 
Empfohlen wird hier klar ADT, da hier auch die verwendung von [Test Relations](https://www.youtube.com/watch?app=desktop&v=yiKhKlQz89Y&t=14s) möglich ist. 

### Auflösen von Abhängigkeiten mit Mocking, faking,stubbing und spying

Eine wichtige Eigenschaft von testbarem Code ist, dass (Geschäfts-)Logik, Datenbeschaffung und Präsentation strikt getrennt sind. Wenn dies gewährleistet ist, dann können abhängige Klassen durch nicht-produktive Objekte ersetzt werden. Diese Objekte können unterschiedliche Aufgaben haben und werden dementsprechend benannt. Die folgenden Arten sind möglich:

Ein **Mock**-Objekt ist ein Objekt, dass dynamisch auf die Eingaben der Aufrufers reagieren kann. Ein Mock-Objekt kann zum Beispiel eine Abfrage in einem externen System oder der Datenbank imitieren und testfallabhängig die gewünschten Daten liefern. 

Ein **Stub** ist ein Objekt mit minimaler Implementierung der zum Testen notwendigen Methoden. Dieses Objekt ist nur dazu da, um den fehlerfreien Aufruf der zu testenden Methoden zu gewährleisten. 

Ein **Fake**-Objekt liefert notwendige Daten nach einem vereinfachten Algorithmus. Beispielsweise könnte das Echte Objekt eine umfangreiche Postleitzahlenprüfung vornehmen, bei der Geodaten, Ortsteile und Postleitzahlen auf Grundlage verschiedener Dienste verifiziert werden. Der entsprechende Faker könnte einfache Prüfungen machen, die für die Durchführung der Tests ausreichend sind.

Ein **Spion**-Objekt kann Eigenschaften von Stubs, Fakes und Mocks enthalten, übernimmt jedoch zusätzlich noch die Funktion, Zugriffe zu protokollieren. So könnte ein Spy zum Beispiel beim Testen aufgerufen werden; es wird jedoch nicht direkt das Ergebnis geprüft, sondern nur, ob diese Methode aufgerufen wurde. Dieser Typ wird gerne verwendet, um sicherzustellen, dass bei bestimmten Aktionen E-Mails oder andere Nachrichten verschickt worden wären. 

* [Martin Fowler - Mocks Aren't Stubs](https://www.martinfowler.com/articles/mocksArentStubs.html)

#### Test-Doubles

Die Verwendung von Test-Doubles ist notwendig, wenn Abhängigkeiten bestehen, die nicht ausreichend aufgelöst wurden oder aufgelöst werden konnten. Mit entsprechenden Test-Double-Frameworks kann das Ergebnis von Datenbankzugriffe oder Funktionsbausteinaufrufen gefälscht werden. 

Test-Double-Frameworks sind in der Regel umständlich zu bedienen und sehr unübersichtlich. Mit vielen Definitionen und Methoden müssen Eingabeparameter und die gewünschten Ergebnisse vorgegeben werden. Wenn möglich sollten Sie die Abhängigkeiten eliminieren um auf die Verwendung von Test-Doubles verzichten zu können. Dies ist jedoch nicht immer möglich. Deswegen stehen Test-Double-Frameworks für folgende Objekte zur Verfügung:

* Datenbankzugriffe (oSQL)
* Funktionsbausteine





#### Automatisierte regelmäßige Läufe von Unit Tests
Es gibt mehrere Möglichkeiten Unit Test regelmäßig laufen zu lassen. 

- Programm RS_AUCV_RUNNER  
- ATC Läufte 
- Rest Service ( Communication scenario SAP_COM_0735 )

>**Empfehlung**  
Planen Sie die Unit Test eines Systems regelmäßig ein und erstellen Sie Benachrichtigungen hierfür. 
Für jeden Enwickler sollte es zur Morgenroutine gehören zu prüfen ob alle Test fehlerfrei sind, damit dies gegebenenfalls Daily besprochen werden kann. 
{: .highlight}

## Do's & Dont's 
* Im Zweifel einen UNit test mehr anlegen
+ weniger in einem Test prüfen
* CL_Aunit_Assert nicht mehr benutzen bzw ersetzen, da sie obsolet ist. Entsprechend auch das Erben von der Klasse ersetzen. 

##  tbd Beispiele Anbringen: 
- ?Woher bekommen wir Beispiele mit Fleisch dran, die nicht nur SFLIGHT sind. 
- Erfahrungen und bekannte Probleme bei Unit Tests.  Z.B. das SAP Factories immer wieder gemockt werden müssen.


## offene Punkte:

- Erfahrungen und bekannte Probleme bei Unit Tests.  Z.B. das SAP Factories immer wieder gemockt werden müssen.
