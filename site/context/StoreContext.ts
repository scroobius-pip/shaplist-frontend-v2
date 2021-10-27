import React from 'react';
import { DStore } from 'types/types';

export default React.createContext<{ store?: DStore }>({})