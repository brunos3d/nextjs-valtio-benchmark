import { proxy, useSnapshot } from 'valtio';

export const userState = proxy({ id: 0, name: 'No user', email: 'no@email.com', avatar: 'https://picsum.photos/128', renderCount: 0 });

export const useUser = () => useSnapshot(userState);
