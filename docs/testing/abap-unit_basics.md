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

## Was ist mittels ABAP Unit testbar?

> {: .Zitat }
> "Das kann man nicht testen"  

Grundsätzlich ist fast alles mit ABAP Unit testbar. Es gibt Programmbereiche, die nicht mittels ABAP Unit Tests überprüft werden können. Dazu gehören alle Programmteile, die auf einen Dialog angewiesen sind oder Daten darstellen (z.B. ALV-Grid).
Für alles Andere gibt es Möglichkeiten diese Programme mit ABAP Unit Tests abzusichern. Anfänglich wird dies aufwändig und mühsam sein. Die Mühe wird sich aber lohnen und schnell auszahlen. Es is definitiv möglich BAPIs, BAdIs, RFCs und IDOCs mit Unitests abzusichern.  

## Behandlung von Daten in Unit Tests

Die klassische Systemkonfiguration im Entwicklungssystem mit einen Entwicklungs- und einem Testmandanten stellt eine Hürde für den reibungslosen Ablauf von Komponenten- oder Integrationstests dar, da diese meist von Daten der Datenbank abhängig sind, wenn gängige Unit Test Methodiken nicht angewendet werden.  
Dies gilt analog für Szenarien bei denen auf dem Entwicklungssystem sich keine Daten in der Datenbank befinden. 

