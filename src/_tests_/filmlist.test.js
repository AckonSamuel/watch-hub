import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Filmlist from '../components/film/Filmlist';

it('Check if Filmlist renders', () => {
  const films = [{
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    title: 'Castle in the Sky',
    original_title: '天空の城ラピュタ',
    original_title_romanised: 'Tenkū no shiro Rapyuta',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg',
    description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: 'Hayao Miyazaki',
    producer: 'Isao Takahata',
    release_date: '1986',
    running_time: '124',
    rt_score: '95',
    people: [
      'https://ghibliapi.herokuapp.com/people/598f7048-74ff-41e0-92ef-87dc1ad980a9',
      'https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01',
      'https://ghibliapi.herokuapp.com/people/3bc0b41e-3569-4d20-ae73-2da329bf0786',
      'https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583',
      'https://ghibliapi.herokuapp.com/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0',
      'https://ghibliapi.herokuapp.com/people/e08880d0-6938-44f3-b179-81947e7873fc',
      'https://ghibliapi.herokuapp.com/people/2a1dad70-802a-459d-8cc2-4ebd8821248b',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
  },
  {
    id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
    title: 'Grave of the Fireflies',
    original_title: '火垂るの墓',
    original_title_romanised: 'Hotaru no haka',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg',
    description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.',
    director: 'Isao Takahata',
    producer: 'Toru Hara',
    release_date: '1988',
    running_time: '89',
    rt_score: '97',
    people: [
      'https://ghibliapi.herokuapp.com/people/',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a',
  },
  {
    id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    title: 'My Neighbor Totoro',
    original_title: 'となりのトトロ',
    original_title_romanised: 'Tonari no Totoro',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg',
    description: 'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.',
    director: 'Hayao Miyazaki',
    producer: 'Hayao Miyazaki',
    release_date: '1988',
    running_time: '86',
    rt_score: '93',
    people: [
      'https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe',
      'https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9',
      'https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11',
      'https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d',
      'https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f',
      'https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a',
      'https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061',
      'https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106',
      'https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19',
      'https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
      'https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3',
      'https://ghibliapi.herokuapp.com/species/74b7f547-1577-4430-806c-c358c8b6bcf5',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49',
  },
  {
    id: 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
    title: "Kiki's Delivery Service",
    original_title: '魔女の宅急便',
    original_title_romanised: 'Majo no takkyūbin',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/h5pAEVma835u8xoE60kmLVopLct.jpg',
    description: 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
    director: 'Hayao Miyazaki',
    producer: 'Hayao Miyazaki',
    release_date: '1989',
    running_time: '102',
    rt_score: '96',
    people: [
      'https://ghibliapi.herokuapp.com/people/2409052a-9029-4e8d-bfaf-70fd82c8e48d',
      'https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec',
      'https://ghibliapi.herokuapp.com/people/1c1a8054-3a34-4185-bfcf-e8011506f09a',
      'https://ghibliapi.herokuapp.com/people/bc838920-7849-43ea-bfb8-7d5e98dc20b6',
      'https://ghibliapi.herokuapp.com/people/33f5fea9-c21b-490b-90e0-c4051c372826',
      'https://ghibliapi.herokuapp.com/people/d1de1c0e-3fcd-4cef-94eb-bb95cc2314aa',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
      'https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
  },
  {
    id: '4e236f34-b981-41c3-8c65-f8c9000b94e7',
    title: 'Only Yesterday',
    original_title: 'おもひでぽろぽろ',
    original_title_romanised: 'Omoide poro poro',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/isCrlWWI4JrdLKAUAwFb5cjAsH4.jpg',
    description: 'It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.',
    director: 'Isao Takahata',
    producer: 'Toshio Suzuki',
    release_date: '1991',
    running_time: '118',
    rt_score: '100',
    people: [
      'https://ghibliapi.herokuapp.com/people/',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/4e236f34-b981-41c3-8c65-f8c9000b94e7',
  },
  {
    id: 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
    title: 'Porco Rosso',
    original_title: '紅の豚',
    original_title_romanised: 'Kurenai no buta',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/nAeCzilMRXvGaxiCpv63ZRVRVgh.jpg',
    description: "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '1992',
    running_time: '93',
    rt_score: '94',
    people: [
      'https://ghibliapi.herokuapp.com/people/',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8',
  },
  {
    id: '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
    title: 'Pom Poko',
    original_title: '平成狸合戦ぽんぽこ',
    original_title_romanised: 'Heisei tanuki gassen Ponpoko',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/jScPd0u0jeo66l8gwDl7W9hDUnM.jpg',
    description: "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    director: 'Isao Takahata',
    producer: 'Toshio Suzuki',
    release_date: '1994',
    running_time: '119',
    rt_score: '78',
    people: [
      'https://ghibliapi.herokuapp.com/people/',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
  },
  {
    id: 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
    title: 'Whisper of the Heart',
    original_title: '耳をすませば',
    original_title_romanised: 'Mimi wo sumaseba',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5E3Hvbu0bg38ouYf6chGftVGqZ7.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/fRtaDgmj0CirvqFUG1XN48BDY1l.jpg',
    description: "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
    director: 'Yoshifumi Kondō',
    producer: 'Toshio Suzuki',
    release_date: '1995',
    running_time: '111',
    rt_score: '91',
    people: [
      'https://ghibliapi.herokuapp.com/people/',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
  },
  {
    id: '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
    title: 'Princess Mononoke',
    original_title: 'もののけ姫',
    original_title_romanised: 'Mononoke hime',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/6pTqSq0zYIWCsucJys8q5L92kUY.jpg',
    description: 'Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.',
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '1997',
    running_time: '134',
    rt_score: '92',
    people: [
      'https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0',
      'https://ghibliapi.herokuapp.com/people/ebe40383-aad2-4208-90ab-698f00c581ab',
      'https://ghibliapi.herokuapp.com/people/030555b3-4c92-4fce-93fb-e70c3ae3df8b',
      'https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b',
      'https://ghibliapi.herokuapp.com/people/e9356bb5-4d4a-4c93-aadc-c83e514bffe3',
      'https://ghibliapi.herokuapp.com/people/34277bec-7401-43fa-a00a-5aee64b45b08',
      'https://ghibliapi.herokuapp.com/people/91939012-90b9-46e5-a649-96b898073c82',
      'https://ghibliapi.herokuapp.com/people/20e3bd33-b35d-41e6-83a4-57ca7f028d38',
      'https://ghibliapi.herokuapp.com/people/8bccdc78-545b-49f4-a4c8-756163a38c91',
      'https://ghibliapi.herokuapp.com/people/116bfe1b-3ba8-4fa0-8f72-88537a493cb9',
    ],
    species: [
      'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
      'https://ghibliapi.herokuapp.com/species/6bc92fdd-b0f4-4286-ad71-1f99fb4a0d1e',
      'https://ghibliapi.herokuapp.com/species/f25fa661-3073-414d-968a-ab062e3065f7',
    ],
    locations: [
      'https://ghibliapi.herokuapp.com/locations/',
    ],
    vehicles: [
      'https://ghibliapi.herokuapp.com/vehicles/',
    ],
    url: 'https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6',
  }];

  const searchText = 'ca';

  const filtered = [
    {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      original_title: '天空の城ラピュタ',
      original_title_romanised: 'Tenkū no shiro Rapyuta',
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
      movie_banner: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg',
      description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: 'Hayao Miyazaki',
      producer: 'Isao Takahata',
      release_date: '1986',
      running_time: '124',
      rt_score: '95',
      people: [
        'https://ghibliapi.herokuapp.com/people/598f7048-74ff-41e0-92ef-87dc1ad980a9',
        'https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01',
        'https://ghibliapi.herokuapp.com/people/3bc0b41e-3569-4d20-ae73-2da329bf0786',
        'https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583',
        'https://ghibliapi.herokuapp.com/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0',
        'https://ghibliapi.herokuapp.com/people/e08880d0-6938-44f3-b179-81947e7873fc',
        'https://ghibliapi.herokuapp.com/people/2a1dad70-802a-459d-8cc2-4ebd8821248b',
      ],
      species: [
        'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
      ],
      locations: [
        'https://ghibliapi.herokuapp.com/locations/',
      ],
      vehicles: [
        'https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb',
      ],
      url: 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
    },
  ];

  const filmlist = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Filmlist films={films} searchText={searchText} filtered={filtered} />
      </BrowserRouter>
    </Provider>,
  );

  expect(filmlist).toMatchSnapshot();
});
