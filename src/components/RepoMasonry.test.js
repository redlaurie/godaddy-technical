import { render, screen } from '@testing-library/react';
import RepoMasonry from './RepoMasonry';

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

it('should throw an error when there is nothing to map', () => {
    const error = new Error('Cannot read property '+ "'map'"+ ' of undefined');
    const renderList = () => {
          render(<RepoMasonry />);
    };

    expect(renderList).toThrow(error);
  });