{: .recommendation } 
> Erstellen Sie ihre ABAP Unit Tests unabhängig von der Datenbank, so dass sie mit Hilfe von Dependency-Injection und Mocks in jedem  Mandanten lauffähig sind und das gleiche Ergebnis liefern.  
> Wird dieses Vorgehen nicht angewendet, die Tests im Mandant x entwickelt, in Mandant y ausgeführt, würden die Tests keine belastbare Aussage liefern und somit seltener oder gar nicht ausgeführt.
> Analog verhält es sich mit Unit Tests, die abhängig von einer Datenkonstellation auf dem Testsystem sind.
> Gemäß Unit Test Methodik sind daher direkte Datenbankabfragen mittels Mocking oder Injection-Framework zu vermeiden.
> Welche Techniken Sie beim Erreichten dieser Unabhängigkeit unterstützen finden sie hier im Abschnitt [Erweiterte Techniken](#abap_unit_advanced)

## Testumgebung

Die ABAP Unit-Tests können aus den ABAP-Development-Tools heraus oder der SAP-GUI Entwicklungsumgebung (SE80, SE24) erstellt und verwendet werden. Die Vorgehensweise unterscheidet sich nur in Kleinigkeiten.
Empfohlen wird hier klar ADT, da hier auch die Verwendung von [Test Relations](https://www.youtube.com/watch?app=desktop&v=yiKhKlQz89Y&t=14s) möglich ist.  
Die Techniken, die zur Erstellung notwendig sind, ähneln sich jedoch stark. Unit Tests, die in der SE80 erstellt wurden, können auch in Eclipse gewartet und getestet werden und umgekehrt. Die Tastenkombination zum Ausführen der Unit Tests ist in beiden Tools **STRG + SHIFT + F10.** Andere Funktionen sind in der ABAP Workbench teilweise nur durch das Menü erreichbar während es im ADT eine Tastenkombination dafür gibt.

Im folgenden Abschnitt werden diese Themen behandelt:

* Erstellen von Unit Tests
* Ausführen von Unit Tests
* Ergebnisanzeige
* Codeabdeckung (Code Coverage)

Wir gehen davon aus, dass Sie Erfahrung mit dem jeweiligen Tool haben. Aus diesem Grund erfolgt keine Schritt-für-Schritt-Anleitung, sondern lediglich eine kurze Übersicht der wichtigsten Befehle.

### Erstellen einer lokalen Testklasse in ADT

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

GIVEN-WHEN-THEN ist ein Stil, um Unit Tests zu formulieren. Mit GIVEN wird eine Bedingung angegeben, unter denen der Test stattfinden soll. WHEN beschreibt die Aktion, die durchgeführt wird und THEN beschreibt das erwartete Ergebnis.

Bezogen auf unser Beispiel mit der Hausnummer könnte die Formulierung heißen:\
GIVEN ist der Straßenname "ABC-Straße 13"\
WHEN die Hausnummer aus diesem String ermittelt wird\
THEN sollte die Hausnummer "13" sein

### Clean Code in Unit Tests

Oft trifft man auf die Einstellung, dass es in Unit Tests nicht nötig ist sich an Regeln der Code Qualität zu halten (CleanABAP, Namenskonventionen, Modularisierung, ...). Schlechte Wartbarkeit und Qualität in Unit Tests wird dazu führen, dass die Tests nicht weiterentwickelt und nutzlos werden. Doppelter Code und fehlende Modularisierung ist hier ebenso zu vermeiden wie in produktivem code.

### Unit Test sauber halten

Ebenso ist es zwingend nötig, alle Unit Tests Erfolgreich durchzuführen. Seien Sie hier nicht nachlässig und priorisieren Sie Aufgaben, die es bedürfen den Geschäfts-Code oder den Unit Test zu reparieren, bis wieder alle Tests fehlerfrei ausgeführt werden.  

### Behandlung von Ausnahmen

[SAP empfiehlt](https://help.sap.com/doc/saphelp_crm700_ehp03/7.0.3.11/de-DE/dd/587324e2424b14ab5afb3239a77a8d/frameset.htm): Wenn der zu testende Code in der Lage ist, eine Ausnahme auszulösen, sollte die Testmethode selbst diese nicht behandeln, sondern sie in ihrer Signatur deklarieren (abgesehen von provozierten Ausnahmen), so dass der Testfall fehlschlägt, wenn er zur Laufzeit auftritt. 


### Aufbau einer Unit Test Klasse

Eine Unit-Test-Klasse hat - im Gengensatz zu einer gängigen ABAP-Klasse - ein paar Besonderheiten. In diesem Kapitel beschreiben wir, wie die Unit-Test-Klasse aufgebaut ist und welche Eigenschaften sie hat.

* genereller Ablauf
* Risklevel
* Duration
* Anlage in
  * Eclipse
  * SE80
* SETUP 
* TEARDOWN
* FOR TESTING

### Genereller Ablauf

Jede Klasse hat ein Include in dem mehrere lokale Klassen und Text-Klassen definiert werden können. Eine Testklasse beseitzt Attribute, die etwas über die _Gefährlichkeit_ (Risk level) und die _Dauer_ (Duration) der Tests aussagen. Jede Testklasse hat Testmethoden, die mit dem Zusatz _FOR TESTING_ als solche kenntlich gemacht werden. Testmethoden werden in zufälliger Reihenfolge ausgeführt und dürfen nicht voneinander abhängen.

In einer Testmethode wird eine (öffentliche) Methode der zu testenden Klasse ausgeführt und mit einem erwarteteten Ergebnis verglichen. Stimmt die Erwartung überein, dann ist der Test erfolgreich. Die Instanz der zu testenden Klasse wird _F_CUT_ oder _CUT_ genannt. _CUT_ steht für _Code Under Test_. Vor Ausführung der Tests kann optional die Methode _SETUP_ ausgeführt werden, in der Vorbereitungen zum Testfall vorgenommen werden können (z.B. die Erzeugung der Instanz _CUT_). Nach Ausführung einer Testmethode können in der Methode _TEARDOWN_ Aufräumarbeiten durchgeführt werden. Es können beliebig viele andere Methoden oder Klassen definiert werden, die zur Unterstützung der Tests dienen.

### Risikostufe/ Risk Level

Mit dem Zusatz _RSIK LEVEL_ definieren Sie die Risikostufe der Testfälle

Folgen sie den Vorgaben der SAP zum Risiko Level:
* CRITICAL - a test changes system settings or customizing data (default)
* DANGEROUS - a test changes persistent data
* HARMLESS - a test does not change system settings or persistent data

Grundsätzlich sollten Sie es vermeiden, Tests zu schreiben, die wirkliche Änderungen an der Datenbank vornehmen. Dies ist oft ein Indikator für fehlendes Management von Abhängigkeiten bzw. deren Austausch. Ihr Ziel muss sein, möglichst alle Tests als _Harmless_ definieren zu können. Mit Hilfe der von SAP bereitgestellten Frameworks zum Mocken von Datenbanktabellen und CDS-Views ist dies möglich. Siehe Abschnitt [Mocking..](Mocking, faking, spying und stubbing)

### Dauer/ Duration

Mit dem Zusatz _DURATION_ definieren Sie die voraussichtliche Laufzeit der Testfälle. 
Folgende Kategorien sind möglich. In den Klammen steht die voreingestelle Dauer in Sekunden:
* LONG (3600 sec)
* MEDIUM (300 sec)
* SHORT (60 sec)

Überschreitet ein Test den im System definierten Wert, dann wird der Test abgebrochen und als "fehlgeschlagen" interpretiert.   

Die Einstellung der verschiedenen Laufzeiten können sie mit Transaktion SAUNIT_CLIENT_SETUP vornehmen. Auch hier gilt das klare Ziel, dass ihre Tests schnell sein müssen, damit sie immer wieder ausgeführt werden können. 

### ASSERT 

Innerhalb einer Testmethode kann das Ergebnis einer Testmethode mit den Methoden der Klasse _CL_ABAP_UNIT_ASSERT_ geprüft werden. Die Klasse hat viele Methoden, die für entsprechende Vergleiche genutzt werden können. Die wohl am häufigsten gebrauchten Methoden sind:
* ASSERT_EQUALS
* ASSERT_FALSE
* ASSERT_BOUND

Ein _ASSERT_ wird durchgeführt, um den ermittelten Wert mit dem erwarteten Wert abzugleichen. Sie rufen also eine Methode der zu testenden Klasse auf und vergleichen das Ergebnis mit dem, was Sie als Ausgabe erwarten. Die Parameter der entsprechenden ASSERT-Methode heißen dabei immer gleich:
* EXP ist der zu erwartende Wert (EXPECTED VALUE)
* ACT ist der im Test ermittelte Wert (ACTUAL VALUE)
* 
Die Erwartung kann sein, dass das Ergebnis einen bestimmten Wert hat, eine bestimmte Tabellenzeile in der Ergebnistabelle vorhanden ist oder ein Objekt instaziiert wurde. Das Ergebnis muss dabei nicht direkt aus einer Methode kommen. Sie können auch mehrere Methoden der Testklasse ausführen und am Ende den Wert eines globalen Attributs prüfen.
 
### Beispiel Testklasse

Das folgende Beispiel zeigt die Testklasse `LTCL_VERIFY_ADDRESSES` zu der globalen Klasse `ZCL_ADDRESS`. Die die Methode `SPLIT_ADDRESS` ist dafür zuständig, einen String, der Adresse und Hausnummer enthält, in die Bestandteile `Straße` und `Hausnummer` aufzuteilen.

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
Wenn Sie auf Dokumente der Datenbank zurückgreifen müssen, pflegen Sie zentrale Konstanten mit sprechenden Namen und Erläuterungen.  Sie werden ansonsten irgendwann nicht mehr wissen welche Eigenarten Beleg 564 hatte.   
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
Allerdings kann das Bereitstellen der notwendigen Daten sehr aufwändig sein, so dass es sinnvoll sein kann, die kleineren Einheiten (private und geschützte Methoden) zu testen. Zudem "verwässern" umfangreiche Datenkonstellationen den Zweck eines Unit Tests. Tests für private Methoden können ebenfalls helfen, den Ursprung eines Fehlers schneller zu lokalisieren. 

**Beispiel Adressaufbereitung:**\
Nehmen wir an, wir haben eine Klasse, die Adressen entgegen nimmt und analysiert. Die eine Methode `SEPARATE_HOUSENO_FROM_STREET` haben wir bereits kennengelernt. Zusätzlich gibt es eine Methode `CHECK_POST_CODE`, die sicherstellen soll, dass die Postleitzahl 5-stellig ist und nur aus Zahlen besteht. Wenn beide privaten Methoden von der öffentlichen Methode `CHECK_ADDRESS` aufgerufen werden, müssen wir zum Testen immer eine komplette Adresse übergeben. Einfacher und auch deutlicher ist es, wenn wir die privaten Methoden separat testen. Sie können so die eigentliche Funktion der Methode `SEPARATE_HOUSENO_FROM_STREET` testen. 

### Unit Tests erweitern

Wenn wir uns das Beispiel mit dem Ermitteln der Hausnummer ansehen, dann gibt es viele Fallstricke, die ein unerwartetes Ergebnis hervorrufen können. Die Eingaben, die zu einem fehlerhaften Ergebnis führen, kennen wir im Vorfeld jedoch nicht. Wir lernen sie erst kennen, wenn sich Anwender beschweren, die ein falsches Ergebnis erhalten. In diesem Fall können die Eingaben, die zu fehlerhaften Ausgaben geführt haben, in einen Unit Test aufgenommen werden. Nach der Änderung des Codings werden alle bereits definierten Unit Tests durchgeführt und der Entwickelnde kann sicher sein, dass alles wie zuvor funktioniert.

#### Beispiel Testklasse mit Hilfsmethode

In diesem Beispiel wird die Demoklasse aus dem vorherigen Kapitel, die eine Adresse in ihre Bestandteile Straße und Hausnummer aufteilt, aufgegriffen. Diese Klasse hat drei Testmethoden für einzelne Varianten. Da das Schema immer das gleiche ist, wäre es einfacher, wenn die Straßennamen und Hausnummern zusammengesetzt und dann in einer Methode getestet würden. 

Also zum Beispiel:

```
verify_address( strasse = 'Beispielstraße'  house_number = '23' ).
```

Die Testklasse könnte dann wie folgt aussehen:

```
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

Es gibt eine Hilfsmethode `VERIFY_ADDRESS`, die einen Straßennamen und eine Hausnummer entgegennimmt, diese zusammensetzt und durch die zu testende Methode `SPLIT_ADDRESS` wieder aufteilen lässt. Da ein Testfall nun nicht mehr 1:1 einer Testmethode entspricht, wurde der Parameter `MSG` von `CL_ABAP_UNIT_ASSERT=>ASSERT_EQUALS` verwendet, um direkt auf den fehlerhaften Testfall hinzuweisen.

Die Testklasse ist nun deutlich übersichtlicher und die Testfälle sind auf einen Blick gut erkennbar.

Diese Variante erlaubt es, auch weiterhin Tests durchzuführen, die nach einem anderen Schema funktionieren. 

Hinweis: Dies ist keine Empfehlung, alle Tests in einer Testmethode unterzubringen. Das Beispiel soll lediglich aufzeigen, dass Hilfsmethoden genutzt werden können, um die Unit Tests kompakter, besser wartbar und lesbarer zu gestalten.

#### Aufteilen von lokalen & globalen Testklassen 

### Testumgebung

ABAP Unit test können in ADT als auch im SAP GUI ausgeführt und ihre Ergebnisse analysiert werden. 
Empfohlen wird hier klar ADT, da hier auch die Verwendung von [Test Relations](https://www.youtube.com/watch?app=desktop&v=yiKhKlQz89Y&t=14s) möglich ist. 

### Auflösen von Abhängigkeiten mit Mocking, Faking, Stubbing und Spying

Eine wichtige Eigenschaft von testbarem Code ist, dass (Geschäfts-)Logik, Datenbeschaffung und Präsentation strikt getrennt sind. Wenn dies gewährleistet ist, dann können abhängige Klassen durch nicht-produktive Objekte ersetzt werden. Diese Objekte können unterschiedliche Aufgaben haben und werden dementsprechend benannt. Die folgenden Arten sind möglich:
* Mock
* Stub
* Faker
* Spy

Ein **Mock**-Objekt ist ein Objekt, das dynamisch auf die Eingaben der Aufrufers reagieren kann. Ein Mock-Objekt kann zum Beispiel eine Abfrage in einem externen System oder der Datenbank imitieren und testfallabhängig die gewünschten Daten liefern.

Ein **Stub** ist ein Objekt mit minimaler Implementierung der zum Testen notwendigen Methoden. Dieses Objekt ist nur dazu da, um den fehlerfreien Aufruf der zu testenden Methoden zu gewährleisten.

Ein **Fake**-Objekt liefert notwendige Daten nach einem vereinfachten Algorithmus. Beispielsweise könnte das Echte Objekt eine umfangreiche Postleitzahlenprüfung vornehmen, bei der Geodaten, Ortsteile und Postleitzahlen auf Grundlage verschiedener Dienste verifiziert werden. Der entsprechende Faker könnte einfache Prüfungen machen, die für die Durchführung der Tests ausreichend sind.

Ein **Spion**-Objekt kann Eigenschaften von Stubs, Fakes und Mocks enthalten, übernimmt jedoch zusätzlich noch die Funktion, Zugriffe zu protokollieren. So könnte ein Spy zum Beispiel beim Testen aufgerufen werden; es wird jedoch nicht direkt das Ergebnis geprüft, sondern nur, ob diese Methode aufgerufen wurde. Dieser Typ wird gerne verwendet, um sicherzustellen, dass bei bestimmten Aktionen E-Mails oder andere Nachrichten verschickt worden wären. 

* [Martin Fowler - Mocks Aren't Stubs](https://www.martinfowler.com/articles/mocksArentStubs.html)

#### Test-Doubles

Die Verwendung von Test-Doubles ist notwendig, wenn Abhängigkeiten bestehen, die nicht ausreichend aufgelöst wurden oder aufgelöst werden konnten. Mit entsprechenden Test-Double-Frameworks kann das Ergebnis von Datenbankzugriffe oder Funktionsbausteinaufrufen gefälscht werden. 

Test-Double-Frameworks sind in der Regel umständlich zu bedienen und sehr unübersichtlich. Mit vielen Definitionen und Methoden müssen Eingabeparameter und die gewünschten Ergebnisse vorgegeben werden. Wenn möglich sollten Sie die Abhängigkeiten eliminieren um auf die Verwendung von Test-Doubles verzichten zu können. Dies ist jedoch nicht immer möglich. Weiterführende Informationen zu den Test-Double-Frameworks stellen wir Ihnen im Abschnitt [Erweiterte Techniken](#abap_unit_advanced) vor.



#### Automatisierte regelmäßige Läufe von Unit Tests
Es gibt mehrere Möglichkeiten Unit Test regelmäßig laufen zu lassen. 

- Programm RS_AUCV_RUNNER  
- ATC Läufte 
- Rest Service ( Communication scenario SAP_COM_0735 )

{: .recommendation }
> Planen Sie die Unit Test eines Systems regelmäßig ein und erstellen Sie Benachrichtigungen hierfür. 
> Für jeden Enwickler sollte es zur Morgenroutine gehören zu prüfen ob alle Test fehlerfrei sind, damit dies gegebenenfalls Daily besprochen werden kann. 


## Do's & Dont's 
* Im Zweifel einen Unit Test mehr anlegen
+ weniger in einem Test prüfen
* Klasse CL_AUNIT_ASSERT nicht mehr benutzen bzw ersetzen, da sie obsolet ist. Es muss die Klasse CL_ABAP_UNIT_ASSERT verwendet werden. 
