import { v4 } from 'uuid';
import { RoadmapItem } from '../../../models/roadmap-item.model';

export const roadmapListData: RoadmapItem[] = [
  {
    id: v4(),
    position: 1,
    title: 'Устройство сети',
    url: 'https://habr.com/ru/articles/307252/',
    description: 'Как устроено сетевое взаимодействие',
  },

  {
    id: v4(),
    position: 2,
    title: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    description: 'Как устроены теги',
  },

  {
    id: v4(),
    position: 3,
    title: 'CSS',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS',
    description: 'Как устроены стили',
  },

  {
    id: v4(),
    position: 3,
    title: 'JavaScript',
    url: 'https://javascript.info/',
    description: 'Как делать динамичные страницы',
  },

  {
    id: v4(),
    position: 3,
    title: 'JS Framework',
    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries',
    description: 'React/Angular/Vue - на ваше усмотрение',
  },
];
