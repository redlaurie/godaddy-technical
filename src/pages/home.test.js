import { render, screen } from '@testing-library/react';
import Home from './home';

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe('countRepositories', () => {
  it('returns the correct count of repositories', async () => {
    const answer = await shallow(<Home />)
    expect(answer.find("RepoMasonry").length).toEqual(1);
  });
});
