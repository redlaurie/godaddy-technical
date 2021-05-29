import * as React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import  Details from "./details";

it("renders location state", () => {
  const history = createMemoryHistory();
  const state = { name: "redlaurie", description: "Testing Render" }
  history.push("/details", state);

  const { getByText } = render(
    <Router history={history}>
      <Details location={state}/>
    </Router>
  );
  getByText(state.name);
  getByText(state.description);
});