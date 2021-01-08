import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Answer from '../component/Answer/AnswerItem';
import Comment from '../component/Comment/Comment';
import { StoryItem } from '../component/Feed';

test('comment', () => {
  renderer.create(<Comment />);
});

test('comment', () => {
  renderer.create(
    <Router>
      <StoryItem data={{ author: 'Wan', title: 'Title', action: 1, link: '/1' }} />
    </Router>
  );
});

test('', () => {
  renderer.create(
    <Router>
      <Answer data={{ aid: 1 }} />
    </Router>
  );
});

test('AccountMenu', () => {
  renderer.create(<Router>{/* <AccountMenu /> */}</Router>);
});
