import { Route, Routes } from 'react-router-dom';
import { List } from './List';

export const People = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  );
};
