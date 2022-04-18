import React from 'react';
import { routeList } from "../routes/routesList";

const useAppRoutes = () => {
  const filterRoutes = () => {
    let routes = routeList;
    return routes;
  };

  const getRoutes = () => {
    const filtered = filterRoutes();
    return filtered.map((route) => {
      const { path, name, component, layoutComponent } = route;
      const ret = route;

      if (layoutComponent) {
        ret.element = layoutComponent({
          currentRoute: { path, name },
          children: component,
        });
      } else {
        ret.element = component;
      }
      return ret;
    });
  };
  return { getRoutes };
};
export default useAppRoutes;
