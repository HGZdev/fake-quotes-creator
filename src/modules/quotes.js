const quotes = [{
  t: "[Wybierz kategorię..]",
  q: "[Wybierz cytat..]",
  a: "[Wybierz autora..]",
}, {
  t: "Miłość",
  q: "Ani czas, ani mądrość nie zmieniają człowieka – bo odmienić istotę ludzką zdolna jest wyłącznie miłość.",
  a: "Paulo Coelho"
}, {
  t: "Pieniądze i bogactwo",
  q: "Biedny jest człowiek, który pożąda wielu rzeczy.",
  a: "Leonardo da Vinci"
}, {
  t: "Pieniądze i bogactwo",
  q: "Bogactwo jest jak woda morska: im więcej pijesz, tym większe masz pragnienie.",
  a: "Arthur Schopenhauer"
}, {
  t: "Pieniądze i bogactwo",
  q: "Bogactwo to małe piwo, a władza to szampan.",
  a: "Stephen King"
}, {
  t: "Wolność i niewola",
  q: "Być wolnym to móc nie kłamać.",
  a: "Albert Camus"
}, {
  t: "Władza",
  q: "Być wpływowym to jak być damą - jeśli musisz mówić ludziom, że nią jesteś, to znaczy, że nią nie jesteś.",
  a: "Margaret Thatcher"
}, {
  t: "Pieniądze i bogactwo",
  q: "Celem naszego życia nie powinno być posiadanie bogactw, lecz bogactwo bycia.",
  a: "Erich Fromm"
}, {
  t: "Mądrość i głupota",
  q: "Cokolwiek czynisz, czyń rozważnie i patrz końca.",
  a: "Owidiusz"
}, {
  t: "Pieniądze i bogactwo",
  q: "Człowiek nie jest bogaty tym, co posiada, lecz tym, bez czego z godnością może się obejść.",
  a: "Immanuel Kant"
}, {
  t: "Władza",
  q: "Człowiekowi jest dana władza tylko nad samym sobą.",
  a: "Lew Tołstoj"
}, {
  t: "Władza",
  q: "Dowcip to niebezpieczna forma opozycji.",
  a: "Ryszard Kapuściński"
}, {
  t: "Pieniądze i bogactwo",
  q: "Firma, która zajmuje się wyłącznie zarabianiem pieniędzy to kiepska firma.",
  a: "Henry Ford"
}, {
  t: "Pieniądze i bogactwo",
  q: "Gdy bieda wciąż trwa, nie ma prawdziwej wolności.",
  a: "Nelson Mandela"
}, {
  t: "Szczęście",
  q: "Gdy człowiek jest szczęśliwy, żyje w harmonii z samym sobą i swoim otoczeniem.",
  a: "Oscar Wild"
}, {
  t: "Szczęście",
  q: "Gdy człowiek jest zbyt szczęśliwy, wciąż drży z niepokoju.",
  a: "Emil Zola"
}, {
  t: "Mądrość i głupota",
  q: "Gdy rozum śpi, budzą się potwory.",
  a: "Francisco Goya"
}, {
  t: "Mądrość i głupota",
  q: "Gdyby ludzie rozmawiali tylko o tym, co rozumieją, zapadłaby nad światem wielka cisza.",
  a: "Albert Einstein"
}, {
  t: "Miłość",
  q: "Ile głów - tyle rozumów. Ile serc - tyle rodzajów miłości.",
  a: "Lew Tołstoj"
}, {
  t: "Wolność i niewola",
  q: "Im mniej polityki, tym więcej wolności.",
  a: "Hannah Arendt"
}, {
  t: "Władza",
  q: "Jest bardzo niebezpiecznie mieć rację w sprawach, w których możni tego świata nie mieli racji.",
  a: "Wolter"
}, {
  t: "Pieniądze i bogactwo",
  q: "Jeśli człowiek ma dość pieniędzy, trudno mu w ogóle popełnić jakieś przestępstwo. Zdarzają mu się tylko zabawne, drobne niezręczności.",
  a: "Terry Pratchett"
}, {
  t: "Mądrość i głupota",
  q: "Jeśli nigdy nie grzeszysz przeciwko rozsądkowi, nigdy do niczego nie dojdziesz.",
  a: "Albert Einstein"
}, {
  t: "Wolność i niewola",
  q: "Jeśli wolność słowa w ogóle coś oznacza, to oznacza prawo do mówienia ludziom tego, czego nie chcą słyszeć.",
  a: "George Orwell"
}, {
  t: "Miłość",
  q: "Jeżeli naprawdę kocham jakąś osobę, kocham wszystkich, kocham świat, kocham życie.",
  a: "Erich Fromm"
}, {
  t: "Mądrość i głupota",
  q: "Kiedy pali się za sobą mosty, najważniejsze jest, by nie stać na nich, rzucając zapałkę.",
  a: "Terry Pratchett"
}, {
  t: "Pieniądze i bogactwo",
  q: "Kobietom pieniądze potrzebne nie są. Bo i po co? Nie piją, w kości nie grają, a kobietami, psiakrew, są przecież same.",
  a: "Andrzej Sapkowski"
}, {
  t: "Miłość",
  q: "Kochać drugiego człowieka oznacza wielką pracę nad sobą.",
  a: "Jan Twardowski"
}, {
  t: "Miłość",
  q: "Kochaj bliźniego, jak siebie samego.",
  a: "Anonim"
}, {
  t: "Szczęście",
  q: "Kogo szczęście wyniesie, niech się upaść boi.",
  a: "Mikołaj Rej"
}, {
  t: "Wolność i niewola",
  q: "Krańcowa wolność prowadzi narody i jednostki do skrajnego niewolnictwa.",
  a: "Cyceron"
}, {
  t: "Władza",
  q: "Kto chce rządzić ludźmi, nie powinien ich gnać przed sobą, lecz sprawić, by podążali za nim.",
  a: "Monteskiusz"
}, {
  t: "Władza",
  q: "Kto kontroluje przeszłość, ten ma władzę nad przyszłością.",
  a: "George Orwell"
}, {
  t: "Pieniądze i bogactwo",
  q: "Kto nie umie w potrzebie rozstać się ze skarbem, jest jak niewolnik w pętach.",
  a: "J.R.R. Tolkien"
}, {
  t: "Pieniądze i bogactwo",
  q: "Lepiej mieć stały dochód niż fascynującą osobowość.",
  a: "Oscar Wilde"
}, {
  t: "Szczęście",
  q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  a: "Cyceron"
}, {
  t: "Miłość",
  q: "Miłość jest największą słodyczą i największą goryczą na Ziemi.",
  a: "Eurypides"
}, {
  t: "Miłość",
  q: "Miłość ludzi nie poddaje się władzy bagnetów.",
  a: "Napoleon Bonaparte"
}, {
  t: "Miłość",
  q: "Miłość nie jest skarbem, który się posiadło, lecz obustronnym zobowiązaniem.",
  a: "Antoine de Saint-Exupéry"
}, {
  t: "Miłość",
  q: "Miłość umie wykonać wszystko, na co się odważy.",
  a: "William Szekspir"
}, {
  t: "Miłość",
  q: "Można nie kochać Cię i żyć, ale nie można owocować.",
  a: "Wisława Szymborska"
}, {
  t: "Mądrość i głupota",
  q: "Nie wiedziałem, że na świecie jest tylu idiotów, dopóki nie poznałem internetu.",
  a: "Stanisław Lem"
}, {
  t: "Pieniądze i bogactwo",
  q: "Nie zależy mi na tym, by zostać najbogatszym człowiekiem na cmentarzu.",
  a: "Steve Jobs"
}, {
  t: "Władza",
  q: "Nie znam większego grzechu niż uciskanie słabszych w imieniu Boga.",
  a: "Mahatma Gandhi"
}, {
  t: "Mądrość i głupota",
  q: "Niebo gwiaździste nade mną, prawo moralne we mnie.",
  a: "Immanuel Kant"
}, {
  t: "Władza",
  q: "Nieważne, kto głosuje, ważne, kto liczy głosy.",
  a: "Józef Stalin"
}, {
  t: "Mądrość i głupota",
  q: "Nigdy nie umierałbym za swoje przekonania, bo mogę się mylić.",
  a: "Bertrand Russell"
}, {
  t: "Pieniądze i bogactwo",
  q: "Nikt nie jest patriotą, gdy chodzi o podatki.",
  a: "George Orwell"
}, {
  t: "Pieniądze i bogactwo",
  q: "Pieniądz przekształca wierność w niewierność, miłość w nienawiść, cnotę w występek, występek w cnotę, sługę w pana, głupotę w rozsądek, rozsądek w głupotę.",
  a: "Karol Marks"
}, {
  t: "Szczęście",
  q: "Sprawy ludzkie toczą się kołem, które w swoim obrocie nie dopuszcza, żeby zawsze ci sami byli szczęśliwi.",
  a: "Ryszard Kapuściński"
}, {
  t: "Miłość",
  q: "Stara miłość nie rdzewieje.",
  a: "Horacy"
}, {
  t: "Szczęście",
  q: "Szczęście nie polega na szczęściu, lecz na jego osiąganiu.",
  a: "Fiodor Dostojewski"
}, {
  t: "Wolność i niewola",
  q: "Tam, gdzie nie ma wolności, nie ma ani praw, ani obowiązków.",
  a: "Napoleon Bonaparte"
}, {
  t: "Mądrość i głupota",
  q: "Tylko dwie rzeczy są nieskończone: wszechświat i ludzka głupota. Co do tej pierwszej są jednak pewne wątpliwości.",
  a: "Albert Einstein"
}, {
  t: "Władza",
  q: "W demokracji wolno głupcom głosować, w dyktaturze wolno głupcom rządzić.",
  a: "Bertrand Russell"
}, {
  t: "Mądrość i głupota",
  q: "Wątpliwość nie jest przyjemnym stanem umysłu, lecz pewność jest śmiesznym.",
  a: "Wolter"
}, {
  t: "Mądrość i głupota",
  q: "Wiele rzeczy zaczynamy rozumieć późno, jeszcze więcej – bardzo późno, najwięcej – zbyt późno.",
  a: "Ryszard Kapuściński"
}, {
  t: "Pieniądze i bogactwo",
  q: "Włóczęga: człowiek, który nazwałby się turystą, gdyby miał pieniądze.",
  a: "Julian Tuwim"
}, {
  t: "Władza",
  q: "Wobec despoty wszyscy są równi, mianowicie - równi zeru.",
  a: "Fryderyk Engels"
}, {
  t: "Władza",
  q: "Wojna nie jest niczym innym, jak sporem między rządami o władzę nad poddanymi.",
  a: "Lew Tołstoj"
}, {
  t: "Wolność i niewola",
  q: "Wolność jest to prawo czynienia wszystkiego, co nie szkodzi innym.",
  a: "Karol Marks"
}, {
  t: "Wolność i niewola",
  q: "Wolność oznacza prawo do twierdzenia, że dwa i dwa to cztery. Z niego wynika reszta.",
  a: "George Orwell"
}, {
  t: "Wolność i niewola",
  q: "Wolność to dobro, które umożliwia korzystanie z innych dóbr.",
  a: "Monteskiusz"
}, {
  t: "Wolność i niewola",
  q: "Wolność to prawo czynienia wszystkiego, co nie jest zabronione.",
  a: "Monteskiusz"
}, {
  t: "Wolność i niewola",
  q: "Wolny bowiem jest człowiek tylko wtedy, gdy jest samotny.",
  a: "Arthur Schopenhauer"
}, {
  t: "Władza",
  q: "Z punktu widzenia polityki prawda ma charakter despotyczny. Jest zatem znienawidzona przez despotów, słusznie obawiających się konkurencji ze strony siły przymusu, której nie mogą sobie podporządkować.",
  a: "Hannah Arendt"
}, {
  t: "Władza",
  q: "Zwycięski rewolucjonista zostaje mężem stanu, pokonany jest tylko zbrodniarzem.",
  a: "Erich Fromm"
}];
export { quotes };
