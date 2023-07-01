//type = 0 -> slika
//type = 1 -> skulptura
//type = 2 -> ostalo

const arts = [
    {
        id: 1,
        image_src: '/1/0.jpg',
        type: 0,
        data: [
            { title: 'Mona Liza', author: 'Leonardo da Vinči', description: `
            Mona Liza, delo poznatog umetnika Leonarda da Vinčija,
             ikonično je remek-delo koje očarava posmatrače svojim enigmatičnim osmehom i suptilnom čarolijom.
              Ova večna slika, poznata po besprekornoj tehnici i misterioznom šarmu,
               i dalje intrigira i inspiriše ljubitelje umetnosti širom sveta.` },
            { title: 'Mona Lisa', author: 'Leonardo da Vinci', description: `The Mona Lisa, created by the renowned artist Leonardo da Vinci, 
            is an iconic masterpiece that captivates viewers with its enigmatic smile and subtle charm. 
            This timeless portrait, known for its impeccable technique and mysterious allure,
             continues to intrigue and inspire art enthusiasts around the world.`
        
         }
        ]
    },
    {
        id: 2,
        image_src: '/2/0.jpg',
        type: 0,
        data: [
            { title: 'Stvaranje Adama', author: 'Mikelanđelo', description: `
            "Stvaranje Adama" je čuvena freska slikarstva koju je izveo Mikelanđelo,
             smeštena na plafonu Sikstinske kapele u Vatikanu. 
             Ovo ikonično umetničko delo prikazuje duboki trenutak u kojem Bog daruje život Adamu,
              prikazujući njihove ispružene ruke koje se gotovo dodiruju.
               Ono simbolizuje božansku vezu između Boga i čovečanstva,
                predstavljajući lepotu stvaranja i potencijal ljudskog postojanja.` },
            { title: 'The Creation of Adam', author: 'Michelangelo', description: `
            "The Creation of Adam" is a renowned fresco painting by Michelangelo,
             located on the ceiling of the Sistine Chapel in Vatican City. 
             This iconic artwork depicts the profound moment of God giving life to Adam,
              showcasing their outstretched hands on the verge of touching.
               It symbolizes the divine connection between God and humanity,
                representing the beauty of creation and the potential of human existence.`
        
         }
        ]
    },
    {
        id: 3,
        image_src: '/3/0.jpg',
        type: 0,
        data: [
            { title: 'Tajna večera', author: 'Leonardo da Vinči', description: `
            "Poslednja večera" ili "Tajna večera" je ikonično remek-delo koje je stvorio Leonardo da Vinči.
             Ova čuvena freska prikazuje dirljiv trenutak kada Isus otkriva svojim učenicima da će
              ga jedan od njih izdati. Sa svojim složenim detaljima,
               emotivnim izražajima i inovativnom upotrebom perspektive,
                slika i dalje intrigira posmatrače, pozivajući ih da razmišljaju o složenim dinamikama vere,
                 vernosti i ljudske prirode.` },
            { title: 'The Secret Supper', author: 'Leonardo da Vinci', description: `
            The Last Supper" or "The Secret Supper" is an iconic masterpiece created by Leonardo da Vinci.
             This renowned mural depicts the poignant moment when Jesus reveals to his disciples
              that one of them will betray him. With its intricate details,
               emotional expressions, and innovative use of perspective, 
               the painting continues to intrigue viewers,
               inviting them to contemplate the complex dynamics of faith, loyalty, and human nature.`
        
         }
        ]
    },
    {
        id: 4,
        image_src: '/4/0.jpg',
        type: 1,
        data: [
            {
                title: 'Bista Nefertiti',
                author: 'Nepoznati autor',
                description: `
                Bista Nefertiti je drevna egipatska skulptura koja navodno prikazuje kraljicu Nefertiti,
                Veliku kraljevsku ženu faraona Ahenatona. Ovo ikoničko umetničko delo prikazuje večnu lepotu
                i eleganciju Nefertiti, sa pažljivo izrađenim detaljima i gracioznim konturama. Skulptura je
                postala simbol ženske moći i umetničkog majstorstva, očaravajući ljubitelje umetnosti i istoričare
                podjednako.`
            },
            {
                title: 'Nefertiti Bust',
                author: 'Unknown',
                description: `
                The Nefertiti Bust is a renowned sculpture from ancient Egypt that is thought to represent
                Queen Nefertiti, the Great Royal Wife of Pharaoh Akhenaten. This captivating masterpiece
                portrays Nefertiti's regal presence and striking features, highlighting her status as one of
                the most influential women in Egyptian history. The sculpture's exquisite craftsmanship and
                enigmatic smile continue to fascinate people around the world, offering a glimpse into the
                artistic achievements of the ancient civilization.`
            }
        ]
    },
    {
        id: 5,
        image_src: '/5/0.jpg',
        type: 1,
        data: [
            {
                title: 'Statua slobode',
                author: 'Frédéric Auguste Bartholdi',
                description: `
                Statua slobode, monumentalna neoklasična skulptura, dizajnirao je francuski vajar Frédéric Auguste
                Bartholdi. Ovaj ikonički simbol slobode i demokratije ponosno stoji u luci New Yorka, dočekujući
                imigrante i posetioce iz celog sveta. Svojom veličanstvenom prisutnošću i simboličnom visoko
                podignutom bakljom, Statua slobode utelovljuje ideale slobode, pravde i mogućnosti, predstavljajući
                trajni duh Sjedinjenih Američkih Država.`
            },
            {
                title: 'Statue of Liberty',
                author: 'Frédéric Auguste Bartholdi',
                description: `
                The Statue of Liberty, a colossal neoclassical sculpture, was designed by the French sculptor
                Frédéric Auguste Bartholdi. This iconic symbol of freedom and democracy stands proudly in New York
                Harbor, welcoming immigrants and visitors from around the world. With its majestic presence and
                symbolic torch held high, the Statue of Liberty embodies the ideals of liberty, justice, and
                opportunity, representing the enduring spirit of the United States of America.`
            },
        ]
    },
    {
        id: 6,
        image_src: '/6/0.jpg',
        type: 1,
        data: [
            {
                title: 'Nika sa Samotrake',
                author: 'Nepoznati autor',
                description: `
                Nika sa Samotrake, takođe poznata kao Krilata pobeda sa Samotrake, je helenska skulptura koja potiče
                iz 2. veka pre nove ere. Ovo veličanstveno umetničko delo prikazuje Niku, grčku boginju pobede,
                kako stoji na pramcu broda sa raširenim krilima. Skulptura hvata trenutak dinamičnog kretanja i
                trijumfa, simbolizujući večni duh pobede i eleganciju antičke grčke umetnosti. Smatra se jednim od
                najvećih remek-dela drevne grčke umetnosti, predstavljajući večnu težnju ka izvrsnosti i slavljenje
                pobede.`
            },
            {
                title: 'Nike of Samothrace',
                author: 'Unknown',
                description: `
                The Nike of Samothrace, also known as the Winged Victory of Samothrace, is an awe-inspiring sculpture
                from the Hellenistic period. Depicting the Greek goddess Nike in a moment of triumph, the sculpture
                showcases intricate details and a sense of motion that captures the essence of victory. With its
                wings spread wide and its commanding presence, the Nike of Samothrace is considered one of the
                greatest masterpieces of ancient Greek art, representing the timeless pursuit of excellence and
                the celebration of triumph.`
            }
        ]
    },
    {
        id: 7,
        image_src: '/7/0.jpg',
        type: 2,
        data: [
            {
                title: 'Balon pas',
                author: 'Džef Kuns',
                description: `
                Balon pas je skulptura koju je napravio američki umetnik Džef Kuns. Ova umetnička instalacija
                prikazuje napuhanog psa od metala, stvarajući kontrast između nepomičnosti materijala i igre koju
                balonasta figura sugeriše. Balon pas postao je jedno od najprepoznatljivijih dela savremene umetnosti,
                odajući počast dečijem veselju i iluzijama koje umetnost može stvoriti.`
            },
            {
                title: 'Balloon Dog',
                author: 'Jeff Koons',
                description: `
                Balloon Dog is a sculpture created by American artist Jeff Koons. This artistic installation
                depicts a metallic balloon dog, creating a contrast between the immobility of the material and the playfulness
                suggested by the balloon-like figure. Balloon Dog has become one of the most recognizable works of contemporary art,
                paying homage to childhood joy and the illusions that art can create.`
            }
        ]
    },
    {
        id: 8,
        image_src: '/8/0.jpg',
        type: 2,
        data: [
            {
                title: 'Klanjanje Hitlera',
                author: 'Maurizio Cattelan',
                description: `
                Klanjanje Hitlera je kontroverzna skulptura koju je napravio italijanski umetnik Maurizio Cattelan.
                Ova provokativna instalacija prikazuje Adolf Hitlera kako kleči na podu, predstavljajući kritiku na
                račun fašizma i totalitarizma. Umetničko delo izaziva intenzivne reakcije i podstiče gledaoce da
                razmišljaju o političkoj moći, istorijskom nasleđu i granicama umetnosti.`
            },
            {
                title: 'Kneeling Hitler',
                author: 'Maurizio Cattelan',
                description: `
                Kneeling Hitler is a controversial sculpture created by Italian artist Maurizio Cattelan.
                This provocative installation depicts Adolf Hitler kneeling on the floor, representing a critique
                of fascism and totalitarianism. The artwork evokes intense reactions and encourages viewers to
                contemplate political power, historical legacy, and the boundaries of art.`
            }
        ]
    },
    {
        id: 9,
        image_src: '/9/0.jpg',
        type: 2,
        data: [
            {
                title: 'Moja krevet',
                author: 'Trejsi Emin',
                description: `
                Moja krevet je kontroverzna instalacija britanske umetnice Trejsi Emin. Ovo osobno umetničko delo
                prikazuje umetničkin krevet, prepun ličnih predmeta kao što su uprljane posteljine, prazne flaše,
                upotrebljeni kondomi i druge intimne detalje. Kroz svoj krevet, Emin izražava emocionalnu ranjivost,
                autentičnost i univerzalnost ljudskog iskustva. Delo je izazvalo mnogo diskusija i kontroverzi,
                postavljajući pitanja o prirodi umetnosti i granicama privatnosti.`
            },
            {
                title: 'My Bed',
                author: 'Tracey Emin',
                description: `
                My Bed is a controversial installation by British artist Tracey Emin. This personal artwork
                features the artist's own bed, filled with personal items such as stained sheets, empty bottles,
                used condoms, and other intimate details. Through her bed, Emin expresses emotional vulnerability,
                authenticity, and the universality of the human experience. The artwork has sparked much discussion
                and controversy, raising questions about the nature of art and the boundaries of privacy.`
            }
        ]
    }
]

export default arts;