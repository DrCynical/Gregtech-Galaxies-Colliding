GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('mana')
        .protons(20)
        .neutrons(80)
        .symbol('Ma*')
    
    event.create('terra')
        .protons(35)
        .neutrons(110)
        .symbol('Te*')

    event.create('alf')
        .protons(55)
        .neutrons(189)
        .symbol('Af')

    event.create('zanite')
      .protons(134)
      .neutrons(335)
      .symbol('Zi')

    event.create('ambrosium')
        .protons(135)
        .neutrons(338)
        .symbol('Ab')

    event.create('desh')
        .protons(135)
        .neutrons(135)
        .symbol('De')
    
    event.create("infinity")
        .protons(168)
        .neutrons(316)
        .symbol("∞")

    event.create("unstable")
        .protons(1)
        .neutrons(316)
        .symbol("Un")
})