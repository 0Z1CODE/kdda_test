import { atom, selector } from 'recoil';

export const eulaState = atom({
  key: 'eulaState',
  default: false,
});
export const keykloackAuthoakState = atom({
  key: 'keykloackAuthoakState',
  default: null,
});

export const loginBrand = atom({
  key: 'loginBrand',
  default: undefined,
});

export const userId = atom({
  key: 'userId',
  default: null,
});
export const userToken = atom({
  key: 'userToken',
  default: undefined,
});
export const appRealm = atom({
  key: 'appRealm',
  default: undefined,
});


// export const someTest = selector({
//   key: 'someTest',
//   get: ({get}) => {
//     const id = get(userId);
//     return id;
//   },
// });
