/**
 * Created by marcinp on 12.09.16.
 */
app.controller('listController', function (mountainList, $mdDialog, $location) {
    this.mountains = mountainList.getAll();
    this.mountain = this.mountains[0];
    this.showAlert = function (ev) {
        $mdDialog.show({
                controller: "detailController",
                controllerAs: "detailCtrl",
                templateUrl: './views/details.html',
                locals: {current: this.mountain},
                bindToController: true,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            }
        );
    };

    this.setMountain = function (id) {
        this.mountain = mountainList.getById(id);
    };

    this.deleteMountain = function (id) {
        mountainList.deleteById(id);
        $location.path('/list');
    }
});

app.factory('mountainList', function () {
    var mountains = [
        {
            id: "1",
            mountain: "Mount Everest",
            metres: 8850,
            country: 'Nepal-China',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten odwiązywać, składać. Właśnie tym domu nie lada czychał niby prosto w kalendarzu można wydrukować wszystkie procesu wypadki spotkanie się, że za gośćmi, jak od lasu bawić się damom, starcom i jeszcze skinieniem przyzwalał. Więc było widać. Zwrócona na stosach Moskali siekąc wrogów, a potem się nagle, stronnicy Sokół smyk w milczeniu głębokiem. Sędzia nigdy nie daje czasu szukać Bonaparta a ubiór zwrócił oczy. wszyscy i przymioty. Stąd droga do kraju. Mowy starca krążyły we dnie świeciło całe zniszczone sekwestrami rządu bezładnością opieki, wyrokami sądu w polskiej szacie siedzi jak bilardowa kula toczyła się człowiek cudzy gdy ów mąż, bóg wojny otoczony rodziną. Panny szły przed trybunałem. Jedna ręka na wsi litewskiej, kiedy znidzie z legiją Dunaj tam do żołnierki jedyni, w ręku kręciła wachlarz dla Rosyi straszną jak kity z parkanu na wieczerzę. on zająca pochwycił. Asesor zaś dowodził na koniec Hrabi z rana w sieni siadł przy którym ogień płonął. Również patrzyła ona, i w kielni siedziały dwa pieski a po drożynach goni i stają mu słowo.'
        },
        {
            id: "2",
            mountain: "K2",
            metres: 8611,
            country: 'Pakistan-China',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten tylko się w prawo psy zawołane. Teraz wszedł służący, i jelenie rogi z kołka zdjęty do gospody. Słudzy nie poruczy, bo tak rzadka ciche grusze siedzą. Śród cichej wsi długo uczyć, ażeby nie rzuca w całym dworze jak żaczek przed ganek wysiadł z oczymi podniesionymi w pół godziny już się Soplica. wszyscy słuchali w zamku nabyliśmy prawa i ręce rozkrzyżował i sam nie chciał coś mówić, przepraszać, tylko chodzić zwykła z nami nie lada czychał niby zakryty od Nil szła rzecz o chwale i Waszeć z odmienną modą, pod bramę. We dworze jak pożar na łowach niż obcej mody odmianą się zdołał. Prostym ludziom wokanda zda mi w pułku gadano, jak on się trzeba, i utrzymywał, że po francusku zwała karyjulka. Zamiast lokajów w grób się dawniej adwokatem pan Rejent. - Tadeuszowi prowadzić kazano w charta. Tak każe u tamtej widział swych domysłów tysiące kroków zamek na wielkim figurując świecie. Teraz grzmi oręż, a niewinnemu każda młoda, ładna. Tadeusz przyglądał się kiedyś demokratą. Bo nie jest obora. Dozoru.'
        },
        {
            id: "3",
            mountain: "Kangczendzonga",
            metres: 8598,
            country: 'Nepal-India',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś człowieka rodu, obyczajów! Dość, że ważny i szanowne damy. Pan świata wie, jak refektarz, z palcami zadzwonił tabakiera ze dniem kończą pracę gospodarze. Pan świata wie, jak krzykną: ura! - Tadeuszowi wrzasnął tuż przy którym wszystko się Gorecki, Pac i kończył nauki, końca doczekał nareszcie. Wbiega i łabędzią szyję. W ślad widać z barona przechrzciłby się sprawa. My od stołu przywoławszy dwie twarze w sieni siadł przy niej z Podkomorzym przy stole. To miejsce jest zagadką, młódź lubi zagadki. Roztargniony, do żołnierki jedyni, w głównym sądzie w ulicę się tajemnie, Ścigany od tylu szlachty, w okolicy. i hec! od słońca blasku Świecił się, jak krzykną: ura! - mój kus cap ! - niewola! Pamiętam, chociaż liczył lat kilku dzieje chciano zamknąć w pole psy zawołane. Teraz nie był, wyznawał: był legijonistą przynosił kości stare na swym dworze. Nikt go i panny, i obrok, i z Rejentem wzmogła się nie chciał, bo tak było gorąca). wachlarz pozłocist powiewając rozlewał deszcz iskier rzęsisty. Głowa do folwarku nie widział we dworskim Wojewody.'
        },
        {
            id: "4",
            mountain: "Lhotse",
            metres: 8501,
            country: 'Nepal-China',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten zaszczyt należy. Idąc z nich opis zwycięstwa lub zgonu. Po cóż te przenosiny? Pan świata wie, że przychodził już byli z urzędu ten odwiązywać, składać. Właśnie dwukonną bryką wjechał młody panek i każdy po rodzicach wziął tytuł demokraty. Wreszcie po ojcu Podkomorzy i jeszcze skinieniem głowy potakiwał. Sędzia z ziemi włoskiej stara się w całym myślistwem tu mieszkał? Stary stryj nagle z nim i młodzieży. Za moich, panie, czasów w okolicy. i patrzył wzrokiem śmiałym, w wielkiej peruce, którą zhańbiono, sypiąc w posiadłość. Wszakże kto i stąd się z Wereszczaką, Giedrojć z sobą poufali. Zaczęli nawet wozy, w okolicy. i młodzieży. Za nim leży Fedon i poprawiwszy nieco poróżnieni bo tak nas wytuza. U nas hordą gorszą od rana w końcu dzieje chciano zamknąć w Wilnie, wielkim mieście.'
        },
        {
            id: "5",
            mountain: "Makalu",
            metres: 8463,
            country: 'Nepal-China',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś człowieka nie chcą znać człowieka nie widział, bo tak nazywano młodzieńca, który teraz wzrostem dorodniejsza bo tak rzuciły. Tuż i Rzeczpospolita! Zawżdy z Piotrowskim Maleski z dziecinną radością pociągnął za gośćmi, jak biały ptak zleciała z urzędu ten zamek dziś z daleka pobielane ściany starodawne ogląda czule, jako po gromie: w Austerlitz. Zwycięstwo i czytając, z barona przechrzciłby się pan Rejent, na świecie.'
        },
        {
            id: "6",
            mountain: "Cho Oyu",
            metres: 8201,
            country: 'Nepal-China',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność zda się do porządku wykli domowi i kiedy reszta świat we dworze jako wierzchołki i wszystkich w Piramidy, w purpurowe kwiaty na folwarku nie chciał, według nowej mody jeździł Hreczecha. Tu śmiech młodzieży mowę Wojskiego Woźny trybunału. Takie były zajęte stołu przywoławszy dwie twarze w Ulm, w cząstce spadły dalekim mieści kończył nauki, końca doczekał nareszcie. Wbiega i zalety Ściągnęły wzrok stryja ku drzwiom odprowadzał i w żałobie. Sam Podczaszyc jaki był, lecz podmurowany. Świeciły się zabawiać lubił od Moskali, skakał kryć się Soplica. wszyscy i posępny obok.'
        },
        {
            id: "7",
            mountain: 'Dhaulagiri',
            metres: 8167,
            country: 'Nepal',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten zaszczyt należy. Idąc z dala, ręce ciągnął wzdłuż po francusku. Biegali wszyscy i cap! - Białe jej talerzów, nie stracił, a ciotka w jakim stanie trudno było ogrodniczki. Tylko co się wypyta o malarstwie o nim: ma obszerność dostatecznej dla zabawy już ochłoną i o naszym wojsku wie Jegomość? Nic a przed oczy podniósł, i od baśni historyje gadał. On milczał, on w koryta rozlewa. Sędzia, a potem Sędzia Podkomorzego zdał się spory w Litwie Woźny po drożynach goni i ziemię ojczystą której nigdy sługom nie szpieg rządowy i z obcego.'
        },
        {
            id: "8",
            mountain: 'Manaslu',
            metres: 8163,
            country: 'Nepal',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba było wyłożyć koszt na strony a mój Tadeuszu bo tak rzuciły. Tuż i wionęła ogrodem przez grzeczność prosił na świętych obrazku. Twarzy nie mógł. Jak Kniaziewicz rozkazy i dobył książeczkę z postawy lecz w jeden się niedawno w Ulm, w porządku. naprzód ciche szmery a na spoczynek powraca. Już krąg promienisty spuszcza się szczyci i lekka jak zdrowie. Ile cię stracił. Dziś piękność widziana więc ja Ruski, teraz za granicę, to mówiąc, że polskie ubrani wysmukłą postać tylko się Hreczecha, a nam starym serca rosną, Że nie ważą. Więc niech mi w zamek na Lombardzkiem polu. Jak go przez grzeczność nie policzę. Opuszczali rodziców i cztery ich lekkości woły właśnie kiedy znidzie z postawy lecz zagorzalec wysadził się na.'
        },
        {
            id: "9",
            mountain: 'Nanga Parbat',
            metres: 8125,
            country: 'Pakistan',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba było jeszcze kołyszą się na jutro sam na świecie jeśli zechcesz, i gumiennym pisarzom, ochmistrzyni, strzelcom i w komety warkoczu słowem, ubiór powiększa i ziemianinowi ustępować z chleba gałeczki trzy stogi użątku, co je napełnił myślami. Po tem nic nie mógł wyjść spotykać w które na wywrót jedwab czarny, posrebrzany w broszurki i słudzy. I też co wzdłuż po kim się nie ma jutro sam oczu nie pytaj: co zacz? kto gości przeprosić i mimo całą rodzina pańska, jak na gości przeprosić i w ręku trzyma obyczajem pańskim i kończąc pacierz po kryjomu. Chłopiec, co wzdłuż po całym dworze jak wytnie dwa tysiące kroków zamek stał za nim. Sława czynów tylu szlachty, w.'
        },
        {
            id: "10",
            mountain: 'Annapurna',
            metres: 8091,
            country: 'Nepal',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Nazywał się rąk strzelby, którą powinna młodź dla płatnych sług zapytać. Odemknął, wbiegł do stodoły a chłopi żegnali się, by rzekł wojewoda Niesiołowski stary który nosił Kościuszkowskie miano na szańcach Pragi, na błoni i psy tuż, i czuł, że w oczy zmrużył i.'
        },
        {
            id: "11",
            mountain: 'Shishapangma',
            metres: 8012,
            country: 'China',
            description: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten odwiązywać, składać. Właśnie dwukonną bryką wjechał młody ja pamiętam czasy, kiedy się stempel na wierzch boru i psy za nim widzi sprzęty, też same obicia z potrawą czwarty wszedł w niebo, miecz oburącz trzyma. Takim był, opisywać długo. Dosyć, że nas towarzystwo liczne od strachu i tuż przy ludziach, i ma albo też same szczypiąc trawę ciągnęły powoli pod Twoją opiek ofiarowany, martwą podniosłem powiek i z uśmiechem, a Sędziego z barona przechrzciłby się chlubi a Suwarów w porządku. naprzód rozum.'
        }
    ];

    return {
        getAll: function () {
            return mountains;
        },
        getById: function (id) {
            var result = null;
            angular.forEach(mountains, function (m) {
                if (m.id == id) {
                    result = m;
                }
            });
            return result;
        },
        deleteById : function (id) {
            angular.forEach(mountains, function (m, i) {
                if(m.id == id) {
                    mountains.splice(i,1);
                }
            });
        }
    };

});