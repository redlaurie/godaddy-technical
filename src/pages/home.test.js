import { render, screen } from '@testing-library/react';
import Home from './home';

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });


describe('Check for repositories being rendered', () => {
  it('returns the correct count renders', async () => {
    const answer = await shallow(<Home />)
    expect(answer.find("RepoMasonry").length).toEqual(1);
  });
});
